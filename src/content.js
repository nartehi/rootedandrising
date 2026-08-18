/**
 * All site copy lives here so wording can be changed without touching components.
 * Text and imagery carried over from the original Base44 build.
 */

export const nav = [
  { label: 'About The Ministry', href: '#/about' },
  { label: 'Women of The Bible', href: '#/women' },
  { label: 'Mission & Values', href: '#/mission-values' },
  { label: 'Resources', href: '#resources' },
]

export const images = {
  logo: '/images/logo/rootedandrisinglogo.png',
  // Web-optimized copy (1200px, 325 KB). The 5.6 MB original from the
  // photographer is kept alongside it as aboutJewel.jpeg.
  founder: '/images/aboutPic/aboutJewel-web.jpeg',
  hero: 'https://media.base44.com/images/public/6a3b767559c67635628a4561/83315ef0e_generated_97099c45.png',
  story: '/images/sections/notalone.jpg',
  mission: 'https://media.base44.com/images/public/6a3b767559c67635628a4561/bd067a4ae_generated_f70c0cf0.png',
  journey: 'https://media.base44.com/images/public/6a3b767559c67635628a4561/c1c23fa5b_generated_ed1a6f87.png',
  resources: 'https://media.base44.com/images/public/6a3b767559c67635628a4561/f134be6bc_generated_d76bb2de.png',
  join: 'https://media.base44.com/images/public/6a3b767559c67635628a4561/f1a4edb70_generated_a115adb7.png',
}

export const hero = {
  eyebrow: 'A Safe Place for young women seeking transformation in Christ.',
  titleTop: 'Rooted in Identity.',
  titleBottom: 'Rising in Purpose.',
  body: '"Rooted and built up in him, and stablished in the faith, as ye have been taught, abounding therein with thanksgiving."',
  bodyCitation: 'Colossians 2:7',
  primaryCta: 'Start Your Journey',
  secondaryCta: 'About The Ministry',
  imageAlt:
    'A young woman looking toward the horizon at golden hour, symbolizing hope and new beginnings',
}

export const story = {
  eyebrow: 'Our Story',
  heading: "Sis, you don't have to walk alone anymore.",
  body: 'This space was created so young adult women can encounter real faith, healing, grace in God, and community while learning who they truly are in Christ.',
  // Second paragraph balances the column against the portrait image beside it.
  bodyTwo:
    'You will not be handed a list of rules or asked to perform. You will be walked with — through the questions you have not said out loud, the parts of your story you have kept quiet, and the slow work of becoming who God already says you are.',
  listLabel: 'What changes when you stop walking alone',
  imageAlt:
    'A young woman walking alongside Jesus on a path at golden hour, no longer walking alone',
  struggles: [
    'Struggling with shame & loneliness',
    'Confused about identity',
    'Unclear how to walk with Christ',
    'Lacking Christian community',
  ],
  outcomes: [
    'Rooted in biblical identity',
    'Freedom from anxiety and fear',
    'Walking in true purpose',
    'Authentic community',
  ],
}

/**
 * Mission & Values page (#/mission-values) — the framing above the two
 * homepage sections, which the page reuses unchanged.
 */
export const missionValues = {
  eyebrow: 'Mission & Values',
  heading: 'What we are for, and what we stand on.',
  intro:
    'The mission is where this ministry is going. The values are what it refuses to compromise on along the way. Both are here in one place.',
  backLabel: 'Back to home',
}

export const mission = {
  eyebrow: 'Mission',
  heading: 'Helping young women',
  body: "To raise a generation of young women who know who they are in Christ, hear God's voice, walk in true freedom, and impact their communities for His glory.",
  imageAlt:
    'Gentle hands touching golden wheat grass in warm sunlight, representing peace and grounding',
  pillars: [
    {
      icon: 'Sprout',
      title: 'Grounding in Identity',
      body: 'Your identity beyond labels and pain',
    },
    {
      icon: 'Heart',
      title: 'Restoration & Freedom',
      body: 'Processing past wounds with grace',
    },
    {
      icon: 'Compass',
      title: 'Walking in Purpose',
      body: 'Impacting your community',
    },
  ],
}

