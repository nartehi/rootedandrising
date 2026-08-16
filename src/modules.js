/**
 * Interactive learning modules for The Wisdom Well.
 *
 * Each lesson carries:
 *   verse       - the passage, WEB translation
 *   teaching    - short framing of the passage
 *   exposition  - deeper explanation: context, original wording, what it meant
 *                 to its first readers and why that changes the reading
 *   application - concrete ways to live it out this week
 *   reflection  - journalling prompt (answers saved on-device only)
 *   practice    - one action step
 *   quiz        - a multiple-choice check; every option carries feedback so a
 *                 wrong answer teaches rather than just scoring
 *
 * SCRIPTURE: all verse text is the World English Bible (WEB), which is public
 * domain. Every passage was verified word-for-word against bible-api.com
 * rather than quoted from memory. If you swap in another translation, check
 * its licence first - NIV, ESV, NLT and The Message are copyrighted and
 * cannot be embedded freely.
 *
 * NOTE FOR REVIEWERS: the exposition and quiz feedback are teaching content.
 * Someone in ministry leadership should read these before launch.
 *
 * `stages` marks which faith-journey stages a module is surfaced for; the
 * values must match resources.stages.options in content.js.
 */

export const STAGES = {
  NEW: 'Brand new to Christ',
  BACK: 'Finding my way back',
  DEEPER: 'Growing deeper',
  PURPOSE: 'Walking in purpose',
}

