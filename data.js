/**
 * BANK SOAL & DATA REFLEKSI PSTS BAHASA INGGRIS WAJIB KELAS XI
 * SMA PLUS PGRI CIBINONG
 */

const PASSAGES = {
    digitalHealth: {
        id: "digitalHealth",
        title: "Digital Health Literacy",
        category: "Expository / Informational Text",
        content: `According to the National Institutes of Health. All of Us Research Program, digital health literacy is the ability to seek, find, understand, and appraise health information from electronic sources and apply the knowledge gained to addressing or solving a health problem." Having high digital health literacy means patients know how to use a digital health tool, make sense of the information gleaned from the tool, and recognize the importance or utility of using a tool.

Digital health literacy is bolstered by access to reliable WiFi or broadband and the ability to afford digital health tools. It is also Important to note language's role in digital health literacy. A patient may be able to use technology and understand the information present, but if that information is not in the patient's preferred language, the tool still isn't practical.

Digital health literacy moves beyond knowing how to use a medical device; it also includes online medical research. In the age of Dr. Google, healthcare providers need to be mindful of how their patients engage with online research and give patients the skills to parse out reliable and unreliable information. According to NIH, providers should help patients with online search, help patients navigate online webpages, review online credibility, and outline other resources other than online search.

Once on an informational webpage, providers can instruct patients to review bolded headlines, utilize page search, and read content before clicking on hyperlinks. Finally, providers should give patients the skills to assess website credibility. Websites with many commercial ads or promotions or old publishing datelines may not have reliable information. Patients may also check out the website's "about us" page to check for certain biases.

Of course, search engines are not the only place patients can get medical information, and providers should remind them of that. Patients should check their own after-visit summaries, prescription requests, provider communications, and patient portals to see if they can find information there.

(Source: Patient Engagement Hit / patientengagementhit.com)`
    },
    ferdiDialogue: {
        id: "ferdiDialogue",
        title: "Dialogue: Ferdi & Lisa (Health Info Online)",
        category: "Conversational Context",
        content: `Lisa : Hey, Ferdi. You don't look okay. What's wrong?
Ferdi : Hi Lisa. I caught cold.
Lisa : Have you gone to a doctor? I think you should.
Ferdi : I haven't got time for a visit. And it's a common illness, I won't bother going to a doctor anyway. I'm looking for some tips to cure it.
Lisa : That's a good point. What are you looking at now?
Ferdi : They say there are specific herbs to do it. What do you think of this article, Lisa?
Lisa : I think we should be careful about the info, Ferdi. You cannot trust the internet entirely.
Ferdi : Oh yeah, I just realized it’s a blog. The way it was written is totally unreliable too, don't you think so?
Lisa : Well, you should look for a valid and authoritative source. Government websites such like Kemenkes or NHS might be the ones to look at.
Ferdi : Yes. I believe this blog is made by a company to sell their product. It should've been marked as an advertisement.
Lisa : That's terrible. You probably saw them promising you a quick cure or something.
Ferdi : That's exactly what I saw. We should be really careful to find health information on the internet.`
    },
    cryptoDialogue: {
        id: "cryptoDialogue",
        title: "Dialogue: Tom & Jane (Investment Decision)",
        category: "Expressing Opinion & Agreement/Disagreement",
        content: `Tom : "I think we should invest in cryptocurrency. It's the future!"
Jane : "I'm not so sure about that. ... (4)"
Tom : "But think about the potential returns. We could make a fortune!"
Jane : "I understand your point, but I still don't feel comfortable taking such a big risk with our money."
Tom : "I think you're being too cautious. We need to take a chance if we want to succeed."
Jane : "... (5) I think we should invest our money in something more stable and secure."
Tom : "Well, we can agree to disagree. But I really believe that cryptocurrency is the way to go."
Jane : "I respect your opinion, but I still disagree. Let's keep looking at other options before we make a decision."`
    },
    antivirusText: {
        id: "antivirusText",
        title: "Digital Security & Antivirus Protection",
        category: "Expository / Technology Literacy",
        content: `Viruses might not seem as common as they were a decade ago, but they still exist. Malicious software on your computer can wreak all kinds of havoc, from annoying pop-ups to covert bitcoin mining to scanning for personal information. If you're at risk for clicking perilous links, or if you share a computer with multiple people in a household, it's worthwhile to set up antivirus software, especially on Windows computers.

If your computer runs Windows 10, you should use Microsoft's built-in software, Windows Defender. Windows Defender offers plenty of security for most people, and it's the main antivirus option that Wirecutter recommend; we reached that conclusion after speaking with several experts. If you run an older version of Windows (even though we recommend updating to Windows 10) or you use a shared computer, a second layer of protection might be necessary.

Mac users are typically okay with the protection included in macOs, especially if you download software only from Apple's App Store and stick to well-known browser extensions.

(Source: Thorpe Klosowski / www.nytimes.com/guides/privacy project/how-to-protect-your-digital-privacy)`
    }
};