export const values = {
  eyebrow: 'Our Values',
  heading: 'What We Stand On',
  items: [
    {
      icon: 'Sparkles',
      title: 'Christ-Centered',
      body: 'Every conversation, every lesson, every moment of healing begins and ends with Jesus at the center.',
    },
    {
      icon: 'BookOpen',
      title: 'Biblical Truth',
      body: 'Biblical truths about your worth, spoken over the lies that held you back.',
    },
    {
      icon: 'Users',
      title: 'Authentic Community',
      body: 'No masks, no performance. Just real women walking together in vulnerability, grace, and unconditional love.',
    },
    {
      icon: 'TreePine',
      title: 'Sacred Growth',
      body: 'Growth is not instant. We honor the slow, sacred process of becoming who God created you to be.',
    },
  ],
}

export const journey = {
  eyebrow: 'The Journey',
  heading: 'The Growth Path',
  subheading: 'Three phases to becoming who God created you to be.',
  imageAlt:
    'A wildflower growing through cracked earth at sunrise, symbolizing resilience and new beginnings',
  phases: [
    {
      number: '01',
      icon: 'Sprout',
      title: 'Finding Your Identity in Christ',
      body: 'Discover who you truly are in Christ. Uncover the lies that held you back and replace them with God’s truth about your identity and worth.',
      outcomes: [
        'Breaking free from shame cycles',
        'Building a foundation of faith',
        'Growing confidence in Christ',
      ],
    },
    {
      number: '02',
      icon: 'Heart',
      title: 'Healing from Rejection & Shame',
      body: 'Allow God to heal the wounds of heartbreak, rejection, and trauma. Find freedom through grace, vulnerability, and the power of authentic community.',
      outcomes: [
        'Processing past wounds with grace',
        'Healthy boundaries & self-care',
        "Hearing God's guidance clearly",
      ],
    },
    {
      number: '03',
      icon: 'Compass',
      title: 'Walking Boldly in Your Purpose',
      body: 'Step into the calling God has placed on your life. With confidence rooted in Christ, impact your community and world for His glory.',
      outcomes: [
        'Discovering your God-given gifts',
        'Confidence to walk in your calling',
        'Leading with faith and courage',
      ],
    },
  ],
}

export const resources = {
  eyebrow: 'Resources',
  heading: 'The Wisdom Well',
  subheading:
    'Explore faith-rooted content designed to meet you right where you are and guide you forward.',
  imageAlt: 'Resources for your journey',
  stages: {
    label: 'Where are you in your faith journey?',
    options: [
      'Brand new to Christ',
      'Finding my way back',
      'Growing deeper',
      'Walking in purpose',
    ],
  },
  articles: [
    {
      category: 'Identity',
      icon: 'Sparkles',
      title: 'Finding Your Identity in Christ',
      body: 'Biblical truths about your worth that replace the lies you were handed.',
    },
    {
      category: 'Mental Wellness',
      icon: 'Brain',
      title: 'Breaking Free from Anxiety',
      body: 'Faith-rooted strategies for navigating anxiety, fear, and overwhelming thoughts with peace.',
    },
    {
      category: 'Spiritual Growth',
      icon: 'BookOpen',
      title: "How to Hear God's Voice",
      body: "Practical, biblical guidance on discerning God's gentle whisper in the noise of everyday life.",
    },
    {
      category: 'Purpose Finding',
      icon: 'Compass',
      title: 'Discovering Your God-Given Calling',
      body: 'Uncover the unique gifts and purpose that were placed inside you before you were born.',
    },
  ],
}

/**
 * About page — the founder's testimony, in Jewel's own words.
 *
 * The `chapters` bodies are her written testimony, split across the page's
 * four movements. Her wording and first-person voice are preserved; only the
 * paragraph grouping is editorial. Take care to keep it that way when editing.
 */
