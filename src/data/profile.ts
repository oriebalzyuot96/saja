/* All content for Saja Al-Shannaq's portfolio, in English and Arabic.
   Facts come from the LinkedIn profile; the current Team Leader role at AZM FinTech was confirmed by the requester. */
import type { Lang } from '../i18n';
type T = Record<Lang, string>;
const t = (en: string, ar: string): T => ({ en, ar });

export const PERSON = {
  name: t('Saja Al-Shannaq', 'سجى الشناق'),
  short: t('Saja', 'سجى'),
  role: t('Software Team Leader · .NET · Angular · React', 'Software Team Leader · .NET · Angular · React'),
  email: 'saja.shannag@yahoo.com',
  linkedin: 'https://www.linkedin.com/in/saja-al-shannaq-450016131/',
  github: '',
  location: t('Jordan', 'الأردن'),
};

export const META = {
  title: t('Saja Al-Shannaq · Software Team Leader (.NET, Angular, React)', 'سجى الشناق · Software Team Leader (.NET و Angular و React)'),
  desc: t('Saja Al-Shannaq, Software Team Leader and Senior Software Engineer with 9+ years building fintech, e-government and enterprise systems in .NET, Angular and React. Currently leading a team at AZM FinTech.',
          'سجى الشناق، قيادة فريق برمجيات وخبرة Senior تتجاوز 9 سنوات في بناء أنظمة التقنية المالية والحكومة الإلكترونية والمؤسسات بـ .NET و Angular و React، وحاليًا في AZM FinTech.'),
};

export const NAV = {
  about: t('About', 'عنّي'), skills: t('Skills', 'المهارات'), projects: t('Work', 'الأعمال'),
  career: t('Career', 'المسيرة'), contact: t('Contact', 'تواصل'),
};

export const HERO = {
  hello: t("Hi, I'm Saja", 'مرحبًا، أنا سجى'), open: t('Team Leader at AZM FinTech', 'قيادة فريق في AZM FinTech'),
  l1: t('I lead teams that ship', 'أقود فرقًا تُطلق'), l2a: t('', ''), words: t('reliable|secure|scalable', 'موثوقة|آمنة|قابلة للتوسع'), l2b: t(' platforms,', ''),
  l2pre: t('', 'منصات '), l3: t('from .NET APIs to Angular & React.', 'من واجهات .NET إلى Angular و React.'),
  lede: t('Software Team Leader and Senior Software Engineer with <b>9+ years</b> building <b>fintech, e-government and enterprise</b> systems with <b>.NET, Angular and React</b>. Today I lead a team at <b>AZM FinTech</b>, part of the Saudi Azm group, from architecture and code review to delivery.',
          'قيادة فريق برمجيات وخبرة Senior <b>تتجاوز 9 سنوات</b> في بناء أنظمة <b>التقنية المالية والحكومة الإلكترونية والمؤسسات</b> باستخدام <b>.NET و Angular و React</b>. أقود اليوم فريقًا في <b>AZM FinTech</b> ضمن مجموعة عزم السعودية، من المعمارية ومراجعة الكود حتى التسليم.'),
  cta1: t('See my work', 'شاهد أعمالي'), cta2: t('Download CV', 'تحميل السيرة الذاتية'), cta3: t('Email me', 'راسلني'),
};

