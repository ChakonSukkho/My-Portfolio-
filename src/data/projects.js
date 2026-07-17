export const projectFilters = ['All', 'Landing Pages', 'Full Stack', 'Dashboard', 'Automation', 'CMS / SEO'];

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const projects = [
  {
    id: 6,
    title: 'Food Restaurant Landing Page',
    category: 'Landing Pages',
    image: publicAsset('project-placeholder.svg'),
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    description:
      'A modern food landing page designed to introduce a restaurant, highlight popular dishes, and encourage visitors to order or book a table.',
    features: [
      'Appetizing hero section',
      'Featured food menu',
      'Clear order and reservation actions',
      'Mobile-friendly responsive layout',
    ],
    demoUrl: 'https://foodburgerlandingpage.netlify.app/',
    caseStudyUrl: '#',
    githubUrl: 'https://github.com/ChakonSukkho',
    caseStudy: {
      problem:
        'A restaurant needs to make a strong first impression online while helping customers quickly discover its food and take action.',
      solution:
        'Created a focused one-page experience with bold food presentation, simple content sections, and prominent ordering and reservation calls to action.',
      techStack: 'HTML, CSS, JavaScript, responsive web design',
      features:
        'Hero section, featured dishes, menu highlights, promotional content, calls to action, and a responsive mobile layout.',
      role:
        'Designed and developed the landing page, structured the content, styled the responsive interface, and refined the user experience.',
      outcome:
        'Produced a clean restaurant landing page that clearly presents the brand and guides visitors toward ordering food or making a reservation.',
    },
  },
  {
    id: 7,
    title: 'Barber Shop Landing Page',
    category: 'Landing Pages',
    image: publicAsset('project-placeholder.svg'),
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    description:
      'A polished barber shop landing page that presents services, builds trust, and makes it easy for customers to book an appointment.',
    features: [
      'Strong service-focused hero section',
      'Barber services and pricing',
      'Appointment booking call to action',
      'Responsive layout for every screen',
    ],
    demoUrl: 'https://barbershoplandpage.netlify.app/',
    caseStudyUrl: '#',
    githubUrl: 'https://github.com/ChakonSukkho',
    caseStudy: {
      problem:
        'A local barber shop needs a professional web presence that communicates its style, services, and booking options at a glance.',
      solution:
        'Built a concise landing page with a confident visual hierarchy, service information, trust-building content, and visible appointment actions.',
      techStack: 'HTML, CSS, JavaScript, responsive web design',
      features:
        'Hero section, service list, pricing, barber shop highlights, booking calls to action, and mobile-friendly navigation.',
      role:
        'Planned the page structure, developed the interface, created the responsive styling, and improved the booking journey.',
      outcome:
        'Delivered a professional landing page that helps the barber shop showcase its services and turn visitors into appointment enquiries.',
    },
  },
  {
    id: 8,
    title: 'Simple SaaS Landing Page',
    category: 'Landing Pages',
    image: publicAsset('project-placeholder.svg'),
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    description:
      'A clean SaaS product landing page that explains the product value, introduces key features, and guides users toward getting started.',
    features: [
      'Product-focused hero section',
      'Feature and benefit highlights',
      'Simple pricing presentation',
      'Conversion-focused calls to action',
    ],
    demoUrl: 'https://saastasklandingpage.netlify.app/',
    caseStudyUrl: '#',
    githubUrl: 'https://github.com/ChakonSukkho',
    caseStudy: {
      problem:
        'A new software product needs a simple way to communicate its value and move potential customers from discovery to sign-up.',
      solution:
        'Designed a clear, conversion-focused page with concise product messaging, feature explanations, pricing content, and repeated calls to action.',
      techStack: 'HTML, CSS, JavaScript, responsive web design',
      features:
        'Hero section, product benefits, feature cards, pricing overview, testimonials, calls to action, and responsive layouts.',
      role:
        'Designed the visual structure, developed the responsive page, organized the product content, and refined the conversion flow.',
      outcome:
        'Created an approachable SaaS landing page that makes the product easier to understand and gives visitors a clear next step.',
    },
  },
  {
    id: 1,
    title: 'ePengakap Daerah — District Scout Management System',
    category: 'Full Stack',
    image: publicAsset('project-placeholder.svg'),
    tech: ['React', 'Vite', 'TypeScript', 'Bootstrap', 'Supabase'],
    description:
      'A district-level scout management system covering users, groups, members, activities, reporting, settings, and audit logs.',
    features: [
      'Role-based access control',
      'Activity management',
      'Member import, search, pagination, validation, and reporting',
      'Supabase PostgreSQL integration',
    ],
    demoUrl: '#',
    caseStudyUrl: '#',
    githubUrl: 'https://github.com/ChakonSukkho',
    caseStudy: {
      problem:
        'District scout operations required a more organized system to manage users, groups, members, activities, reports, settings, and audit logs in one place.',
      solution:
        'Developed a responsive management platform with structured modules, access control, data validation, and Supabase-backed records.',
      techStack: 'React, Vite, TypeScript, Bootstrap, Supabase PostgreSQL',
      features:
        'RBAC, member import, searching, pagination, validation, reporting, group management, activity management, settings, and audit logs.',
      role:
        'Worked on front-end modules, UI improvements, Supabase integration support, testing, troubleshooting, and documentation.',
      outcome:
        'Improved operational visibility and made member, group, and activity information easier to manage and verify.',
    },
  },
  {
    id: 2,
    title: 'NetWatch — Agentless Network Monitoring Dashboard',
    category: 'Dashboard',
    image: publicAsset('project-placeholder.svg'),
    tech: ['React', 'Flask', 'PostgreSQL', 'Python', 'JWT'],
    description:
      'A network-monitoring prototype for device discovery, asset inventory, scan history, security alerts, and risk indicators.',
    features: [
      'Local Python scanner',
      'Device discovery',
      'Scan command retrieval',
      'JWT authentication',
      'Admin/operator/viewer roles',
      'Dashboard and reporting',
    ],
    demoUrl: '#',
    caseStudyUrl: '#',
    githubUrl: 'https://github.com/ChakonSukkho',
    caseStudy: {
      problem:
        'Manual network visibility made it difficult to quickly understand discovered devices, scan history, alerts, and security risk indicators.',
      solution:
        'Built a dashboard prototype that connects a local Python scanning workflow with a web dashboard for inventory and reporting.',
      techStack: 'React, Flask, PostgreSQL, Python, JWT',
      features:
        'Device discovery, scan command retrieval, scan history, security alerts, asset inventory, JWT authentication, and role-based views.',
      role:
        'Designed the dashboard workflow, supported scanner logic, tested API communication, and structured the reporting interface.',
      outcome:
        'Created a working prototype that demonstrates agentless monitoring, role-based access, and clearer network asset visibility.',
    },
  },
  {
    id: 3,
    title: 'Dynamics 365 / Power Automate Renewal Workflow',
    category: 'Automation',
    image: publicAsset('project-placeholder.svg'),
    tech: ['Power Automate', 'Dynamics 365 Field Service', 'Dataverse', 'Excel'],
    description:
      'A renewal-tracking workflow to support license renewal monitoring, reminders, and reporting.',
    features: [
      'Renewal date tracking',
      'Dataverse workflow support',
      'Required-field and duplicate-record troubleshooting',
      'Automated reminder process',
    ],
    demoUrl: '#',
    caseStudyUrl: '#',
    githubUrl: 'https://github.com/ChakonSukkho',
    caseStudy: {
      problem:
        'License renewal information needed better tracking, reminder support, and troubleshooting across Dynamics 365, Dataverse, Excel, and Power Automate.',
      solution:
        'Supported workflow creation and issue resolution for renewal records, required fields, duplicate records, and automated reminder logic.',
      techStack: 'Power Automate, Dynamics 365 Field Service, Dataverse, Excel',
      features:
        'Renewal date tracking, reminder process, workflow support, field validation, duplicate-record checks, and reporting support.',
      role:
        'Troubleshot Power Automate flows, verified records, checked required fields, documented issues, and supported workflow improvements.',
      outcome:
        'Helped improve renewal visibility and reduced manual tracking issues through a clearer automation workflow.',
    },
  },
  {
    id: 4,
    title: 'Inventa — Student Management System',
    category: 'Full Stack',
    image: publicAsset('project-placeholder.svg'),
    tech: ['PHP', 'MySQL', 'Azure App Service', 'cPanel'],
    description:
      'A PHP and MySQL-based student management system supported through debugging, deployment, and system fixes.',
    features: [
      'Login and session troubleshooting',
      'Database connection fixes',
      'SSL/HTTPS and redirect setup',
      'Azure deployment support',
    ],
    demoUrl: '#',
    caseStudyUrl: '#',
    githubUrl: 'https://github.com/ChakonSukkho',
    caseStudy: {
      problem:
        'The student management system required debugging and deployment support to solve login, database, redirect, and hosting issues.',
      solution:
        'Supported PHP/MySQL troubleshooting, fixed connection-related issues, and assisted deployment across Azure App Service and cPanel.',
      techStack: 'PHP, MySQL, Azure App Service, cPanel',
      features:
        'Login troubleshooting, session checks, database connection fixes, SSL/HTTPS configuration, redirect setup, and deployment support.',
      role:
        'Investigated errors, verified database configuration, supported hosting setup, tested fixes, and documented technical issues.',
      outcome:
        'Improved application stability and helped make the system accessible through proper hosting and configuration fixes.',
    },
  },
  {
    id: 5,
    title: 'WordPress Website & SEO Improvement',
    category: 'CMS / SEO',
    image: publicAsset('project-placeholder.svg'),
    tech: ['WordPress', 'AIOSEO', 'Google Analytics', 'SEMrush'],
    description:
      'Website maintenance and SEO improvement work for content, metadata, page structure, headings, and internal links.',
    features: [
      'SEO content improvement',
      'Website layout maintenance',
      'Google Analytics setup',
      'SEMrush review support',
    ],
    demoUrl: '#',
    caseStudyUrl: '#',
    githubUrl: 'https://github.com/ChakonSukkho',
    caseStudy: {
      problem:
        'Website content and structure needed SEO improvements, better metadata, page checks, and analytics visibility.',
      solution:
        'Supported WordPress content updates, SEO review, metadata improvement, heading structure checks, internal links, and analytics setup.',
      techStack: 'WordPress, AIOSEO, Google Analytics, SEMrush',
      features:
        'SEO content improvement, metadata checks, heading review, layout maintenance, analytics setup, and SEMrush review support.',
      role:
        'Maintained WordPress pages, reviewed SEO suggestions, updated content, checked analytics setup, and documented improvements.',
      outcome:
        'Improved website quality, SEO readiness, and visibility into website performance through analytics and review tools.',
    },
  },
];