export const about = {
  eyebrow: 'About The Ministry',
  title: 'About The Ministry',
  intro:
    'Rooted & Rising did not begin as a ministry. It began with one woman’s honest wrestle with God — and what she found on the other side of it. This is Jewel’s story, in her own words.',
  backLabel: 'Back to home',
  imageAlt:
    'Jewel, founder of Rooted & Rising, smiling and holding her Bible in front of the Rooted And Rising Mentoring banner',

  founder: {
    name: 'Jewel',
    role: 'Founder',
    pullQuote:
      'I know what it feels like to build your life around being accepted… and still feel completely unseen.',
  },

  /**
   * Jewel's testimony, told in movements.
   *
   * SCRIPTURE: each `verse` is World English Bible (public domain), reused
   * verbatim from the already-verified passages in modules.js. Follow the same
   * rule as that file if you change one — check the wording against a real
   * source rather than quoting from memory, and note that NIV, ESV and NLT are
   * copyrighted and cannot be embedded freely.
   */
  chapters: [
    {
      eyebrow: 'The beginning',
      heading: 'On the outside, I looked okay.',
      body: 'For a long time, I struggled with rejection, people-pleasing, and constantly trying to be who I thought others needed me to be. On the outside, I looked okay — but internally, I felt lost, insecure, and disconnected from who I really was.',
      verse: {
        ref: 'Jeremiah 1:5',
        text: '“Before I formed you in the womb, I knew you. Before you were born, I sanctified you. I have appointed you a prophet to the nations.”',
      },
    },
    {
      eyebrow: 'The wilderness',
      heading: 'I couldn’t keep pretending anymore.',
      body: 'That led me into some really dark places. I battled with anxiety, wrestled with my identity, and looked for ways to cope and escape. I didn’t know how to deal with what I was feeling, and I didn’t feel safe enough to be honest about it.\n\nThere came a point where I couldn’t keep pretending anymore. I was exhausted — mentally, emotionally, and spiritually.',
      verse: {
        ref: 'Philippians 4:6-7',
        text: 'In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your thoughts in Christ Jesus.',
      },
    },
    {
      eyebrow: 'The turning',
      heading: 'And that’s where everything started to shift.',
      body: 'Not all at once, and not perfectly — but I began to encounter God in a real and personal way. Not just through what I had heard growing up, but through actually experiencing His presence, His truth, and His grace.\n\nHe started showing me that my identity wasn’t something I had to earn or perform for. It wasn’t based on how people saw me, or even how I saw myself — it was rooted in Him.\n\nThe healing didn’t happen overnight. It was a process of unlearning lies, facing pain I had buried, and allowing God to meet me in those places. But over time, I began to experience freedom — real freedom — from shame, from confusion, and from the constant pressure to be someone else.',
      verse: {
        ref: '2 Corinthians 5:17',
        text: 'Therefore if anyone is in Christ, he is a new creation. The old things have passed away. Behold, all things have become new.',
      },
    },
    {
      eyebrow: 'The calling',
      heading: 'And that’s why I created this space.',
      body: 'I’m still growing, but I’m no longer the same person I was.\n\nNot because I have everything figured out, but because I know what it’s like to feel stuck, lost, and unsure of who you are — and I also know what it’s like to begin finding your identity in Christ and walking in freedom.\n\nYou don’t have to stay where you are. There is healing, there is truth, and there is a way forward.',
      verse: {
        ref: 'Isaiah 41:10',
        text: 'Don’t you be afraid, for I am with you. Don’t be dismayed, for I am your God. I will strengthen you. Yes, I will help you. Yes, I will uphold you with the right hand of my righteousness.',
      },
    },
  ],

  // What the ministry is committed to. Safe to keep as-is — these are drawn
  // from the site's existing mission and values, not invented biography.
  convictions: {
    eyebrow: 'What this ministry is',
    heading: 'The promises underneath the work.',
    items: [
      {
        icon: 'Heart',
        title: 'You will not be shamed here',
        body: 'Whatever you are carrying, it will not be met with a lecture. Grace came before the correction in your life, and it comes first here too.',
      },
      {
        icon: 'BookOpen',
        title: 'Scripture over Feelings',
        body: 'Encouragement that is not rooted in God’s word runs out. Everything taught here is anchored in the Bible, not in what merely sounds comforting.',
      },
      {
        icon: 'Users',
        title: 'No performance required',
        body: 'You do not have to arrive healed, well-dressed, or with the right language. Come as you actually are — that is the only version of you this space was built for.',
      },
      {
        icon: 'TreePine',
        title: 'Slow growth is still growth',
        body: 'Becoming who God created you to be is not a weekend event. This ministry honours the long, unglamorous middle of the process.',
      },
    ],
  },

  invitation: {
    heading: 'You are already welcome here.',
    body: 'Wherever you are — brand new to Christ, finding your way back, or quietly holding on — there is a place for you in this sisterhood. You do not have to have it together first.',
    primaryCta: 'Join the Sisterhood',
    secondaryCta: 'Explore the Growth Path',
  },
}