export const BENTO = {
  hand: t('hello! ☁️', 'مرحبًا! ☁️'), avail: t('Team Lead', 'قيادة فريق'),
  exp: t('Experience', 'الخبرة'), years: t('years in software, from Kuwait to Jordan and the Gulf', 'سنوات في البرمجيات، من الكويت إلى الأردن والخليج'),
  nowk: t('Now · AZM FinTech', 'حاليًا · AZM FinTech'),
  now: t('Leading a software team on fintech platforms for the Saudi Azm group', 'أقود فريق برمجيات على منصات التقنية المالية لمجموعة عزم السعودية'),
  chips: [t('.NET', '.NET'), t('Angular', 'Angular'), t('React', 'React'), t('Team leadership', 'قيادة الفرق')],
  clock: t('Local time · Jordan', 'الوقت المحلي · الأردن'), tz: t('GMT+3 · hybrid & remote', 'GMT+3 · عمل هجين وعن بُعد'),
  stack: t('Daily stack', 'أدواتي اليومية'),
  certk: t('Education', 'التعليم'), cert: t('B.Eng. Computer Engineering', 'بكالوريوس هندسة الحاسوب'), certs: t('Yarmouk University · 2010–2015', 'جامعة اليرموك · 2010–2015'),
  a11yk: t('Accessibility', 'إمكانية الوصول'), a11y: t('Try this site your way', 'جرّب الموقع على طريقتك'), a11ySub: t('Contrast, text size, motion, Arabic RTL.', 'التباين وحجم النص والحركة والعربية.'), a11yGo: t('Open settings →', 'فتح الإعدادات ←'),
};

export const ABOUT = {
  k: t('who am I?', 'من أنا؟'), t: t('About Me', 'نبذة عنّي'),
  badge: t('📍 Jordan · hybrid', '📍 الأردن · عمل هجين'),
  h: t('Engineer first, team lead by choice 🤝', 'الهندسة أولًا، والقيادة باختيار 🤝'),
  p1: t('I have spent 9+ years shipping software end to end: .NET back ends and APIs, and Angular and React front ends. That covers e-government services, e-banking, e-commerce and fintech.',
        'قضيت أكثر من 9 سنوات في تسليم البرمجيات من البداية للنهاية: خوادم وواجهات برمجية بـ .NET، وواجهات Angular و React، في خدمات الحكومة الإلكترونية والخدمات المصرفية والتجارة الإلكترونية والتقنية المالية.'),
  p2: t('My path runs from web development in Kuwait, through senior engineering on Gulf e-government projects and UAE digital transformation, to leading a fintech team today.',
        'بدأ مساري في تطوير الويب في الكويت، ثم الهندسة بمستوى Senior في مشاريع حكومة إلكترونية خليجية وتحول رقمي إماراتي، وصولًا إلى قيادة فريق تقنية مالية اليوم.'),
  name: t('Name', 'الاسم'), loc: t('Location', 'الموقع'), locs: t('Hybrid · open to remote', 'عمل هجين · وعن بُعد'),
  email: t('Email', 'البريد الإلكتروني'), li: t('LinkedIn', 'LinkedIn'),
  edu: t('Education', 'التعليم'), eduv: t('B.Eng. Computer Engineering', 'بكالوريوس هندسة الحاسوب'), edus: t('Yarmouk University · 2010–2015', 'جامعة اليرموك · 2010–2015'),
  lang: t('Languages', 'اللغات'), langv: t('Arabic · English', 'العربية · الإنجليزية'), langs: t('Arabic native · English professional', 'العربية لغة أم · الإنجليزية بمستوى مهني'),
  principles: [
    { t: t('Lead by example', 'القدوة في القيادة'), p: t('Hands-on code, honest reviews and mentoring that grows the team.', 'كود عملي ومراجعات صادقة وتوجيه يطوّر الفريق.') },
    { t: t('Full-stack ownership', 'ملكية كاملة'), p: t('.NET APIs and Angular / React UIs designed together, not separately.', 'واجهات .NET البرمجية وواجهات Angular و React تُصمَّم معًا لا بشكل منفصل.') },
    { t: t('Predictable delivery', 'تسليم موثوق'), p: t('Clear scope, steady sprints and releases the business can plan around.', 'نطاق واضح وسبرنتات ثابتة وإصدارات يمكن التخطيط حولها.') },
  ],
};

