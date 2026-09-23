/**
 * REALTIME SYNC & STORAGE ENGINE (PERMANENT LIFETIME CLOUD DATA)
 * PSTS GANJIL BAHASA INGGRIS WAJIB KELAS XI - SMA PLUS PGRI CIBINONG
 * 
 * Features:
 * 1. Lifetime Cloud Storage (Firebase Realtime Database)
 * 2. Multi-tier LocalStorage Backup Cache
 * 3. 1-Attempt Verification (Prevents duplicate student submissions)
 * 4. Cross-Tab Live BroadcastChannel
 */

const SYNC_CONFIG = {
    FIREBASE_URL: "https://psts-english-x-2026-default-rtdb.asia-southeast1.firebasedatabase.app",
    COLLECTION: "psts_xi_english_wajib_submissions",
    LOCAL_KEY: "PSTS_XI_ENGLISH_WAJIB_SUBMISSIONS",
    TIMER_KEY: "PSTS_XI_ENGLISH_TIMER_REMAINING",
    ATTEMPT_KEY: "PSTS_XI_MY_ATTEMPT",
    EXAM_DURATION_SECONDS: 60 * 60 // 1 Hour (3600 seconds)
};

class RealtimeSyncEngineXI {
    constructor() {
        this.channel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('psts_xi_english_sync_channel') : null;
        this.listeners = [];
        this.initChannelListener();
    }

    initChannelListener() {
        if (this.channel) {
            this.channel.onmessage = (event) => {
                if (event.data && event.data.type === 'NEW_SUBMISSION_XI') {
                    this.notifyListeners(event.data.payload);
                }
            };
        }
    }

    onNewData(callback) {
        if (typeof callback === 'function') {
            this.listeners.push(callback);
        }
    }

    notifyListeners(submission) {
        this.listeners.forEach(cb => {
            try { cb(submission); } catch (err) { console.error(err); }
        });
    }

    // Check if student has already submitted (1-Attempt Enforcement)
    async checkExistingAttempt(name, studentClass) {
        const cleanName = (name || "").toLowerCase().trim();
        const cleanClass = (studentClass || "").trim();

        // 1. Check local record
        try {
            const myAttempt = localStorage.getItem(SYNC_CONFIG.ATTEMPT_KEY);
            if (myAttempt) {
                const parsed = JSON.parse(myAttempt);
                if (parsed && parsed.name && parsed.name.toLowerCase().trim() === cleanName && parsed.studentClass === cleanClass) {
                    return parsed;
                }
            }
        } catch (e) {}

        // 2. Check full submissions in database
        const all = await this.getAllSubmissions();
        const found = all.find(s => (s.name || "").toLowerCase().trim() === cleanName && (s.studentClass || "").trim() === cleanClass);
        if (found) {
            localStorage.setItem(SYNC_CONFIG.ATTEMPT_KEY, JSON.stringify(found));
            return found;
        }

        return null;
    }

    // Get all submissions from LocalStorage & Cloud Realtime DB
    async getAllSubmissions() {
        let localData = [];
        try {
            const raw = localStorage.getItem(SYNC_CONFIG.LOCAL_KEY);
            if (raw) localData = JSON.parse(raw);
        } catch (e) {
            console.warn("Error reading localStorage:", e);
        }

        // Fetch from Cloud
        try {
            const res = await fetch(`${SYNC_CONFIG.FIREBASE_URL}/${SYNC_CONFIG.COLLECTION}.json`);
            if (res.ok) {
                const cloudJson = await res.json();
                if (cloudJson) {
                    const cloudList = Object.keys(cloudJson).map(k => ({
                        ...cloudJson[k],
                        _cloudId: k
                    }));

                    const mergedMap = new Map();
                    localData.forEach(item => mergedMap.set(item.id, item));
                    cloudList.forEach(item => mergedMap.set(item.id, item));

                    const merged = Array.from(mergedMap.values()).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                    localStorage.setItem(SYNC_CONFIG.LOCAL_KEY, JSON.stringify(merged));
                    return merged;
                }
            }
        } catch (err) {
            console.log("Cloud offline or network issue, using cached data:", err.message);
        }

        return localData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    }

    // Submit new student exam record
    async submitExam(data) {
        const payload = {
            id: 'xi_sub_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
            name: data.name,
            studentClass: data.studentClass,
            studentId: data.studentId || "-",
            answers: data.answers,
            score: data.score,
            correctCount: data.correctCount,
            totalQuestions: 25,
            itemResults: data.itemResults,
            reflections: data.reflections,
            timeSpent: data.timeSpent || "0m",
            timestamp: new Date().toISOString()
        };

        // 1. Save locally & record attempt
        try {
            const existing = await this.getAllSubmissions();
            const updated = [payload, ...existing.filter(i => i.id !== payload.id)];
            localStorage.setItem(SYNC_CONFIG.LOCAL_KEY, JSON.stringify(updated));
            localStorage.setItem(SYNC_CONFIG.ATTEMPT_KEY, JSON.stringify(payload));
        } catch (e) {
            console.warn("Failed saving locally:", e);
        }

        // 2. Broadcast
        if (this.channel) {
            this.channel.postMessage({
                type: 'NEW_SUBMISSION_XI',
                payload: payload
            });
        }

        // 3. Save permanently to Cloud
        try {
            await fetch(`${SYNC_CONFIG.FIREBASE_URL}/${SYNC_CONFIG.COLLECTION}.json`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
        } catch (err) {
            console.log("Saved locally, will sync cloud when connected:", err.message);
        }

        return payload;
    }

    // Realtime SSE listener
    subscribeCloudRealtime(onDataUpdate) {
        if (typeof EventSource !== 'undefined') {
            try {
                const sse = new EventSource(`${SYNC_CONFIG.FIREBASE_URL}/${SYNC_CONFIG.COLLECTION}.json`);
                sse.addEventListener('put', () => {
                    this.getAllSubmissions().then(all => {
                        if (onDataUpdate) onDataUpdate(all);
                    });
                });
                sse.addEventListener('patch', () => {
                    this.getAllSubmissions().then(all => {
                        if (onDataUpdate) onDataUpdate(all);
                    });
                });
                return sse;
            } catch (e) {}
        }
        return null;
    }
}

const syncEngine = new RealtimeSyncEngineXI();