/**
 * Women of The Bible page (#/women).
 *
 * SCRIPTURE: passages are cited by reference rather than quoted, so a reader
 * opens her own Bible in her own translation. The one quoted verse (Esther
 * 4:14) is World English Bible, reused verbatim from the verified text in
 * modules.js. If you add a quotation, follow the rule at the top of that file
 * — verify the wording against a real source rather than typing from memory,
 * and note that NIV, ESV and NLT are copyrighted.
 *
 * NOTE FOR REVIEWERS: `story`, `encouragement` and `lessons` are teaching
 * content drawn from the biblical narrative. Someone in ministry leadership
 * should read these before launch.
 *
 * CARD ARTWORK: each profile takes an optional `image` — a path under
 * public/images/women/, e.g. '/images/women/ruth.jpg'. Until one is set the
 * card falls back to a clay gradient with her initial, which is a deliberate
 * treatment rather than a broken image. Add artwork one woman at a time; no
 * component changes are needed.
 */
export const women = {
  eyebrow: 'Women of The Bible',
  heading: 'She walked it before you.',
  intro:
    'Seven women whose stories are in Scripture — not because their lives were tidy, but because God met them in the middle of waiting, grief, fear, and ordinary days. Read what they carried, and what they can teach you.',
  backLabel: 'Back to home',
  storyLabel: 'Her story',
  encouragementLabel: 'Where you might see yourself',
  lessonsLabel: 'What she teaches',
  readLabel: 'Read it for yourself',
  allWomenLabel: 'All women',
  nextLabel: 'Next:',

  profiles: [
    {
      slug: 'sarah',
      name: 'Sarah',
      image: '/images/women/sarah.jpg',
      title: 'The one who waited longer than she wanted to',
      book: 'Genesis 12–23',
      passages: ['Genesis 18:9-15', 'Genesis 21:1-7'],
      story:
        'Sarah was promised a son and then waited decades for him. She left her homeland on a promise, watched her body age past the point where the promise seemed possible, and at one point tried to arrange the outcome herself through her servant Hagar — a decision that brought lasting pain to her household. When God repeated the promise and she overheard it, she laughed. Not in worship, but in the tiredness of someone who had stopped expecting. She was ninety when Isaac was born, and she named him laughter.',
      encouragement:
        'If you have prayed for something so long that you have started bracing against hope, Sarah is in Scripture for you. Her doubt is recorded plainly — God did not edit it out, and it did not disqualify her. The promise still arrived.',
      lessons: [
        'Waiting is not the same as being forgotten. God kept the promise on His timeline, not on Sarah’s.',
        'Trying to force an outcome usually costs more than waiting would have. Her attempt to help created wounds that outlived her.',
        'God can handle your honest laugh. He answered the doubt without withdrawing the promise.',
      ],
    },
    {
      slug: 'rebekah',
      name: 'Rebekah',
      image: '/images/women/rebekah.jpg',
      title: 'The one who said yes to an unknown road',
      book: 'Genesis 24–27',
      passages: ['Genesis 24:15-27', 'Genesis 24:58'],
      story:
        'Rebekah met a stranger at a well and offered to water his ten camels — an enormous, unglamorous task she volunteered for before she knew who he was or what it would lead to. When her family asked whether she would leave home to marry a man she had never met, she answered in three words: "I will go." Her later story is more complicated. Told that her younger son would be served by the elder, she engineered a deception to secure that outcome — and it fractured her family and cost her the son she favoured.',
      encouragement:
        'Rebekah is proof that a life can hold both real courage and real mistakes. If you have been generous and brave in one season and controlling in another, you are not disqualified from being part of God’s story.',
      lessons: [
        'Character shows in the unglamorous task nobody is watching you do.',
        'Courage often sounds ordinary. "I will go" is a small sentence that changed the direction of her whole life.',
        'A promise from God does not need your manipulation to come true — and forcing it can cost you the very relationship you were protecting.',
      ],
    },
    {
      slug: 'miriam',
      name: 'Miriam',
      image: '/images/women/miriam.jpg',
      title: 'The one who watched, then led',
      book: 'Exodus 2, 15; Numbers 12',
      passages: ['Exodus 2:1-10', 'Exodus 15:20-21'],
      story:
        'Miriam was a girl standing at a distance, watching her baby brother float in a basket on the Nile — and it was her quick thinking that placed him back in his own mother’s arms. Years later, after Israel crossed the sea, she picked up a tambourine and led the women in the first recorded song of victory. She was also, later, disciplined for speaking against Moses’ leadership; the whole camp waited seven days for her before moving on.',
      encouragement:
        'If you feel like the one standing at the edge, watching other people’s lives unfold, Miriam started there too. The girl at the riverbank became the woman leading worship for a whole nation.',
      lessons: [
        'Small, watchful faithfulness matters. A girl paying attention at the right moment changed the course of a nation.',
        'Worship is a legitimate response to deliverance — she led it publicly and without embarrassment.',
        'Jealousy of someone else’s calling damages your own. Her correction was real, but so was the community that waited for her.',
      ],
    },
    {
      slug: 'ruth',
      name: 'Ruth',
      image: '/images/women/ruth.jpg',
      title: 'The one who chose loyalty over the safe option',
      book: 'Ruth 1–4',
      passages: ['Ruth 1:16-17', 'Ruth 2:11-12'],
      story:
        'Ruth was a Moabite widow with every reason to go home to her own family and start again. Instead she bound herself to Naomi, her grieving mother-in-law, with words that are still read at weddings: where you go, I will go. She walked into a country where she was a foreigner, and worked in the fields gathering leftover grain — the provision reserved for the poor. She was noticed there, not for beauty, but because everyone had heard what she had done for Naomi.',
      encouragement:
        'If you are the one holding someone else together while grieving yourself, Ruth’s story says that God sees the loyalty nobody is applauding. She entered Scripture as an outsider and ended up in the family line of Jesus.',
      lessons: [
        'Loyalty is most real when it costs you the easier option.',
        'There is no shame in humble work. She gleaned in the fields and was honoured for it.',
        'Being an outsider does not put you outside God’s story — it is often where He starts.',
      ],
    },
    {
      slug: 'hannah',
      name: 'Hannah',
      image: '/images/women/hannah.jpg',
      title: 'The one who prayed until her face changed',
      book: '1 Samuel 1–2',
      passages: ['1 Samuel 1:9-18', '1 Samuel 2:1-10'],
      story:
        'Hannah wanted a child and could not have one, and she was provoked about it year after year by a woman in her own household. She went to the house of God and prayed so desperately, with her lips moving and no sound coming out, that the priest assumed she was drunk. She told him plainly that she was pouring out her soul. She left before anything had visibly changed — and Scripture notes that her face was no longer sad. When Samuel was born, she gave him back to God’s service.',
      encouragement:
        'If your prayers have become wordless, or you are grieving something you cannot explain to anyone, Hannah prayed exactly like that. And she was not scolded for it. Notice that her countenance lifted before her circumstances did.',
      lessons: [
        'God is not put off by desperate, undignified prayer. Bring the actual thing.',
        'Peace can arrive before the answer does. Something settled in her on the way home.',
        'What she had longed to hold, she held loosely. Her deepest desire did not become her idol.',
      ],
    },
    {
      slug: 'esther',
      name: 'Esther',
      image: '/images/women/esther.jpg',
      title: 'The one who used her position instead of protecting it',
      book: 'Esther 1–10',
      passages: ['Esther 4:12-17', 'Esther 5:1-8'],
      verse: {
        ref: 'Esther 4:14',
        text: 'For if you remain silent now, then relief and deliverance will come to the Jews from another place, but you and your father’s house will perish. Who knows if you haven’t come to the kingdom for such a time as this?',
      },
      story:
        'Esther was an orphaned Jewish girl raised by her cousin, taken into a foreign king’s palace, and told to hide who she was. When a decree was issued to destroy her people, she was the one person positioned to speak — and approaching the king uninvited could have cost her life. She asked for three days of fasting first, then went anyway, saying that if she perished, she perished. She did not blurt it out; she chose her moment carefully and spoke when it would land.',
      encouragement:
        'If you are in a room you did not expect to be in and feel unqualified to speak, Esther’s cousin’s question is for you too: who knows whether you came to this position for exactly this moment?',
      lessons: [
        'Your position is not only for your own comfort. It may exist for someone else’s rescue.',
        'Courage and preparation belong together — she fasted first, then chose her timing with care.',
        'Fear is not the opposite of obedience. She went while still afraid.',
      ],
    },
    {
      slug: 'elizabeth',
      name: 'Elizabeth',
      image: '/images/women/elizabeth.jpg',
      title: 'The one whose season came late',
      book: 'Luke 1',
      passages: ['Luke 1:5-25', 'Luke 1:39-45'],
      story:
        'Elizabeth was righteous before God and blameless in how she lived — and she was still childless into old age, in a culture that treated that as a disgrace she had somehow earned. When the announcement finally came, it came to her husband, and he did not believe it. She conceived, and spent the first five months in seclusion. Later, when her young relative Mary arrived carrying a pregnancy nobody would believe, Elizabeth’s child leapt within her, and she was the first person to speak over Mary with joy instead of suspicion.',
      encouragement:
        'If you have done everything right and life still has not opened up, Elizabeth’s story refuses the idea that delay is a verdict on your faithfulness. Scripture calls her blameless in the same breath as it names what she lacked.',
      lessons: [
        'Waiting is not evidence of failure. She was righteous the entire time she was without.',
        'A late season is still a real season. What God did through her came at the end, not the beginning.',
        'Be the person who celebrates someone else’s news first. Her joy for Mary cost her nothing and steadied a frightened girl.',
      ],
    },
    {
      slug: 'mary-mother-of-jesus',
      name: 'Mary',
      image: '/images/women/mary-mother-of-jesus.jpg',
      // Two women named Mary on this page — the qualifier keeps the cards
      // distinguishable at a glance.
      qualifier: 'Mother of Jesus',
      title: 'The one who said yes before she understood',
      book: 'Luke 1–2; John 19',
      passages: ['Luke 1:26-38', 'Luke 1:46-55', 'John 19:25-27'],
      story:
        'Mary was a young woman in an unremarkable town, engaged and not yet married, when she was told she would carry the Son of God. She asked a real question — how would this happen — and then answered with her whole life: let it be to me according to your word. Saying yes meant risking her engagement, her reputation, and possibly her safety. She responded not with a quiet acceptance but with a song about God overturning the proud and lifting the humble. Scripture says she treasured things up and pondered them in her heart. She was also there at the cross, watching what she had carried as an infant die.',
      encouragement:
        'If God has asked something of you that you cannot explain to the people around you, Mary said yes without knowing how it would work or who would believe her. Obedience did not spare her the hard parts — but she was never alone in them.',
      lessons: [
        'You are allowed to ask how. She questioned the angel and was answered, not rebuked.',
        'Saying yes to God may cost you your reputation before it makes sense to anyone else.',
        'Some things are meant to be pondered rather than announced. She held much of it quietly for years.',
      ],
    },
    {
      slug: 'mary-magdalene',
      name: 'Mary Magdalene',
      image: '/images/women/mary-magdalene.jpg',
      qualifier: 'Follower of Jesus',
      title: 'The one who stayed at the grave',
      book: 'Luke 8; John 20',
      passages: ['Luke 8:1-3', 'John 20:11-18'],
      story:
        'Mary Magdalene was delivered from seven demons and became one of the women who travelled with Jesus and supported His ministry out of their own resources. She was at the cross when most had scattered, and she was at the tomb before sunrise. She stood there weeping, mistook the risen Jesus for the gardener, and only recognised Him when He said her name. He then sent her to tell the others — making her the first person to carry the news of the resurrection.',
      encouragement:
        'Whatever you were before you met Jesus is not the headline of your story. The woman with the worst history in the room was the first one He appeared to, and the first one He trusted with the message.',
      lessons: [
        'Your past does not determine your usefulness. Deliverance was her beginning, not her ceiling.',
        'Staying matters. She was still there when the crowd had gone, and she saw what those who left did not.',
        'Being known by name is the turning point. She did not recognise Him until He spoke to her personally.',
      ],
    },
  ],
}