export const SKILLS = {
  k: t('what I use', 'ما أستخدمه'), t: t('Skills', 'المهارات'), p: t('Back end, front end and the leadership that ties them together.', 'الخوادم والواجهات والقيادة التي تربطهما.'),
  groups: [
    { icon: '⚙️', t: t('Back end', 'الخوادم'), items: [['dotnet', '.NET · C#'], ['dotnet', 'ASP.NET'], ['openapiinitiative', 'Web API · REST'], ['', 'SQL databases']] },
    { icon: '🎨', t: t('Front end', 'الواجهات الأمامية'), items: [['angular', 'Angular'], ['react', 'React'], ['typescript', 'TypeScript'], ['javascript', 'JavaScript'], ['html5', 'HTML5 · CSS3']] },
    { icon: '🧭', t: t('Leadership', 'القيادة'), items: [['', 'Team leadership'], ['', 'Code review & mentoring'], ['', 'Software design'], ['scrumalliance', 'Agile · Scrum']] },
    { icon: '🏦', t: t('Domains', 'المجالات'), items: [['', 'Fintech'], ['', 'e-Government'], ['', 'e-Banking'], ['', 'e-Commerce']] },
    { icon: '🛠️', t: t('Tools', 'الأدوات'), items: [['git', 'Git'], ['jira', 'Jira'], ['', 'Visual Studio · VS Code']] },
    { icon: '🌍', t: t('Languages', 'اللغات'), items: [['', 'Arabic · native'], ['', 'English · professional']] },
  ],
};