export const modules = [
  {
    slug: 'identity-in-christ',
    category: 'Identity',
    icon: 'Sparkles',
    title: 'Finding Your Identity in Christ',
    summary:
      'Biblical truths about your worth that replace the lies you were handed.',
    stages: [STAGES.NEW, STAGES.BACK, STAGES.DEEPER],
    duration: '4 lessons · ~25 min',
    lessons: [
      {
        title: 'You Were Made on Purpose',
        verse: {
          ref: 'Psalm 139:14',
          text:
            'I will give thanks to you, for I am fearfully and wonderfully made. Your works are wonderful. My soul knows that very well.',
        },
        teaching:
          'Before anyone had an opinion about you, God had a design for you. "Fearfully and wonderfully made" is not a compliment about your appearance — it is a statement about the care God took in forming you. Your worth was decided at creation, not by consensus.',
        exposition:
          'David wrote this psalm while thinking about how completely God knew him — verses 1 through 12 describe God knowing his words before he speaks them and being present everywhere he goes. The Hebrew word translated "fearfully" carries the sense of reverence and awe, not fright. And "wonderfully made" comes from a word meaning distinct or set apart. So the verse is not saying you are frighteningly built; it is saying you were made with awe-inspiring care and deliberate distinction. Notice too that David says his soul knows it "very well" — this is something he has had to settle in himself, not a feeling he woke up with.',
        application: [
          'When you catch yourself editing a photo before posting it, pause and ask whether you are adjusting for creativity or for approval.',
          'The next time you compare yourself to a friend or a stranger online, name out loud one specific thing God made distinct about you.',
          'If someone compliments you this week, practise saying "thank you" without deflecting or listing your flaws.',
        ],
        reflection:
          'Write down one thing you believe about yourself that you have never actually questioned. Where did you first hear it?',
        practice:
          'Say Psalm 139:14 out loud once today, in the first person. Notice what rises up when you do.',
        quiz: {
          question: 'What does "fearfully and wonderfully made" actually mean here?',
          options: [
            {
              label: 'You were made with awe-inspiring care and set apart as distinct',
              correct: true,
              feedback:
                'Right. "Fearfully" points to reverence and awe, and "wonderfully made" carries the sense of being set apart. It speaks to the care God took in forming you.',
            },
            {
              label: 'You should be afraid of how powerful God is',
              correct: false,
              feedback:
                'This is the most common misreading. The word does mean reverence, but it describes the awe surrounding how you were made — not fear directed at you.',
            },
            {
              label: 'You are physically beautiful and should feel confident',
              correct: false,
              feedback:
                'Close, but it narrows the verse. This is about the deliberate care in how God formed you — worth that holds on the days you do not feel beautiful.',
            },
          ],
        },
      },
      {
        title: 'Naming the Lies',
        verse: {
          ref: 'Romans 12:2',
          text:
            'Don’t be conformed to this world, but be transformed by the renewing of your mind, so that you may prove what is the good, well-pleasing, and perfect will of God.',
        },
        teaching:
          'Transformation happens through the renewing of your mind — which means the lies have to be named before they can be replaced. A lie you have never spoken aloud keeps its power. Naming it is not dwelling on it; it is dragging it into the light where truth can answer it.',
        exposition:
          'Paul writes this right after eleven chapters of theology, at the moment he turns to "so what do we do about it." The word translated "transformed" is metamorphoō — the same root behind metamorphosis, describing change that works from the inside out rather than a change of costume. And it is passive: be transformed. You are not the one doing the transforming. Your part is the renewing of your mind, which in Greek is a continuous action, not a one-time event. This is why simply deciding to think better about yourself rarely holds — renewal is a process God works, and it happens at the level of what you actually believe.',
        application: [
          'Keep a note on your phone for one week. Every time a harsh thought about yourself surfaces, type it out word for word.',
          'At the end of the week, read the list back. Notice how many are in someone else\'s voice — a parent, an ex, a classmate.',
          'Pick the one that repeats most and find a passage that speaks to it. Put that verse where the thought usually hits you: your mirror, your lock screen.',
        ],
        reflection:
          'Name one lie you have believed about your worth. Then write the truth God says instead, in your own words.',
        practice:
          'Every time that lie surfaces this week, answer it out loud with the truth you wrote. Do not argue with it — just replace it.',
        quiz: {
          question: 'Why does Paul say to be transformed rather than transform yourself?',
          options: [
            {
              label: 'The verb is passive — God does the transforming as your mind is renewed',
              correct: true,
              feedback:
                'Exactly. Your part is renewing your mind; the transformation itself is God\'s work. That is why willpower alone tends to run out.',
            },
            {
              label: 'Because change is impossible without enough discipline',
              correct: false,
              feedback:
                'Discipline matters, but this verse points the other way. The passive verb removes the pressure to manufacture change by effort alone.',
            },
            {
              label: 'Because you must wait passively and do nothing at all',
              correct: false,
              feedback:
                'Not quite the opposite extreme either. You have a real part — the renewing of your mind — but you are not the source of the change.',
            },
          ],
        },
      },
      {
        title: 'A New Creation',
        verse: {
          ref: '2 Corinthians 5:17',
          text:
            'Therefore if anyone is in Christ, he is a new creation. The old things have passed away. Behold, all things have become new.',
        },
        teaching:
          'This is stated in the present tense. Not "will become" — has become. Your identity in Christ is not a reward for finishing your healing; it is the ground you stand on while you heal. You are not auditioning for a place you already have.',
        exposition:
          'Paul was writing to a church in Corinth that was, frankly, a mess — division, lawsuits, public sin. He does not tell them to clean up and then claim a new identity. He tells them the new creation is already true and asks them to live from it. The Greek phrasing here is abrupt, closer to "if anyone in Christ — new creation!" There is no verb at all, which makes it read like an announcement rather than a process. This is the difference between fighting for your identity and fighting from it.',
        application: [
          'Notice when you say "I am just someone who always..." — that phrasing usually points to an old label you have not questioned.',
          'When you fail at something this week, practise saying "I did something wrong" instead of "I am worthless." The distinction is not semantics.',
          'Before you accept a friend or family member\'s description of who you are, ask whether it lines up with what God says.',
        ],
        reflection:
          'What is one "old thing" you are still carrying as if it defines you? What would today look like if it did not?',
        practice:
          'Write the old label on paper. Write "passed away" across it. Throw it out.',
        quiz: {
          question: 'What is significant about Paul writing this to the Corinthian church specifically?',
          options: [
            {
              label: 'They were struggling badly, yet he says the new creation is already true of them',
              correct: true,
              feedback:
                'Yes. He does not make identity a reward for fixing themselves. It is the ground they stand on while they change.',
            },
            {
              label: 'They were the most mature church, so they had earned the title',
              correct: false,
              feedback:
                'The opposite, actually. Corinth was full of division and public sin — which is precisely what makes the announcement so striking.',
            },
            {
              label: 'He was warning them they would become new only if they repented first',
              correct: false,
              feedback:
                'Repentance matters, but the grammar here is an announcement of something already true, not a condition to be met.',
            },
          ],
        },
      },
      {
        title: 'Chosen, Not Tolerated',
        verse: {
          ref: '1 Peter 2:9',
          text:
            'But you are a chosen race, a royal priesthood, a holy nation, a people for God’s own possession, that you may proclaim the excellence of him who called you out of darkness into his marvelous light.',
        },
        teaching:
          'Chosen. Royal. His own possession. If you grew up feeling like an afterthought, this language will feel too generous to be about you — that reaction is exactly what needs healing. God does not tolerate you. He chose you, and He was not settling.',
        exposition:
          'Peter is writing to scattered believers who were outsiders wherever they lived. He deliberately stacks four titles that Israel had been given in the Old Testament — chosen race, royal priesthood, holy nation, God\'s own possession — and applies them to a group of people who felt like they belonged nowhere. The phrase "God\'s own possession" translates a term used for a treasured personal belonging, the thing a person keeps rather than sells. And notice the purpose clause at the end: this identity was given so that you may proclaim. It is meant to be lived outward, not just felt inward.',
        application: [
          'When you walk into a room where you feel like you do not belong, remind yourself you are described as chosen before anyone there has an opinion.',
          'If you struggle to accept the word "royal," notice who taught you that thinking well of yourself is pride. Confidence rooted in God is not arrogance.',
          'Look for one person this week who feels like an outsider, and include them. You proclaim this identity partly by extending it.',
        ],
        reflection:
          'Which word lands hardest: chosen, royal, or His own? Sit with why that one is difficult to accept.',
        practice:
          'Tell one trusted person one true thing about who God says you are. Saying it to someone makes it harder to un-believe.',
        quiz: {
          question: 'Why did Peter give these four titles to that particular audience?',
          options: [
            {
              label: 'They felt like outsiders everywhere, so he named them as chosen and treasured',
              correct: true,
              feedback:
                'Right. He applies Israel\'s titles to scattered believers who belonged nowhere — the contrast is the whole point.',
            },
            {
              label: 'They were royalty by birth and he was acknowledging their status',
              correct: false,
              feedback:
                'They were not. These were ordinary, displaced people, which is exactly why the language lands so hard.',
            },
            {
              label: 'He wanted them to feel superior to their neighbours',
              correct: false,
              feedback:
                'The verse ends with purpose — that you may proclaim His excellence. It points outward in service, not down in superiority.',
            },
          ],
        },
      },
    ],
  },
  {
    slug: 'breaking-free-from-anxiety',
    category: 'Mental Wellness',
    icon: 'Brain',
    title: 'Breaking Free from Anxiety',
    summary:
      'Faith-rooted strategies for navigating anxiety, fear, and overwhelming thoughts with peace.',
    stages: [STAGES.NEW, STAGES.BACK, STAGES.DEEPER, STAGES.PURPOSE],
    duration: '4 lessons · ~25 min',
    lessons: [
      {
        title: 'Bring It, Don’t Bury It',
        verse: {
          ref: 'Philippians 4:6-7',
          text:
            'In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your thoughts in Christ Jesus.',
        },
        teaching:
          '"Be anxious for nothing" is not an instruction to feel nothing. The verse continues — in everything, by prayer, make your requests known. The alternative to anxiety here is not suppression; it is specific, honest asking. God can handle the actual details.',
        exposition:
          'Paul wrote this from prison, which matters for how you hear it. "Be anxious for nothing" is not advice from someone with an easy life. The word for "requests" is specific and detailed — it means particular petitions, not vague spiritual sighs. And the promise is not that you will get what you asked for; it is that peace will "guard" your heart, using a military word for a garrison stationed around a city. The peace is posted as protection while you wait, and Paul says plainly it surpasses understanding — you are not required to be able to explain it.',
        application: [
          'When anxiety spikes, write the specific fear rather than sitting in general dread. "I am afraid I will not make rent" is prayable; "everything is falling apart" is not.',
          'Pair each request with one thing you are thankful for, as the verse instructs. Not to dismiss the fear — to keep perspective alongside it.',
          'If your mind races at night, keep paper by your bed and hand each worry over in writing instead of rehearsing it until morning.',
        ],
        reflection:
          'What are you anxious about right now, stated specifically? Not "everything" — name the actual thing.',
        practice:
          'Pray that one specific thing out loud, in plain words. No performance, no religious vocabulary.',
        quiz: {
          question: 'What does the verse promise will happen when you bring your requests to God?',
          options: [
            {
              label: 'His peace will guard your heart and mind, even without understanding',
              correct: true,
              feedback:
                'Yes — and "guard" is a military word, like a garrison posted around a city. The peace protects you while you wait.',
            },
            {
              label: 'You will receive whatever you ask for',
              correct: false,
              feedback:
                'The promise is peace, not a guaranteed outcome. That distinction is what makes it hold when the answer is no or not yet.',
            },
            {
              label: 'Your anxiety will disappear immediately and permanently',
              correct: false,
              feedback:
                'Peace guarding you is different from anxiety vanishing. Paul wrote this in prison — his circumstances did not change.',
            },
          ],
        },
      },
      {
        title: 'He Is Not Annoyed by Your Fear',
        verse: {
          ref: '1 Peter 5:7',
          text:
            'casting all your worries on him, because he cares for you.',
        },
        teaching:
          'The reason given for casting your worry is not that your worry is silly. It is that He cares for you. Many of us hesitate to bring anxiety to God because we assume He is tired of hearing it. This verse removes that excuse: concern for you is the reason the invitation exists.',
        exposition:
          'The word "casting" is a vivid one — it is used elsewhere for throwing a cloak onto an animal\'s back. It implies a decisive transfer of weight, not a polite mention. But the detail that changes everything is the reason given: because he cares for you. Peter does not say cast your cares because your worry is irrational or because faith means never struggling. The ground of the invitation is God\'s affection for you. In the original, this verse is grammatically connected to the previous one about humility — which suggests that refusing to hand over your worry can be a form of pride, an insistence on carrying what you were never meant to hold.',
        application: [
          'Notice the worry you have decided is too small to pray about. Bring that exact one — small does not mean unwelcome.',
          'If you find yourself apologising to God for repeating a prayer, remember repetition is not faithlessness. Jesus prayed the same prayer three times in Gethsemane.',
          'Ask whether carrying everything alone is really strength, or a quiet refusal to be helped.',
        ],
        reflection:
          'What worry have you decided is "too small" or "too repetitive" to bring to God again?',
        practice:
          'Bring that exact worry to Him again today. Repetition is not a lack of faith.',
        quiz: {
          question: 'What reason does Peter give for casting your worries on God?',
          options: [
            {
              label: 'Because He cares for you',
              correct: true,
              feedback:
                'Exactly. Not because your worry is silly or small — the invitation rests on His affection for you.',
            },
            {
              label: 'Because worrying is a sin you should feel guilty about',
              correct: false,
              feedback:
                'Guilt is nowhere in this verse. Adding shame to anxiety tends to make people hide it rather than hand it over.',
            },
            {
              label: 'Because strong faith means never feeling anxious',
              correct: false,
              feedback:
                'The verse assumes you will have worries — it tells you where to put them, not that mature believers stop having them.',
            },
          ],
        },
      },
      {
        title: 'Stillness Is a Practice',
        verse: {
          ref: 'Psalm 46:10',
          text:
            '“Be still, and know that I am God. I will be exalted among the nations. I will be exalted in the earth.”',
        },
        teaching:
          'Stillness is not the absence of anxiety — it is a deliberate act you take while anxiety is present. "Be still and know" pairs quieting your body with remembering who God is. The knowing follows the stillness; it rarely arrives first.',
        exposition:
          'This psalm was written about a city under threat — the surrounding verses describe nations raging and mountains falling into the sea. "Be still" is not a description of calm surroundings. The Hebrew word carries the sense of letting go, ceasing from striving, dropping your hands. It is closer to "stop fighting" than "feel peaceful." And it is paired with knowing: be still, and know that I am God. The stillness is what creates room for the knowing. This is why stillness has to be practised deliberately rather than waited for — it will almost never be the natural condition of your day.',
        application: [
          'Set a three-minute timer once a day. Sit with your phone in another room. Three minutes is short enough that you cannot argue you have no time.',
          'When your mind races during stillness, do not treat that as failure. Return gently to one phrase — "You are God, I am not."',
          'Notice which apps you open when you feel uncomfortable being alone with your thoughts. That reflex is worth examining.',
        ],
        reflection:
          'When did you last sit in silence without your phone? What made it uncomfortable?',
        practice:
          'Set a timer for three minutes. Sit still. When your mind races, return to the phrase "You are God, I am not."',
        quiz: {
          question: 'What does "be still" mean in the original context of this psalm?',
          options: [
            {
              label: 'Cease striving and let go — a deliberate act while chaos continues',
              correct: true,
              feedback:
                'Yes. The psalm is set against nations raging and mountains falling. Stillness is chosen in the middle of it, not after it.',
            },
            {
              label: 'Wait until your life is peaceful, then rest',
              correct: false,
              feedback:
                'That would leave most people waiting forever. The command is given precisely while circumstances are chaotic.',
            },
            {
              label: 'Stay physically motionless during prayer',
              correct: false,
              feedback:
                'Posture is not the point. The word points to inner striving — dropping your hands, stopping the fight to control.',
            },
          ],
        },
      },
      {
        title: 'Strength That Is Not Yours',
        verse: {
          ref: 'Isaiah 41:10',
          text:
            'Don’t you be afraid, for I am with you. Don’t be dismayed, for I am your God. I will strengthen you. Yes, I will help you. Yes, I will uphold you with the right hand of my righteousness.',
        },
        teaching:
          'Notice who does the work: I will strengthen, I will help, I will uphold. The command not to fear is not asking you to manufacture courage. It rests on His presence, not your performance. You are being held, not graded.',
        exposition:
          'Isaiah wrote this to a people facing exile, and the structure of the verse is worth noticing. Every action belongs to God: I am with you, I am your God, I will strengthen you, I will help you, I will uphold you. The person being addressed does nothing except not be afraid — and even that is grounded in what God is doing, not in their own resolve. The final image, being upheld by a right hand, is the language of someone steadying a person who cannot stand alone. The command not to fear is not asking you to generate courage from nothing. It is telling you what is true about who is holding you.',
        application: [
          'Where are you performing strength you do not feel? Name one area, and tell one safe person the truth this week.',
          'When you feel unsteady, read the verse and underline every "I will." Notice how little of the work is assigned to you.',
          'Let someone help you with something practical — a ride, a meal, a hard conversation. Being upheld often comes through people.',
        ],
        reflection:
          'Where are you trying to be strong on your own right now? What would receiving help look like there?',
        practice:
          'Tell one safe person that you are struggling. Being upheld often arrives through community.',
        quiz: {
          question: 'Who does the work in this verse?',
          options: [
            {
              label: 'God — He strengthens, helps, and upholds; the command not to fear rests on His presence',
              correct: true,
              feedback:
                'Right. Every action belongs to God. You are being held, not graded on how much courage you can produce.',
            },
            {
              label: 'You do, by choosing to be brave enough',
              correct: false,
              feedback:
                'Read the verbs again — I will strengthen, I will help, I will uphold. Courage here is a response to His presence, not self-generated.',
            },
            {
              label: 'It is an equal partnership, half yours and half God\'s',
              correct: false,
              feedback:
                'The grammar does not split it evenly. The reason not to fear is entirely what God is doing.',
            },
          ],
        },
      },
    ],
  },
  {
    slug: 'how-to-hear-gods-voice',
    category: 'Spiritual Growth',
    icon: 'BookOpen',
    title: 'How to Hear God\'s Voice',
    summary:
      'Practical, biblical guidance on discerning God\'s gentle whisper in the noise of everyday life.',
    stages: [STAGES.NEW, STAGES.BACK, STAGES.DEEPER, STAGES.PURPOSE],
    duration: '4 lessons · ~25 min',
    lessons: [
      {
        title: 'His Sheep Know His Voice',
        verse: {
          ref: 'John 10:27',
          text:
            'My sheep hear my voice, and I know them, and they follow me.',
        },
        teaching:
          'Hearing God is presented as normal for those who belong to Him, not as a gift for the spiritually elite. Recognition grows with familiarity — the same way you know a close friend calling without checking the screen. If you feel new at this, you are not disqualified. You are early.',
        exposition:
          'Jesus is using an image his listeners knew well. In that region, several shepherds would keep their flocks in one enclosure overnight, and in the morning each would call and only his own sheep would follow. The sheep were not clever — recognition came from familiarity, from hearing that voice daily over time. Notice the middle clause too: "and I know them." Being known comes before recognising. If you feel like a beginner at this, the verse frames hearing as something that grows with relationship, not a spiritual gift reserved for a select few.',
        application: [
          'Read a short passage of scripture daily, even five minutes. Familiarity with how God speaks in His word is how you learn His voice.',
          'When you sense something, write it down with the date. Reviewing months later teaches you to recognise the pattern.',
          'Stop comparing your experience to someone else\'s dramatic testimony. Recognition grows quietly, like knowing a friend\'s footsteps.',
        ],
        reflection:
          'Have you ever assumed hearing from God was for other people? Where did that belief come from?',
        practice:
          'Read one short psalm slowly. Note the single phrase that stays with you.',
        quiz: {
          question: 'According to the shepherd image, how do sheep come to know the voice?',
          options: [
            {
              label: 'Through daily familiarity over time — they belong to him and hear him often',
              correct: true,
              feedback:
                'Yes. Several flocks shared an enclosure, and each followed its own shepherd\'s call. Recognition came from relationship, not cleverness.',
            },
            {
              label: 'Because the shepherd speaks louder than the others',
              correct: false,
              feedback:
                'Volume is not the distinguishing factor. It is familiarity — which is encouraging, because familiarity is something that grows.',
            },
            {
              label: 'Only especially gifted sheep can tell the difference',
              correct: false,
              feedback:
                'Jesus says "my sheep hear my voice" as a general statement. Hearing is presented as normal for those who belong to Him.',
            },
          ],
        },
      },
      {
        title: 'The Still, Small Voice',
        verse: {
          ref: '1 Kings 19:12',
          text:
            'After the earthquake a fire passed; but Yahweh was not in the fire. After the fire, there was a still small voice.',
        },
        teaching:
          'Elijah looked for God in the wind, the earthquake, the fire — the dramatic places. God came in the quiet. If you are waiting for an unmistakable sign before you believe God is speaking, you may be scanning the wrong frequency entirely.',
        exposition:
          'Elijah had just seen fire fall from heaven on Mount Carmel — one of the most dramatic miracles in scripture — and immediately afterwards he collapsed into fear and wanted to die. That is the state he is in when this happens. God sends wind, earthquake, and fire, the very categories of spectacle Elijah had just witnessed, and is in none of them. Then comes a sound the Hebrew describes as a thin whisper, almost silence. The lesson is not that God never does dramatic things — Elijah had just seen one. It is that God\'s care for a person at the end of themselves came quietly, and He had already sent food and rest before He sent words.',
        application: [
          'Notice how much of your day has background noise. Try one commute, one walk, or one meal without audio.',
          'If you are exhausted, address that first. God let Elijah sleep and eat before speaking to him — rest is often the prerequisite, not the distraction.',
          'Stop waiting for an unmistakable sign before you will believe God is speaking. Attend to the quiet impression that keeps returning.',
        ],
        reflection:
          'What noise in your life is loudest right now? What would it cost you to turn it down?',
        practice:
          'Take one intentionally quiet walk with no headphones. Let the silence be the point.',
        quiz: {
          question: 'What had just happened to Elijah before this moment?',
          options: [
            {
              label: 'He had seen a dramatic miracle, then collapsed into fear and exhaustion',
              correct: true,
              feedback:
                'Yes — fire had just fallen at Carmel. God met him in the quiet precisely when he was at his lowest, and fed him first.',
            },
            {
              label: 'He had never witnessed anything supernatural before',
              correct: false,
              feedback:
                'He had just seen one of scripture\'s most dramatic miracles, which is what makes the whisper so pointed.',
            },
            {
              label: 'He had sinned badly and God was withholding His voice',
              correct: false,
              feedback:
                'There is no rebuke in the passage. God responds to his exhaustion with rest, food, and then a gentle word.',
            },
          ],
        },
      },
      {
        title: 'Speak, Your Servant Hears',
        verse: {
          ref: '1 Samuel 3:10',
          text:
            'Yahweh came, and stood, and called as at other times, “Samuel! Samuel!” Then Samuel said, “Speak; for your servant hears.”',
        },
        teaching:
          'Samuel was young and did not recognise the voice at first — it took guidance to identify it. His posture is the lesson: speak, I am listening. Most of us reverse it, filling the silence with our own words and calling it prayer.',
        exposition:
          'Samuel was a boy serving in the temple, and the text tells us plainly that he "did not yet know Yahweh" — he had heard the voice three times already and mistaken it for Eli each time. It took an older believer to help him identify what was happening. That detail matters: learning to recognise God\'s voice was not instant even for a prophet, and it involved someone further along pointing it out. When Samuel finally answers, his posture is simple — speak, for your servant hears. Most of us reverse that, filling the whole conversation with our own words and calling it prayer.',
        application: [
          'Begin one prayer this week with "Speak, I am listening," then stay quiet for two full minutes before saying anything.',
          'If you are unsure whether something is God, ask an older believer you trust. Samuel needed Eli, and needing help is not immaturity.',
          'Notice your talk-to-listen ratio in prayer this week. Be honest about it without being harsh with yourself.',
        ],
        reflection:
          'In your prayers, what is the ratio of talking to listening? Be honest.',
        practice:
          'Begin prayer today with "Speak, I am listening," then stay quiet for two full minutes before saying anything else.',
        quiz: {
          question: 'What does Samuel\'s story show about learning to recognise God\'s voice?',
          options: [
            {
              label: 'It took time and the help of someone further along — he misheard three times first',
              correct: true,
              feedback:
                'Right. Even a future prophet needed Eli to help him identify the voice. Needing guidance is part of the process.',
            },
            {
              label: 'He recognised it instantly because he was chosen',
              correct: false,
              feedback:
                'He mistook it for Eli three times. The text even says he did not yet know the Lord.',
            },
            {
              label: 'God only speaks to children and the especially innocent',
              correct: false,
              feedback:
                'His age is not the qualifying factor. The posture he lands on — speak, I am listening — is what the passage highlights.',
            },
          ],
        },
      },
      {
        title: 'Testing What You Hear',
        verse: {
          ref: 'Proverbs 3:5-6',
          text:
            'Trust in Yahweh with all your heart, and don’t lean on your own understanding. In all your ways acknowledge him, and he will make your paths straight.',
        },
        teaching:
          'Not every inner voice is God. Scripture is the measure: God will not contradict His own character or His word. Guidance that leads toward shame, panic, or secrecy is worth questioning — His correction convicts without condemning.',
        exposition:
          'This proverb sets up a contrast that is easy to misread. "Lean not on your own understanding" is not a warning against thinking — Proverbs is a book that repeatedly praises wisdom and instruction. The word for "lean" means to rest your full weight on something, the way you would lean on a walking stick. The issue is not having understanding; it is making your own perception the thing that holds you up. And "acknowledge him in all your ways" means bringing Him into the ordinary decisions, not only the crisis ones. Guidance that leads toward shame, panic, or secrecy is worth questioning — God\'s correction convicts without condemning.',
        application: [
          'Before a decision, ask whether the direction you sense lines up with God\'s character as scripture describes it.',
          'Notice the difference between conviction and condemnation. Conviction names something specific and offers a way forward; condemnation just says you are worthless.',
          'Bring one impression to a mature believer and ask what they see. Wise counsel is a safeguard, not a sign of weak faith.',
        ],
        reflection:
          'Think of something you sensed God saying. Does it align with what Scripture shows of His character?',
        practice:
          'Bring one impression to a mature believer you trust and ask what they see. Wise counsel is a safeguard, not a weakness.',
        quiz: {
          question: 'What does "lean not on your own understanding" warn against?',
          options: [
            {
              label: 'Resting your full weight on your own perception as the thing that holds you up',
              correct: true,
              feedback:
                'Yes. "Lean" means to put your full weight on something. Proverbs values wisdom — the warning is about what ultimately supports you.',
            },
            {
              label: 'Thinking critically or using your mind at all',
              correct: false,
              feedback:
                'Proverbs repeatedly praises wisdom and instruction. This is not a call to stop thinking.',
            },
            {
              label: 'Ever asking other people for advice',
              correct: false,
              feedback:
                'Scripture actually commends wise counsel. The warning is about self-reliance, not about seeking input.',
            },
          ],
        },
      },
    ],
  },
  {
    slug: 'discovering-your-calling',
    category: 'Purpose Finding',
    icon: 'Compass',
    title: 'Discovering Your God-Given Calling',
    summary:
      'Uncover the unique gifts and purpose that were placed inside you before you were born.',
    stages: [STAGES.DEEPER, STAGES.PURPOSE],
    duration: '4 lessons · ~25 min',
    lessons: [
      {
        title: 'Known Before You Arrived',
        verse: {
          ref: 'Jeremiah 1:5',
          text:
            '“Before I formed you in the womb, I knew you. Before you were born, I sanctified you. I have appointed you a prophet to the nations.”',
        },
        teaching:
          'Your calling predates your résumé. Jeremiah was known, set apart, and appointed before he had done anything to earn it — and his first response was to protest that he was too young. Feeling unqualified is a normal reaction to a real calling, not evidence against it.',
        exposition:
          'God speaks this to Jeremiah at the start of his ministry, and the three verbs build deliberately: knew, sanctified, appointed. "Knew" here is relational knowledge, not information. "Sanctified" means set apart for a purpose. All of it is placed before birth — before Jeremiah had done anything right or wrong. What the passage does not tell you unless you read on is that Jeremiah immediately objects that he is too young and cannot speak. God does not argue with the self-assessment; He answers it with promise and presence. Feeling unqualified is a normal reaction to a real calling, not evidence against it.',
        application: [
          'Write down the thing you feel drawn toward but have dismissed as unrealistic. Naming it is enough for today.',
          'Notice whether "I am too young" or "I am not ready" is doing the work of a decision you have not actually examined.',
          'Ask what you would attempt if you knew feeling unqualified was expected rather than disqualifying.',
        ],
        reflection:
          'What do you feel drawn toward that you have dismissed as unrealistic? Why did you dismiss it?',
        practice:
          'Write that thing down without justifying it. Naming it is enough for today.',
        quiz: {
          question: 'How did Jeremiah respond to this calling?',
          options: [
            {
              label: 'He objected that he was too young to speak — and God answered with presence, not argument',
              correct: true,
              feedback:
                'Yes. God did not dispute his sense of inadequacy; He met it with promise. Feeling unqualified is common to real callings.',
            },
            {
              label: 'He accepted immediately with total confidence',
              correct: false,
              feedback:
                'He protested that he was only a youth. His hesitation is preserved in the text for a reason.',
            },
            {
              label: 'He refused permanently and God chose someone else',
              correct: false,
              feedback:
                'He raised an objection, but he went. Hesitation at the start did not disqualify him.',
            },
          ],
        },
      },
      {
        title: 'Gifts Given for Others',
        verse: {
          ref: '1 Corinthians 12:7',
          text:
            'But to each one is given the manifestation of the Spirit for the profit of all.',
        },
        teaching:
          'Your gifts were given to each one — including you — and they were given for the profit of all. Calling is not self-actualisation with a Bible verse attached. The clearest sign you are near your purpose is that someone else is helped by it.',
        exposition:
          'Paul is writing to a church that had turned spiritual gifts into a status competition, ranking each other by which gifts looked most impressive. His correction is in two parts. First, "to each one" — the distribution is universal, so there is no tier of Christians who received nothing. Second, and this is the weight of the verse, the gifts are given "for the profit of all." The purpose is communal benefit, not personal validation. The clearest sign you are operating in your gifting is usually not that you feel fulfilled, but that someone else is genuinely helped.',
        application: [
          'Ask two people who know you well: "What do you see in me that I might not see?" Write down their answers without arguing.',
          'Notice what you do that leaves you energised rather than drained, and who benefits when you do it.',
          'Resist ranking your gift against someone else\'s. The verse was written specifically to a church doing exactly that.',
        ],
        reflection:
          'What comes easily to you that others find difficult? What do people repeatedly thank you for?',
        practice:
          'Ask two people who know you well: "What do you see in me that I might not see?" Write down their answers.',
        quiz: {
          question: 'What is the stated purpose of spiritual gifts in this verse?',
          options: [
            {
              label: 'The profit of all — they are given for the good of the community',
              correct: true,
              feedback:
                'Right. Paul was correcting a church that ranked gifts by status. The measure is whether others are helped.',
            },
            {
              label: 'Personal fulfilment and self-discovery',
              correct: false,
              feedback:
                'Fulfilment may follow, but the verse names the purpose plainly: for the profit of all.',
            },
            {
              label: 'To show which believers are most spiritually mature',
              correct: false,
              feedback:
                'That is precisely the error Paul was writing to correct. "To each one" removes the ranking entirely.',
            },
          ],
        },
      },
      {
        title: 'For Such a Time as This',
        verse: {
          ref: 'Esther 4:14',
          text:
            'For if you remain silent now, then relief and deliverance will come to the Jews from another place, but you and your father’s house will perish. Who knows if you haven’t come to the kingdom for such a time as this?',
        },
        teaching:
          'Esther was positioned before she was ready, and acting required real risk. Her story is not that she felt confident — it is that she moved anyway, having asked others to fast with her first. Purpose usually arrives before certainty does.',
        exposition:
          'Mordecai says this to Esther when she is hesitating, and the full sentence is more layered than the famous phrase suggests. He tells her deliverance will come from somewhere regardless — God\'s purposes do not depend on her compliance — but that she may have been positioned for this exact moment. It is invitation, not coercion. And Esther\'s response is worth noting: she does not act on a surge of confidence. She asks the community to fast with her for three days first, then says "if I perish, I perish." That is not certainty. It is courage that has counted the cost and moved anyway.',
        application: [
          'Identify what has been placed in front of you that you have been waiting to feel ready for.',
          'Before a hard step, ask people to pray with you. Esther gathered support before she moved; she did not white-knuckle it alone.',
          'Take the smallest possible action this week — one email, one conversation, one page. Courage is usually incremental.',
        ],
        reflection:
          'What has God placed in front of you that you have been waiting to feel ready for?',
        practice:
          'Take the smallest possible step toward it this week. One email, one conversation, one page.',
        quiz: {
          question: 'What did Esther do before approaching the king?',
          options: [
            {
              label: 'She asked her community to fast with her for three days, then moved despite the risk',
              correct: true,
              feedback:
                'Yes. She did not act on confidence — she gathered support, counted the cost, and went anyway.',
            },
            {
              label: 'She waited until she felt completely confident and unafraid',
              correct: false,
              feedback:
                'Her words were "if I perish, I perish." That is courage carrying fear, not the absence of it.',
            },
            {
              label: 'She acted immediately and alone without telling anyone',
              correct: false,
              feedback:
                'She specifically asked the Jews in Susa to fast with her first. Community preceded the risk.',
            },
          ],
        },
      },
      {
        title: 'When You Feel Unqualified',
        verse: {
          ref: 'Exodus 4:10-12',
          text:
            'Moses said to Yahweh, “O Lord, I am not eloquent... for I am slow of speech, and of a slow tongue.” Yahweh said to him, “Who made man’s mouth?... Now therefore go, and I will be with your mouth, and teach you what you shall speak.”',
        },
        teaching:
          'Moses listed his inadequacy as a disqualification. God did not dispute the weakness — He answered with His presence: I will be with your mouth. The question was never whether Moses was enough. It was whether God would go with him.',
        exposition:
          'This is the fourth objection Moses raises, and by this point he has already been given signs and reassurance. His complaint is about a real limitation — most scholars think he had some genuine difficulty with speech. What God does next is instructive: He does not say "no you are not" and He does not dismiss the weakness. He redirects the question entirely — who made the mouth? The issue was never whether Moses was adequate. It was whether God would go with him. Notice as well that God later provides Aaron to help. Divine calling and practical support are not opposites.',
        application: [
          'Name your version of "I am slow of speech" — the specific limitation you treat as disqualifying.',
          'Write your fear on one side of a page and God\'s response on the other. Keep it visible.',
          'Accept help where it is offered. God gave Moses a partner; needing one is not failure.',
        ],
        reflection:
          'What is your version of "I am slow of speech"? What is God’s answer to that specific fear?',
        practice:
          'Write your fear on the left of a page and Exodus 4:12 on the right. Keep it where you will see it.',
        quiz: {
          question: 'How did God respond to Moses\' objection about his speech?',
          options: [
            {
              label: 'He redirected the question to who made the mouth, and promised to be with him',
              correct: true,
              feedback:
                'Yes. God neither denied the weakness nor dismissed it — He answered with His own presence, and later provided Aaron to help.',
            },
            {
              label: 'He told Moses the weakness was imaginary',
              correct: false,
              feedback:
                'God never disputes the limitation. He answers it with presence rather than denial.',
            },
            {
              label: 'He agreed Moses was unfit and sent Aaron in his place',
              correct: false,
              feedback:
                'Aaron came alongside as help, but Moses still went. Support was added, not substituted.',
            },
          ],
        },
      },
    ],
  }
]

export const getModule = (slug) => modules.find((m) => m.slug === slug)