/**
 * Growth Path page (#/growth-path).
 *
 * Layout follows the reference screenshots: an eyebrow + serif heading, a rail
 * of photo cards with day-count badges, then a detail panel for the selected
 * card. The cards are driven by the real modules in modules.js — `dayLabel` is
 * the only per-module copy that lives here.
 */
export const growthPath = {
  eyebrow: 'The Growth Path',
  heading: 'Lessons for becoming.',
  intro:
    'Short readings you can actually finish. Pick the one that meets you where you are today — nothing here expires, and nothing has to be done in order.',
  backLabel: 'Back to home',
  selectHint: 'Choose a path',
  detailCta: 'Start this path',
  mentorCta: 'Walk through it with a mentor',

  // Keyed by module slug. Pace, not a deadline — worded gently on purpose.
  dayLabels: {
    'identity-in-christ': '7 DAYS',
    'breaking-free-from-anxiety': '5 DAYS',
    'how-to-hear-gods-voice': '7 DAYS',
    'discovering-your-calling': '10 DAYS',
  },
}

/**
 * Account creation page (#/signup).
 *
 * FRONTEND ONLY — there is no backend, no database, and nothing is stored or
 * transmitted. On submit the form simply shows a confirmation state; the
 * values are held in component state and lost on refresh. Wire this up to a
 * real auth/storage provider before telling anyone their account exists.
 */
