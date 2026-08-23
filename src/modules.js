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
 * UNVERIFIED: the 12 modules added after 'discovering-your-calling' were
 * written without access to bible-api.com, so their verse text was NOT checked
 * word-for-word the way the first four were. Each carries an UNVERIFIED
 * SCRIPTURE comment listing its passages. Check every one against a WEB text
 * before launch.
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
    stages: [STAGES.NEW],
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
    stages: [STAGES.BACK],
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
    stages: [STAGES.DEEPER],
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
    stages: [STAGES.PURPOSE],
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
  },
  {
    // UNVERIFIED SCRIPTURE - check before launch: John 1:12, 2 Corinthians 5:17, Romans 8:15, Ephesians 2:8-9
    slug: 'what-happens-when-you-say-yes',
    category: 'First Steps',
    icon: 'Sparkles',
    title: 'What Happens When You Say Yes',
    summary:
      'You said yes to Jesus — or you are close. Here is what actually changed, and what did not.',
    stages: [STAGES.NEW],
    duration: '4 lessons · ~25 min',
    lessons: [
      {
        title: 'You Were Given a Right, Not a Trial Period',
        verse: {
          ref: 'John 1:12',
          text:
            'But as many as received him, to them he gave the right to become God’s children, to those who believe in his name:',
        },
        teaching:
          'Receiving Jesus is not an application that stays under review. John says you were given a right — a standing that is now yours. Nothing you do next earns it, and nothing you fail at next revokes it.',
        exposition:
          'John writes this in the prologue of his gospel, right after saying that Jesus came to his own and his own did not receive him. The contrast matters: the ones who did receive him were given something. The Greek word behind "right" is exousia, which means authority or entitlement — a legal standing, not a feeling. And notice the tense: he gave. Past, completed. This is not something being decided about you week by week based on how the week went.',
        application: [
          'Write today’s date somewhere you will see it. When you doubt later, you are doubting a thing that already happened.',
          'When you catch yourself thinking "I am probably not really saved," ask what evidence you are using — a feeling, or what John actually says here.',
          'Tell one person this week. Saying it out loud makes it harder for you to quietly take it back.',
        ],
        reflection:
          'What did you assume would feel different after saying yes to Jesus? What actually did, and what did not?',
        practice:
          'Read John 1:12 once each morning this week, replacing "them" with your own name.',
        quiz: {
          question: 'What does "he gave the right to become God’s children" tell us about your standing?',
          options: [
            {
              label: 'It is a settled standing that was given, not a status you keep earning',
              correct: true,
              feedback:
                'Right. The word carries the sense of authority or entitlement, and the verb is past and completed. It was given.',
            },
            {
              label: 'It is a probation period you can be removed from if you fail',
              correct: false,
              feedback:
                'This is the fear most new believers carry, but the text says the opposite. It was given, not loaned pending review.',
            },
            {
              label: 'It means you will now feel close to God at all times',
              correct: false,
              feedback:
                'The verse says nothing about feelings. It describes a standing, which is exactly why it holds when the feelings do not.',
            },
          ],
        },
      },
      {
        title: 'Old Things Passed Away',
        verse: {
          ref: '2 Corinthians 5:17',
          text:
            'Therefore if anyone is in Christ, he is a new creation. The old things have passed away. Behold, all things have become new.',
        },
        teaching:
          'You may still recognise your old habits, your old thoughts, your old reflexes. That does not mean nothing happened. Paul is describing what is true of you now, which your daily experience is slowly catching up to.',
        exposition:
          'Paul writes this to a church that was still visibly struggling — this same letter deals with division and immorality among them. So he is not claiming they behave perfectly. "New creation" translates kaine ktisis, language that echoes Genesis: a new act of making, not a repaired version of the old. The old things "have passed away" is in a tense indicating a completed action with ongoing effect. Something finished, and its results continue. Your job is not to make this true. It is to live like it already is.',
        application: [
          'Name one habit you assumed you had to fix before God would accept you. Notice the order Paul puts it in.',
          'When an old pattern shows up this week, say "that is not who I am now" before you deal with it.',
          'Stop describing yourself by your worst season. Listen for how often you do it.',
        ],
        reflection:
          'Which part of your old life do you still assume defines you? What would change if you believed it had already passed away?',
        practice:
          'Each night this week, name one thing from the day that is evidence of the new, however small.',
        quiz: {
          question: 'Why does Paul call believers a "new creation" even when they still struggle?',
          options: [
            {
              label: 'Because it describes a completed act of God, not the level they have reached',
              correct: true,
              feedback:
                'Right. The language echoes Genesis — a new making. Paul wrote this to a church still visibly struggling.',
            },
            {
              label: 'Because they have stopped sinning',
              correct: false,
              feedback:
                'The same letter addresses serious problems in this church. Paul is not describing their behaviour.',
            },
            {
              label: 'Because they will become new if they try hard enough',
              correct: false,
              feedback:
                'The tense indicates a completed action with continuing effect. It is already done, not pending.',
            },
          ],
        },
      },
      {
        title: 'You Did Not Get a Master, You Got a Father',
        verse: {
          ref: 'Romans 8:15',
          text:
            'For you didn’t receive the spirit of bondage again to fear, but you received the Spirit of adoption, by whom we cry, “Abba! Father!”',
        },
        teaching:
          'Fear is a normal starting point with God. Paul says it is not the relationship you were actually given. What you received was adoption — closeness with permission to speak plainly.',
        exposition:
          'Paul is writing to believers in Rome, where adoption was a formal legal act. An adopted son took the family name and inherited fully; the adoption could not be undone by poor behaviour. "Abba" is Aramaic, the everyday word a child used for a father — not baby talk, but ordinary family intimacy. Paul leaves it untranslated, which suggests the early church actually prayed this way. The contrast he draws is deliberate: bondage and fear on one side, adoption and address on the other. You are not managing a master’s expectations.',
        application: [
          'Notice how you begin prayers. Formal and careful, or honest? Try the honest version once this week.',
          'When you avoid God after messing up, name what you are expecting from him — and check it against "Abba".',
          'Ask a Christian you trust what changed in their prayers when fear stopped driving them.',
        ],
        reflection:
          'When you imagine God looking at you right now, what is his expression? Where did that picture come from?',
        practice:
          'Pray once this week using only the words you would use with someone safe. No formal language.',
        quiz: {
          question: 'What is Paul contrasting when he says you received "the Spirit of adoption"?',
          options: [
            {
              label: 'Fear-driven servitude versus secure family belonging',
              correct: true,
              feedback:
                'Right. Roman adoption was legally permanent and gave full inheritance. Paul sets that against bondage and fear.',
            },
            {
              label: 'Old Testament law versus New Testament grace only',
              correct: false,
              feedback:
                'That theme is nearby in Romans, but this verse specifically contrasts fear with the intimacy of adoption.',
            },
            {
              label: 'Being a servant of God versus being independent from him',
              correct: false,
              feedback:
                'The alternative to fear here is not independence — it is closeness. Adoption brings you further in, not further away.',
            },
          ],
        },
      },
      {
        title: 'Grace Is Not a Loan',
        verse: {
          ref: 'Ephesians 2:8-9',
          text:
            'for by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast.',
        },
        teaching:
          'The most common new-believer mistake is treating grace as a starter fund you now repay through good behaviour. Paul closes that door twice in one sentence: not of yourselves, not of works.',
        exposition:
          'Paul writes to a mixed church of Jewish and Gentile believers, where the question of what you had to do to belong was live and divisive. He stacks the phrases deliberately — by grace, through faith, not of yourselves, the gift of God, not of works — four ways of saying the same thing, because he knows how quickly people add a condition back in. The stated purpose is "that no one would boast," which tells you what is at stake: if any of it were earned, some believers would rank above others. Gratitude is the right response to a gift. Repayment is not.',
        application: [
          'Catch yourself doing something spiritual to feel acceptable rather than because you want to. Name it honestly.',
          'When you fail this week, notice whether you instinctively try to earn your way back before praying.',
          'Do one good thing this week purely as thanks, expecting nothing back from God for it.',
        ],
        reflection:
          'What are you quietly doing to try to deserve what you have already been given?',
        practice:
          'Write "not of works" somewhere you will see it when you fail this week.',
        quiz: {
          question: 'Why does Paul add "that no one would boast"?',
          options: [
            {
              label: 'Because anything earned would create rank among believers',
              correct: true,
              feedback:
                'Right. Paul is writing to a divided church. If salvation were earned, some could claim standing over others.',
            },
            {
              label: 'Because good works do not matter to God',
              correct: false,
              feedback:
                'The very next verse says believers were created for good works. Paul is addressing their role, not their value.',
            },
            {
              label: 'Because boasting is rude',
              correct: false,
              feedback:
                'The concern is theological, not about manners — boasting would mean salvation was partly self-made.',
            },
          ],
        },
      },
    ],
  },
  {
    // UNVERIFIED SCRIPTURE - check before launch: Matthew 6:7-8, Philippians 4:6, Romans 8:26, Luke 11:9
    slug: 'learning-to-pray',
    category: 'First Steps',
    icon: 'MessageCircle',
    title: 'Learning to Pray',
    summary:
      'Prayer is not a performance you have to get right. Here is how to actually start.',
    stages: [STAGES.NEW],
    duration: '4 lessons · ~25 min',
    lessons: [
      {
        title: 'You Do Not Need the Right Words',
        verse: {
          ref: 'Matthew 6:7-8',
          text:
            'In praying, don’t use vain repetitions, as the Gentiles do; for they think that they will be heard for their much speaking. Therefore don’t be like them, for your Father knows what things you need before you ask him.',
        },
        teaching:
          'Most people avoid prayer because they think they will do it wrong. Jesus says the opposite problem is more common — piling up words as if volume improves the odds.',
        exposition:
          'Jesus says this in the Sermon on the Mount, immediately before giving the Lord’s Prayer as a model. The phrase translated "vain repetitions" suggests babbling or stacking up phrases. The assumption he is correcting is that God must be worn down or impressed. Then he gives the reason plainly: your Father already knows. That reframes prayer entirely — it is not informing God or persuading him, it is speaking with someone already paying attention. Which means a short honest sentence is not a lesser prayer.',
        application: [
          'Pray one sentence today. Not a session — a sentence.',
          'When you catch yourself using church words you would never say normally, stop and say it plainly instead.',
          'Notice if you delay praying until you can do it "properly". Pray badly instead.',
        ],
        reflection:
          'What do you think has to be true before God will listen to you? Where did that idea come from?',
        practice:
          'Set one alarm this week. When it goes off, say one honest sentence to God, whatever is actually on your mind.',
        quiz: {
          question: 'Why does Jesus say not to use "vain repetitions"?',
          options: [
            {
              label: 'Because God already knows your need, so prayer is not about persuading him',
              correct: true,
              feedback:
                'Right. Jesus gives the reason directly: your Father knows what you need before you ask.',
            },
            {
              label: 'Because long prayers are always wrong',
              correct: false,
              feedback:
                'Jesus himself prayed at length. The issue is the belief that volume of words earns a hearing.',
            },
            {
              label: 'Because you should only pray the Lord’s Prayer',
              correct: false,
              feedback:
                'He gives that as a model immediately after, not as the only permitted words.',
            },
          ],
        },
      },
      {
        title: 'Anxious About Nothing, Prayerful About Everything',
        verse: {
          ref: 'Philippians 4:6',
          text:
            'In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God.',
        },
        teaching:
          'This is not a command to stop feeling anxious by willpower. It is an instruction about where the anxiety goes — you have somewhere to put it.',
        exposition:
          'Paul writes this from prison, which is worth holding onto: he is not writing from a calm season. The structure is a contrast — in nothing be anxious, in everything pray. The word for "petition" is specific and personal, not general. And "with thanksgiving" is not decoration; naming what is already true steadies you while the request is still unanswered. Notice what Paul does not promise in this verse: he does not say you will get what you asked for. The next verse promises peace, not compliance.',
        application: [
          'Write down the thing you are most anxious about. Then say it to God in those exact words.',
          'Add one thing you are thankful for to the same prayer, even if it feels unrelated.',
          'When the worry returns this week, treat it as a prompt to pray rather than a failure to.',
        ],
        reflection:
          'What are you carrying right now that you have not actually told God about? What has stopped you?',
        practice:
          'Each night this week, name one anxiety and one thanks. Two sentences.',
        quiz: {
          question: 'What does Paul promise in the verse that follows this instruction?',
          options: [
            {
              label: 'Peace — not that you will get what you asked for',
              correct: true,
              feedback:
                'Right. The promise is peace that guards you, which is different from receiving the specific outcome requested.',
            },
            {
              label: 'That your requests will be granted',
              correct: false,
              feedback:
                'Paul does not say that. He is writing from prison, where his own circumstances had not changed.',
            },
            {
              label: 'That anxiety will never return',
              correct: false,
              feedback:
                'The instruction assumes anxiety keeps arising — that is why there is somewhere to bring it.',
            },
          ],
        },
      },
      {
        title: 'When You Do Not Know What to Say',
        verse: {
          ref: 'Romans 8:26',
          text:
            'In the same way, the Spirit also helps our weaknesses, for we don’t know how to pray as we ought. But the Spirit himself makes intercession for us with groanings which can’t be uttered.',
        },
        teaching:
          'There will be seasons where you cannot find words at all. Paul treats that as normal, and says something is happening even then.',
        exposition:
          'Paul writes this in a chapter about suffering and waiting. Notice he says "we" — he includes himself among those who do not know how to pray as they ought. The word for "helps" carries the sense of taking hold of something alongside someone, the way two people lift one load. The groanings that "can’t be uttered" are wordless, which is the point: the prayer is not failing for lack of vocabulary. When you sit with God and produce nothing articulate, this verse says that is not empty.',
        application: [
          'Try sitting quietly with God for two minutes without trying to produce words.',
          'When you cannot pray this week, do not skip it — show up wordlessly instead.',
          'Stop grading your prayers by how they sounded.',
        ],
        reflection:
          'When was the last time you had no words for God? What did you assume that meant?',
        practice:
          'Once this week, pray by simply sitting still for three minutes. Do not fill the silence.',
        quiz: {
          question: 'What does Paul say about believers who do not know how to pray?',
          options: [
            {
              label: 'It is normal, and the Spirit intercedes even without words',
              correct: true,
              feedback:
                'Right. Paul includes himself — "we don’t know how to pray as we ought" — and says the Spirit takes hold alongside us.',
            },
            {
              label: 'They need to learn proper prayer techniques first',
              correct: false,
              feedback:
                'Paul offers no technique here. He points to the Spirit’s help, not improved method.',
            },
            {
              label: 'Their prayers do not count until they find words',
              correct: false,
              feedback:
                'The groanings are explicitly wordless, and Paul calls it intercession — it counts.',
            },
          ],
        },
      },
      {
        title: 'Keep Asking',
        verse: {
          ref: 'Luke 11:9',
          text:
            'I tell you, keep asking, and it will be given you. Keep seeking, and you will find. Keep knocking, and it will be opened to you.',
        },
        teaching:
          'Jesus frames prayer as ongoing rather than one-time. Persistence here is not nagging a reluctant God — it is the posture of someone who expects an answer.',
        exposition:
          'Jesus says this right after a parable about a friend knocking at midnight. The verbs are in a form indicating continuous action — keep asking, keep seeking, keep knocking — not single attempts. Importantly, the parable’s point is contrast, not comparison: if a reluctant neighbour eventually responds, how much more a Father who is not reluctant at all. Jesus makes that explicit a few verses later, comparing God to a father who gives good gifts. So persistence is not about wearing God down. It is about not giving up early on someone who is already inclined toward you.',
        application: [
          'Pick one thing you stopped praying about because nothing happened. Start again this week.',
          'Notice whether you treat unanswered prayer as evidence God is unwilling. Check that against this verse.',
          'Ask for something specific enough that you would recognise an answer.',
        ],
        reflection:
          'What have you given up asking God for? What did the silence make you believe about him?',
        practice:
          'Choose one request. Pray it every day this week, even if nothing appears to change.',
        quiz: {
          question: 'What is the point of the parable Jesus tells before this verse?',
          options: [
            {
              label: 'Contrast — if a reluctant neighbour responds, how much more a willing Father',
              correct: true,
              feedback:
                'Right. Jesus argues from lesser to greater, and makes it explicit by comparing God to a father giving good gifts.',
            },
            {
              label: 'That God responds only if you ask enough times',
              correct: false,
              feedback:
                'That reverses the point. The neighbour is reluctant; God is deliberately contrasted with him.',
            },
            {
              label: 'That persistence proves you deserve the answer',
              correct: false,
              feedback:
                'Nothing in the passage ties the answer to deserving. The emphasis is on the Father’s willingness.',
            },
          ],
        },
      },
    ],
  },
  {
    // UNVERIFIED SCRIPTURE - check before launch: 2 Timothy 3:16, Psalm 119:105, Hebrews 4:12, James 1:22
    slug: 'reading-the-bible-for-yourself',
    category: 'First Steps',
    icon: 'BookOpen',
    title: 'Reading the Bible for Yourself',
    summary:
      'Where to start, how to read a passage without a study guide, and what to do when it does not make sense.',
    stages: [STAGES.NEW],
    duration: '4 lessons · ~25 min',
    lessons: [
      {
        title: 'Why This Book Is Different',
        verse: {
          ref: '2 Timothy 3:16',
          text:
            'Every Scripture is God-breathed and profitable for teaching, for reproof, for correction, and for instruction in righteousness,',
        },
        teaching:
          'Scripture is not a collection of religious advice you weigh against other advice. Paul’s claim is that it originates with God, which is why it can correct you rather than only comfort you.',
        exposition:
          'Paul writes to Timothy, a young leader facing pressure. The word translated "God-breathed" is theopneustos, which Paul appears to have coined — there is no earlier known use. It says something about origin, not just usefulness. Then he lists four functions, and notice they are not all pleasant: teaching and instruction build, but reproof and correction push back. A book that only ever agreed with you could not do that. This is why reading Scripture sometimes feels uncomfortable — the discomfort is one of its stated purposes, not a sign you are reading it wrong.',
        application: [
          'When a passage makes you uncomfortable this week, sit with it before looking for an explanation that softens it.',
          'Notice whether you only read the parts that encourage you. Read one harder passage this week.',
          'Ask what a passage is asking of you, not only what it offers you.',
        ],
        reflection:
          'Do you read the Bible expecting to be comforted, corrected, or both? What does that reveal?',
        practice:
          'Read one chapter this week and write down one thing in it that challenged you.',
        quiz: {
          question: 'Why does Paul list "reproof" and "correction" alongside teaching?',
          options: [
            {
              label: 'Because Scripture is meant to push back, not only affirm',
              correct: true,
              feedback:
                'Right. Two of the four listed functions involve correction — a text that only agreed with you could not do that.',
            },
            {
              label: 'Because the Bible is mainly about rules',
              correct: false,
              feedback:
                'The list includes teaching and instruction in righteousness too. Correction is one function among several.',
            },
            {
              label: 'Because Timothy had done something wrong',
              correct: false,
              feedback:
                'Paul is describing what Scripture does generally, not disciplining Timothy in this verse.',
            },
          ],
        },
      },
      {
        title: 'Enough Light for the Next Step',
        verse: {
          ref: 'Psalm 119:105',
          text:
            'Your word is a lamp to my feet, and a light for my path.',
        },
        teaching:
          'The image is deliberately small. A lamp at your feet shows the next step, not the whole route. If you are waiting for Scripture to reveal your entire future, you are asking it for the wrong kind of light.',
        exposition:
          'Psalm 119 is an acrostic poem, and the longest chapter in the Bible — every section meditates on God’s word. The lamp in view is an oil lamp, which cast a small pool of light around the walker’s feet. On an unlit path at night that is exactly enough to keep moving without falling, and no more. The psalmist is not complaining about this. He calls it a gift. Guidance that showed you everything at once would remove the need to walk with God daily; guidance that shows the next step keeps you close.',
        application: [
          'Ask what your next step is this week rather than what your next five years are.',
          'When you want clarity about the future, notice whether you are actually avoiding obedience in the present.',
          'Read a short passage and ask: what does this ask of me today?',
        ],
        reflection:
          'What decision are you stalling on while waiting for more clarity than you have been given?',
        practice:
          'Each morning this week, read one verse and ask only: what does this mean for today?',
        quiz: {
          question: 'What does the lamp image suggest about how God’s guidance usually works?',
          options: [
            {
              label: 'It illuminates the next step rather than the whole route',
              correct: true,
              feedback:
                'Right. An oil lamp lit a small pool at the walker’s feet — enough to keep moving safely, and no more.',
            },
            {
              label: 'It reveals your entire future if you read enough',
              correct: false,
              feedback:
                'The image is deliberately limited. A lamp at your feet does not light the horizon.',
            },
            {
              label: 'It means you will never face uncertainty',
              correct: false,
              feedback:
                'The metaphor assumes a dark path. The light does not remove the darkness, it lets you walk through it.',
            },
          ],
        },
      },
      {
        title: 'It Reads You Back',
        verse: {
          ref: 'Hebrews 4:12',
          text:
            'For the word of God is living and active, and sharper than any two-edged sword, piercing even to the dividing of soul and spirit, of both joints and marrow, and is able to discern the thoughts and intentions of the heart.',
        },
        teaching:
          'You do not only examine Scripture. It examines you. That is a strange experience the first time it happens, and it is one of the clearest signs you are actually reading rather than skimming.',
        exposition:
          'The writer of Hebrews is addressing believers tempted to drift back to what they came from. The word translated "living" is the ordinary word for alive — the claim is not that the text is merely relevant but that it acts. "Sharper than any two-edged sword" refers to a blade honed on both sides, and the imagery moves inward: soul and spirit, joints and marrow, then thoughts and intentions. The progression is deliberate, moving from the visible to the hidden. What ends up exposed is motive — not just what you did, but why.',
        application: [
          'When a passage stings this week, ask what it exposed rather than moving on quickly.',
          'Notice the verses you skip. That avoidance is information.',
          'Before reading, ask God to show you something true about yourself.',
        ],
        reflection:
          'When has a passage of Scripture exposed a motive you had not admitted? What did you do with it?',
        practice:
          'Read the same short passage three days running. Note what you see on day three that you missed on day one.',
        quiz: {
          question: 'What does this verse say Scripture ultimately exposes?',
          options: [
            {
              label: 'The thoughts and intentions of the heart — motive, not just action',
              correct: true,
              feedback:
                'Right. The imagery moves progressively inward, ending at intentions rather than behaviour.',
            },
            {
              label: 'Other people’s sins',
              correct: false,
              feedback:
                'The passage is addressed to the reader. The blade turns inward, not outward.',
            },
            {
              label: 'Historical facts about Israel',
              correct: false,
              feedback:
                'The claim here is about the text acting on the reader, not about its historical content.',
            },
          ],
        },
      },
      {
        title: 'Do Not Just Read It',
        verse: {
          ref: 'James 1:22',
          text:
            'But be doers of the word, and not only hearers, deluding your own selves.',
        },
        teaching:
          'James names a specific trap: mistaking familiarity for obedience. Knowing a passage well can feel like having responded to it.',
        exposition:
          'James writes to scattered believers, and his letter is relentlessly practical. The word translated "deluding" carries the sense of miscounting or reasoning falsely — it is a mistake in accounting, not a lie you tell others. That is precisely the risk: you tally hearing as if it were doing, and the books look balanced when they are not. In the next verses he compares it to looking in a mirror and immediately forgetting your own face. The information arrived; nothing changed. He is not against study. He is against study that terminates in itself.',
        application: [
          'Take one thing you read this week and do it before reading anything else.',
          'Notice when you feel spiritually satisfied by a message you did not act on.',
          'Ask someone to check in on one specific thing you said you would change.',
        ],
        reflection:
          'What is one thing you already know Scripture asks of you that you have not done?',
        practice:
          'Pick one instruction from your reading this week. Do it within 24 hours.',
        quiz: {
          question: 'What does James mean by "deluding your own selves"?',
          options: [
            {
              label: 'Miscounting hearing as if it were obedience',
              correct: true,
              feedback:
                'Right. The word suggests false reasoning or bad accounting — you credit yourself for a response you did not make.',
            },
            {
              label: 'Lying to other people about your faith',
              correct: false,
              feedback:
                'The deception here is self-directed. James says deluding your own selves.',
            },
            {
              label: 'Reading the Bible too much',
              correct: false,
              feedback:
                'James is not against hearing the word — he is against stopping there.',
            },
          ],
        },
      },
    ],
  },
  {
    // UNVERIFIED SCRIPTURE - check before launch: Luke 15:20, Joel 2:25, Romans 8:1, Psalm 51:17
    slug: 'coming-back-without-shame',
    category: 'Returning',
    icon: 'Heart',
    title: 'Coming Back Without Shame',
    summary:
      'For anyone who walked away and is not sure what kind of welcome to expect.',
    stages: [STAGES.BACK],
    duration: '4 lessons · ~25 min',
    lessons: [
      {
        title: 'He Saw You While You Were Still Far Off',
        verse: {
          ref: 'Luke 15:20',
          text:
            'He arose and came to his father. But while he was still far off, his father saw him and was moved with compassion, and ran, and fell on his neck, and kissed him.',
        },
        teaching:
          'The son had a speech prepared. He never got to finish it. The father was already running before any explanation was offered.',
        exposition:
          'Jesus tells this parable to religious leaders who objected to him eating with sinners, so the audience matters — the father’s behaviour is the point being argued. Several details would have startled first-century listeners. The father was watching, which implies he had been watching for some time. Running was undignified for an older man in that culture; he would have had to gather his robes. And the embrace comes before the confession, not after it. The son’s rehearsed speech about being unworthy gets cut short. The welcome was not contingent on getting the apology right.',
        application: [
          'Notice the speech you have prepared for God. Consider that he may interrupt it.',
          'When you imagine returning, picture the father running rather than waiting with folded arms.',
          'Do not wait until you have cleaned yourself up. The son came back smelling of pigs.',
        ],
        reflection:
          'What do you expect God’s face to look like when you turn back toward him? Where did that expectation come from?',
        practice:
          'Read Luke 15:11-24 slowly this week. Notice every detail about the father, not the son.',
        quiz: {
          question: 'What is significant about when the father embraces his son?',
          options: [
            {
              label: 'Before the confession — the welcome was not contingent on the speech',
              correct: true,
              feedback:
                'Right. The father runs and embraces him while he is still far off, cutting the rehearsed apology short.',
            },
            {
              label: 'After the son proved he had changed',
              correct: false,
              feedback:
                'The son had not proved anything. He arrived destitute, and the embrace preceded his speech.',
            },
            {
              label: 'Only once the son repaid what he had wasted',
              correct: false,
              feedback:
                'Nothing is repaid in the parable. The father restores him immediately with robe, ring and sandals.',
            },
          ],
        },
      },
      {
        title: 'The Years That Were Eaten',
        verse: {
          ref: 'Joel 2:25',
          text:
            'I will restore to you the years that the swarming locust has eaten, the great locust, the cankerworm, and the caterpillar, my great army, which I sent among you.',
        },
        teaching:
          'One of the hardest parts of returning is the arithmetic — the sense that you wasted time you cannot get back. God speaks directly to that arithmetic here.',
        exposition:
          'Joel is addressing a nation after a devastating locust plague, an agricultural catastrophe that destroyed years of harvest. The promise is not that the locusts never came; the damage is acknowledged plainly, and God even takes responsibility for the judgement. What is promised is restoration of the years, which is striking language — not merely replacing crops but redeeming time. In the ancient world, time lost to famine was simply lost. The claim here is that God works outside that arithmetic. Note that restoration follows a call to return, in the verses just before.',
        application: [
          'Write down what you believe you lost. Be specific rather than vague.',
          'Notice when you use lost years as a reason not to start now.',
          'Ask what has actually been learned in the season you consider wasted.',
        ],
        reflection:
          'What do you count as wasted years? What would it mean to believe those years could be restored rather than written off?',
        practice:
          'Name one thing from your hardest season that has made you more useful, not less.',
        quiz: {
          question: 'What is unusual about the promise in this verse?',
          options: [
            {
              label: 'It promises restoration of time itself, not just replacement of what was lost',
              correct: true,
              feedback:
                'Right. The language is about restoring the years — a claim that goes beyond replacing destroyed crops.',
            },
            {
              label: 'It says the locusts were never really there',
              correct: false,
              feedback:
                'The damage is acknowledged directly. God even names the judgement as his own.',
            },
            {
              label: 'It guarantees no further hardship',
              correct: false,
              feedback:
                'Joel makes no such promise. The restoration is about what was lost, not immunity going forward.',
            },
          ],
        },
      },
      {
        title: 'No Condemnation Means No Condemnation',
        verse: {
          ref: 'Romans 8:1',
          text:
            'There is therefore now no condemnation to those who are in Christ Jesus.',
        },
        teaching:
          'Conviction points forward and invites change. Condemnation points backward and invites despair. Paul says one of those has been permanently removed.',
        exposition:
          'The "therefore" matters — Paul has just spent chapter 7 describing his own frustrating struggle with doing what he does not want to do. He does not resolve that struggle before making this statement. The word for condemnation is a legal term meaning a sentence passed against someone. Paul’s claim is that the sentence is gone, not suspended pending better behaviour. And "now" locates it in the present, not at some future point when you have improved. For anyone returning after a long absence, the ongoing struggle described in chapter 7 is not evidence against chapter 8. It is the context for it.',
        application: [
          'When guilt returns this week, ask whether it is pointing you forward or only backward.',
          'Notice how often you re-sentence yourself for things already dealt with.',
          'Read Romans 7 before Romans 8 so you see who this promise is addressed to.',
        ],
        reflection:
          'What are you still condemning yourself for? What would change if you accepted the sentence was already lifted?',
        practice:
          'When self-condemnation arrives this week, say Romans 8:1 out loud in response.',
        quiz: {
          question: 'Why does the placement of this verse after Romans 7 matter?',
          options: [
            {
              label: 'Because Paul makes the claim without first resolving his own struggle',
              correct: true,
              feedback:
                'Right. Chapter 7 describes ongoing failure. Chapter 8 opens with no condemnation anyway.',
            },
            {
              label: 'Because chapter 7 explains how to stop sinning',
              correct: false,
              feedback:
                'Chapter 7 describes the frustration of not doing what he wants. It offers no technique.',
            },
            {
              label: 'Because condemnation is only removed once the struggle ends',
              correct: false,
              feedback:
                'The word "now" places it in the present, during the struggle rather than after it.',
            },
          ],
        },
      },
      {
        title: 'What God Does Not Despise',
        verse: {
          ref: 'Psalm 51:17',
          text:
            'The sacrifices of God are a broken spirit. A broken and contrite heart, O God, you will not despise.',
        },
        teaching:
          'You may feel you are returning with nothing to offer. This verse says the thing you think disqualifies you is the thing God actually receives.',
        exposition:
          'David wrote this after being confronted about serious, compounded sin — adultery and arranged death. He is not writing from a minor failure. Earlier in the psalm he considers offering sacrifices and concludes God does not delight in them here. What he brings instead is brokenness. The word for contrite suggests something crushed. The double negative is worth noticing: God will not despise it. Not "will tolerate" or "will eventually accept" — the phrasing rules out rejection. David offers the only thing he has, and the psalm treats that as sufficient.',
        application: [
          'Bring God the actual state you are in this week rather than a tidied version.',
          'Notice if you are waiting to feel better before praying. Bring the not-feeling-better.',
          'Stop apologising for arriving empty-handed.',
        ],
        reflection:
          'What do you think you need to bring God before he will receive you? What does this verse say instead?',
        practice:
          'Pray once this week describing your actual condition honestly, without softening it.',
        quiz: {
          question: 'What does David offer God in place of sacrifices?',
          options: [
            {
              label: 'A broken and contrite heart — the only thing he has',
              correct: true,
              feedback:
                'Right. He concludes God does not delight in sacrifice here, and offers brokenness instead.',
            },
            {
              label: 'A promise to do better',
              correct: false,
              feedback:
                'No such promise appears in the verse. He offers his condition, not a commitment.',
            },
            {
              label: 'Increased religious observance',
              correct: false,
              feedback:
                'The psalm explicitly sets aside sacrifice in favour of a broken spirit.',
            },
          ],
        },
      },
    ],
  },
  {
    // UNVERIFIED SCRIPTURE - check before launch: Psalm 13:1, Isaiah 55:8-9, John 11:6, Habakkuk 1:2
    slug: 'when-god-felt-silent',
    category: 'Returning',
    icon: 'Cloud',
    title: 'When God Felt Silent',
    summary:
      'For the season that made you stop asking — unanswered prayer, and what silence does and does not mean.',
    stages: [STAGES.BACK],
    duration: '4 lessons · ~25 min',
    lessons: [
      {
        title: 'How Long, Lord',
        verse: {
          ref: 'Psalm 13:1',
          text:
            'How long, Yahweh? Will you forget me forever? How long will you hide your face from me?',
        },
        teaching:
          'This is in the Bible. The complaint, the accusation, the raw question — someone wrote it down and it was kept. You are allowed to say this.',
        exposition:
          'Psalm 13 is a lament, a category that makes up a substantial portion of the psalms. David does not soften the question or add a disclaimer. He accuses God of forgetting and hiding. Yet the psalm is addressed to God — the complaint is a form of relationship, not a departure from it. By the final verses he has turned toward trust, but crucially the turn is not immediate and the earlier verses are not deleted. The structure itself teaches something: honesty came first, and it was not punished.',
        application: [
          'Say the actual complaint to God this week, in the words you would use to a friend.',
          'Stop editing your prayers into acceptable language.',
          'Notice whether you left faith because you were not allowed to be angry within it.',
        ],
        reflection:
          'What did you never let yourself say to God? What has holding it in cost you?',
        practice:
          'Write your own version of Psalm 13:1 this week. Address it to God and do not tidy it.',
        quiz: {
          question: 'What does the inclusion of this psalm in Scripture suggest?',
          options: [
            {
              label: 'Honest complaint is a legitimate form of prayer, not a failure of faith',
              correct: true,
              feedback:
                'Right. The lament is addressed to God and was preserved without softening — the complaint is part of the relationship.',
            },
            {
              label: 'David lost his faith when he wrote it',
              correct: false,
              feedback:
                'The psalm is addressed to God throughout, and turns toward trust by its end.',
            },
            {
              label: 'Believers should suppress difficult questions',
              correct: false,
              feedback:
                'The psalm does the opposite, and its presence in Scripture legitimises the practice.',
            },
          ],
        },
      },
      {
        title: 'Higher Than Yours',
        verse: {
          ref: 'Isaiah 55:8-9',
          text:
            'For my thoughts are not your thoughts, and your ways are not my ways,” says Yahweh. “For as the heavens are higher than the earth, so are my ways higher than your ways, and my thoughts than your thoughts.',
        },
        teaching:
          'This verse is often used to shut down hard questions. In context it is doing something gentler — explaining why mercy went further than the hearers expected.',
        exposition:
          'The surrounding verses are an invitation: come, buy without money, seek Yahweh while he may be found, and let the wicked return for God will abundantly pardon. It is immediately after that promise of abundant pardon that these verses appear. So the gap between God’s thoughts and ours is illustrated by mercy being wider than we would grant, not by suffering being inexplicable. That reframes the verse considerably. It is not primarily "stop asking questions." It is closer to "your instinct about how much forgiveness is available is too small."',
        application: [
          'Notice when this verse is used to silence a question rather than widen mercy.',
          'Ask whether your sense of what God will forgive is smaller than the text allows.',
          'Read Isaiah 55:6-9 as one unit this week rather than these verses alone.',
        ],
        reflection:
          'Have you assumed God’s ways being higher means he is distant? What if it means he is more merciful than you expect?',
        practice:
          'Read Isaiah 55:6-9 aloud once, noticing what comes immediately before verse 8.',
        quiz: {
          question: 'What does the surrounding context suggest these verses are illustrating?',
          options: [
            {
              label: 'That God’s mercy extends further than people expect',
              correct: true,
              feedback:
                'Right. The verses follow directly after a promise that God will abundantly pardon those who return.',
            },
            {
              label: 'That believers should never ask questions',
              correct: false,
              feedback:
                'The passage is an invitation to seek God, not a prohibition on questions.',
            },
            {
              label: 'That God is indifferent to human suffering',
              correct: false,
              feedback:
                'The context is an offer of pardon and welcome, which is the opposite of indifference.',
            },
          ],
        },
      },
      {
        title: 'He Stayed Two More Days',
        verse: {
          ref: 'John 11:6',
          text:
            'When therefore he heard that he was sick, he stayed two days in the place where he was.',
        },
        teaching:
          'Jesus received the message that his friend was dying, and deliberately waited. The delay was not neglect, and it was not because he did not care — the same chapter records him weeping.',
        exposition:
          'The word "therefore" is jarring: John says that because Jesus loved them, he stayed. Verse 5 states his love for Martha, Mary and Lazarus, and verse 6 gives the delay as a consequence. By the time he arrives Lazarus has been dead four days, past the point where any hope remained. Both sisters say the same thing — if you had been here, he would not have died. Jesus does not dispute this. He also does not explain himself. What he does is weep, and then act. The delay and the love are not in tension in John’s telling; the delay is presented as an expression of it.',
        application: [
          'Consider that a delay you experienced may not have been absence.',
          'Notice that Jesus wept before he acted. Grief was not skipped.',
          'Ask what you concluded about God during a delay, and whether the evidence supports it.',
        ],
        reflection:
          'What did you conclude about God when he did not act in time? Has anything since then complicated that conclusion?',
        practice:
          'Read John 11 this week in one sitting. Notice how John links love and delay.',
        quiz: {
          question: 'How does John connect Jesus’ love for the family with his delay?',
          options: [
            {
              label: 'He presents the delay as a consequence of the love, not a contradiction of it',
              correct: true,
              feedback:
                'Right. Verse 5 states his love and verse 6 begins with "therefore" — John links them directly.',
            },
            {
              label: 'He says Jesus did not receive the message in time',
              correct: false,
              feedback:
                'The text says he heard that Lazarus was sick and then stayed two days.',
            },
            {
              label: 'He explains that Jesus was too busy',
              correct: false,
              feedback:
                'No such reason is given. The delay is deliberate and linked to love.',
            },
          ],
        },
      },
      {
        title: 'Complaining Is Not Leaving',
        verse: {
          ref: 'Habakkuk 1:2',
          text:
            'Yahweh, how long will I cry, and you will not hear? I cry out to you “Violence!” and will you not save?',
        },
        teaching:
          'An entire book of the Bible is structured as a prophet arguing with God. He does not get a tidy answer, and he does not walk away.',
        exposition:
          'Habakkuk opens with accusation and does not resolve quickly — God’s first answer makes the prophet more troubled, not less. What is notable is the form: the book is a dialogue, and Habakkuk keeps returning with further objections. He takes up a watchpost specifically to wait for God’s reply. By chapter 3 he arrives at trust, but the famous ending — though the fig tree does not blossom, yet I will rejoice — comes after he has stated plainly that nothing has improved. Faith here is not the absence of the complaint. It is what remains after the complaint has been fully voiced.',
        application: [
          'Bring the objection instead of leaving quietly. Habakkuk stayed and argued.',
          'Notice whether you expect faith to mean feeling settled. Habakkuk 3 says otherwise.',
          'Wait for an answer rather than assuming the silence is final.',
        ],
        reflection:
          'What question drove you away? What would it look like to bring it back rather than carry it alone?',
        practice:
          'Read Habakkuk 3:17-19 this week. Note what has and has not changed by the end.',
        quiz: {
          question: 'What is significant about how Habakkuk ends?',
          options: [
            {
              label: 'He arrives at trust while stating plainly that circumstances have not improved',
              correct: true,
              feedback:
                'Right. The fig tree does not blossom — nothing is resolved externally, yet he chooses rejoicing.',
            },
            {
              label: 'God removes all his difficulties',
              correct: false,
              feedback:
                'Chapter 3 explicitly describes failed crops and empty folds. Nothing was fixed.',
            },
            {
              label: 'He stops believing in God',
              correct: false,
              feedback:
                'The book ends in worship, reached through the argument rather than by abandoning it.',
            },
          ],
        },
      },
    ],
  },
  {
    // UNVERIFIED SCRIPTURE - check before launch: Matthew 23:4, Psalm 55:12-14, Romans 12:18, John 10:14
    slug: 'when-church-people-hurt-you',
    category: 'Returning',
    icon: 'ShieldCheck',
    title: 'When Church People Hurt You',
    summary:
      'Separating God from the people who misrepresented him, and deciding what to do next.',
    stages: [STAGES.BACK],
    duration: '4 lessons · ~25 min',
    lessons: [
      {
        title: 'Jesus Said It First',
        verse: {
          ref: 'Matthew 23:4',
          text:
            'For they bind heavy burdens that are grievous to be borne, and lay them on men’s shoulders; but they themselves will not lift a finger to help them.',
        },
        teaching:
          'If you were crushed by religious expectation, you are not the first to name it. Jesus named it, publicly and sharply, about the religious leaders of his own day.',
        exposition:
          'Matthew 23 is the harshest sustained criticism Jesus offers anyone, and it is aimed at religious authorities rather than at sinners or outsiders. The image is of loading a pack animal — burdens bound and placed on shoulders by people who will not carry any weight themselves. The specific charge is hypocrisy paired with cruelty: the standard is imposed but not shared. This matters for anyone hurt by a church, because it establishes that misuse of religious authority is not a modern complaint. Jesus treats it as serious enough to confront directly.',
        application: [
          'Name the specific burden that was placed on you. Distinguish it from what God actually asks.',
          'Notice when guilt you carry originated with a person rather than with God.',
          'Read Matthew 23 and observe who Jesus is angry at.',
        ],
        reflection:
          'What did you carry because a person said God required it? Does Scripture actually require it?',
        practice:
          'List three expectations you absorbed from church. Check each against Scripture this week.',
        quiz: {
          question: 'Who is Jesus criticising in Matthew 23?',
          options: [
            {
              label: 'Religious leaders who imposed burdens they would not carry',
              correct: true,
              feedback:
                'Right. His sharpest sustained criticism is aimed at religious authorities, not at outsiders or sinners.',
            },
            {
              label: 'People who struggled to keep the law',
              correct: false,
              feedback:
                'They are the ones being burdened. Jesus speaks on their behalf, not against them.',
            },
            {
              label: 'Anyone who questioned religious authority',
              correct: false,
              feedback:
                'Jesus is himself questioning religious authority in this passage.',
            },
          ],
        },
      },
      {
        title: 'It Was Not a Stranger',
        verse: {
          ref: 'Psalm 55:12-14',
          text:
            'For it was not an enemy who insulted me, then I could have endured it. Neither was it he who hated me who raised himself up against me, then I would have hidden myself from him. But it was you, a man like me, my companion, and my familiar friend. We took sweet fellowship together. We walked in God’s house with company.',
        },
        teaching:
          'Betrayal by someone you worshipped alongside is a specific kind of wound, and Scripture treats it as such rather than minimising it.',
        exposition:
          'David distinguishes carefully between kinds of injury. An enemy’s attack could be endured; a hater could be avoided. What he cannot process is that this came from a companion — and note the detail that they walked in God’s house together. The betrayal is located specifically in a shared religious life. The psalm does not rush past this to a lesson. It sits in the particularity of the pain, naming the closeness that made it possible. That precision is itself pastoral: some wounds are worse because of who inflicted them, and pretending otherwise helps no one.',
        application: [
          'Name the specific person rather than blaming "the church" in general.',
          'Allow the wound to be as significant as it actually was.',
          'Notice if you have been told to get over it faster than is reasonable.',
        ],
        reflection:
          'Who specifically hurt you? What made it worse than the same act from a stranger?',
        practice:
          'Write down what happened in plain factual language. No spiritualising, no minimising.',
        quiz: {
          question: 'Why does David say the betrayal was harder than an enemy’s attack?',
          options: [
            {
              label: 'Because it came from a companion he worshipped alongside',
              correct: true,
              feedback:
                'Right. He names the shared closeness — they walked in God’s house together — as what makes it unbearable.',
            },
            {
              label: 'Because the enemy was stronger',
              correct: false,
              feedback:
                'Strength is not the issue. He says he could have endured an enemy.',
            },
            {
              label: 'Because he had no other friends',
              correct: false,
              feedback:
                'The psalm points to the intimacy of this particular relationship, not to isolation.',
            },
          ],
        },
      },
      {
        title: 'As Much As Depends On You',
        verse: {
          ref: 'Romans 12:18',
          text:
            'If it is possible, as much as it is up to you, be at peace with all men.',
        },
        teaching:
          'Paul builds two qualifications into one short verse. Peace is the aim, but he acknowledges plainly that it is not always achievable and not always yours to achieve.',
        exposition:
          'Paul is writing practical instruction to believers in Rome about life together. The two conditions are deliberate: "if it is possible" concedes that sometimes it is not, and "as much as it is up to you" limits your responsibility to your own conduct. Reconciliation requires two parties; you control one. This is often read as a command to restore every relationship, which the verse does not say. Paul is describing a posture — do not be the obstacle — rather than guaranteeing an outcome. For someone hurt by a church, that distinction matters: you are not failing if the other party will not move.',
        application: [
          'Distinguish between forgiving someone and returning to the same situation.',
          'Identify what is genuinely up to you, and stop carrying the rest.',
          'Notice if you have been told reconciliation is required regardless of the other person’s conduct.',
        ],
        reflection:
          'What have you held yourself responsible for that was never actually up to you?',
        practice:
          'Name one relationship where you have done your part. Practise letting the rest go.',
        quiz: {
          question: 'What do Paul’s two qualifications acknowledge?',
          options: [
            {
              label: 'That peace is not always possible, and only your own conduct is yours to control',
              correct: true,
              feedback:
                'Right. "If it is possible" and "as much as it is up to you" both limit the scope of the instruction.',
            },
            {
              label: 'That believers must restore every broken relationship',
              correct: false,
              feedback:
                'The qualifications say the opposite — Paul concedes it may not be possible.',
            },
            {
              label: 'That peace does not really matter',
              correct: false,
              feedback:
                'Peace is clearly the aim. Paul simply refuses to make you responsible for another person’s choices.',
            },
          ],
        },
      },
      {
        title: 'The Shepherd, Not the Sheep',
        verse: {
          ref: 'John 10:14',
          text:
            'I am the good shepherd. I know my own, and I’m known by my own;',
        },
        teaching:
          'People who represented God badly are not God. Reattaching to Jesus directly, rather than through the people who hurt you, is the way back.',
        exposition:
          'Jesus says this in a chapter contrasting himself with those who came before — thieves, hirelings, people who scatter the flock rather than protect it. The context is explicitly about bad shepherding. He does not deny that harmful leaders exist; the whole passage assumes them. What he offers instead is direct mutual knowledge: I know my own, and I am known by my own. The relationship described bypasses intermediaries. Later in the chapter he says no one can snatch them out of his hand, which addresses the fear that someone else’s failure could cost you your standing.',
        application: [
          'Separate what a person said about God from what God says about himself.',
          'Go directly to Scripture rather than relying on someone else’s summary.',
          'Notice that Jesus assumes bad shepherds exist. You are not being disloyal by naming one.',
        ],
        reflection:
          'What did you believe about God that you actually learned from a person rather than from Scripture?',
        practice:
          'Read John 10:1-18 this week. Note everything Jesus says about how bad shepherds behave.',
        quiz: {
          question: 'What does Jesus offer as the alternative to bad shepherding?',
          options: [
            {
              label: 'Direct mutual knowledge between himself and his own',
              correct: true,
              feedback:
                'Right. He describes a relationship that bypasses intermediaries — I know my own, and I am known by my own.',
            },
            {
              label: 'A better religious institution',
              correct: false,
              feedback:
                'He points to himself, not to an improved structure.',
            },
            {
              label: 'A promise that no leader will ever fail again',
              correct: false,
              feedback:
                'The chapter assumes harmful shepherds exist. He offers himself in contrast, not their elimination.',
            },
          ],
        },
      },
    ],
  },
  {
    // UNVERIFIED SCRIPTURE - check before launch: Romans 12:2, Philippians 4:8, 2 Corinthians 10:5, Colossians 3:2
    slug: 'renewing-your-mind',
    category: 'Spiritual Growth',
    icon: 'Brain',
    title: 'Renewing Your Mind',
    summary:
      'How thought patterns actually change, and why willpower alone has not worked.',
    stages: [STAGES.DEEPER],
    duration: '4 lessons · ~25 min',
    lessons: [
      {
        title: 'Transformed, Not Pressured',
        verse: {
          ref: 'Romans 12:2',
          text:
            'Don’t be conformed to this world, but be transformed by the renewing of your mind, so that you may prove what is the good, well-pleasing, and perfect will of God.',
        },
        teaching:
          'Paul contrasts two forces acting on you. One presses you into a shape from the outside; the other changes you from the inside. Trying harder is not what he prescribes.',
        exposition:
          'Paul writes this at the turn from doctrine to practice in Romans. The two verbs are both passive — do not be conformed, be transformed — meaning neither is something you accomplish by effort alone. Conformed suggests being pressed into an external mould; the word behind transformed is metamorphoo, the same root as metamorphosis, describing change that works outward from within. The mechanism given is the renewing of the mind, not increased willpower. And the stated result is discernment: you become able to recognise God’s will, which implies clearer thinking rather than merely better behaviour.',
        application: [
          'Identify one belief you hold that came from culture rather than Scripture.',
          'Notice where you are applying willpower to something that needs a changed belief.',
          'Ask what you would have to believe for a desired change to become natural.',
        ],
        reflection:
          'What behaviour have you tried to force without addressing the belief underneath it?',
        practice:
          'Name one recurring thought this week. Trace where you first learned it.',
        quiz: {
          question: 'What does Paul give as the mechanism for transformation?',
          options: [
            {
              label: 'The renewing of the mind — inward change rather than applied willpower',
              correct: true,
              feedback:
                'Right. The word behind transformed describes change working outward from within, and both verbs are passive.',
            },
            {
              label: 'Stricter self-discipline',
              correct: false,
              feedback:
                'Discipline is not mentioned here. Paul points to renewed thinking.',
            },
            {
              label: 'Avoiding all contact with the world',
              correct: false,
              feedback:
                'The instruction is not to be conformed to it, which is about shaping influence rather than isolation.',
            },
          ],
        },
      },
      {
        title: 'Choosing What Gets Attention',
        verse: {
          ref: 'Philippians 4:8',
          text:
            'Finally, brothers, whatever things are true, whatever things are honorable, whatever things are just, whatever things are pure, whatever things are lovely, whatever things are of good report: if there is any virtue and if there is anything worthy of praise, think about these things.',
        },
        teaching:
          'You cannot stop a thought by refusing to think it. Paul does not tell you to empty your mind — he tells you what to fill it with, which is a different instruction entirely.',
        exposition:
          'Paul writes this from prison, shortly after telling the Philippians not to be anxious. The list is deliberately broad — true, honourable, just, pure, lovely, of good report — and none of the categories are exclusively religious. The verb translated "think about" carries the sense of considering carefully or taking into account, an active reckoning rather than a passing glance. This is a redirection strategy, not a suppression one. The distinction is practical: attempting not to think about something keeps it in view, whereas occupying attention elsewhere actually displaces it.',
        application: [
          'When a thought loops this week, redirect to something specific rather than trying to stop it.',
          'Audit what you consume in the first and last hour of the day.',
          'Prepare one true thing to turn to before you need it.',
        ],
        reflection:
          'What occupies your attention by default? What would change if you chose deliberately?',
        practice:
          'Choose one item from Paul’s list. Give it deliberate attention once a day this week.',
        quiz: {
          question: 'How does Paul’s instruction differ from thought suppression?',
          options: [
            {
              label: 'He prescribes redirection to specific things rather than avoidance',
              correct: true,
              feedback:
                'Right. The verb means active consideration — attention is occupied rather than emptied.',
            },
            {
              label: 'He tells believers to stop thinking about problems',
              correct: false,
              feedback:
                'No prohibition is given. The instruction is about what to fill attention with.',
            },
            {
              label: 'He says only religious topics are acceptable',
              correct: false,
              feedback:
                'The categories are broad — true, honourable, just, lovely — and not exclusively religious.',
            },
          ],
        },
      },
      {
        title: 'Taking Thoughts Captive',
        verse: {
          ref: '2 Corinthians 10:5',
          text:
            'throwing down imaginations and every high thing that is exalted against the knowledge of God and bringing every thought into captivity to the obedience of Christ,',
        },
        teaching:
          'A thought arriving is not the same as a thought being accepted. Paul describes an interception point between having a thought and believing it.',
        exposition:
          'The imagery throughout this passage is military — strongholds, demolition, taking captives. Paul is describing arguments and reasoning that set themselves up against knowledge of God, which suggests the target is not stray feelings but constructed belief systems. "Bringing into captivity" implies a thought can be examined and subjected rather than automatically obeyed. This is the practical hinge: most people treat their thoughts as reports of reality. Paul treats them as claims requiring assessment, some of which will be found false and dealt with accordingly.',
        application: [
          'When a harsh thought about yourself arrives, ask whether it is true before responding to it.',
          'Write down a recurring accusation and find what Scripture says in reply.',
          'Practise noticing a thought without immediately agreeing with it.',
        ],
        reflection:
          'Which thoughts do you accept automatically without ever testing them?',
        practice:
          'Each day this week, catch one thought and ask: is this actually true?',
        quiz: {
          question: 'What does "bringing every thought into captivity" imply?',
          options: [
            {
              label: 'A thought can be examined and assessed rather than automatically believed',
              correct: true,
              feedback:
                'Right. Taking captive implies interception and subjection — the thought is treated as a claim, not a report.',
            },
            {
              label: 'You should never have negative thoughts',
              correct: false,
              feedback:
                'The passage assumes such thoughts arrive. It addresses what happens next.',
            },
            {
              label: 'Thoughts are unimportant',
              correct: false,
              feedback:
                'The military imagery indicates Paul takes them very seriously.',
            },
          ],
        },
      },
      {
        title: 'Set Your Mind Above',
        verse: {
          ref: 'Colossians 3:2',
          text:
            'Set your mind on the things that are above, not on the things that are on the earth.',
        },
        teaching:
          'This is a deliberate act, not a mood that descends on you. Paul uses a verb of decision, which means it can be done on days when you do not feel like it.',
        exposition:
          'Paul writes to a church facing teaching that added rules and rituals as requirements. The verb translated "set your mind" indicates deliberate orientation of attention — it is an act of will rather than a feeling. The preceding verse says to seek the things above, and the following verses ground this in identity: you died, and your life is hidden with Christ in God. So the instruction is not escapism or ignoring practical life. It is orienting by what is most permanently true when the immediate and visible presses hardest for your attention.',
        application: [
          'Begin one day this week by deciding what will orient your attention.',
          'When circumstances dominate your thinking, name one thing that is more permanently true.',
          'Notice that this is a decision, available even on days you feel nothing.',
        ],
        reflection:
          'What currently sets the terms of your thinking? What would it take to reorient deliberately?',
        practice:
          'Each morning this week, name one eternal truth before checking your phone.',
        quiz: {
          question: 'What kind of action does "set your mind" describe?',
          options: [
            {
              label: 'A deliberate act of will, available regardless of feeling',
              correct: true,
              feedback:
                'Right. The verb indicates deliberate orientation of attention rather than a mood that arrives.',
            },
            {
              label: 'A feeling of spirituality you wait for',
              correct: false,
              feedback:
                'The instruction is imperative — something you do, not something that happens to you.',
            },
            {
              label: 'Ignoring practical responsibilities',
              correct: false,
              feedback:
                'Paul goes on to address work and relationships in this same chapter. This is orientation, not escape.',
            },
          ],
        },
      },
    ],
  },
  {
    // UNVERIFIED SCRIPTURE - check before launch: Ephesians 4:32, Matthew 18:21-22, Romans 12:19, Luke 17:3
    slug: 'forgiveness-that-is-not-pretending',
    category: 'Healing',
    icon: 'Feather',
    title: 'Forgiveness That Is Not Pretending',
    summary:
      'What forgiveness actually requires, what it does not, and where boundaries fit.',
    stages: [STAGES.DEEPER],
    duration: '4 lessons · ~25 min',
    lessons: [
      {
        title: 'The Standard Is What You Received',
        verse: {
          ref: 'Ephesians 4:32',
          text:
            'And be kind to one another, tender hearted, forgiving each other, just as God also in Christ forgave you.',
        },
        teaching:
          'The measure is not what the person deserves. It is what you have already received, which removes the calculation of whether they have earned it.',
        exposition:
          'Paul writes this at the end of a section on how believers treat one another, following instructions about honesty and anger. The comparison — just as God in Christ forgave you — sets the standard outside the offender’s conduct entirely. Note that the word for forgiving here relates to grace, carrying the sense of giving freely rather than settling accounts. This does not describe a transaction where the debt is proven repaid. It describes release. The instruction assumes the offence was real; there would be nothing to forgive otherwise.',
        application: [
          'Stop waiting for the person to earn forgiveness before you release it.',
          'Notice whether you are withholding forgiveness as leverage.',
          'Name what you have been forgiven before deciding what you can forgive.',
        ],
        reflection:
          'Whose forgiveness are you making conditional on their behaviour? What standard does Paul give instead?',
        practice:
          'Write down one thing you are withholding. Ask honestly what you are waiting for.',
        quiz: {
          question: 'What sets the standard for forgiveness in this verse?',
          options: [
            {
              label: 'What the believer has already received from God',
              correct: true,
              feedback:
                'Right. "Just as God also in Christ forgave you" places the standard outside the offender’s conduct.',
            },
            {
              label: 'Whether the offender has apologised properly',
              correct: false,
              feedback:
                'No such condition appears. The comparison is to grace freely given.',
            },
            {
              label: 'The seriousness of the offence',
              correct: false,
              feedback:
                'The instruction does not scale by offence. It scales by what was received.',
            },
          ],
        },
      },
      {
        title: 'Seventy Times Seven',
        verse: {
          ref: 'Matthew 18:21-22',
          text:
            'Then Peter came and said to him, “Lord, how often shall my brother sin against me, and I forgive him? Until seven times?” Jesus said to him, “I don’t tell you until seven times, but, until seventy times seven.',
        },
        teaching:
          'Peter offers a generous number and Jesus makes it absurd. The point is not a higher quota — it is that you were never meant to be counting.',
        exposition:
          'Rabbinic teaching of the period commonly suggested forgiving three times, so Peter’s seven is already generous and he likely expected approval. Jesus’ answer effectively removes the ledger: nobody tracks to four hundred and ninety. The parable that follows makes the reasoning explicit — a servant forgiven an unpayable debt refuses to forgive a small one. The disproportion is the argument. Note this addresses repeated offence, which is where forgiveness gets genuinely hard, and Jesus does not soften it. But the parable concerns debt release, not restored access, which is a distinction the next lesson takes up.',
        application: [
          'Notice if you are keeping a numbered record of a person’s offences.',
          'Distinguish releasing a debt from granting unlimited access.',
          'Read Matthew 18:23-35 and note what the forgiven servant failed to grasp.',
        ],
        reflection:
          'Whose offences are you counting? What would change if you stopped keeping the tally?',
        practice:
          'Identify one relationship where you keep score. Practise letting one item go.',
        quiz: {
          question: 'What is Jesus’ point in answering "seventy times seven"?',
          options: [
            {
              label: 'That forgiveness is not meant to be counted at all',
              correct: true,
              feedback:
                'Right. The number is deliberately impractical — nobody tracks to four hundred and ninety.',
            },
            {
              label: 'That there is a limit at four hundred and ninety',
              correct: false,
              feedback:
                'Treating it as a literal quota reinstates exactly the counting Jesus is dismantling.',
            },
            {
              label: 'That offences do not matter',
              correct: false,
              feedback:
                'The parable that follows treats the debt as real and substantial.',
            },
          ],
        },
      },
      {
        title: 'Vengeance Is Not Your Job',
        verse: {
          ref: 'Romans 12:19',
          text:
            'Don’t seek revenge yourselves, beloved, but give place to God’s wrath. For it is written, “Vengeance belongs to me; I will repay, says the Lord.”',
        },
        teaching:
          'Forgiveness does not mean deciding the offence was acceptable. Paul assumes it was not — he simply reassigns who handles the account.',
        exposition:
          'This sits among Paul’s practical instructions about responding to enemies, immediately before the line about overcoming evil with good. Notice what the verse does not say: it does not say the wrong was minor or that justice is unnecessary. It says vengeance belongs to God, which presumes a real debt requiring real settlement. "Give place" suggests stepping aside so that someone else can act. This is a transfer of responsibility, not a denial of injury. For anyone told forgiveness means pretending nothing happened, this verse says the opposite — something happened, and it will be dealt with by someone better positioned.',
        application: [
          'Stop rehearsing the case you would make against the person.',
          'Name the wrong accurately rather than minimising it, then hand it over.',
          'Notice that letting go is not the same as saying it was fine.',
        ],
        reflection:
          'What are you still trying to settle yourself? What would handing it over actually look like?',
        practice:
          'When the grievance replays this week, say "this is not mine to settle" and move on.',
        quiz: {
          question: 'What does this verse assume about the offence?',
          options: [
            {
              label: 'That it was real and requires justice — just not administered by you',
              correct: true,
              feedback:
                'Right. Vengeance belonging to God presumes a genuine debt that will be settled.',
            },
            {
              label: 'That it was not serious enough to matter',
              correct: false,
              feedback:
                'The verse presumes a real wrong. It reassigns who handles it, not whether it counts.',
            },
            {
              label: 'That justice will never happen',
              correct: false,
              feedback:
                'The quotation explicitly says "I will repay."',
            },
          ],
        },
      },
      {
        title: 'Rebuke, Then Forgive',
        verse: {
          ref: 'Luke 17:3',
          text:
            'Be careful. If your brother sins against you, rebuke him. If he repents, forgive him.',
        },
        teaching:
          'Jesus includes a step most forgiveness teaching skips: say something. Naming the wrong is not a failure of grace, it is part of the instruction.',
        exposition:
          'This appears among short sayings on discipleship, immediately before the disciples ask for increased faith — a reaction suggesting they found the teaching demanding. The sequence is explicit: rebuke, then forgive. The word for rebuke means to speak plainly about a fault, which requires the offence to be named rather than absorbed silently. Jesus is not describing conflict avoidance dressed as forgiveness. He assumes the wrong will be addressed openly. This is why forgiveness and boundaries are not opposites; the same passage that commands release also commands honest confrontation.',
        application: [
          'Say the difficult thing rather than forgiving silently and withdrawing.',
          'Distinguish avoiding conflict from extending grace.',
          'Consider whether unspoken forgiveness has left the relationship dishonest.',
        ],
        reflection:
          'Where have you forgiven silently instead of naming what happened? What did that cost the relationship?',
        practice:
          'Identify one unspoken grievance. Decide whether it needs saying, and to whom.',
        quiz: {
          question: 'What step does Jesus include that is often skipped?',
          options: [
            {
              label: 'Rebuke — naming the wrong plainly before forgiving',
              correct: true,
              feedback:
                'Right. The sequence is explicit, and the word means to speak openly about the fault.',
            },
            {
              label: 'Waiting until you feel ready',
              correct: false,
              feedback:
                'No such condition is given. The instruction concerns speaking, not feeling.',
            },
            {
              label: 'Reporting the offence to leadership',
              correct: false,
              feedback:
                'This verse addresses the person directly. Wider process appears elsewhere, not here.',
            },
          ],
        },
      },
    ],
  },
  {
    // UNVERIFIED SCRIPTURE - check before launch: Galatians 1:10, Matthew 5:37, Mark 6:31, Proverbs 4:23
    slug: 'boundaries-and-people-pleasing',
    category: 'Relationships',
    icon: 'ShieldCheck',
    title: 'Boundaries and People-Pleasing',
    summary:
      'Saying no without guilt, and why constant yes is not the same as love.',
    stages: [STAGES.DEEPER],
    duration: '4 lessons · ~25 min',
    lessons: [
      {
        title: 'You Cannot Serve Both',
        verse: {
          ref: 'Galatians 1:10',
          text:
            'For am I now seeking the favor of men, or of God? Or am I striving to please men? For if I were still pleasing men, I wouldn’t be a servant of Christ.',
        },
        teaching:
          'Paul frames approval-seeking as a competing loyalty, not a personality trait. That reframing is uncomfortable but clarifying.',
        exposition:
          'Paul writes this while defending his message against critics, having just said he would not soften it for anyone. The two options are presented as mutually exclusive at the point where they conflict — he does not say pleasing people is always wrong, but that it cannot be the governing aim. The word for servant is doulos, indicating someone whose obligations are already assigned. The logic is about who holds authority over your decisions. When approval and obedience point different directions, whichever one you follow reveals which one is actually in charge.',
        application: [
          'Identify one decision you made primarily to avoid someone’s disappointment.',
          'Notice the specific person whose approval carries the most weight.',
          'Ask what you would do if their opinion were not a factor.',
        ],
        reflection:
          'Whose approval most shapes your choices? What has that cost you?',
        practice:
          'Make one decision this week without consulting the person you usually consult for permission.',
        quiz: {
          question: 'How does Paul frame people-pleasing here?',
          options: [
            {
              label: 'As a competing loyalty that cannot be the governing aim',
              correct: true,
              feedback:
                'Right. He presents the two as mutually exclusive where they conflict, framing it as a question of authority.',
            },
            {
              label: 'As a harmless personality trait',
              correct: false,
              feedback:
                'Paul treats it as incompatible with being a servant of Christ.',
            },
            {
              label: 'As something only leaders struggle with',
              correct: false,
              feedback:
                'He states it as a general principle, not a leadership-specific issue.',
            },
          ],
        },
      },
      {
        title: 'Let Your Yes Be Yes',
        verse: {
          ref: 'Matthew 5:37',
          text:
            'But let your “Yes” be “Yes” and your “No” be “No.” Whatever is more than these is of the evil one.',
        },
        teaching:
          'A clear no is presented as more honest than an elaborate one. Over-explaining is often an attempt to secure permission rather than communicate a decision.',
        exposition:
          'Jesus says this in the Sermon on the Mount while addressing oath-taking, where people invoked increasingly elaborate guarantees to signal sincerity. His correction is that a truthful person needs no such apparatus — the plain word suffices. Applied to boundaries, the principle cuts against the instinct to soften a refusal with justifications until it sounds negotiable. Notice the standard is simplicity, not harshness. A plain no is not rude; it is clear, and clarity is treated here as the more honest form.',
        application: [
          'Say no once this week without providing a reason.',
          'Notice when your explanation is actually seeking permission.',
          'Practise a complete sentence: "I am not able to do that."',
        ],
        reflection:
          'When did you last say no clearly? What made it difficult?',
        practice:
          'Decline one request this week in a single sentence. Do not elaborate.',
        quiz: {
          question: 'What is the principle behind letting your yes be yes?',
          options: [
            {
              label: 'Plain speech is more honest than elaborate justification',
              correct: true,
              feedback:
                'Right. Jesus was addressing oath-taking, where elaborate guarantees replaced simple truthfulness.',
            },
            {
              label: 'You should never explain your decisions',
              correct: false,
              feedback:
                'Explanation is not forbidden. The point concerns clarity over apparatus meant to persuade.',
            },
            {
              label: 'Saying no is always better than saying yes',
              correct: false,
              feedback:
                'Both are affirmed. The instruction is that each should be clear.',
            },
          ],
        },
      },
      {
        title: 'Jesus Withdrew',
        verse: {
          ref: 'Mark 6:31',
          text:
            'He said to them, “You come apart into a deserted place, and rest awhile.” For there were many coming and going, and they had no leisure so much as to eat.',
        },
        teaching:
          'The demand was real and the need was genuine. Jesus still instructed rest. Withdrawal was not a failure of compassion.',
        exposition:
          'This follows the disciples returning from ministry, and precedes the feeding of the five thousand — so Jesus is not withdrawing because the work was finished. Mark notes the specific pressure: so many coming and going that they could not even eat. The instruction is to a deserted place, deliberately away from access. Elsewhere Mark records Jesus leaving crowds who were still seeking him. The pattern matters for anyone who believes availability is the same as faithfulness: the person with the greatest capacity to help still set limits on access, and treated that as necessary rather than selfish.',
        application: [
          'Schedule one period this week where you are unavailable.',
          'Notice whether you equate being needed with being faithful.',
          'Eat a meal without your phone within reach.',
        ],
        reflection:
          'When did you last rest without justifying it? What do you believe rest says about you?',
        practice:
          'Block two hours this week with no obligations. Do not fill them productively.',
        quiz: {
          question: 'What does this passage indicate about limits on availability?',
          options: [
            {
              label: 'Even with real need present, withdrawal for rest was instructed',
              correct: true,
              feedback:
                'Right. The crowds were still coming, and the feeding of the five thousand follows — the work was not finished.',
            },
            {
              label: 'Rest is only permitted once all work is complete',
              correct: false,
              feedback:
                'The pressing need continued. Jesus instructed rest anyway.',
            },
            {
              label: 'The disciples were being disobedient by resting',
              correct: false,
              feedback:
                'Jesus initiated it. The instruction came from him.',
            },
          ],
        },
      },
      {
        title: 'Guard Your Heart',
        verse: {
          ref: 'Proverbs 4:23',
          text:
            'Keep your heart with all diligence, for out of it is the wellspring of life.',
        },
        teaching:
          'This is commonly quoted about romance, but the instruction is broader and more practical: what you allow access to your inner life shapes everything downstream.',
        exposition:
          'The proverb sits in a father’s instruction to a son, surrounded by sayings about attention, speech and direction. The word translated "keep" carries the sense of guarding a post, an active watch rather than passive protection. The reasoning given is causal — out of the heart flows life, so what enters determines what emerges. This provides a rationale for boundaries that is not self-protective but stewardship-based: limiting access is not about withdrawal from people, it is about maintaining the source that everything else draws from.',
        application: [
          'Identify one relationship or input that consistently leaves you depleted.',
          'Notice what you absorb without deciding to.',
          'Treat limiting access as maintenance, not rejection.',
        ],
        reflection:
          'What has unrestricted access to your inner life? Did you choose that, or did it simply happen?',
        practice:
          'Name one input to reduce this week. Reduce it and observe the difference.',
        quiz: {
          question: 'What rationale does the proverb give for guarding the heart?',
          options: [
            {
              label: 'What flows out of it shapes everything, so the source needs maintaining',
              correct: true,
              feedback:
                'Right. The reasoning is causal — out of it is the wellspring of life.',
            },
            {
              label: 'People cannot be trusted',
              correct: false,
              feedback:
                'The proverb addresses stewardship of the heart, not suspicion of others.',
            },
            {
              label: 'It refers only to romantic relationships',
              correct: false,
              feedback:
                'The surrounding sayings concern attention, speech and direction generally.',
            },
          ],
        },
      },
    ],
  },
  {
    // UNVERIFIED SCRIPTURE - check before launch: Romans 12:6, 1 Peter 4:10, 1 Corinthians 12:7, Exodus 31:3
    slug: 'discovering-your-gifts',
    category: 'Purpose Finding',
    icon: 'Gift',
    title: 'Discovering Your Gifts',
    summary:
      'How to identify what you were actually given, without waiting for a dramatic sign.',
    stages: [STAGES.PURPOSE],
    duration: '4 lessons · ~25 min',
    lessons: [
      {
        title: 'Different Gifts, Same Source',
        verse: {
          ref: 'Romans 12:6',
          text:
            'Having gifts differing according to the grace that was given to us: if prophecy, let’s prophesy according to the proportion of our faith;',
        },
        teaching:
          'Difference is the design, not a ranking. Paul introduces gifts by establishing that variation is expected before naming any of them.',
        exposition:
          'Paul writes this immediately after describing believers as one body with many members, each having different function. The word for gifts is charismata, built on the word for grace — these are given rather than achieved. "According to the grace that was given" ties the gift to God’s distribution rather than personal merit or effort. Notice Paul does not instruct anyone to acquire a different gift than the one received. The instruction attached is to use it according to the proportion given, which assumes the appropriate response is exercise rather than upgrade.',
        application: [
          'List three things you do that others seem to find harder than you do.',
          'Notice if you have been trying to develop a gift you admire in someone else.',
          'Ask two people what they think you are good at.',
        ],
        reflection:
          'What have you dismissed as "just something I do" that others actually find unusual?',
        practice:
          'Ask three people this week what they see you doing well. Write down the answers.',
        quiz: {
          question: 'What does the word behind "gifts" indicate?',
          options: [
            {
              label: 'They are given by grace rather than achieved',
              correct: true,
              feedback:
                'Right. Charismata is built on the word for grace, and Paul ties them to the grace given to us.',
            },
            {
              label: 'They must be earned through spiritual discipline',
              correct: false,
              feedback:
                'The term indicates something given. Paul attributes distribution to God.',
            },
            {
              label: 'Only leaders receive them',
              correct: false,
              feedback:
                'Paul addresses the whole body, with each member having differing function.',
            },
          ],
        },
      },
      {
        title: 'Given to Be Given Away',
        verse: {
          ref: '1 Peter 4:10',
          text:
            'As each has received a gift, employ it in serving one another, as good managers of the grace of God in its various forms.',
        },
        teaching:
          'The gift was never primarily for you. Peter frames it as something entrusted for others, which changes how you evaluate whether you are using it well.',
        exposition:
          'Peter writes to scattered believers under pressure, urging practical love. The word translated "managers" is oikonomos — a household steward who administered resources belonging to someone else. That framing is significant: a steward is not judged by whether they enjoyed the resource but by whether they administered it faithfully. "As each has received" leaves no one out, which removes the question of whether you have a gift at all. The variety is described as grace in its various forms, so difference is presented as fullness rather than inequality.',
        application: [
          'Use one ability this week specifically for someone else’s benefit.',
          'Notice if you evaluate your gifts by recognition rather than usefulness.',
          'Ask who in your life actually needs what you are able to do.',
        ],
        reflection:
          'What are you good at that you have never deliberately used for someone else?',
        practice:
          'Do one thing this week using your strongest ability, for someone who cannot repay it.',
        quiz: {
          question: 'What does the steward image imply about gifts?',
          options: [
            {
              label: 'They are administered on behalf of someone else, not owned',
              correct: true,
              feedback:
                'Right. An oikonomos managed a household’s resources belonging to another, judged on faithfulness.',
            },
            {
              label: 'They should be kept safe and unused',
              correct: false,
              feedback:
                'Peter instructs employing the gift in serving, not preserving it.',
            },
            {
              label: 'Only some believers receive them',
              correct: false,
              feedback:
                'As each has received — the phrasing includes everyone.',
            },
          ],
        },
      },
      {
        title: 'For the Common Good',
        verse: {
          ref: '1 Corinthians 12:7',
          text:
            'But to each one is given the manifestation of the Spirit for the profit of all.',
        },
        teaching:
          'The test of a gift is not how it feels to exercise but whether it benefits others. Paul gives a criterion that is measurable outside your own experience.',
        exposition:
          'Paul writes to a church where certain gifts had become status markers and worship had turned competitive. His correction runs through the chapter: to each one, meaning distribution is universal, and for the profit of all, meaning the purpose is communal. That criterion cuts against ranking gifts by visibility. A quiet, unnoticed contribution that benefits people meets the standard exactly. Paul goes on to argue that the parts of the body which seem weaker are indispensable, which inverts the assumptions the Corinthians were operating with.',
        application: [
          'Evaluate one thing you do by asking who actually benefits.',
          'Notice whether you value visible contributions over quiet ones.',
          'Name someone whose unnoticed work makes your life function.',
        ],
        reflection:
          'Which contributions do you consider unimportant because nobody sees them?',
        practice:
          'Thank one person this week for something they do that usually goes unnoticed.',
        quiz: {
          question: 'What criterion does Paul give for the purpose of gifts?',
          options: [
            {
              label: 'The profit of all — benefit to others rather than personal experience',
              correct: true,
              feedback:
                'Right. Paul was correcting a church where gifts had become status markers.',
            },
            {
              label: 'The visibility of the gift',
              correct: false,
              feedback:
                'Paul argues the opposite, calling seemingly weaker parts indispensable.',
            },
            {
              label: 'The intensity of feeling it produces',
              correct: false,
              feedback:
                'No experiential test is offered. The measure is communal benefit.',
            },
          ],
        },
      },
      {
        title: 'Filled With Skill',
        verse: {
          ref: 'Exodus 31:3',
          text:
            'I have filled him with the Spirit of God, in wisdom, and in understanding, and in knowledge, and in all kinds of workmanship,',
        },
        teaching:
          'The first person Scripture describes as filled with the Spirit was a craftsman, and the filling was for skilled work with materials. Practical ability is not a lesser category of gifting.',
        exposition:
          'This concerns Bezalel, appointed to construct the tabernacle. The gifting is specified as wisdom, understanding, knowledge and all kinds of workmanship — the following verses mention metalwork, stonecutting and carpentry. This is the earliest such filling recorded, and it is for artistry and craft rather than preaching. That placement matters for anyone who assumes only overtly religious abilities count as spiritual gifts. The design work of the tabernacle was treated as requiring divine enablement, and the skill itself is described as the gift.',
        application: [
          'Stop dividing your abilities into spiritual and ordinary categories.',
          'Consider whether a practical skill you have is actually the gift.',
          'Do one piece of ordinary work this week with deliberate care.',
        ],
        reflection:
          'Which of your abilities have you assumed do not count as spiritual? On what basis?',
        practice:
          'Take one practical task this week and do it as carefully as you would something sacred.',
        quiz: {
          question: 'Why is Bezalel’s gifting notable?',
          options: [
            {
              label: 'The earliest recorded filling with the Spirit was for craftsmanship',
              correct: true,
              feedback:
                'Right. The gifting is specified as workmanship — metalwork, stonecutting, carpentry — not preaching.',
            },
            {
              label: 'He was a priest',
              correct: false,
              feedback:
                'He was a craftsman appointed to construct the tabernacle.',
            },
            {
              label: 'It shows practical skills are less spiritual',
              correct: false,
              feedback:
                'The passage indicates the opposite — the skill itself is described as the filling.',
            },
          ],
        },
      },
    ],
  },
  {
    // UNVERIFIED SCRIPTURE - check before launch: Colossians 3:23, 1 Corinthians 7:17, Acts 18:3, Ephesians 2:10
    slug: 'calling-versus-career',
    category: 'Purpose Finding',
    icon: 'Briefcase',
    title: 'Calling Versus Career',
    summary:
      'Your job is not your calling, and your calling does not require quitting your job.',
    stages: [STAGES.PURPOSE],
    duration: '4 lessons · ~25 min',
    lessons: [
      {
        title: 'Whatever You Do',
        verse: {
          ref: 'Colossians 3:23',
          text:
            'And whatever you do, work heartily, as for the Lord, and not for men,',
        },
        teaching:
          'The verse does not sort work into sacred and secular. It changes who you understand yourself to be working for, which applies to every kind of work equally.',
        exposition:
          'Paul writes this in a section addressed largely to household servants, people with little control over their labour and no expectation that it was meaningful. That audience matters — this is not advice for people with fulfilling careers. "Whatever you do" is deliberately unrestricted. The redirection is about the recipient of the work rather than its content: as for the Lord, not for men. For anyone waiting to find meaningful work before working meaningfully, Paul reverses the order. The meaning attaches through the orientation, not the job description.',
        application: [
          'Do one ordinary task this week deliberately as work offered to God.',
          'Notice if you are waiting for meaningful work before working well.',
          'Ask whether your job needs to change or your framing does.',
        ],
        reflection:
          'What work do you consider beneath being done well? What changes if it is offered to God?',
        practice:
          'Choose your least favourite recurring task. Do it carefully once this week.',
        quiz: {
          question: 'Who was Paul originally addressing in this passage?',
          options: [
            {
              label: 'Household servants with little control over their work',
              correct: true,
              feedback:
                'Right. That audience makes the instruction striking — it is not advice for people with fulfilling careers.',
            },
            {
              label: 'Church leaders and ministers',
              correct: false,
              feedback:
                'The surrounding instructions address household relationships, including servants.',
            },
            {
              label: 'Business owners',
              correct: false,
              feedback:
                'Masters are addressed separately in the following verse; this instruction targets servants.',
            },
          ],
        },
      },
      {
        title: 'Stay Where You Are Called',
        verse: {
          ref: '1 Corinthians 7:17',
          text:
            'Only, as the Lord has distributed to each man, as God has called each, so let him walk. So I command in all the assemblies.',
        },
        teaching:
          'Paul’s default counsel is continuity, not upheaval. Faithfulness usually begins where you already are rather than requiring relocation.',
        exposition:
          'Paul repeats this principle three times in the surrounding verses, applying it to circumcision and to slavery — matters of significant social identity. The context is a church asking whether becoming a Christian required changing external circumstances. His answer is generally no. He does allow for change where possible, but the governing instruction is to walk as called, where called. This is not a prohibition on ever moving. It removes the assumption that spiritual seriousness must express itself through dramatic external change.',
        application: [
          'Ask what faithfulness looks like in your current situation before considering leaving it.',
          'Notice whether restlessness is being read as a call.',
          'Identify one thing you could do well where you already are.',
        ],
        reflection:
          'Are you looking for a new situation, or avoiding what faithfulness requires in this one?',
        practice:
          'Name one thing you would do if you knew you were staying. Do it this week.',
        quiz: {
          question: 'What is Paul’s general counsel about external circumstances?',
          options: [
            {
              label: 'Walk as called, where called — continuity rather than upheaval',
              correct: true,
              feedback:
                'Right. He repeats the principle three times, applying it to significant social circumstances.',
            },
            {
              label: 'Believers must leave secular work',
              correct: false,
              feedback:
                'He counsels the opposite, telling people to remain in their situation.',
            },
            {
              label: 'Circumstances can never change',
              correct: false,
              feedback:
                'Paul allows for change where possible; he simply removes it as a requirement.',
            },
          ],
        },
      },
      {
        title: 'Paul Made Tents',
        verse: {
          ref: 'Acts 18:3',
          text:
            'and because he practiced the same trade, he lived with them and worked, for by trade they were tent makers.',
        },
        teaching:
          'The apostle who wrote much of the New Testament had a trade and worked at it. Ministry and employment coexisted rather than competing.',
        exposition:
          'Luke mentions this while describing Paul’s time in Corinth with Aquila and Priscilla. Tentmaking was manual labour, likely working with leather and coarse cloth. Paul refers elsewhere to working with his own hands so as not to burden the churches. Notice that Luke records it without apology or explanation — there is no suggestion that the trade represented a compromise or a fallback. The relationships formed through shared work also became significant; Aquila and Priscilla appear repeatedly afterwards. The trade was not separate from the calling; it carried it.',
        application: [
          'Notice who you have access to through your work that you would not otherwise meet.',
          'Stop treating your job as an obstacle to your calling.',
          'Consider what your workplace makes possible rather than what it prevents.',
        ],
        reflection:
          'Who do you have access to because of your job? What might that access be for?',
        practice:
          'Name three people you know only through work. Consider what you could offer them.',
        quiz: {
          question: 'How does Luke present Paul’s trade?',
          options: [
            {
              label: 'Without apology — the work carried the calling rather than competing with it',
              correct: true,
              feedback:
                'Right. Luke records it plainly, and the relationships formed through the work became significant.',
            },
            {
              label: 'As a failure to trust God for provision',
              correct: false,
              feedback:
                'No such judgement appears. Paul elsewhere describes it as avoiding burdening the churches.',
            },
            {
              label: 'As a temporary arrangement he regretted',
              correct: false,
              feedback:
                'Paul refers to working with his own hands as a settled practice.',
            },
          ],
        },
      },
      {
        title: 'Prepared Beforehand',
        verse: {
          ref: 'Ephesians 2:10',
          text:
            'For we are his workmanship, created in Christ Jesus for good works, which God prepared before that we would walk in them.',
        },
        teaching:
          'The works were prepared before you were. That reframes calling from something you must invent into something you discover as you walk.',
        exposition:
          'This follows immediately after Paul’s statement that salvation is not of works, which makes the placement deliberate: works are not the cause of salvation but its purpose. The word translated workmanship is poiema, from which we get poem — a made thing, crafted with intention. "Prepared before" indicates the works were readied in advance. The image is of walking into something already laid out rather than constructing a purpose from scratch. That takes the pressure off finding a calling, and puts it on paying attention to what is already in front of you.',
        application: [
          'Notice one need in front of you this week rather than searching for a grand purpose.',
          'Stop treating calling as something you must invent.',
          'Do the obvious good thing available today.',
        ],
        reflection:
          'What good work is already in front of you that you have been overlooking while searching for something bigger?',
        practice:
          'Identify one need you are positioned to meet this week. Meet it.',
        quiz: {
          question: 'What does "prepared before" suggest about calling?',
          options: [
            {
              label: 'The works were readied in advance, to be discovered rather than invented',
              correct: true,
              feedback:
                'Right. The image is of walking into something already laid out, which shifts the task to attentiveness.',
            },
            {
              label: 'That your choices do not matter',
              correct: false,
              feedback:
                'You are still told to walk in them — participation is assumed.',
            },
            {
              label: 'That good works earn salvation',
              correct: false,
              feedback:
                'The preceding verses say the opposite. Works are the purpose, not the cause.',
            },
          ],
        },
      },
    ],
  },
  {
    // UNVERIFIED SCRIPTURE - check before launch: 1 Timothy 4:12, Jeremiah 1:6-7, Exodus 4:10, Judges 6:15
    slug: 'leading-before-you-feel-ready',
    category: 'Purpose Finding',
    icon: 'Flag',
    title: 'Leading Before You Feel Ready',
    summary:
      'On youth, inadequacy, and the gap between being called and feeling qualified.',
    stages: [STAGES.PURPOSE],
    duration: '4 lessons · ~25 min',
    lessons: [
      {
        title: 'Let No One Despise Your Youth',
        verse: {
          ref: '1 Timothy 4:12',
          text:
            'Let no man despise your youth; but be an example to those who believe, in word, in your way of life, in love, in spirit, in faith, and in purity.',
        },
        teaching:
          'Paul does not tell Timothy to wait until he is older. He tells him to make the objection unsustainable by how he lives.',
        exposition:
          'Timothy was leading in Ephesus, a difficult assignment, and was young enough for it to be a live objection. Paul’s response is notable for what it does not do — he does not promise the criticism will stop, nor does he tell Timothy to defer. The strategy is to be an example, and the list that follows is entirely about character and conduct rather than credentials or ability. Speech, way of life, love, faith, purity. None of these require seniority. All of them can be true of someone young, which is precisely the point.',
        application: [
          'Identify one area where you have deferred because of age or inexperience.',
          'Focus on conduct rather than credentials this week.',
          'Notice whether "not ready" means unqualified or just uncomfortable.',
        ],
        reflection:
          'Where are you waiting to be taken seriously? What would change if you focused on the list Paul gives?',
        practice:
          'Choose one item from Paul’s list. Be deliberate about it for a week.',
        quiz: {
          question: 'What is Paul’s strategy for handling the objection to Timothy’s youth?',
          options: [
            {
              label: 'Live in a way that makes the objection unsustainable',
              correct: true,
              feedback:
                'Right. He points to character and conduct — none of which require seniority.',
            },
            {
              label: 'Wait until he is older and more experienced',
              correct: false,
              feedback:
                'Paul explicitly does not counsel deferral.',
            },
            {
              label: 'Assert his authority more forcefully',
              correct: false,
              feedback:
                'The list concerns example and character, not assertion.',
            },
          ],
        },
      },
      {
        title: 'I Am Only a Child',
        verse: {
          ref: 'Jeremiah 1:6-7',
          text:
            'Then I said, “Ah, Lord Yahweh! Behold, I don’t know how to speak; for I am a child.” But Yahweh said to me, “Don’t say, ‘I am a child;’ for you must go to whomever I send you, and whatever I command you, you shall speak.',
        },
        teaching:
          'Jeremiah’s objection was real and God did not accept it. Notice what God addresses — not the accuracy of the self-assessment but its relevance.',
        exposition:
          'This is Jeremiah’s call narrative, and his protest is the standard prophetic response. God’s reply does not argue that Jeremiah is actually experienced or articulate. It reassigns the basis: you must go to whomever I send, and speak whatever I command. The qualification transfers from the speaker to the sender. Immediately after, God touches his mouth and says he has put words there. So the inadequacy is not denied — it is addressed by supply rather than by argument. God says do not say it, which suggests the self-description was becoming a settled identity.',
        application: [
          'Notice the sentence you repeat about your own inadequacy.',
          'Distinguish between being inexperienced and being disqualified.',
          'Say yes to one thing you feel underqualified for.',
        ],
        reflection:
          'What phrase do you use about yourself that has become an excuse rather than a description?',
        practice:
          'Catch yourself saying "I am not the kind of person who..." this week. Stop the sentence.',
        quiz: {
          question: 'How does God respond to Jeremiah’s objection?',
          options: [
            {
              label: 'He does not deny it, but reassigns the basis of qualification',
              correct: true,
              feedback:
                'Right. God does not argue Jeremiah is experienced — he points to who is sending and what will be supplied.',
            },
            {
              label: 'He agrees and postpones the call',
              correct: false,
              feedback:
                'God tells him not to say it and sends him regardless.',
            },
            {
              label: 'He tells Jeremiah to gain experience first',
              correct: false,
              feedback:
                'The commission is immediate, with words supplied rather than earned.',
            },
          ],
        },
      },
      {
        title: 'I Am Not Eloquent',
        verse: {
          ref: 'Exodus 4:10',
          text:
            'Moses said to Yahweh, “Oh, Lord, I am not eloquent, neither before now, nor since you have spoken to your servant; for I am slow of speech, and of a slow tongue.”',
        },
        teaching:
          'Moses argued with God about his qualifications across multiple objections. The conversation is preserved in detail, including God growing angry — and still sending him.',
        exposition:
          'This is the fourth of Moses’ objections, and he raises a fifth after it. God’s reply asks who made the mouth, then promises to be with his mouth and teach him what to say. When Moses still resists, God provides Aaron. That detail is worth noting: the accommodation is given without withdrawing the commission. The narrative preserves both the reluctance and the sending. For anyone who assumes their hesitancy disqualifies them, the record here is of extended argument followed by God working through the person anyway.',
        application: [
          'Name the specific inadequacy you believe disqualifies you.',
          'Ask what help you would need rather than assuming the answer is no.',
          'Notice that Moses received support without losing the assignment.',
        ],
        reflection:
          'What weakness do you treat as disqualifying? What support might address it instead?',
        practice:
          'Name one thing you avoid due to a weakness. Identify one person who could help.',
        quiz: {
          question: 'How does God address Moses’ objection about speech?',
          options: [
            {
              label: 'He promises help and provides Aaron, without withdrawing the commission',
              correct: true,
              feedback:
                'Right. The accommodation is given while the assignment stands.',
            },
            {
              label: 'He agrees Moses is unsuitable and chooses someone else',
              correct: false,
              feedback:
                'Moses remains the one sent throughout.',
            },
            {
              label: 'He removes the speech difficulty entirely',
              correct: false,
              feedback:
                'The text does not describe the difficulty being removed — help is supplied alongside it.',
            },
          ],
        },
      },
      {
        title: 'The Least in My Family',
        verse: {
          ref: 'Judges 6:15',
          text:
            'He said to him, “O Lord, how shall I save Israel? Behold, my family is the poorest in Manasseh, and I am the least in my father’s house.”',
        },
        teaching:
          'Gideon lists his disadvantages in order. The angel had already addressed him as a mighty man of valour — while he was hiding in a winepress.',
        exposition:
          'The greeting precedes the objection: the angel calls Gideon a mighty man of valour while he is threshing wheat in a winepress to conceal it from raiders. The description does not match his circumstances or his self-assessment. Gideon’s reply catalogues his family’s status and his own position within it, both accurate. God’s response does not dispute the facts — it says surely I will be with you. The pattern across these call narratives is consistent: the objection is factually correct and treated as beside the point.',
        application: [
          'Notice how you introduce yourself. What limitation do you lead with?',
          'Consider that God may address you as what you will become.',
          'Act once this week on the description rather than the self-assessment.',
        ],
        reflection:
          'How does God address you compared to how you describe yourself? Which do you act on?',
        practice:
          'Write down how you would describe yourself, and one thing Scripture says. Notice the gap.',
        quiz: {
          question: 'What is notable about the angel’s greeting to Gideon?',
          options: [
            {
              label: 'It describes him as a mighty man of valour while he hides in a winepress',
              correct: true,
              feedback:
                'Right. The description matches neither his circumstances nor his self-assessment.',
            },
            {
              label: 'It confirms Gideon’s assessment of his family',
              correct: false,
              feedback:
                'The greeting contrasts sharply with how Gideon describes himself.',
            },
            {
              label: 'It comes after Gideon proves himself',
              correct: false,
              feedback:
                'It comes first, while he is concealing wheat from raiders.',
            },
          ],
        },
      },
    ],
  },
]

export const getModule = (slug) => modules.find((m) => m.slug === slug)