const QUESTIONS_DATA = [
    {
        id: 1,
        passageId: null,
        question: `Dian: “I guess the teacher will give us more time to do the task because no one had done it.”\nGery: “I think it is impossible. You know how strict she is when it comes to time.”\n\nThe underlined expression shows ….`,
        options: {
            A: "Agreement",
            B: "Disagreement",
            C: "Possibility",
            D: "Probability",
            E: "Dislike"
        },
        correctAnswer: "B",
        skill: "Expressing Disagreement",
        level: "LOTS",
        explanation: "The expression 'I think it is impossible' clearly indicates disagreement with Dian's assumption regarding the teacher's willingness to give extra time."
    },
    {
        id: 2,
        passageId: null,
        question: `Maria: “My parents never allow me to go home late. They are too overprotective and it is unnecessary.”\nBella: “ … I think they just want to protect and show their love to you.”\n\nThe suitable expression to complete the dialogue is ….`,
        options: {
            A: "I am afraid that I disagree with you",
            B: "How can they do that to you?",
            C: "I don’t believe they do it to you.",
            D: "I couldn’t agree more",
            E: "That’s a good idea"
        },
        correctAnswer: "A",
        skill: "Polite Disagreement in Dialogue",
        level: "MOTS",
        explanation: "Bella holds a contrasting perspective, so the polite disagreement phrase 'I am afraid that I disagree with you' accurately completes the exchange."
    },
    {
        id: 3,
        passageId: null,
        question: `Jihan: “In my point of view, there should be quite strict rule to limit students in playing with gadgets at school.”\nJingga: “ ….”\n\nThe suitable expression to complete the conversation is ….`,
        options: {
            A: "It is none of my business",
            B: "I know nothing about that.",
            C: "I don’t understand why?",
            D: "I strongly agree with you",
            E: "It’s just that I can’t view it."
        },
        correctAnswer: "D",
        skill: "Expressing Strong Agreement",
        level: "LOTS",
        explanation: "The appropriate conversational phrase expressing strong agreement with Jihan's viewpoint is 'I strongly agree with you'."
    },
    {
        id: 4,
        passageId: "digitalHealth",
        question: `The suitable title for the text is ….`,
        options: {
            A: "What is Digital Health Literacy?",
            B: "The Consequences of Digital Health Literacy",
            C: "The Society Without Digital Health Literacy",
            D: "What’s So Important about Digital Literacy?",
            E: "What is Digital Literacy?"
        },
        correctAnswer: "A",
        skill: "Main Title / Topic Identification",
        level: "LOTS",
        explanation: "The entire passage defines digital health literacy, explains its dimensions, and outlines how healthcare providers help patients evaluate health information online."
    },
    {
        id: 5,
        passageId: "digitalHealth",
        question: `Based on the text, the incorrect statement about digital health literacy is ….`,
        options: {
            A: "Digital Health literacy is strengthened in general by the people’s access to good internet connection.",
            B: "Physician should educate their patients to examine the validity of medical information online.",
            C: "Promotional ads on website might be a sign of good validity.",
            D: "Health care providers should also present other options of medical information resources.",
            E: "Digital Health literacy utilization is limited to the user’s language."
        },
        correctAnswer: "C",
        skill: "Negative Fact / Detail Identification",
        level: "MOTS",
        explanation: "Statement C is false because the passage explicitly warns: 'Websites with many commercial ads or promotions... may not have reliable information'."
    },
    {
        id: 6,
        passageId: "digitalHealth",
        question: `In paragraph 4, the writer attempted to … to the readers.`,
        options: {
            A: "encourage healthcare providers to help patients in getting health information online",
            B: "promote other options of getting healthcare information",
            C: "present some tips to examine the validity and reliability of a website",
            D: "define what digital health literacy is",
            E: "present their opinion on how digital health literacy can be strengthened"
        },
        correctAnswer: "A",
        skill: "Author's Purpose / Paragraph Function",
        level: "HOTS",
        explanation: "Paragraph 4 aims to urge healthcare providers to guide and equip patients with critical skills for navigating online health information."
    },
    {
        id: 7,
        passageId: "digitalHealth",
        question: `It is implied that the writer ….`,
        options: {
            A: "calls attention to the importance of digital health literacy",
            B: "doesn’t believe that people can look for medical information themselves",
            C: "believes that only physician should distribute health information for reliability concern",
            D: "promotes digital literacy for healthcare providers",
            E: "urges healthcare providers to educate their patients in looking for health information online."
        },
        correctAnswer: "E",
        skill: "Reading Inference (HOTS)",
        level: "HOTS",
        explanation: "The writer implicitly urges medical providers to take an active role in training patients to recognize credible medical sources online."
    },
    {
        id: 8,
        passageId: "digitalHealth",
        question: `“Digital health literacy is bolstered by access to reliable WiFi…”\nThe underlined word can be replaced by ….`,
        options: {
            A: "permitted",
            B: "enabled",
            C: "implemented",
            D: "equipped",
            E: "supported"
        },
        correctAnswer: "E",
        skill: "Vocabulary in Context (Synonym)",
        level: "MOTS",
        explanation: "'Bolstered' means strengthened or supported ('supported')."
    },
    {
        id: 9,
        passageId: "ferdiDialogue",
        question: `What are the speakers talking about?`,
        options: {
            A: "A medication to cure common cold",
            B: "Researching medical information from blog",
            C: "How to find reliable information from the internet.",
            D: "Common mistakes for researching medical information",
            E: "An advertisement on the internet"
        },
        correctAnswer: "C",
        skill: "Dialogue Topic Synthesis",
        level: "MOTS",
        explanation: "The central topic of Lisa and Ferdi's conversation is the necessity of finding verified and authoritative health information online."
    },
    {
        id: 10,
        passageId: "ferdiDialogue",
        question: `Ferdi says that he is searching for ….`,
        options: {
            A: "An article about the common cold",
            B: "A solution for treating his sickness",
            C: "A herbal medication for his sickness",
            D: "A valid source for medical information",
            E: "A drug advertisement"
        },
        correctAnswer: "B",
        skill: "Specific Detail Retrieval",
        level: "LOTS",
        explanation: "Ferdi states: 'I'm looking for some tips to cure it', which means he is searching for a remedy or solution for his illness."
    },
    {
        id: 11,
        passageId: "ferdiDialogue",
        question: `Ferdi’s mistake is that ….`,
        options: {
            A: "He clicked the wrong address",
            B: "He didn’t check the writer’s validity",
            C: "He finds the article helpful",
            D: "He should have gone to a doctor instead",
            E: "He didn’t check the website’s validity"
        },
        correctAnswer: "E",
        skill: "Character Evaluation & Error Analysis",
        level: "MOTS",
        explanation: "Ferdi's error was blindly trusting a commercial blog without verifying the website's authenticity and credibility."
    },
    {
        id: 12,
        passageId: "ferdiDialogue",
        question: `Lisa recommends Ferdi to ….`,
        options: {
            A: "Look for a valid source such as blog and company website",
            B: "Be aware of the source of the information",
            C: "Not going to a doctor because it’s just a cold",
            D: "Trust the information they find on a valid source",
            E: "Judge the information by the way it is written"
        },
        correctAnswer: "B",
        skill: "Specific Recommendation Identification",
        level: "LOTS",
        explanation: "Lisa advises Ferdi to remain vigilant about the credibility and origin of online information sources."
    },
    {
        id: 13,
        passageId: "ferdiDialogue",
        question: `It can be inferred from the dialogue that Lisa ….`,
        options: {
            A: "is skeptical the first time she read the article",
            B: "recommends Ferdi go to a doctor anyway",
            C: "urged Ferdi to be aware of information from government websites",
            D: "is looking for a cure to Ferdi’s cold",
            E: "is skeptical to Ferdi’s decision to not go to a doctor"
        },
        correctAnswer: "A",
        skill: "Dialogue Inference (HOTS)",
        level: "HOTS",
        explanation: "Lisa demonstrates critical skepticism toward unverified web articles from the outset ('You cannot trust the internet entirely')."
    },
    {
        id: 14,
        passageId: "cryptoDialogue",
        question: `The suitable expression to complete number 4 is ….`,
        options: {
            A: "It can be very risky.",
            B: "That’s a good idea.",
            C: "You should try to invest in that soon.",
            D: "Let’s try the new financial system.",
            E: "Cryptocurrency is the future."
        },
        correctAnswer: "A",
        skill: "Expressing Doubt & Risk Assessment",
        level: "LOTS",
        explanation: "Jane expresses caution ('I'm not so sure about that') by emphasizing the high risk involved ('It can be very risky')."
    },
    {
        id: 15,
        passageId: "cryptoDialogue",
        question: `The suitable expression to complete number 5 is ….`,
        options: {
            A: "I couldn’t agree more with you.",
            B: "I strongly agree with you.",
            C: "In my opinion, ….",
            D: "That’s a good idea.",
            E: "Yes, of course."
        },
        correctAnswer: "C",
        skill: "Expressing Personal Opinion",
        level: "LOTS",
        explanation: "Jane is introducing her own stance on conservative investment, which is best opened with 'In my opinion, ...'."
    },
    {
        id: 16,
        passageId: null,
        question: `Look at the context of technology in the classroom:\n“Students actively discussing and studying together using digital tablets and laptops.”\n\nThe suitable caption for the context is ….`,
        options: {
            A: "Technology helps us to learn better and enjoyable.",
            B: "Learning can’t be happened without technology.",
            C: "Technology is only for high class students.",
            D: "Technology makes students lazy.",
            E: "Discussion can’t be done without technology help."
        },
        correctAnswer: "A",
        skill: "Visual / Picture Captioning",
        level: "LOTS",
        explanation: "The most positive and accurate caption for students collaborating with digital devices is 'Technology helps us to learn better and enjoyable'."
    },
    {
        id: 17,
        passageId: null,
        question: `Jeremy : “I think our city is saved from the virus, so we can go around.”\nEllisa : “But I don’t think so, … Our city is not saved yet. We must stay at home at least in lock down time.”\n\nThe suitable phrase to complete the dialogue is ….`,
        options: {
            A: "In my opinion",
            B: "She forgets it",
            C: "See you next time",
            D: "You know it",
            E: "I am thinking of the virus"
        },
        correctAnswer: "A",
        skill: "Opinion Phrase in Dialogue",
        level: "LOTS",
        explanation: "Ellisa conveys her contrasting personal assessment by using the opinion phrase 'In my opinion'."
    },
    {
        id: 18,
        passageId: "antivirusText",
        question: `“If you're at risk for clicking perilous links, …”\nThe synonym of perilous is ….`,
        options: {
            A: "risky",
            B: "safe",
            C: "trusted",
            D: "known",
            E: "secure"
        },
        correctAnswer: "A",
        skill: "Vocabulary in Context (Synonym)",
        level: "LOTS",
        explanation: "'Perilous' means full of danger or hazard, synonymous with 'risky'."
    },
    {
        id: 19,
        passageId: "antivirusText",
        question: `According to the text, what is the primary recommendation for Windows 10 users regarding antivirus software?`,
        options: {
            A: "They must have two layers of protection to be fully secure.",
            B: "They should use the built-in Windows Defender software.",
            C: "They should only install software from the Apple App Store.",
            D: "They should avoid installing any antivirus software to prevent conflicts.",
            E: "They should purchase a separate, third-party antivirus program."
        },
        correctAnswer: "B",
        skill: "Specific Detail Retrieval",
        level: "LOTS",
        explanation: "Paragraph 2 states: 'If your computer runs Windows 10, you should use Microsoft's built-in software, Windows Defender.'"
    },
    {
        id: 20,
        passageId: "antivirusText",
        question: `What is mentioned as a potential consequence of malicious software on a computer?`,
        options: {
            A: "The removal of all software not downloaded from a trusted app store.",
            B: "The computer's operating system automatically updates to a newer version.",
            C: "An increase in the computer's processing speed.",
            D: "Physical damage to the computer's hardware.",
            E: "Annoying pop-ups, covert bitcoin mining, and scanning for personal information."
        },
        correctAnswer: "E",
        skill: "Detail & Consequence Identification",
        level: "LOTS",
        explanation: "Paragraph 1 lists malicious software hazards: 'from annoying pop-ups to covert bitcoin mining to scanning for personal information'."
    },
    {
        id: 21,
        passageId: "antivirusText",
        question: `According to the passage, under what circumstances might a person need a 'second layer of protection' on their Windows computer?`,
        options: {
            A: "If they are a new computer user and have little experience with software.",
            B: "If they run an older version of Windows or use a shared computer.",
            C: "If they are using Windows Defender as their main antivirus option.",
            D: "If they primarily use the computer for gaming and streaming.",
            E: "If they download software only from well-known browser extensions."
        },
        correctAnswer: "B",
        skill: "Condition & Cause-Effect Retrieval",
        level: "MOTS",
        explanation: "Paragraph 2 notes that a second layer is needed if running an older Windows version or using a shared multi-user computer."
    },
    {
        id: 22,
        passageId: "antivirusText",
        question: `Based on the text, why are Mac users typically okay with the built-in security features?`,
        options: {
            A: "Because macOs is inherently more secure than Windows 10.",
            B: "Because they use a different kind of internet connection.",
            C: "Because they primarily download software from the Apple App Store and stick to well-known browser extensions.",
            D: "Because they do not need to download software or extensions.",
            E: "Because viruses are only designed to attack Windows computers."
        },
        correctAnswer: "C",
        skill: "Reason & Detail Identification",
        level: "MOTS",
        explanation: "Paragraph 3 explains that Mac users remain safe when restricting downloads to Apple's App Store and reputable browser extensions."
    },
    {
        id: 23,
        passageId: "antivirusText",
        question: `What is the main topic of the text?`,
        options: {
            A: "How to use bitcoin mining software securely.",
            B: "The history of computer viruses and antivirus software.",
            C: "Recommendations for computer security and antivirus software for different operating systems.",
            D: "A comparison between Microsoft Windows and Apple's macOs.",
            E: "How to create your own antivirus software."
        },
        correctAnswer: "C",
        skill: "Main Topic Synthesis",
        level: "MOTS",
        explanation: "The article provides authoritative security recommendations and antivirus software guidance for various operating systems."
    },
    {
        id: 24,
        passageId: null,
        question: `… a new car yesterday?`,
        options: {
            A: "Who buy",
            B: "Who did buy",
            C: "Who bought",
            D: "Who does buy",
            E: "Who is buying"
        },
        correctAnswer: "C",
        skill: "Subject Question in Simple Past (Who + V2)",
        level: "LOTS",
        explanation: "In subject questions asking about the actor in the past tense ('yesterday'), the question word 'Who' takes the past verb V2 'bought' without auxiliary 'did'."
    },
    {
        id: 25,
        passageId: null,
        question: `… you with your homework?`,
        options: {
            A: "Who helps",
            B: "Who does help",
            C: "Who did help",
            D: "Who helped",
            E: "Who help"
        },
        correctAnswer: "E",
        skill: "Subject Question Grammar Pattern",
        level: "LOTS",
        explanation: "Designated answer key according to official PSTS XI document rubric."
    }
];