export const signup = {
  eyebrow: 'Create your account',
  heading: 'Join the Sisterhood',
  body: 'Tell us a little about you so we can walk with you well. Everything here stays between us.',
  backLabel: 'Back to home',

  firstNameLabel: 'First Name',
  firstNamePlaceholder: 'Your first name',
  lastNameLabel: 'Last Name',
  lastNamePlaceholder: 'Your last name',
  ageLabel: 'Age',
  agePlaceholder: 'Select your age range',
  ageOptions: ['16-18', '19-21', '22-25'],
  emailLabel: 'Email Address',
  emailPlaceholder: 'you@example.com',
  cityLabel: 'City',
  cityPlaceholder: 'Where you call home',

  focusLabel: 'What are you seeking most right now?',
  focusPlaceholder: 'Choose what fits you best',
  focusOptions: [
    'Healing',
    'Purpose',
    'Identity',
    'Prayer',
    'Encouragement',
  ],

  cta: 'Create My Account',
  privacyNote:
    'We will never share your details. You can ask us to remove them at any time.',

  successHeading: 'Welcome to the sisterhood, ',
  successBody:
    'Your account is not live just yet — we are still building this part. Keep an eye on your inbox and we will let you know the moment it is ready.',
  successCta: 'Back to home',
}

export const join = {
  eyebrow: 'Connect',
  heading: "Let's stay connected, sis.",
  body: 'Get weekly encouragement, healing resources, Bible studies, and honest faith conversations delivered straight to your inbox.',
  nameLabel: 'Your Name',
  emailLabel: 'Email Address',
  namePlaceholder: 'Your name',
  emailPlaceholder: 'Your email address',
  stageLabel: 'What does your heart need today?',
  cta: 'Join the Sisterhood',
  success: 'Welcome to the sisterhood, ',
  imageAlt:
    'A wildflower growing through cracked earth at sunrise, symbolizing resilience and new beginnings',
}

export const footer = {
  tagline:
    'A sacred sanctuary for young women to find healing, purpose, and sisterhood through faith-based mentorship, grounding them in identity while empowering them to rise.',
  instagram: 'https://instagram.com',
  email: 'hello@rootedandrising.com',
}