export const PROJECTS = {
  k: t("what I've built and led", 'ما بنيته وقدته'), t: t('Work', 'الأعمال'),
  p: t('Highlights from each role. Client systems are private, so they are shown as labelled illustrations.', 'أبرز ما في كل دور. أنظمة العملاء خاصة، لذلك تظهر كرسوم توضيحية مُعلَّمة.'),
  illus: t('Illustration', 'رسم توضيحي'),
  items: [
    { id: 'p-fintech', mock: 'fintech', org: t('AZM FinTech · Saudi Azm group', 'AZM FinTech · مجموعة عزم السعودية'), status: t('Team Leader', 'قيادة فريق'),
      title: t('Fintech platforms', 'منصات التقنية المالية'),
      p: t('Leading a software team at the fintech arm of the Saudi Azm group, whose Financial Services Marketplace connects users with banks and lenders in a fully digital journey.',
           'قيادة فريق برمجيات في ذراع التقنية المالية لمجموعة عزم السعودية، التي يربط سوق خدماتها المالية المستخدمين بالبنوك وجهات التمويل في رحلة رقمية بالكامل.'),
      hl: [t('Lead the team from architecture to release', 'قيادة الفريق من المعمارية حتى الإصدار'), t('.NET services with Angular and React front ends', 'خدمات .NET مع واجهات Angular و React'), t('Code reviews, mentoring and sprint planning', 'مراجعات الكود والتوجيه وتخطيط السبرنت')],
      tags: ['.NET', 'Angular', 'React', 'Leadership'] },
    { id: 'p-wasl', mock: 'wasl', org: t('Wasl · Saudi Azm × National Housing Co.', 'وصل · عزم السعودية × الشركة الوطنية للإسكان'), status: t('SAMA licensed · 2026', 'مرخّصة من ساما · 2026'),
      title: t('Wasl · Digital Financing Platform', 'وصل · منصة الخدمات التمويلية'),
      p: t('A digital financing-brokerage platform, set up as a 50/50 joint venture between Saudi Azm and the National Housing Company. It connects customers with licensed financing entities across Saudi Arabia, and the Saudi Central Bank (SAMA) granted it a digital brokerage licence in 2026.',
           'منصة وساطة رقمية للتمويل، أُسست كمشروع مشترك مناصفةً بين عزم السعودية والشركة الوطنية للإسكان، وتربط العملاء بجهات التمويل المرخّصة في المملكة. حصلت على ترخيص الوساطة الرقمية من البنك المركزي السعودي (ساما) عام 2026.'),
      hl: [t('Led the team building financing request, offer comparison and tracking journeys', 'قيادة الفريق في بناء رحلات طلب التمويل ومقارنة العروض وتتبع الطلبات'), t('.NET services and APIs behind an Angular front end', 'خدمات وواجهات برمجية .NET خلف واجهة Angular'), t('Security, quality and delivery to fintech regulatory standards', 'الأمان والجودة والتسليم وفق المعايير التنظيمية للتقنية المالية')],
      tags: ['.NET', 'Angular', 'Fintech', 'SAMA'], link: 'https://www.argaam.com/en/article/articledetail/id/1832972' },
    { id: 'p-tahaluf', mock: 'lowcode', org: t('Tahaluf Al Emarat Technical Solutions', 'تحالف الإمارات للحلول التقنية'), status: t('Senior Engineer', 'Senior Engineer'),
      title: t('UAE digital transformation', 'التحول الرقمي في الإمارات'),
      p: t('Senior engineering on digital-transformation and workflow-automation solutions for UAE government and enterprise clients, with Angular front ends.',
           'هندسة بمستوى Senior في حلول التحول الرقمي وأتمتة سير العمل للجهات الحكومية والمؤسسات في الإمارات، بواجهات Angular.'),
      hl: [t('Angular front ends for enterprise workflows', 'واجهات Angular لسير العمل المؤسسي'), t('Software design and delivery in a hybrid team', 'تصميم البرمجيات وتسليمها ضمن فريق هجين')],
      tags: ['Angular', 'TypeScript', '.NET'] },
    { id: 'p-egov', mock: 'egov', org: t('Tech Process Solutions', 'Tech Process Solutions'), status: t('Senior Engineer', 'Senior Engineer'),
      title: t('e-Government & e-Banking', 'الحكومة الإلكترونية والخدمات المصرفية'),
      p: t('An Amman company (since 2009) delivering e-services, e-government and e-banking solutions across the Gulf. I built ASP.NET web applications and e-services for government clients.',
           'شركة في عمّان (منذ 2009) تقدّم الخدمات الإلكترونية والحكومة الإلكترونية والحلول المصرفية في الخليج. بنيت تطبيقات ويب وخدمات إلكترونية بـ ASP.NET لجهات حكومية.'),
      hl: [t('ASP.NET e-services and customised web applications', 'خدمات إلكترونية وتطبيقات ويب مخصصة بـ ASP.NET'), t('Government projects in the Gulf region', 'مشاريع حكومية في منطقة الخليج')],
      tags: ['ASP.NET', 'C#', 'SQL'] },
    { id: 'p-arabesque', mock: 'web', org: t('Arabesque · Kuwait', 'Arabesque · الكويت'), status: t('Web Developer', 'Web Developer'),
      title: t('Web & e-commerce solutions', 'حلول الويب والتجارة الإلكترونية'),
      p: t('Web development at Arabesque, a Kuwaiti IT company founded in 1993 and a Microsoft Gold Partner, delivering web and e-commerce solutions on-site in Kuwait.',
           'تطوير الويب في Arabesque، شركة تقنية كويتية تأسست عام 1993 وشريك ذهبي لمايكروسوفت، تقدّم حلول الويب والتجارة الإلكترونية في الكويت.'),
      hl: [t('Websites and web applications for Kuwaiti clients', 'مواقع وتطبيقات ويب لعملاء كويتيين'), t('Microsoft stack in production', 'تقنيات مايكروسوفت في بيئات الإنتاج')],
      tags: ['ASP.NET', 'JavaScript', 'HTML/CSS'] },
  ],
};