const REFLECTIONS_DATA = [
    {
        id: "ref1",
        title: "Pemahaman Materi & Opini Kritis (Expressing Opinion & Digital Literacy)",
        question: "Sejauh mana Anda memahami materi cara menyampaikan pendapat (Asking/Giving Opinion, Agreement, Disagreement) serta konsep literasi kesehatan digital dan keamanan perangkat komputer?",
        placeholder: "Tuliskan pemahaman Anda tentang cara beropini secara santun dan pentingnya memilah info valid di era digital..."
    },
    {
        id: "ref2",
        title: "Kendala Belajar & Strategi Berpikir Kritis (Reading Analysis & Grammar)",
        question: "Bagian mana dari soal atau bacaan yang menurut Anda paling menantang (menemukan ide pokok, inferensi tersirat, analisis kredibilitas informasi, atau Subject Question 'Who'), dan bagaimana Anda mengatasinya?",
        placeholder: "Ceritakan nomor soal yang paling menantang dan langkah Anda menemukan bukti jawabannya..."
    },
    {
        id: "ref3",
        title: "Penerapan Nyata & Sikap Kritis (Digital Awareness in Daily Life)",
        question: "Bagaimana Anda akan menerapkan sikap kritis dan bijak dalam menyaring informasi kesehatan/teknologi di internet serta menjaga keamanan perangkat komputer Anda sehari-hari?",
        placeholder: "Tuliskan komitmen atau langkah praktis yang akan Anda lakukan saat berselancar di dunia maya..."
    }
];

const CLASS_OPTIONS = [
    "XI INT 1", "XI INT 2", "XI INT 3", "XI INT 4",
    "XI REGULER 1", "XI REGULER 2", "XI REGULER 3", "XI REGULER 4", "XI REGULER 5", "XI REGULER 6", "XI REGULER 7", "XI REGULER 8"
];
