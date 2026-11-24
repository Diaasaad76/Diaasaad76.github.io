/* =========================================================
   Diaa Saad — Portfolio v6
   Crisp portrait → 3D tunnel → synced EN/AR subtitles → workshop menu
   ========================================================= */
(function () {
  'use strict';

  var EMAIL = 'diaa.saad@gmail.com';
  var CV = 'assets/Diaa-Saad-Resume-2026.pdf';
  var PROFILE = 'assets/Diaa-Saad-Corporate-Profile-2026.pdf';
  var LI = 'https://www.linkedin.com/in/diaasaad/';
  var WA = 'https://wa.me/201208882228';
  var REEL_SRC = 'assets/nta-live-1m.mp4';
  var REEL_POSTER = 'assets/photos/nta-video-poster.jpg';

  /* ---------------------------------------------------------
     1. CONTENT (EN / AR)
     --------------------------------------------------------- */
  var T = {
    en: {
      first: 'Diaa', last: 'Saad', sub: 'L&D · Leadership · AI for HR', talk: 'Let’s talk',
      status: 'Available for work · Cairo, Egypt · Remote worldwide',
      h1a: 'I turn', h1b: 'into everyday behaviour.',
      rot: ['leadership', 'AI for HR', 'feedback', 'strategy', 'data'],
      lede: 'I’m <b>Diaa Saad</b> — L&amp;D leader and corporate trainer with <b>10,000+ hours</b> in the room. I design programmes for leaders, trainers and HR teams that still work the Monday after — and now help them put AI to work.',
      cta1: 'Fly through my work', cta1s: 'See my work', ctaReel: '1-min live session', ctaCat: '1-page profile', view1: 'Simple view', view2: 'Animated view', cta2: 'CV',
      roles: ['L&D Leader', 'Corporate Trainer', 'AI for HR', 'Meta-Coach'],
      orgsK: 'Delivered across',
      orgs: ['Orange Egypt', 'National Training Academy', 'Mobinil', 'LINKdotNET', 'SISDEV', 'LHTC'],
      ch1: 'Leadership', ch1s: 'Presence · Communication', ch2: 'AI for HR', ch2s: 'GenAI · Workflows',
      ch3: 'Digital Learning', ch3s: 'Storyline · LMS', ch4: 'Measurement', ch4s: 'Kirkpatrick → L4',
      s1: 'hours delivered', s2: 'years in L&D', s3: 'certifications', s4: 'languages · AR / EN / FR',
      scroll: 'Scroll', next: 'Next:', bookMsg: 'Hi Diaa, I’d like to book a short call about a training / L&D project.', copy: 'Copy', copied: 'Email copied', cv: 'Full CV', cat: '1-page catalogue',
      watchSound: 'Watch with sound · 0:59', bookAi: 'Book AI workshop', bookCourse: 'Request →'
    },
    ar: {
      first: 'ضياء', last: 'سعد', sub: 'تعلّم وتطوير · قيادة · AI للموارد البشرية', talk: 'لنتحدث',
      status: 'متاح للعمل · القاهرة، مصر · عن بُعد حول العالم',
      h1a: 'أحوّل', h1b: 'إلى سلوك يومي في العمل.',
      rot: ['القيادة', 'الذكاء الاصطناعي', 'التغذية الراجعة', 'الاستراتيجية', 'البيانات'],
      lede: 'أنا <b>ضياء سعد</b> — قائد تعلّم وتطوير ومدرّب مؤسسي بأكثر من <b>10,000 ساعة</b> تدريبية. أصمّم برامج للقادة والمدرّبين وفرق الموارد البشرية تظل فعّالة بعد انتهاء التدريب — وأساعدهم الآن على تشغيل الذكاء الاصطناعي في عملهم.',
      cta1: 'تجوّل في أعمالي', cta1s: 'استعرض أعمالي', ctaReel: 'دقيقة من القاعة', ctaCat: 'ملف البرامج (صفحة)', view1: 'عرض مبسّط', view2: 'العرض المتحرك', cta2: 'السيرة الذاتية',
      roles: ['قائد تعلّم وتطوير', 'مدرّب مؤسسي', 'AI للموارد البشرية', 'ميتا-كوتش'],
      orgsK: 'خبرات وبرامج في',
      orgs: ['Orange Egypt', 'الأكاديمية الوطنية للتدريب', 'موبينيل', 'LINKdotNET', 'SISDEV', 'LHTC'],
      ch1: 'القيادة', ch1s: 'الحضور · التواصل', ch2: 'AI للموارد البشرية', ch2s: 'GenAI · تدفقات عمل',
      ch3: 'التعلّم الرقمي', ch3s: 'Storyline · LMS', ch4: 'القياس', ch4s: 'كيركباتريك ← L4',
      s1: 'ساعة تدريبية', s2: 'عامًا في التعلّم والتطوير', s3: 'شهادة احترافية', s4: 'لغات · ع / إن / فر',
      scroll: 'مرّر', next: 'التالي:', bookMsg: 'مرحبًا ضياء، أودّ حجز مكالمة قصيرة بخصوص مشروع تدريب / تعلّم وتطوير.', copy: 'نسخ', copied: 'تم نسخ البريد', cv: 'السيرة الذاتية', cat: 'كتالوج البرامج (PDF)',
      watchSound: 'شاهد بالصوت · 0:59', bookAi: 'اطلب ورشة AI', bookCourse: 'اطلبها ←'
    }
  };

  /* Synced EN/AR subtitles for nta-live-1m.mp4 (works offline on file:// & online) */
  var CUES = {
    en: [
      [0.2, 5.6, '“Compare where I started at Point A with where I am now.”'],
      [5.7, 11.2, 'Exactly — say “I want to become a Department Director.” What’s your name?'],
      [11.3, 18.6, '— “Nahed.”  “Nahed! Got it.”'],
      [23.2, 27.4, 'Wait — are you already a Department Director?  — “I am!”'],
      [27.5, 31.0, 'What’s above you? — “General Manager.” Then that’s the target!'],
      [32.1, 40.2, 'So Point A — where you stand today — is Department Director, with the skills you’ve built here.'],
      [40.3, 45.2, 'Reaching General Manager is the next stage (Point B).'],
      [45.3, 54.3, 'So the real question is: “What concrete steps take me from here to General Manager?”'],
      [54.4, 59.0, 'And that is what we call a milestone goal.']
    ],
    ar: [
      [0.2, 5.6, '«أقارن نفسي بين النقطة الأولى كنت فين ودلوقتي فين.»'],
      [5.7, 11.2, 'بالضبط — لنطبّقها عمليًا: «عايز أكون مدير إدارة». اسم حضرتك إيه؟'],
      [11.3, 18.6, '— «ناهد.»  «ناهد! تمام.»'],
      [23.2, 27.4, 'حضرتك مدير إدارة فعلًا؟  — «مدير إدارة!»'],
      [27.5, 31.0, 'إيه الدرجة اللي فوقيكي؟ — «مدير عام.» إذن هذا هو الهدف!'],
      [32.1, 40.2, 'يبقى النقطة (A) الحالية هي «مدير إدارة» بمهاراتك وعلاقاتك هنا.'],
      [40.3, 45.2, 'والوصول إلى «مدير عام» هو المرحلة التالية (النقطة B).'],
      [45.3, 54.3, 'يبقى السؤال الحقيقي: ما الخطوات المحددة للانتقال من هنا إلى مدير عام؟'],
      [54.4, 59.0, 'وهذا ما نسمّيه «الهدف المرحلي».']
    ]
  };

  /* Interactive Ready-to-Run Corporate Workshop Catalogue (Stop 007) */
  var CATALOGUE = {
    en: [
      { tab: 'AI & Digital', items: [
        { name: 'AI for HR & Talent Teams', meta: '2 days · TA, L&D & HRBPs · JDs, interviews & reviews', topic: 'AI for HR' },
        { name: 'Business Writing & Productivity with AI', meta: '1–2 days · All teams · SOPs, reports & prompt packs', topic: 'Business Writing with AI' },
        { name: 'Responsible AI & Digital Mindset', meta: '1 day · Managers · Governance, privacy & human review', topic: 'AI for HR' }
      ] },
      { tab: 'Leadership', items: [
        { name: 'Strategic Leadership & Presence', meta: '2–3 days · Senior & mid-level leaders · Goleman & decisions', topic: 'Leadership' },
        { name: 'Coaching Conversations & Feedback', meta: '2 days · People managers · Coaching habits & PDPs', topic: 'Leadership' },
        { name: 'Change, Crisis & Negotiation', meta: '2 days · Cross-functional leads · Risk & alignment', topic: 'Leadership' }
      ] },
      { tab: 'Trainer & Ops', items: [
        { name: 'Train-the-Trainer Mastery', meta: '3 days · Internal trainers · Rubrics & live facilitation', topic: 'Trainer development' },
        { name: 'Performance KPIs & Finance', meta: '2 days · Non-financial managers · KPIs & business acumen', topic: 'Leadership' },
        { name: 'Customer & Contact-Centre Excellence', meta: '2 days · Frontline & supervisors · First-call resolution', topic: 'Digital learning' }
      ] }
    ],
    ar: [
      { tab: 'AI والتحول الرقمي', items: [
        { name: 'الذكاء الاصطناعي للموارد البشرية', meta: 'يومان · التوظيف والتعلّم وHRBPs · توصيف ومقابلات وتقييم', topic: 'الذكاء الاصطناعي للموارد البشرية' },
        { name: 'الكتابة المهنية والإنتاجية بالـ AI', meta: '1–2 يوم · لكل الفرق · تقارير وسياسات وحزم أوامر', topic: 'الكتابة المهنية بالـ AI' },
        { name: 'حوكمة الـ AI المسؤول للقادة', meta: 'يوم واحد · المديرون · الخصوصية والمراجعة البشرية', topic: 'الذكاء الاصطناعي للموارد البشرية' }
      ] },
      { tab: 'القيادة والإدارة', items: [
        { name: 'القيادة الاستراتيجية والحضور القيادي', meta: '2–3 أيام · القيادات والمديرون · أساليب القيادة والقرار', topic: 'القيادة' },
        { name: 'حوارات الكوتشينج والتغذية الراجعة', meta: 'يومان · مديرو الفرق · خطط التطوير الفردية PDPs', topic: 'القيادة' },
        { name: 'إدارة التغيير والأزمات والتفاوض', meta: 'يومان · قادة المشاريع · المخاطر ومواءمة الأطراف', topic: 'القيادة' }
      ] },
      { tab: 'المدرّبون والأداء', items: [
        { name: 'إعداد وتطوير المدرّبين (TOT)', meta: '3 أيام · المدرّبون الداخليون · نماذج الجودة والتيسير', topic: 'تطوير المدرّبين' },
        { name: 'مؤشرات الأداء والمالية لغير الماليين', meta: 'يومان · المديرون · ربط الـ KPIs بنتائج الأعمال', topic: 'القيادة' },
        { name: 'تميّز خدمة العملاء ومراكز الاتصال', meta: 'يومان · الصفوف الأمامية والمشرفون · جودة الحل من أول تواصل', topic: 'التعلّم الرقمي' }
      ] }
    ]
  };

  var STOPS = [
    { id: 'learning-at-scale', c: '#f97316', mono: 'LS', v: 'lms',
      en: { type: 'Digital learning · L&D ops', badge: '2022 — 25', title: 'Learning at Scale', tag: 'A national workforce outgrew the classroom. Learning went digital, AI-enabled — and stayed human.',
        desc: 'As Digital Learning & Development Manager at Orange Egypt I owned strategy, budget, vendors and reporting — rebuilding delivery around e-learning, learning communities and practical Business Writing with AI (ChatGPT / Orange GPT) workshops.',
        pts: ['10+ e-learning modules in Storyline & Camtasia + AI microlearning refreshers', 'Business Writing with AI workshops & role-based prompt packs', 'Learning communities of 1,000+ members; monthly L1–L3/application reporting'],
        stack: ['Articulate Storyline', 'Camtasia', 'Cornerstone LMS', 'Orange GPT / GenAI', 'Kirkpatrick'], foot: 'Orange Egypt · Digital L&D Manager' },
      ar: { type: 'تعلّم رقمي · عمليات التدريب', badge: '2022 — 25', title: 'التعلّم على نطاق واسع', tag: 'قوى عاملة على مستوى الجمهورية تجاوزت حدود القاعة. فصار التعلّم رقميًا ومدعومًا بالـ AI — وبقي إنسانيًا.',
        desc: 'كمدير للتعلّم والتطوير الرقمي في Orange Egypt قدت الاستراتيجية والميزانية والموردين والتقارير — وأعدت بناء التدريب حول التعلّم الإلكتروني ومجتمعات التعلّم وورش الكتابة المهنية بالذكاء الاصطناعي (ChatGPT / Orange GPT).',
        pts: ['أكثر من 10 وحدات عبر Storyline وCamtasia مع جرعات تعلّم معزَّزة بالـ AI', 'ورش الكتابة المهنية بالذكاء الاصطناعي وحزم أوامر جاهزة لكل دور', 'مجتمعات تعلّم تضم +1,000 عضو وتقارير شهرية من الحضور إلى التطبيق'],
        stack: ['Articulate Storyline', 'Camtasia', 'Cornerstone LMS', 'Orange GPT / GenAI', 'كيركباتريك'], foot: 'Orange Egypt · مدير التعلّم والتطوير الرقمي' } },

    { id: 'ai-for-hr', c: '#8b5cf6', mono: 'AI', v: 'chat', live: true, propTopic: { en: 'AI for HR', ar: 'الذكاء الاصطناعي للموارد البشرية' },
      en: { type: 'AI for HR · Course', badge: 'Available', title: 'AI for HR & Teams', tag: 'Practical GenAI for recruiters, L&D and HRBPs — built for SISDEV & LHTC, ready to run for your team.',
        desc: 'Hands-on workflows for JD drafting, sourcing prompts, interview guides, performance-review support, policy writing and survey synthesis — anchored in human review and Responsible AI governance from my Master’s research.',
        pts: ['Role-based workflows across TA, L&D, performance & business writing', 'Human-in-the-loop verification checklists before anything ships', 'Responsible AI, privacy & bias guardrails'],
        stack: ['ChatGPT · Claude · Copilot · Gemini', 'Prompt Libraries', 'Responsible AI'], foot: 'Created for SISDEV & LHTC · customisable' },
      ar: { type: 'AI للموارد البشرية · دورة', badge: 'متاحة', title: 'AI للموارد البشرية والفرق', tag: 'تطبيقات GenAI عملية للتوظيف والتعلّم وشركاء الأعمال — أُعدّت لـ SISDEV وLHTC وجاهزة لفريقك.',
        desc: 'تدفقات عمل تطبيقية لصياغة بطاقات الوصف الوظيفي ومقابلات الاختيار ودعم تقييمات الأداء وكتابة السياسات وتلخيص الاستبيانات — مع مراجعة بشرية وإطار حوكمة من بحثي للماجستير في الذكاء الاصطناعي.',
        pts: ['تطبيقات عملية للتوظيف والتعلّم وإدارة الأداء والكتابة المؤسسية', 'قوائم مراجعة بشرية قبل اعتماد أي مخرج', 'ضوابط الخصوصية وتجنّب التحيّز والـ AI المسؤول'],
        stack: ['ChatGPT · Claude · Copilot · Gemini', 'مكتبات الأوامر', 'AI مسؤول'], foot: 'أُعدّت لصالح SISDEV وLHTC · قابلة للتخصيص' } },

    { id: 'women-in-leadership', c: '#14b8a6', mono: 'WL', v: 'cohort',
      en: { type: 'Leadership · Public sector', badge: '2022 — 24', title: 'Women in Leadership', tag: 'Leadership presence, communication and career progression for women leaders across Egypt’s governorates.',
        desc: 'Designed and delivered multi-cohort journeys at Egypt’s National Training Academy, authored facilitator guides and participant toolkits, and ran post-programme evaluations with NTA programme managers.',
        pts: ['Multiple public-sector cohorts delivered between 2022 and 2024', 'Simulations, Goleman leadership styles, role-plays & facilitator guides', 'Structured evaluation loop with NTA programme leads'],
        stack: ['Cohort design', 'Simulation', 'Facilitator guides', 'Kirkpatrick'], foot: 'National Training Academy · Certified Trainer' },
      ar: { type: 'القيادة · القطاع العام', badge: '2022 — 24', title: 'المرأة في القيادة', tag: 'الحضور القيادي والتواصل والتقدّم الوظيفي للقياديات في الجهاز الإداري للدولة والمحافظات.',
        desc: 'تصميم وتنفيذ رحلات تدريبية لعدة دفعات في الأكاديمية الوطنية للتدريب، وتأليف أدلة الميسّر وحقائب المشاركات، وتنفيذ تقييمات ما بعد البرنامج مع إدارات البرامج بالأكاديمية.',
        pts: ['عدة دفعات للقطاع العام بين 2022 و2024', 'محاكاة وأساليب القيادة ولعب أدوار وأدلة ميسّر', 'حلقة تقييم منهجية مع إدارات البرامج'],
        stack: ['تصميم الدفعات', 'المحاكاة', 'أدلة الميسّر', 'كيركباتريك'], foot: 'الأكاديمية الوطنية للتدريب · مدرّب معتمد' } },

    { id: 'in-the-room', c: '#ec4899', mono: 'RM', v: 'room',
      en: { type: 'Delivery · Live facilitation', badge: '10,000+ hrs', title: 'In the Room', tag: 'Ten thousand hours on my feet — classrooms, public-sector cohorts and live stages.',
        desc: 'Behind every curriculum is the energy in the room: ILT, VILT and blended sessions delivered in Arabic, English or French for groups of 15 to 200 learners — turning models into live participant breakthroughs.',
        pts: ['15–200 learners per session across telecom, corporate & government', 'Live coaching, role-plays & action debriefs (subtitled clip above)', 'Delivered fluently in Arabic, English and French'],
        stack: ['Facilitation', 'Live coaching', 'Role-play', 'Action debriefs'], foot: 'Subtitled NTA clip (0:59) + event photos' },
      ar: { type: 'التنفيذ · تيسير مباشر', badge: '+10,000 ساعة', title: 'داخل القاعة', tag: 'عشرة آلاف ساعة من التيسير الحي — قاعات تدريب ودفعات قيادية ومسارح.',
        desc: 'خلف كل منهج تفاعلُ القاعة نفسه: جلسات حضورية وعن بُعد ومدمجة بالعربية أو الإنجليزية أو الفرنسية لمجموعات من 15 إلى 200 متدرب — تحوّل النماذج النظرية إلى خطوات عملية حية.',
        pts: ['من 15 إلى 200 متدرب في الجلسة عبر الاتصالات والشركات والقطاع الحكومي', 'كوتشينج حي ولعب أدوار وجلسات مراجعة (شاهد المقطع المترجم أعلاه)', 'تقديم سلس بالعربية والإنجليزية والفرنسية'],
        stack: ['التيسير', 'كوتشينج مباشر', 'لعب الأدوار', 'جلسات المراجعة'], foot: 'مقطع حي مترجم من الأكاديمية (0:59) + صور الفعاليات' } },

    { id: 'trainers-club', c: '#e11d48', mono: 'TC', v: 'rubric',
      en: { type: 'Trainer development', badge: '2013 — 21', title: 'The Trainers Club', tag: 'One facilitation standard for a large telecom training function that had none.',
        desc: 'At Mobinil I founded and led the Trainers Club — shared quality rubrics, peer observations and coaching — alongside corporate leadership, customer-experience and onboarding programmes.',
        pts: ['Standardised facilitation rubrics across internal trainers', 'Peer quality reviews, Coach Me mentoring & digital job aids', 'A sustainable bench of certified internal facilitators'],
        stack: ['Train-the-Trainer', 'Quality rubrics', 'Peer coaching', 'Microlearning'], foot: 'Mobinil · Corporate Trainer & T&D Supervisor' },
      ar: { type: 'تطوير المدرّبين', badge: '2013 — 21', title: 'نادي المدرّبين', tag: 'معيار تيسير موحّد لوظيفة تدريب كبرى لم يكن لديها معيار.',
        desc: 'في موبينيل أسست وقُدت «نادي المدرّبين» — نماذج جودة مشتركة وملاحظات أقران وكوتشينج — إلى جانب برامج القيادة وتجربة العميل وتهيئة الموظفين الجدد.',
        pts: ['توحيد معايير التيسير ونماذج التقييم للمدرّبين الداخليين', 'مراجعات جودة بين الأقران ومبادرة Coach Me وأدوات عمل رقمية', 'بناء صف مستدام من الميسّرين المعتمدين داخل المؤسسة'],
        stack: ['تدريب المدرّبين', 'نماذج الجودة', 'كوتشينج الأقران', 'تعلّم مصغّر'], foot: 'موبينيل · مدرّب مؤسسي ومشرف التعلّم والتطوير' } },

    { id: 'contact-centre-impact', c: '#3b82f6', mono: '20%', v: 'chart',
      en: { type: 'Performance & Operations', badge: '2006 — 12 · EG & PK', title: 'KPI Lift & 60-Day Launch', tag: 'Measurable contact-centre resolution gains at home — and a greenfield launch abroad in 60 days.',
        desc: 'As Call Centre Training Manager at LINKdotNET I tied monthly bootcamps and a new knowledge-base training module directly to service KPIs — and led training for a brand-new contact-centre launch in Pakistan.',
        pts: ['~20% improvement in first-line service resolution via KB training', 'Greenfield Pakistan call centre trained and live within 60 days (2007)', 'Monthly product & soft-skills bootcamps retargeted from KPI data'],
        stack: ['KPI analysis', 'Knowledge base', '60-day launch readiness', 'Bootcamps'], foot: 'LINKdotNET · Call Centre Training Manager' },
      ar: { type: 'الأداء والعمليات', badge: '2006 — 12 · مصر وباكستان', title: 'رفع الأداء وإطلاق في 60 يومًا', tag: 'تحسّن ملموس في حل المشكلات محليًا — وإطلاق مركز اتصال جديد بالخارج خلال 60 يومًا.',
        desc: 'كمدير تدريب مركز الاتصال في LINKdotNET ربطت البوتكامبات الشهرية ووحدة التدريب على قاعدة المعرفة بمؤشرات الأداء مباشرة — وقُدت الجاهزية التدريبية لإطلاق مركز اتصال جديد في باكستان.',
        pts: ['تحسّن بنحو 20% في معدل حل المشكلات عبر التدريب على قاعدة المعرفة', 'تدريب وإطلاق مركز اتصال جديد في باكستان خلال 60 يومًا (2007)', 'بوتكامبات شهرية للمنتجات والمهارات الناعمة موجّهة ببيانات الأداء'],
        stack: ['تحليل KPIs', 'قاعدة المعرفة', 'جاهزية الإطلاق (60 يومًا)', 'بوتكامب'], foot: 'LINKdotNET · مدير تدريب مركز الاتصال' } },

    { id: 'programmes', c: '#0ea5e9', mono: '9+', v: 'menu', live: true, catalogueLink: true,
      en: { type: 'Bookable Workshops · Link Academy', badge: '1–3 Days', title: 'Signature Programmes', tag: 'Nine battle-tested corporate curricula — tailored to your real cases, KPIs and industry.',
        desc: 'Delivered through Link Learning Center LLC (founded 2008; freelance since 2005). Tap any programme above to pre-fill a proposal brief, or download the 1-page executive catalogue for your team.',
        pts: ['Customised from TNA interviews & your actual SOPs / cases', 'Includes participant toolkits, prompt packs & post-class challenges', 'Available in-person (Egypt & GCC) or live virtual worldwide'],
        stack: ['1–3 Day Workshops', 'Multi-Week Cohorts', '1-to-1 Meta-Coaching', 'L&D Advisory'], foot: 'Link Learning Center LLC · Founder (since 2008)' },
      ar: { type: 'برامج جاهزة للتنفيذ · مركز لينك', badge: '1–3 أيام', title: 'البرامج التدريبية الرئيسية', tag: 'تسعة مناهج مؤسسية مجرَّبة — تُخصَّص وفق حالات العمل ومؤشرات الأداء في مؤسستك.',
        desc: 'تُقدَّم عبر مركز لينك للتعلّم (تأسس 2008؛ وممارسة حرة منذ 2005). اضغط على أي برنامج أعلاه لطلب عرض فني مخصّص، أو حمّل كتالوج البرامج المختصر (صفحة واحدة).',
        pts: ['تخصيص كامل بناءً على تحليل الاحتياجات وحالات العمل الفعلية', 'تشمل حقائب المتدربين وحزم الأوامر وتحديات التطبيق بعد الورشة', 'متاحة حضوريًا في مصر والخليج أو عن بُعد حول العالم'],
        stack: ['ورش 1–3 أيام', 'رحلات دفعات متكاملة', 'ميتا-كوتشينج فردي', 'استشارات التعلّم'], foot: 'مركز لينك للتعلّم · مؤسس (منذ 2008)' } },

    { id: 'method', c: '#10b981', mono: 'M', v: 'loop',
      en: { type: 'Method', badge: '4 steps', title: 'Diagnose → Measure', tag: 'How a programme moves from a business problem to behaviour that survives Monday.',
        desc: 'Every engagement runs the same disciplined loop — feeding pre/post evidence and application rates straight into the next quarter’s plan. If it isn’t measured, it didn’t change behaviour.',
        pts: ['Diagnose — TNA, stakeholder interviews & live performance data', 'Design & deliver — real workplace cases, rehearsed + job aids', 'Measure — pre/post tests, Kirkpatrick L1–L4 & post-class challenges'],
        stack: ['TNA', 'ADDIE & SAM', 'Job aids & checklists', 'Kirkpatrick L1–L4'], foot: 'Applied across every programme above' },
      ar: { type: 'المنهجية', badge: '4 خطوات', title: 'من التشخيص إلى القياس', tag: 'كيف ينتقل البرنامج من مشكلة عمل حقيقية إلى سلوك يصمد يوم الاثنين.',
        desc: 'كل مشروع يمر بنفس الحلقة المنضبطة — ويغذّي نتائج القياس القبلي والبعدي ومعدلات التطبيق في خطة الربع التالي. ما لا يُقاس، لم يغيّر السلوك.',
        pts: ['التشخيص — تحليل الاحتياجات ومقابلات المعنيين وبيانات الأداء', 'التصميم والتنفيذ — حالات واقعية وتدريب عملي وأدوات مساندة', 'القياس — اختبارات قبلية/بعدية وكيركباتريك L1–L4 وتحديات تطبيق'],
        stack: ['تحليل الاحتياجات', 'ADDIE و SAM', 'أدوات عمل وقوائم تحقق', 'كيركباتريك L1–L4'], foot: 'مطبّقة في كل البرامج السابقة' } },

    { id: 'credentials', c: '#6366f1', mono: '12+', v: 'badges',
      en: { type: 'Credentials', badge: '12+', title: 'Certified, verifiably.', tag: 'International HR, L&D, facilitation and coaching credentials — plus academic research in AI governance.',
        desc: 'Backed by a Master’s in AI & Sustainability in progress at Damanhour University (AI governance for ethical cybersecurity risk in critical infrastructure) and a B.Sc. in Computer Science.',
        pts: ['SPHRi — Senior Professional in HR International (HRCI)', 'Certified L&D Professional (HPA) · Certified Trainer (ESLSCA & NTA)', 'Certified Meta-Coach (MCF) · Transforming Communication & Resilience (ICI)'],
        stack: ['SPHRi', 'CLDP', 'ESLSCA · NTA', 'Meta-Coach', 'M.Sc. AI (in progress)'], foot: 'Full verified list in the CV' },
      ar: { type: 'الشهادات', badge: '+12', title: 'اعتمادات قابلة للتحقق.', tag: 'شهادات دولية في الموارد البشرية والتعلّم والتيسير والكوتشينج — مع بحث أكاديمي في حوكمة الذكاء الاصطناعي.',
        desc: 'مدعومة بماجستير الذكاء الاصطناعي والاستدامة قيد الدراسة بجامعة دمنهور (حوكمة الذكاء الاصطناعي لمخاطر الأمن السيبراني في البنى التحتية الحيوية) وبكالوريوس علوم الحاسب.',
        pts: ['SPHRi — محترف أول موارد بشرية دولي (HRCI)', 'محترف تعلّم وتطوير معتمد (HPA) · مدرّب معتمد (ESLSCA والأكاديمية الوطنية)', 'ميتا-كوتش معتمد (MCF) · التواصل التحويلي والمرونة النفسية (ICI)'],
        stack: ['SPHRi', 'CLDP', 'ESLSCA · NTA', 'Meta-Coach', 'ماجستير AI (قيد الدراسة)'], foot: 'القائمة الكاملة في السيرة الذاتية' } },

    { id: 'contact', c: '#9333ea', mono: '✦', v: 'contact', contact: true,
      en: { type: 'Contact', title1: 'Let’s build', title2: 'capability that', title3: 'lasts.', tag: 'A leadership cohort, an AI-for-HR rollout, a digital learning build, or a review of the learning function itself — tell me the problem and I’ll propose a practical first step.',
        prop: 'Request a proposal', book: 'Book a call on WhatsApp', meta: ['Cairo, Egypt · Available across GCC & remote worldwide', 'Open to cohorts, workshops, speaking & L&D advisory', 'Arabic · English · French'], legal: '© 2026 Diaa Saad · L&D Leader · Corporate Trainer · AI for HR', tile: 'Let’s talk' },
      ar: { type: 'تواصل', title1: 'لنبنِ', title2: 'قدرات', title3: 'تدوم.', tag: 'دفعة قيادية، أو تمكين فريق الموارد البشرية بالذكاء الاصطناعي، أو بناء تعلّم رقمي، أو مراجعة لوظيفة التعلّم نفسها — احكِ لي التحدي وسأقترح خطوة أولى عملية.',
        prop: 'اطلب عرضًا فنيًا', book: 'احجز مكالمة عبر واتساب', meta: ['القاهرة، مصر · متاح في الخليج وعن بُعد حول العالم', 'متاح للدفعات والورش والمتحدثين واستشارات التعلّم والتطوير', 'العربية · الإنجليزية · الفرنسية'], legal: '© 2026 ضياء سعد · قائد تعلّم وتطوير · مدرّب مؤسسي · AI للموارد البشرية', tile: 'لنتحدث' } }
  ];

  /* ---------------------------------------------------------
     2. Helpers
     --------------------------------------------------------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  var ease = function (t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(pointer: fine)').matches;
  var lang = (function () { try { return localStorage.getItem('ds6-lang') || localStorage.getItem('ds5-lang') || 'en'; } catch (e) { return 'en'; } })();
  if (!T[lang]) lang = 'en';
  var simple = (function () { try { return localStorage.getItem('ds6-simple') === '1' || location.hash === '#simple'; } catch (e) { return location.hash === '#simple'; } })();
  var N = STOPS.length;
  var pad3 = function (i) { return ('00' + (i + 1)).slice(-3); };
  var ARROW = '<svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"/></svg>';

  /* ---------------------------------------------------------
     2b. Key metrics per stop
     --------------------------------------------------------- */
  var METRICS = {
    en: [
      [{ n: 10, s: '+', l: 'Storyline & Camtasia modules' }, { n: 1000, s: '+', l: 'learning-community members' }, { t: 'GenAI', l: 'Business Writing workshops' }],
      [{ t: 'HR + TA', l: 'role-based GenAI workflows' }, { t: 'M.Sc.', l: 'AI & Sustainability research' }, { t: 'Human', l: 'in-the-loop verification' }],
      [{ t: '2022–24', l: 'cohorts at National Academy' }, { n: 3, l: 'pillars: presence · voice · growth' }, { t: 'Toolkits', l: 'facilitator guides authored' }],
      [{ n: 10000, s: '+', l: 'hours of live facilitation' }, { t: '15–200', l: 'learners per session' }, { n: 3, l: 'languages · AR / EN / FR' }],
      [{ n: 1, l: 'function-wide quality standard' }, { t: '2013–21', l: 'Mobinil · trainer & T&D lead' }, { t: 'Peer', l: 'rubrics & coaching reviews' }],
      [{ p: '~', n: 20, s: '%', l: 'better service resolution' }, { n: 60, l: 'days to launch Pakistan centre' }, { t: 'Monthly', l: 'KPI-driven bootcamps' }],
      [{ n: 9, l: 'ready-to-run curricula' }, { t: '2008', l: 'Link Learning Center founded' }, { t: 'ILT / VILT', l: 'in-person or live virtual' }],
      [{ n: 4, l: 'steps: diagnose → measure' }, { t: 'L1–L4', l: 'Kirkpatrick evaluation' }, { t: 'Pre/Post', l: 'testing & action challenges' }],
      [{ n: 12, s: '+', l: 'professional certifications' }, { n: 2, l: 'degrees · B.Sc. + M.Sc. (in progress)' }, { n: 3, l: 'fields: L&D · HR · coaching' }],
      null
    ],
    ar: [
      [{ n: 10, s: '+', l: 'وحدات Storyline وCamtasia' }, { n: 1000, s: '+', l: 'عضو بمجتمعات التعلّم' }, { t: 'GenAI', l: 'ورش الكتابة المهنية بالـ AI' }],
      [{ t: 'HR + TA', l: 'تدفقات عمل مخصّصة للأدوار' }, { t: 'M.Sc.', l: 'بحث ماجستير في حوكمة AI' }, { t: 'بشري', l: 'مراجعة وتحقق في كل مخرج' }],
      [{ t: '2022–24', l: 'دفعات بالأكاديمية الوطنية' }, { n: 3, l: 'محاور: الحضور · التواصل · التقدّم' }, { t: 'أدلة', l: 'حقائب وأدلة ميسّر مؤلَّفة' }],
      [{ n: 10000, s: '+', l: 'ساعة تيسير مباشر' }, { t: '15–200', l: 'متدرب في الجلسة' }, { n: 3, l: 'لغات · ع / إن / فر' }],
      [{ n: 1, l: 'معيار جودة موحّد للتيسير' }, { t: '2013–21', l: 'موبينيل · مدرّب ومشرف تطوير' }, { t: 'أقران', l: 'نماذج تقييم وكوتشينج' }],
      [{ p: '~', n: 20, s: '%', l: 'تحسّن في حل المشكلات' }, { n: 60, l: 'يومًا لإطلاق مركز باكستان' }, { t: 'شهريًا', l: 'بوتكامبات موجّهة بالـ KPIs' }],
      [{ n: 9, l: 'برامج تدريبية جاهزة للتخصيص' }, { t: '2008', l: 'تأسيس مركز لينك للتعلّم' }, { t: 'حضوري/عن بُعد', l: 'مصر والخليج وعالميًا' }],
      [{ n: 4, l: 'خطوات: من التشخيص للقياس' }, { t: 'L1–L4', l: 'تقييم كيركباتريك' }, { t: 'قبلي/بعدي', l: 'اختبارات وتحديات تطبيق' }],
      [{ n: 12, s: '+', l: 'شهادة احترافية معتمدة' }, { n: 2, l: 'درجتان علميتان (ماجستير جارٍ)' }, { n: 3, l: 'مجالات: تدريب · HR · كوتشينج' }],
      null
    ]
  };

  function metricsHTML(i) {
    var M = METRICS[lang][i];
    if (!M) return '';
    return '<div class="jp-metrics">' + M.map(function (m, k) {
      var val;
      if (m.n != null) {
        val = '<b class="lt num" data-to="' + m.n + '"' + (m.s ? ' data-suf="' + esc(m.s) + '"' : '') + (m.p ? ' data-pre="' + esc(m.p) + '"' : '') + '>' + (m.p || '') + m.n.toLocaleString('en-US') + (m.s || '') + '</b>';
      } else {
        var lt = /^[\x00-\x7F\u2013\u00b7\s/]+$/.test(m.t);
        val = '<b class="' + (lt ? 'lt ' : '') + (m.t.length > 7 ? 'sm' : '') + '">' + esc(m.t) + '</b>';
      }
      return '<div class="m" style="--k:' + k + '">' + val + '<span>' + esc(m.l) + '</span></div>';
    }).join('') + '</div>';
  }

  function runCounters(p) {
    $$('.num', p).forEach(function (el) {
      var to = +el.dataset.to, pre = el.dataset.pre || '', suf = el.dataset.suf || '';
      var fmt = function (v) { return pre + Math.round(v).toLocaleString('en-US') + suf; };
      if (el._raf) cancelAnimationFrame(el._raf);
      if (reduce) { el.textContent = fmt(to); return; }
      var t0 = performance.now() + 380;
      (function step(now) {
        var k = clamp((now - t0) / 1200, 0, 1), e = 1 - Math.pow(1 - k, 4);
        el.textContent = fmt(to * e);
        if (k < 1) el._raf = requestAnimationFrame(step);
      })(performance.now());
    });
  }

  /* Synced subtitle helper for both inline preview & modal reel */
  var ccOn = true;
  function cueAt(time) {
    var list = CUES[lang] || CUES.en;
    for (var i = 0; i < list.length; i++) {
      if (time >= list[i][0] && time <= list[i][1]) return list[i][2];
    }
    return '';
  }
  function updateCapEl(el, time, enabled) {
    if (!el) return;
    var txt = enabled ? cueAt(time) : '';
    if (el._txt !== txt) { el._txt = txt; el.textContent = txt; el.classList.toggle('on', !!txt); }
  }

  function syncRoomPreview(activeIdx) {
    var v = $('.room-vid');
    if (!v) return;
    var reelOpen = $('#reel') && $('#reel').open;
    var shouldPlay = !reduce && !document.hidden && !reelOpen && activeIdx === 3;
    if (shouldPlay) { var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); }
    else if (!v.paused) v.pause();
  }

  var sio = null;
  function observeStatic() {
    if (sio) sio.disconnect();
    if (!('IntersectionObserver' in window)) { $$('.jp').forEach(function (p) { p.classList.add('on'); }); return; }
    sio = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!isStatic) return;
        var idx = +en.target.dataset.i;
        if (idx === 3) syncRoomPreview(en.isIntersecting ? 3 : -1);
        if (!en.isIntersecting || en.target.classList.contains('on')) return;
        en.target.classList.add('on'); runCounters(en.target);
      });
    }, { threshold: .22 });
    $$('.jp').forEach(function (p) { sio.observe(p); });
  }

  /* ---------------------------------------------------------
     3. Visual snippets
     --------------------------------------------------------- */
  var menuTab = 0;
  function menuHTML(L) {
    var cats = CATALOGUE[L], t = T[L];
    if (menuTab >= cats.length) menuTab = 0;
    return '<div class="v v-menu">' +
      '<div class="v-menu__tabs" role="tablist">' + cats.map(function (c, idx) {
        return '<button type="button" role="tab" class="v-menu__tab' + (idx === menuTab ? ' on' : '') + '" aria-selected="' + (idx === menuTab) + '" data-mtab="' + idx + '">' + esc(c.tab) + '</button>';
      }).join('') + '</div>' +
      '<div class="v-menu__list">' + cats[menuTab].items.map(function (it) {
        return '<button type="button" class="v-menu__item" data-prop-topic="' + esc(it.topic) + '" data-prop-course="' + esc(it.name) + '">' +
          '<span><b>' + esc(it.name) + '</b><small>' + esc(it.meta) + '</small></span>' +
          '<em class="v-menu__cta" style="font-style:normal">' + esc(t.bookCourse) + '</em></button>';
      }).join('') + '</div></div>';
  }

  function visual(s, L) {
    var ar = L === 'ar', t = T[L];
    switch (s.v) {
      case 'lms':
        return '<div class="v v-lms"><span class="v-pill" style="top:14px;left:14px"><b>●</b> ' + (ar ? 'تقويم ربع سنوي + AI' : 'Quarterly calendar + AI') + '</span>' +
          '<span class="v-pill" style="bottom:14px;right:14px"><b>1,000+</b> ' + (ar ? 'عضو' : 'members') + '</span>' +
          '<div class="mods">' + [['07', ar ? 'القيادة للمرة الأولى' : 'First-time leaders', 84], ['AI', ar ? 'الكتابة المهنية بـ Orange GPT' : 'Business Writing with AI', 78], ['10', ar ? 'خطط التطوير الفردية' : 'Personal development plans', 62]].map(function (m, k) {
            return '<div class="mod" style="--k:' + k + '"><i>' + m[0] + '</i><div>' + m[1] + '<div class="bar"><span style="--w:' + m[2] + '%"></span></div></div><em class="num" data-to="' + m[2] + '" data-suf="%">' + m[2] + '%</em></div>';
          }).join('') + '</div></div>';
      case 'chat':
        var promptTxt = ar
          ? 'حلّل نتائج تقييم المستوى الأول لثلاث دفعات في ثلاث توصيات للإدارة'
          : 'Summarise L1 evaluation scores across 3 cohorts into 3 actions for leadership';
        return '<div class="v v-chat"><div class="msgs"><div class="u">' + esc(promptTxt) + '</div>' +
          '<div class="a">' + (ar ? 'ملخص تنفيذي للإدارة:' : 'Executive summary for leadership:') + '<i style="width:92%"></i><i style="width:78%"></i><i style="width:60%"></i></div>' +
          '<div class="ok">✓ ' + (ar ? 'مراجعة بشرية: الأرقام مطابقة للمصدر ولا بيانات حساسة' : 'human review: figures verified & PII stripped') + '</div></div></div>';
      case 'cohort':
        return '<div class="v v-photo"><img src="assets/photos/nta-session.jpg" alt="' + (ar ? 'ضياء سعد يقدّم جلسة أساليب القيادة ضمن برنامج المرأة تقود بالأكاديمية الوطنية للتدريب' : 'Diaa Saad facilitating Daniel Goleman leadership styles at the National Training Academy Women in Leadership programme') + '" style="object-position:50% 38%" loading="lazy" decoding="async">' +
          '<span class="v-pill" style="top:14px;left:14px"><b>NTA</b> ' + (ar ? 'برنامج المرأة تقود' : 'Women in Leadership') + '</span></div>';
      case 'room':
        return '<div class="v v-room">' +
          '<div class="v-room__vid" data-reel role="button" tabindex="0" aria-label="' + esc(t.watchSound) + '">' +
            '<video class="room-vid" src="' + REEL_SRC + '" poster="' + REEL_POSTER + '" muted loop playsinline preload="metadata"></video>' +
            '<span class="v-room__live"><i></i>LIVE · NTA · CC</span>' +
            '<div class="v-cap room-cap"></div>' +
            '<span class="v-play"><b>▶</b><span>' + esc(t.watchSound) + '</span></span>' +
          '</div>' +
          '<div class="v-room__pics">' +
            '<img src="assets/photos/nta-class.jpg" alt="' + (ar ? 'قاعة تدريب بالأكاديمية الوطنية' : 'Training cohort room') + '" style="--k:0;object-position:30% 38%" loading="lazy" decoding="async">' +
            '<img src="assets/photos/stage-2.jpg" alt="' + (ar ? 'ضياء سعد يتحدث في فعالية مباشرة' : 'Diaa Saad speaking at a live outdoor event') + '" style="--k:1;object-position:52% 28%" loading="lazy" decoding="async">' +
          '</div></div>';
      case 'rubric':
        var rows = [[ar ? 'الافتتاح والأهداف' : 'Opening & objectives', 5], [ar ? 'إدارة النقاش' : 'Managing discussion', 4], [ar ? 'التطبيق والمراجعة' : 'Practice & debrief', 5], [ar ? 'الختام وخطة العمل' : 'Close & commitment', 4]];
        return '<div class="v v-rubric"><span class="v-pill" style="top:14px;left:14px"><b>✓</b> ' + (ar ? 'مراجعة الأقران' : 'Peer review') + '</span><div class="rows">' + rows.map(function (r, ri) {
          var d = ''; for (var k = 0; k < 5; k++) d += '<i class="' + (k < r[1] ? 'on' : '') + '" style="--d:' + k + '"></i>';
          return '<div class="row" style="--r:' + ri + '"><span>' + r[0] + '</span><span class="dots">' + d + '</span></div>';
        }).join('') + '</div></div>';
      case 'chart':
        return '<div class="v v-chart"><span class="v-pill" style="top:14px;left:14px">' + (ar ? 'حل المشكلات' : 'Resolution') + ' <b>~+20%</b></span><span class="v-pill" style="top:14px;right:14px">' + (ar ? 'إطلاق باكستان:' : 'Pakistan launch:') + ' <b>60d</b></span>' +
          '<svg viewBox="0 0 300 130" preserveAspectRatio="none"><defs><linearGradient id="cg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="' + s.c + '"/><stop offset="1" stop-color="' + s.c + '" stop-opacity="0"/></linearGradient></defs>' +
          '<line class="gl" x1="0" x2="300" y1="30" y2="30"/><line class="gl" x1="0" x2="300" y1="70" y2="70"/><line class="gl" x1="0" x2="300" y1="110" y2="110"/>' +
          '<path class="area" d="M0 102 L40 96 L80 100 L120 84 L160 72 L200 56 L240 44 L300 26 L300 130 L0 130Z"/><path class="ln" pathLength="1" d="M0 102 L40 96 L80 100 L120 84 L160 72 L200 56 L240 44 L300 26"/></svg></div>';
      case 'menu':
        return menuHTML(L);
      case 'loop':
        var steps = ar ? [['تشخيص', 'المشكلة الحقيقية'], ['تصميم', 'حالات واقعية'], ['تنفيذ', 'تطبيق وممارسة'], ['قياس', 'كيركباتريك']] : [['Diagnose', 'the real gap'], ['Design', 'real cases'], ['Deliver', 'rehearse it'], ['Measure', 'Kirkpatrick L1–L4']];
        return '<div class="v v-loop"><ol class="steps">' + steps.map(function (st, k) {
          return '<li class="st" style="--k:' + k + '"><i>0' + (k + 1) + '</i><b>' + st[0] + '</b><small>' + st[1] + '</small></li>';
        }).join('') + '</ol><div class="back"><span>↺ ' + (ar ? 'النتائج تغذّي تقويم الربع التالي' : 'results feed next quarter’s plan') + '</span></div></div>';
      case 'badges':
        return '<div class="v v-badges"><div class="bs">' + [['SPHRi', 'HRCI'], ['CLDP', 'HPA'], ['Trainer', 'ESLSCA'], ['Trainer', 'NTA'], ['Meta-Coach', 'MCF'], ['M.Sc. AI', 'Research']].map(function (b, k) {
          return '<div class="b" style="--k:' + k + '"><div>' + b[0] + '<small>' + b[1] + '</small></div></div>';
        }).join('') + '</div></div>';
    }
    return '';
  }

  function bindMenuEvents(scope) {
    $$('[data-mtab]', scope).forEach(function (btn) {
      btn.addEventListener('click', function () {
        menuTab = +btn.getAttribute('data-mtab');
        var box = btn.closest('.jp-visual');
        if (box) { box.innerHTML = menuHTML(lang); bindMenuEvents(box); }
      });
    });
    $$('[data-prop-topic]', scope).forEach(function (b) {
      if (b._pt) return; b._pt = 1;
      b.addEventListener('click', function () {
        openProp(b.getAttribute('data-prop-topic'), b.getAttribute('data-prop-course') || '');
      });
    });
  }

  /* ---------------------------------------------------------
     4. Render
     --------------------------------------------------------- */
  function renderText() {
    var t = T[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $$('[data-t]').forEach(function (el) { var v = t[el.getAttribute('data-t')]; if (typeof v === 'string') el.textContent = v; });
    $$('[data-t-html]').forEach(function (el) { el.innerHTML = t[el.getAttribute('data-t-html')]; });
    $('#rot').textContent = t.rot[0];
    $('#roles').innerHTML = t.roles.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('');
    $('#orgs').innerHTML = t.orgs.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('');
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    applyViewLabels();
    renderReelText();
    syncNativeTracks();
  }

  function applyViewLabels() {
    var t = T[lang], btn = $('#viewToggle');
    var c = $('[data-t="cta1"]');
    if (c) c.textContent = (simple || isStatic) ? t.cta1s : t.cta1;
    if (!btn) return;
    $('#viewLabel').textContent = simple ? t.view2 : t.view1;
    btn.setAttribute('aria-pressed', String(simple));
  }

  function renderStops() {
    var t = T[lang];
    $('#tunnel').innerHTML = STOPS.map(function (s, i) {
      var L = s[lang];
      return '<button class="tile' + (s.contact ? ' tile--contact' : '') + '" style="--c:' + s.c + '" data-i="' + i + '" tabindex="-1">' +
        '<span class="tile__num">' + pad3(i) + '</span><span class="tile__mono">' + s.mono + '</span><span class="tile__title">' + esc(s.contact ? L.tile : L.title) + '</span></button>';
    }).join('');

    $('#panels').innerHTML = STOPS.map(function (s, i) {
      var L = s[lang];
      if (s.contact) {
        return '<article class="jp jp-contact" id="' + s.id + '" style="--c:' + s.c + ';--p:' + ((i + 1) / N).toFixed(3) + '" data-i="' + i + '">' +
          '<header class="jp-head"><span class="jp-num grad">' + pad3(i) + '</span><span class="jp-type">' + esc(L.type) + '</span></header>' +
          '<h2 class="jp-title">' + esc(L.title1) + '<br><span class="grad">' + esc(L.title2) + '<br>' + esc(L.title3) + '</span></h2>' +
          '<p class="jp-tag">' + esc(L.tag) + '</p>' +
          '<div class="cta-row"><button type="button" class="jp-link magnetic" data-prop>' + esc(L.prop) + ' ' + ARROW + '</button><a class="jp-ghost magnetic" href="' + WA + '?text=' + encodeURIComponent(t.bookMsg) + '" target="_blank" rel="noopener">' + esc(L.book) + '</a></div>' +
          '<div class="copy"><span>' + EMAIL + '</span><button type="button" data-copy>' + esc(t.copy) + '</button></div>' +
          '<div class="links"><a href="' + LI + '" target="_blank" rel="noopener">LinkedIn ↗</a><a href="' + WA + '" target="_blank" rel="noopener">WhatsApp ↗</a><a href="' + PROFILE + '" download>' + esc(t.cat) + ' ↓</a><a href="' + CV + '" download>' + esc(t.cv) + ' ↓</a></div>' +
          '<ul class="meta">' + L.meta.map(function (m, k) { return '<li><i class="' + (k === 1 ? 'g' : '') + '"></i>' + esc(m) + '</li>'; }).join('') + '</ul>' +
          '<p class="legal">' + esc(L.legal) + '</p></article>';
      }

      var footActs = '';
      if (s.propTopic) {
        footActs = '<button type="button" class="jp-ghost magnetic" data-prop-topic="' + esc(s.propTopic[lang]) + '">' + esc(t.bookAi) + '</button>' +
          '<a class="jp-link magnetic" href="#' + STOPS[i + 1].id + '" data-jump="' + (i + 1) + '">' + pad3(i + 1) + ' ' + ARROW + '</a>';
      } else if (s.catalogueLink) {
        footActs = '<a class="jp-ghost magnetic" href="' + PROFILE + '" download>' + esc(t.cat) + ' ↓</a>' +
          '<a class="jp-link magnetic" href="#' + STOPS[i + 1].id + '" data-jump="' + (i + 1) + '">' + pad3(i + 1) + ' ' + ARROW + '</a>';
      } else if (i === N - 2) {
        footActs = '<a class="jp-link magnetic" href="' + CV + '" download>' + esc(t.cv) + ' ' + ARROW + '</a>';
      } else {
        footActs = '<a class="jp-link magnetic" href="#' + STOPS[i + 1].id + '" data-jump="' + (i + 1) + '">' + pad3(i + 1) + ' ' + ARROW + '</a>';
      }

      return '<article class="jp" id="' + s.id + '" style="--c:' + s.c + ';--p:' + ((i + 1) / N).toFixed(3) + '" data-i="' + i + '">' +
        '<header class="jp-head"><span class="jp-num">' + pad3(i) + '</span><span class="jp-type">' + esc(L.type) + '</span>' +
        '<span class="jp-badge' + (s.live ? ' live' : '') + '">' + (s.live ? '<i></i>' : '') + esc(L.badge) + '</span></header>' +
        '<h2 class="jp-title">' + esc(L.title) + '</h2><p class="jp-tag">' + esc(L.tag) + '</p>' + metricsHTML(i) +
        '<div class="jp-visual' + (s.v === 'menu' ? ' jp-visual--menu' : '') + '">' + visual(s, lang) + '</div>' +
        '<p class="jp-desc">' + esc(L.desc) + '</p>' +
        '<ul class="jp-points">' + L.pts.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' +
        '<div class="jp-stack">' + L.stack.map(function (p) { return '<span>' + esc(p) + '</span>'; }).join('') + '</div>' +
        '<footer class="jp-foot"><small>' + esc(L.foot) + '</small><div class="jp-foot__acts">' + footActs + '</div></footer></article>';
    }).join('');

    $('#rail').innerHTML = STOPS.map(function (s, i) {
      var L = s[lang];
      return '<button type="button" data-jump="' + i + '" style="--c:' + s.c + '" aria-label="' + esc(s.contact ? L.tile : L.title) + '"><span>' + pad3(i) + '</span><i></i></button>';
    }).join('');

    $$('[data-copy]').forEach(function (b) { b.addEventListener('click', copyEmail); });
    $$('[data-prop]').forEach(function (b) { b.addEventListener('click', function () { openProp(); }); });
    bindMenuEvents(panelsEl);
    bindReelTriggers();
    var rv = $('.room-vid'), rc = $('.room-cap');
    if (rv && rc) rv.addEventListener('timeupdate', function () { updateCapEl(rc, rv.currentTime, true); });
    renderProp();
    $$('.tile').forEach(function (b) { b.addEventListener('click', function () { jump(+b.dataset.i, true); }); });
    bindJumps(); magnetic();
    lastActive = -2;
    fitVisuals();
    observeStatic();
  }

  function fitVisuals() {
    $$('.jp-visual').forEach(function (box) {
      var v = $('.v', box);
      if (!v) return;
      var tgt = $('.mods,.rows,.msgs,.bs', v);
      if (!tgt) return;
      tgt.style.transform = ''; v.classList.remove('tight');
      var H = v.clientHeight, W = v.clientWidth;
      if (!H || !W) return;
      var h = tgt.offsetHeight, w = tgt.offsetWidth;
      var hasPills = !!$('.v-pill', v);
      if (hasPills && h > H - 84) v.classList.add('tight');
      var avail = (hasPills && !v.classList.contains('tight')) ? H - 84 : H - 16;
      var s = Math.min(1, avail / h, (W - 16) / w);
      if (s < 1) tgt.style.transform = 'scale(' + s.toFixed(3) + ')';
    });
  }

  /* ---------------------------------------------------------
     5. Scroll engine + 3D depth + gentle idle settle + deep-links
     --------------------------------------------------------- */
  var HERO_LEN = 1.22, STOP_LEN = 1.04, TAIL = 0.35;
  var track = $('#track'), hero = $('#hero'), portraitPhoto = $('#portraitPhoto'), panelsEl = $('#panels'), rail = $('#rail');
  var uS = null, settled = true, isStatic = false, vh = innerHeight, trackTop = 0, sp = 0, pos = -9, lastActive = -2;
  var settleTimer = null, programmatic = false;

  function setMode() {
    var forced = reduce || innerWidth < 900 || innerHeight < 560;
    isStatic = forced || simple;
    document.body.classList.toggle('forced', forced);
    document.body.classList.toggle('static', isStatic);
    document.body.classList.toggle('simple', simple && !forced);
    vh = innerHeight;
    if (!isStatic) track.style.height = ((HERO_LEN + (N - 1) * STOP_LEN + TAIL + 1) * vh) + 'px';
    else track.style.height = '';
    trackTop = track.getBoundingClientRect().top + scrollY;
    applyViewLabels();
  }

  function uFor(i) { return HERO_LEN + i * STOP_LEN; }
  function setStopHash(i) {
    if (!history.replaceState || !STOPS[i]) return;
    history.replaceState(null, '', '#' + STOPS[i].id);
  }
  function jump(i, updateHash, instant) {
    if (i === 'last') i = N - 1;
    i = clamp(+i, 0, N - 1);
    if (updateHash) setStopHash(i);
    programmatic = true;
    clearTimeout(settleTimer);
    setTimeout(function () { programmatic = false; }, 650);
    var beh = instant || reduce ? 'auto' : 'smooth';
    if (isStatic) { var el = $$('.jp')[i]; if (el) el.scrollIntoView({ behavior: beh, block: 'start' }); return; }
    scrollTo({ top: trackTop + uFor(i) * vh, behavior: instant || Math.abs(i - pos) > 4 || reduce ? 'auto' : 'smooth' });
  }
  function bindJumps() {
    $$('[data-jump]').forEach(function (a) {
      if (a._j) return; a._j = 1;
      a.addEventListener('click', function (e) { e.preventDefault(); jump(a.dataset.jump, true); });
    });
  }
  $('.brand').addEventListener('click', function (e) {
    e.preventDefault();
    if (history.replaceState) history.replaceState(null, '', location.pathname + location.search);
    scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  });

  function resolveHash(instant) {
    var h = (location.hash || '').replace(/^#/, '').toLowerCase();
    if (!h || h === 'top' || h === 'simple') return;
    if (h === 'link-learning-center') h = 'programmes';
    if (h === 'proposal') { jump(N - 1, false, true); openProp(); return; }
    if (h === 'reel' || h === 'video') { openReel(); return; }
    for (var i = 0; i < N; i++) {
      if (STOPS[i].id === h || pad3(i) === h || String(i + 1) === h) { jump(i, false, instant); return; }
    }
  }

  var tiles = [], panels = [];
  function frame() {
    var y = scrollY;
    var docH = document.documentElement.scrollHeight - vh;
    $('#progress').style.transform = 'scaleX(' + (docH > 0 ? clamp(y / docH, 0, 1) : 0) + ')';

    if (isStatic) { sp = 0; pos = -9; settled = true; uS = null; return; }

    var rawU = clamp(y - trackTop, 0, track.offsetHeight - vh) / vh;
    if (uS === null || reduce) uS = rawU; else { uS += (rawU - uS) * 0.15; if (Math.abs(rawU - uS) < 0.0005) uS = rawU; }
    settled = uS === rawU;
    var u = uS;
    sp = clamp(u / HERO_LEN, 0, 1);
    pos = (u - HERO_LEN) / STOP_LEN;

    // Sharp portrait cross-fades cleanly into 3D particle scatter on scroll
    if (portraitPhoto) {
      var po = clamp(1 - sp * 3.4, 0, 1);
      portraitPhoto.style.opacity = po.toFixed(3);
      portraitPhoto.style.transform = 'scale(' + (1 + sp * 0.04).toFixed(3) + ')';
    }

    var ho = clamp(1 - sp * 1.7, 0, 1);
    hero.style.opacity = ho;
    hero.style.transform = 'translateY(' + (-sp * 86) + 'px) scale(' + (1 - sp * .035) + ')';
    hero.style.pointerEvents = ho < .3 ? 'none' : '';
    hero.style.visibility = ho <= 0 ? 'hidden' : '';

    $('.swoosh').style.opacity = (1 - sp * .7).toFixed(3);
    var rtl = lang === 'ar';
    var cx = rtl ? 27 : 73;
    var tiltSign = rtl ? 1 : -1;
    var appear = clamp((sp - .32) / .5, 0, 1);
    tiles = tiles.length === N ? tiles : $$('.tile');
    panels = panels.length === N ? panels : $$('.jp', panelsEl);

    for (var i = 0; i < tiles.length; i++) {
      var d = pos - i, dd = d < -.18 ? d + .18 : d > .18 ? d - .18 : 0;
      if (i === tiles.length - 1 && dd > 0) dd = 0;
      var s, o;
      if (dd <= 0) { var k = clamp(1 + dd / 1.5, 0, 1); s = .1 + .9 * k * k; o = clamp(k * 1.6 - .1, 0, 1); }
      else { s = 1 + dd * 6.5; o = clamp(1 - dd / .22, 0, 1); }
      o *= appear;
      var el = tiles[i];
      if (o <= .001) { if (el._v !== 0) { el.style.opacity = 0; el.style.visibility = 'hidden'; el._v = 0; } continue; }
      el._v = 1;
      el.style.visibility = '';
      el.style.opacity = o.toFixed(3);
      el.style.left = cx + '%';
      var drift = dd <= 0 ? (1 - s) * 38 : 0;
      var ry = clamp(dd * -10, -11, 11) * tiltSign;
      el.style.transform = 'translate3d(0,' + (-drift).toFixed(1) + 'px,0) rotateY(' + ry.toFixed(2) + 'deg) scale(' + s.toFixed(4) + ')';
      el.style.zIndex = String(Math.round(s * 100));
      el.style.pointerEvents = Math.abs(dd) < .06 ? 'auto' : 'none';
      var act = Math.abs(dd) < .06 && o > .6;
      if (el._act !== act) { el._act = act; el.classList.toggle('act', act); }
    }

    var active = sp > .82 ? clamp(Math.round(pos), 0, N - 1) : -1;
    if (active > -1 && panels[active]) {
      var pOff = clamp((pos - active) * -20, -18, 18);
      panels[active].style.setProperty('--dy', pOff.toFixed(1) + 'px');
    }
    if (active !== lastActive) {
      panels.forEach(function (p, k) {
        var was = p.classList.contains('on');
        p.classList.toggle('on', k === active);
        if (k !== active) p.style.removeProperty('--dy');
        if (k === active && !was) runCounters(p);
        p.setAttribute('aria-hidden', String(k !== active));
      });
      $$('button', rail).forEach(function (b, k) { b.classList.toggle('on', k === active); });
      rail.classList.toggle('on', active > -1);
      updateNext(active);
      syncRoomPreview(active);
      lastActive = active;
    }
  }

  var nextBtn = $('#next');
  function updateNext(a) {
    if (!nextBtn) return;
    var show = a > -1 && a < N - 1;
    nextBtn.classList.toggle('on', show);
    nextBtn.tabIndex = show ? 0 : -1;
    if (!show) return;
    var s = STOPS[a + 1], L = s[lang];
    $('#nextN').textContent = (a + 1) + ' / ' + N;
    $('#nextT').textContent = s.contact ? L.tile : L.title;
    nextBtn.setAttribute('aria-label', T[lang].next + ' ' + (s.contact ? L.tile : L.title));
  }
  if (nextBtn) nextBtn.addEventListener('click', function () { jump(clamp(Math.round(pos) + 1, 0, N - 1), true); });

  var looping = false;
  function loop() { frame(); if (!settled) requestAnimationFrame(loop); else looping = false; }
  function kick() {
    if (!looping) { looping = true; requestAnimationFrame(loop); }
    // Gentle idle settle onto nearest stop so cards never rest awkwardly mid-transition
    if (!isStatic && !reduce && !programmatic) {
      clearTimeout(settleTimer);
      settleTimer = setTimeout(function () {
        if (isStatic || programmatic) return;
        var rawPos = ((scrollY - trackTop) / vh - HERO_LEN) / STOP_LEN;
        if (rawPos > -0.22 && rawPos < N - 0.75) {
          var nearest = clamp(Math.round(rawPos), 0, N - 1);
          var diff = Math.abs(rawPos - nearest);
          if (diff > 0.035 && diff < 0.34) {
            programmatic = true;
            scrollTo({ top: trackTop + uFor(nearest) * vh, behavior: 'smooth' });
            setTimeout(function () { programmatic = false; }, 500);
          }
        }
      }, 300);
    }
  }
  addEventListener('scroll', kick, { passive: true });
  addEventListener('resize', function () { uS = null; setMode(); sizeCanvas(); fitVisuals(); frame(); startCanvas(); });
  addEventListener('hashchange', function () { resolveHash(false); });

  addEventListener('keydown', function (e) {
    if (isStatic || e.target.closest('input,textarea,dialog')) return;
    if (sp < .99 && (e.key === 'ArrowDown' || e.key === 'PageDown') && pos < 0) { e.preventDefault(); jump(0, true); return; }
    if (pos > -.5 && (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 'ArrowUp' || e.key === 'PageUp')) {
      var dir = (e.key === 'ArrowDown' || e.key === 'PageDown') ? 1 : -1;
      var target = Math.round(pos) + dir;
      if (target < 0) {
        e.preventDefault();
        if (history.replaceState) history.replaceState(null, '', location.pathname + location.search);
        scrollTo({ top: trackTop, behavior: 'smooth' });
        return;
      }
      if (target <= N - 1) { e.preventDefault(); jump(target, true); }
    }
  });

  /* ---------------------------------------------------------
     6. Smart Particle Canvas — crisp rim halo at rest → full shatter on scroll
     --------------------------------------------------------- */
  var cv = $('#particles'), ctx = cv.getContext('2d');
  var W = 0, H = 0, DPR = Math.min(devicePixelRatio || 1, 2);
  var parts = [], thumbs = [], ready = false, cvRunning = false, heroInView = true, mouse = { x: -9999, y: -9999 };
  var portraitEl = $('#portrait');

  function sizeCanvas() {
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    if (ready) { buildHome(); if (reduce) renderCanvasFrame(performance.now()); }
  }

  var srcData = null, GRID = 76;
  function sample(img) {
    var c = document.createElement('canvas'); c.width = GRID; c.height = GRID;
    var g = c.getContext('2d');
    var sw = img.naturalWidth, sh = img.naturalHeight, side = Math.min(sw, sh) * .98;
    var sx = clamp(sw * .58 - side / 2, 0, sw - side), sy = clamp(sh * .44 - side / 2, 0, sh - side);
    g.drawImage(img, sx, sy, side, side, 0, 0, GRID, GRID);
    try { srcData = g.getImageData(0, 0, GRID, GRID).data; } catch (e) { srcData = null; }
  }

  function rnd(a, b) { return a + Math.random() * (b - a); }

  function buildParticles() {
    parts = [];
    for (var gy = 0; gy < GRID; gy++) {
      for (var gx = 0; gx < GRID; gx++) {
        var nx = (gx + .5) / GRID * 2 - 1, ny = (gy + .5) / GRID * 2 - 1;
        var r2 = nx * nx + ny * ny;
        var idx = (gy * GRID + gx) * 4;
        var R = srcData[idx], G = srcData[idx + 1], B = srcData[idx + 2];
        var lum = (R * .299 + G * .587 + B * .114) / 255;
        var dissolve = clamp((ny - .38) / .62, 0, 1);
        if (r2 > 1 && ny < .2) continue;
        if (r2 > 1.2) continue;
        if (Math.random() < dissolve * .52) continue;
        var cR = clamp((R - 128) * 1.15 + 128, 0, 255), cG = clamp((G - 128) * 1.15 + 128, 0, 255), cB = clamp((B - 128) * 1.15 + 138, 0, 255);
        parts.push({
          nx: nx, ny: ny, r: Math.sqrt(r2),
          dy: dissolve > 0 ? Math.pow(Math.random(), 2) * dissolve * .52 : 0,
          dx: dissolve > 0 ? rnd(-.07, .07) * dissolve : 0,
          sz: .55 + (1 - lum) * .5,
          col: 'rgb(' + (cR | 0) + ',' + (cG | 0) + ',' + (cB | 0) + ')',
          a: dissolve > 0 ? 1 - dissolve * .48 : 1,
          fx: rnd(-1, 1), fy: rnd(-1, 1), fz: Math.random(),
          ph: rnd(0, 6.28),
          ox: 0, oy: 0, field: Math.random() < .44
        });
      }
    }
    thumbs = [];
    var palette = STOPS.map(function (s) { return s.c; });
    for (var t = 0; t < 140; t++) {
      thumbs.push({ fx: rnd(-1, 1), fy: rnd(-1, 1), fz: Math.random(), dark: Math.random() < .55, c: palette[t % palette.length], w: rnd(1, 1.6), lines: 1 + (Math.random() * 3 | 0) });
    }
  }

  var home = { x: 0, y: 0, r: 100 };
  function buildHome() {
    var b = portraitEl.getBoundingClientRect(), sb = cv.getBoundingClientRect();
    home.x = b.left - sb.left + b.width / 2; home.y = b.top - sb.top + b.height / 2; home.r = b.width / 2;
  }

  function shouldAnimateCanvas() {
    if (!ready || reduce || document.hidden) return false;
    if (isStatic && !heroInView) return false;
    return true;
  }

  var camZ = 0, t0 = performance.now();
  function renderCanvasFrame(now) {
    if (!ready || !W || !H) return;
    var time = (now - t0) / 1000;
    ctx.clearRect(0, 0, W, H);
    var e = ease(sp);
    // Fade interior particles IN as photo cross-fades OUT during initial scroll (sp: 0.04 -> 0.28)
    var shatterMix = isStatic ? 0 : clamp((sp - 0.04) / 0.24, 0, 1);
    buildHome();
    var cell = home.r * 2 / GRID;
    var rtl = lang === 'ar';
    var fcx = W * (rtl ? .27 : .73), fcy = H * .5;
    camZ = (pos > -2 ? Math.max(0, pos + 1.2) : 0) * .22 + time * .006;
    var mx = mouse.x, my = mouse.y, rep = home.r * .34;

    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      var rimFactor = p.r > 0.88 ? clamp((p.r - 0.88) / 0.22, 0, 1) : 0;
      var baseVis = Math.max(rimFactor * 0.85, shatterMix);
      if (baseVis <= 0.02 && e <= 0.01) continue;

      var floatOut = rimFactor * Math.sin(time * 1.4 + p.ph) * 4.5 * (1 - e);
      var hx = home.x + (p.nx + p.dx) * home.r + p.nx * floatOut;
      var hy = home.y + (p.ny + p.dy) * home.r + p.ny * floatOut;
      if (e < .08 && fine && !reduce) {
        var ddx = hx - mx, ddy = hy - my, dist = Math.sqrt(ddx * ddx + ddy * ddy);
        if (dist < rep) { var f = (1 - dist / rep) * 20; p.ox += ((ddx / (dist || 1)) * f - p.ox) * .2; p.oy += ((ddy / (dist || 1)) * f - p.oy) * .2; }
        else { p.ox *= .9; p.oy *= .9; }
      } else { p.ox *= .9; p.oy *= .9; }

      var x = hx + p.ox, y = hy + p.oy, size = cell * p.sz, alpha = p.a * baseVis;
      if (e > 0) {
        var z = ((p.fz - camZ) % 1 + 1) % 1; z = .12 + z * 1.1;
        var fx = fcx + p.fx * W * .54 * (.35 / z) * .9, fy = fcy + p.fy * H * .54 * (.35 / z) * .9;
        var fs = Math.max(1, 2.3 / z);
        var fa = p.field ? clamp((z - .16) / .3, 0, 1) * clamp((1.22 - z) / .3, 0, 1) * .82 : 0;
        x = lerp(x, fx, e); y = lerp(y, fy, e); size = lerp(size, fs, e); alpha = lerp(p.a * Math.max(baseVis, e), fa, e);
      }
      if (alpha <= .02) continue;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = p.col;
      ctx.fillRect(x - size / 2, y - size / 2, size, size);
    }

    if (e > .15) {
      var te = clamp((e - .15) / .6, 0, 1);
      for (var j = 0; j < thumbs.length; j++) {
        var q = thumbs[j];
        var qz = ((q.fz - camZ * 1.1) % 1 + 1) % 1; qz = .14 + qz * 1.1;
        var qx = fcx + q.fx * W * .58 * (.35 / qz), qy = fcy + q.fy * H * .58 * (.35 / qz);
        var qw = 9 * q.w / qz, qh = qw * .72;
        var qa = clamp((qz - .14) / .25, 0, 1) * clamp((1.24 - qz) / .3, 0, 1) * te;
        if (qa < .03 || qx < -qw || qx > W + qw || qy < -qh || qy > H + qh) continue;
        ctx.globalAlpha = qa * .9;
        ctx.fillStyle = q.dark ? '#14131c' : '#ffffff';
        ctx.fillRect(qx, qy, qw, qh);
        ctx.fillStyle = q.c;
        for (var l = 0; l < q.lines; l++) ctx.fillRect(qx + qw * .14, qy + qh * (.22 + l * .22), qw * (.7 - l * .15), Math.max(1, qh * .08));
        if (!q.dark) { ctx.globalAlpha = qa * .5; ctx.fillStyle = q.c; ctx.fillRect(qx, qy + qh - Math.max(1, qh * .06), qw, Math.max(1, qh * .06)); }
      }
    }
    ctx.globalAlpha = 1;
  }

  function canvasTick(now) {
    if (!shouldAnimateCanvas()) { cvRunning = false; return; }
    renderCanvasFrame(now);
    requestAnimationFrame(canvasTick);
  }
  function startCanvas() {
    if (reduce && ready) { renderCanvasFrame(performance.now()); return; }
    if (!cvRunning && shouldAnimateCanvas()) { cvRunning = true; requestAnimationFrame(canvasTick); }
  }

  function initCanvas() {
    var go = function () { buildParticles(); ready = true; sizeCanvas(); renderCanvasFrame(performance.now()); startCanvas(); };
    if (window.PORTRAIT_PIXELS) {
      var bin = atob(window.PORTRAIT_PIXELS), n = GRID * GRID;
      srcData = new Uint8ClampedArray(n * 4);
      for (var k = 0; k < n; k++) { srcData[k * 4] = bin.charCodeAt(k * 3); srcData[k * 4 + 1] = bin.charCodeAt(k * 3 + 1); srcData[k * 4 + 2] = bin.charCodeAt(k * 3 + 2); srcData[k * 4 + 3] = 255; }
      go();
    } else {
      var img = new Image();
      img.onload = function () { sample(img); if (!srcData) return; go(); };
      img.src = 'assets/diaa-portrait.jpg';
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        heroInView = es[0].isIntersecting;
        if (heroInView) startCanvas();
      }, { threshold: 0.01 }).observe(hero);
    }
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) startCanvas();
      syncRoomPreview(isStatic ? -1 : lastActive);
    });
    addEventListener('pointermove', function (e) { var sb = cv.getBoundingClientRect(); mouse.x = e.clientX - sb.left; mouse.y = e.clientY - sb.top; }, { passive: true });
    addEventListener('pointerleave', function () { mouse.x = mouse.y = -9999; });
  }

  /* ---------------------------------------------------------
     7. Micro-interactions + Copy Helpers
     --------------------------------------------------------- */
  var rotI = 0;
  function rotator() {
    if (reduce) return;
    setInterval(function () {
      if (document.hidden) return;
      var el = $('#rot'), words = T[lang].rot;
      el.classList.add('out');
      setTimeout(function () {
        rotI = (rotI + 1) % words.length;
        el.textContent = words[rotI];
        el.classList.remove('out'); el.classList.add('in'); void el.offsetWidth; el.classList.remove('in');
      }, 420);
    }, 2400);
  }

  function counters() {
    $$('.count').forEach(function (el) {
      var to = +el.dataset.to, suf = el.dataset.suf || '';
      if (reduce) return;
      var st = null;
      (function step(ts) {
        if (!st) st = ts;
        var p = clamp((ts - st) / 1800, 0, 1), k = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(to * k).toLocaleString('en-US') + suf;
        if (p < 1) requestAnimationFrame(step);
      })(performance.now() + 500);
    });
  }

  function magnetic() {
    if (!fine || reduce) return;
    $$('.magnetic').forEach(function (el) {
      if (el._m) return; el._m = 1;
      el.addEventListener('pointermove', function (e) {
        var b = el.getBoundingClientRect();
        el.style.transform = 'translate(' + (e.clientX - b.left - b.width / 2) * .16 + 'px,' + (e.clientY - b.top - b.height / 2) * .24 + 'px)';
      });
      el.addEventListener('pointerleave', function () {
        el.style.transition = 'transform .55s cubic-bezier(.22,1,.36,1)'; el.style.transform = '';
        setTimeout(function () { el.style.transition = ''; }, 550);
      });
    });
  }

  function toast(m) { var t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('on'); }, 2200); }
  function copyText(str, msg) {
    var ok = function () { toast(msg); };
    if (navigator.clipboard && isSecureContext) { navigator.clipboard.writeText(str).then(ok, fb); } else fb();
    function fb() { var ta = document.createElement('textarea'); ta.value = str; ta.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); ok(); } catch (e) {} ta.remove(); }
  }
  function copyEmail() { copyText(EMAIL, T[lang].copied); }

  function setSimple(v) {
    simple = v;
    try { localStorage.setItem('ds6-simple', v ? '1' : '0'); } catch (e) {}
    if (history.replaceState && location.hash === '#simple') history.replaceState(null, '', location.pathname + location.search);
    $$('.jp').forEach(function (p) { p.classList.remove('on'); });
    uS = null; lastActive = -2; pos = -9; tiles = []; panels = [];
    hero.style.cssText = '';
    if (portraitPhoto) portraitPhoto.style.cssText = '';
    setMode(); sizeCanvas(); fitVisuals(); observeStatic();
    scrollTo({ top: 0, behavior: 'instant' });
    frame(); startCanvas();
    toast(simple ? (lang === 'ar' ? 'تم تفعيل العرض المبسّط' : 'Simple view on') : (lang === 'ar' ? 'تم تفعيل العرض المتحرك' : 'Animated view on'));
  }

  function setLang(l) {
    if (l === lang || !T[l]) return;
    lang = l; try { localStorage.setItem('ds6-lang', l); } catch (e) {}
    rotI = 0; tiles = []; panels = [];
    renderText(); renderStops(); frame();
  }

  /* ---------------------------------------------------------
     7a. Live Facilitation Video Dialog (#reel) + EN/AR Subtitles
     --------------------------------------------------------- */
  var REEL = {
    en: {
      k: 'Live facilitation · 0:59 · Subtitled',
      h: 'Coaching a Department Director live in the room.',
      sub: 'Unscripted moment from a National Training Academy cohort: guiding a public-sector Department Director (“Nahed”) from where she stands today (Point A) to General Manager through concrete milestone goals.',
      pts: ['Live public-sector leadership cohort at NTA', 'Turning abstract career models into personal milestone steps', 'Synced English & Arabic subtitles (toggle CC anytime)'],
      book: 'Request a session like this',
      close: 'Back to portfolio'
    },
    ar: {
      k: 'تيسير مباشر · 0:59 · مترجم',
      h: 'كوتشينج حي لمديرة إدارة من داخل القاعة.',
      sub: 'لحظة حقيقية غير مُعدّة مسبقًا من إحدى دفعات الأكاديمية الوطنية للتدريب: مساعدة مديرة إدارة بالقطاع العام على تحديد خطواتها العملية للانتقال من موقعها الحالي (النقطة A) إلى «مدير عام» عبر الأهداف المرحلية.',
      pts: ['دفعة قيادية مباشرة للقطاع العام بالأكاديمية الوطنية', 'تحويل النماذج القيادية إلى خطوات وأهداف مرحلية واقعية', 'مصحوب بترجمة نصية متزامنة بالعربية والإنجليزية (زر CC)'],
      book: 'اطلب جلسة مماثلة لفريقك',
      close: 'العودة للبورتفوليو'
    }
  };

  function syncNativeTracks() {
    var vid = $('#reelVid');
    if (!vid || !vid.textTracks) return;
    for (var i = 0; i < vid.textTracks.length; i++) {
      vid.textTracks[i].mode = 'disabled'; // custom overlay renders crisply; fullscreen fallback handled below
    }
  }

  function renderReelText() {
    var R = REEL[lang];
    if (!$('#reel')) return;
    $('#reelK').textContent = R.k;
    $('#reelTitle').textContent = R.h;
    $('#reelSub').textContent = R.sub;
    $('#reelPts').innerHTML = R.pts.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('');
    $('#reelBookT').textContent = R.book;
    $('#reelCloseBtn').textContent = R.close;
    $('#reelX').setAttribute('aria-label', R.close);
    var vid = $('#reelVid');
    if (vid) updateCapEl($('#reelCap'), vid.currentTime || 0, ccOn);
  }

  var reelFocus = null;
  function openReel() {
    var d = $('#reel'), vid = $('#reelVid');
    if (!d) return;
    reelFocus = document.activeElement;
    syncRoomPreview(-1);
    syncNativeTracks();
    if (d.showModal) d.showModal(); else d.setAttribute('open', '');
    if (vid) { vid.currentTime = 0; updateCapEl($('#reelCap'), 0, ccOn); var p = vid.play(); if (p && p.catch) p.catch(function () {}); }
  }
  function bindReelTriggers() {
    $$('[data-reel]').forEach(function (el) {
      if (el._r) return; el._r = 1;
      el.addEventListener('click', function (e) { e.preventDefault(); openReel(); });
      if (el.tagName !== 'BUTTON') {
        el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openReel(); } });
      }
    });
  }
  (function () {
    var d = $('#reel'), vid = $('#reelVid'), ccBtn = $('#reelCC'), cap = $('#reelCap');
    if (!d) return;
    var closeIt = function () { d.close(); };
    $('#reelX').addEventListener('click', closeIt);
    $('#reelCloseBtn').addEventListener('click', closeIt);
    $('#reelBook').addEventListener('click', function () { d.close(); openProp(); });
    if (vid) vid.addEventListener('timeupdate', function () { updateCapEl(cap, vid.currentTime, ccOn); });
    if (ccBtn) {
      ccBtn.addEventListener('click', function () {
        ccOn = !ccOn;
        ccBtn.classList.toggle('on', ccOn);
        ccBtn.setAttribute('aria-pressed', String(ccOn));
        if (vid) updateCapEl(cap, vid.currentTime, ccOn);
      });
    }
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
    d.addEventListener('close', function () {
      if (vid && !vid.paused) vid.pause();
      syncRoomPreview(isStatic ? -1 : lastActive);
      if (reelFocus && reelFocus.focus) reelFocus.focus({ preventScroll: true });
    });
  })();

  /* ---------------------------------------------------------
     7b. Proposal request — 3 taps + Copy Brief fallback
     --------------------------------------------------------- */
  var PROP = {
    en: { k: 'Request a proposal', h: 'Tell me the problem in three taps.', sub: 'Pick what fits — send via Email, WhatsApp, or copy the brief in one click.',
      groups: [
        { id: 'who', label: 'Who is it for?', opts: ['Senior leaders', 'Managers & supervisors', 'Trainers', 'HR / L&D team', 'Whole organisation'] },
        { id: 'topic', label: 'What’s the topic?', opts: ['Leadership', 'AI for HR', 'Business Writing with AI', 'Digital learning', 'Trainer development', 'L&D review'] },
        { id: 'when', label: 'When?', opts: ['This month', 'Next 1–3 months', 'Just planning'] }],
      name: 'Your name, organisation & specific course (optional)', mail: 'Send by email', wa: 'WhatsApp', copyBtn: 'Copy brief', copiedBrief: 'Brief + email copied to clipboard', close: 'Close',
      body: { hi: 'Hello Diaa,', intro: 'I’d like a proposal. Here is the brief:', who: 'Audience', topic: 'Topic', when: 'Timing', from: 'From / Note', end: 'Thank you.' }, subj: 'Training enquiry' },
    ar: { k: 'اطلب عرضًا فنيًا', h: 'احكِ لي التحدي في ثلاث نقرات.', sub: 'اختر ما يناسبك — أرسل عبر البريد أو واتساب أو انسخ النص الجاهز بنقرة واحدة.',
      groups: [
        { id: 'who', label: 'لمن البرنامج؟', opts: ['القيادات العليا', 'المديرون والمشرفون', 'المدرّبون', 'فريق الموارد البشرية / التعلّم', 'المؤسسة بالكامل'] },
        { id: 'topic', label: 'ما الموضوع؟', opts: ['القيادة', 'الذكاء الاصطناعي للموارد البشرية', 'الكتابة المهنية بالـ AI', 'التعلّم الرقمي', 'تطوير المدرّبين', 'مراجعة وظيفة التعلّم'] },
        { id: 'when', label: 'متى؟', opts: ['هذا الشهر', 'خلال 1–3 أشهر', 'نخطّط فقط'] }],
      name: 'اسمك والجهة واسم البرنامج المطلوب (اختياري)', mail: 'أرسل بالبريد', wa: 'واتساب', copyBtn: 'نسخ الطلب', copiedBrief: 'تم نسخ تفاصيل الطلب والبريد الإلكتروني', close: 'إغلاق',
      body: { hi: 'مرحبًا ضياء،', intro: 'أودّ الحصول على عرض فني. هذه تفاصيل الطلب:', who: 'الفئة المستهدفة', topic: 'الموضوع', when: 'التوقيت', from: 'الجهة / ملاحظات', end: 'شكرًا لك.' }, subj: 'استفسار عن تدريب' }
  };

  var currentBriefText = '';
  function renderProp() {
    var P = PROP[lang], d = $('#prop');
    if (!d) return;
    $('#propK').textContent = P.k; $('#propTitle').textContent = P.h; $('#propSub').textContent = P.sub;
    $('#propX').setAttribute('aria-label', P.close);
    $('#propFields').innerHTML = P.groups.map(function (g) {
      return '<fieldset class="chips"><legend>' + esc(g.label) + '</legend>' + g.opts.map(function (o) {
        return '<label><input type="radio" name="' + g.id + '" value="' + esc(o) + '"><span>' + esc(o) + '</span></label>';
      }).join('') + '</fieldset>';
    }).join('') + '<label class="field"><input type="text" id="propName" placeholder="' + esc(P.name) + '" autocomplete="organization"></label>';
    $('#propMailT').textContent = P.mail;
    $('#propWa').textContent = P.wa;
    $('#propCopy').textContent = P.copyBtn;
    $$('input', d).forEach(function (i) { i.addEventListener('input', updateProp); });
    updateProp();
  }
  function updateProp() {
    var P = PROP[lang], B = P.body, d = $('#prop'), lines = [B.hi, '', B.intro], topic = '';
    P.groups.forEach(function (g) {
      var c = $('input[name="' + g.id + '"]:checked', d);
      if (c) { lines.push('- ' + B[g.id] + ': ' + c.value); if (g.id === 'topic') topic = c.value; }
    });
    var nm = ($('#propName').value || '').trim();
    if (nm) lines.push('- ' + B.from + ': ' + nm);
    lines.push('', B.end);
    var body = lines.join('\n'), subj = P.subj + (topic ? ' — ' + topic : '');
    currentBriefText = 'To: ' + EMAIL + '\nSubject: ' + subj + '\n\n' + body;
    $('#propMail').href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);
    $('#propWa').href = WA + '?text=' + encodeURIComponent(body);
  }
  var propFocus = null;
  function openProp(preTopic, preCourse) {
    var d = $('#prop');
    propFocus = document.activeElement;
    if (preTopic) {
      $$('input[name="topic"]', d).forEach(function (r) { r.checked = (r.value === preTopic); });
    }
    if (preCourse && $('#propName')) {
      var cur = ($('#propName').value || '').trim();
      if (!cur || cur.indexOf('Programme:') === 0 || cur.indexOf('البرنامج:') === 0) {
        $('#propName').value = (lang === 'ar' ? 'البرنامج: ' : 'Programme: ') + preCourse;
      }
    }
    updateProp();
    if (d.showModal) d.showModal(); else d.setAttribute('open', '');
  }
  (function () {
    var d = $('#prop');
    if (!d) return;
    $('#propX').addEventListener('click', function () { d.close(); });
    $('#propCopy').addEventListener('click', function () { copyText(currentBriefText, PROP[lang].copiedBrief); });
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
    d.addEventListener('close', function () { if (propFocus && propFocus.focus) propFocus.focus({ preventScroll: true }); });
  })();

  /* ---------------------------------------------------------
     8. Boot
     --------------------------------------------------------- */
  $$('.lang button').forEach(function (b) { b.addEventListener('click', function () { setLang(b.dataset.lang); }); });
  var vt = $('#viewToggle'); if (vt) vt.addEventListener('click', function () { setSimple(!simple); });
  renderText();
  renderStops();
  bindReelTriggers();
  setMode();
  frame();
  initCanvas();
  rotator();
  requestAnimationFrame(function () { document.body.classList.add('ready'); counters(); resolveHash(true); });
  addEventListener('load', function () { setMode(); sizeCanvas(); fitVisuals(); frame(); resolveHash(true); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { fitVisuals(); });
})();