export const CAREER = {
  k: t("where I've been", 'أين عملت'), t: t('Career', 'المسيرة المهنية'), now: t('Current', 'الحالي'),
  jobs: [
    { dot: 'AZM', when: t('Feb 2023 – Present · Jordan · Hybrid', 'فبراير 2023 – حتى الآن · الأردن · هجين'), co: 'AZM FinTech', role: t('Software Team Leader · Senior Software Engineer', 'Software Team Leader · Senior Software Engineer'), current: true,
      about: t('The fintech arm of the Saudi Azm group, behind a Financial Services Marketplace that connects users with banks and lenders.', 'ذراع التقنية المالية لمجموعة عزم السعودية، وصاحبة سوق للخدمات المالية يربط المستخدمين بالبنوك وجهات التمويل.'),
      b: [t('Lead a software team: planning, task breakdown, code reviews and mentoring.', 'قيادة فريق برمجيات: التخطيط وتقسيم المهام ومراجعات الكود والتوجيه.'),
          t('Design and build .NET services with Angular and React front ends for fintech products.', 'تصميم وبناء خدمات .NET مع واجهات Angular و React لمنتجات التقنية المالية.'),
          t('Lead delivery on Wasl, the SAMA-licensed digital financing platform (Saudi Azm × National Housing Co.).', 'قيادة التسليم في منصة وصل للخدمات التمويلية المرخّصة من ساما (عزم × الوطنية للإسكان).'),
          t('Joined as Senior Software Engineer and grew into the Team Leader role.', 'انضممت بدور Senior Software Engineer وتطوّرت إلى دور قيادة الفريق.')],
      tags: ['.NET', 'Angular', 'React', 'Leadership'] },
    { dot: 'TAH', when: t('May 2022 – Feb 2023 · Jordan · Hybrid', 'مايو 2022 – فبراير 2023 · الأردن · هجين'), co: 'Tahaluf Al Emarat Technical Solutions', role: t('Senior Software Engineer', 'Senior Software Engineer'),
      about: t('A UAE digital-transformation company delivering enterprise systems, AI and workflow automation to government and enterprise.', 'شركة إماراتية للتحول الرقمي تقدّم الأنظمة المؤسسية والذكاء الاصطناعي وأتمتة سير العمل للجهات الحكومية والمؤسسات.'),
      b: [t('Senior engineering on enterprise solutions with Angular front ends.', 'هندسة بمستوى Senior في حلول مؤسسية بواجهات Angular.')],
      tags: ['Angular', 'TypeScript'] },
    { dot: 'TPS', when: t('Sep 2019 – Jun 2022 · Jordan · Hybrid', 'سبتمبر 2019 – يونيو 2022 · الأردن · هجين'), co: 'Tech Process Solutions', role: t('Senior Software Engineer', 'Senior Software Engineer'),
      about: t('An Amman IT company (founded 2009) specialised in e-services, e-government and e-banking solutions for the Gulf.', 'شركة تقنية في عمّان (تأسست 2009) متخصصة في الخدمات الإلكترونية والحكومة الإلكترونية والحلول المصرفية للخليج.'),
      b: [t('Built ASP.NET e-services and web applications for government clients in the Gulf.', 'بناء خدمات إلكترونية وتطبيقات ويب بـ ASP.NET لجهات حكومية في الخليج.')],
      tags: ['ASP.NET', 'C#'] },
    { dot: 'ARB', when: t('Jul 2017 – Aug 2019 · Kuwait · On-site', 'يوليو 2017 – أغسطس 2019 · الكويت · حضوري'), co: 'Arabesque', role: t('Web Developer', 'Web Developer'),
      about: t('A Kuwaiti IT company founded in 1993, a Microsoft Gold Partner delivering web and e-commerce solutions.', 'شركة تقنية كويتية تأسست عام 1993، شريك ذهبي لمايكروسوفت تقدّم حلول الويب والتجارة الإلكترونية.'),
      b: [t('Developed websites and web applications for clients in Kuwait.', 'تطوير مواقع وتطبيقات ويب لعملاء في الكويت.')],
      tags: ['ASP.NET', 'JavaScript'] },
    { dot: 'DA', when: t('Dec 2016 – May 2017', 'ديسمبر 2016 – مايو 2017'), co: 'Dare Academy', role: t('Web Developer', 'Web Developer'),
      about: t('First professional role in web development.', 'أول دور مهني في تطوير الويب.'),
      b: [t('Built and maintained web pages and features.', 'بناء صفحات وميزات الويب وصيانتها.')],
      tags: ['HTML/CSS', 'JavaScript'] },
  ],
  edu: [
    { t: t('🎓 B.Eng. Computer Engineering', '🎓 بكالوريوس هندسة الحاسوب'), s: t('Yarmouk University · 2010–2015', 'جامعة اليرموك · 2010–2015') },
  ],
};

export const CONTACT = {
  t: t("Let's build something reliable together", 'لنبنِ معًا شيئًا موثوقًا'),
  p: t('Open to team-lead and senior engineering roles in .NET, Angular and React, hybrid or remote.', 'أرحّب بأدوار قيادة الفرق والهندسة بمستوى Senior في .NET و Angular و React، هجين أو عن بُعد.'),
  copy: t('Copy', 'نسخ'),
  avail: [t('🧭 Team lead', '🧭 قيادة فرق'), t('🌍 Remote', '🌍 عن بُعد'), t('🏢 Hybrid', '🏢 هجين'), t('⏱ Full-time', '⏱ دوام كامل')],
};

export const FOOTER = {
  tag: t('Software Team Leader · .NET, Angular, React', 'Software Team Leader · .NET و Angular و React'),
  avail: t('Open to new opportunities', 'أرحّب بالفرص الجديدة'), email: t('Email me', 'راسلني'), cv: t('Download CV', 'تحميل السيرة الذاتية'),
  explore: t('Explore', 'استكشف'), connect: t('Connect', 'تواصل'), rights: t('All rights reserved.', 'جميع الحقوق محفوظة.'),
  local: t('Jordan', 'الأردن'), other: t('العربية', 'English'),
};

/** Runtime config for public/app.js (palette commands, links, code tile, storage keys). */
export const siteCfg = (base: string) => ({
  key: 'sa',
  cv: base + 'Saja-Al-Shannaq-CV.pdf',
  email: PERSON.email,
  linkedin: PERSON.linkedin,
  sections: [
    { id: 'home', e: '🏠', en: 'Home', ar: 'الرئيسية' },
    { id: 'about', e: '👋', en: 'About me', ar: 'عنّي' },
    { id: 'skills', e: '🧰', en: 'Skills', ar: 'المهارات' },
    { id: 'projects', e: '🚀', en: 'Work', ar: 'الأعمال' },
    { id: 'career', e: '🧭', en: 'Career', ar: 'المسيرة المهنية' },
    { id: 'contact', e: '✉️', en: 'Contact', ar: 'تواصل' },
  ],
  projects: [
    { id: 'p-fintech', e: '💸', en: 'Fintech platforms (AZM FinTech)', ar: 'منصات التقنية المالية' },
    { id: 'p-wasl', e: '🏦', en: 'Wasl financing platform', ar: 'منصة وصل للتمويل' },
    { id: 'p-tahaluf', e: '🧩', en: 'UAE digital transformation', ar: 'التحول الرقمي في الإمارات' },
    { id: 'p-egov', e: '🏛️', en: 'e-Government & e-Banking', ar: 'الحكومة الإلكترونية والخدمات المصرفية' },
  ],
  code: [
    ['c', '// clean APIs, calm releases'],
    ['', `<span class="c-k">public class</span> <span class="c-f">SajaController</span> : <span class="c-f">ControllerBase</span> {`],
    ['', `  [<span class="c-f">HttpGet</span>(<span class="c-s">"team"</span>)]`],
    ['', `  <span class="c-k">public</span> IActionResult <span class="c-f">Lead</span>() =&gt;`],
    ['', `    <span class="c-f">Ok</span>(<span class="c-k">new</span> { years = <span class="c-n">9</span>, stack = <span class="c-s">".NET + Angular + React"</span> });`],
    ['', '}'],
  ],
});
