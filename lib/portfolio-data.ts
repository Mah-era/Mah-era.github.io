export type RoomId =
  | 'hub'
  | 'education'
  | 'experience'
  | 'projects'
  | 'skills'
  | 'achievements'
  | 'contact';
export type WorldItem = {
  eyebrow: string;
  title: string;
  body: string;
  highlights?: string[];
  image?: string;
  language?: string;
  link?: string;
  linkLabel?: string;
};
export const roomOrder: RoomId[] = [
  'hub',
  'education',
  'experience',
  'projects',
  'skills',
  'achievements',
  'contact',
];
export const roomData: Record<
  RoomId,
  {
    label: string;
    category: string;
    title: string;
    subtitle: string;
    color: string;
    accent: string;
    ink: string;
  }
> = {
  hub: {
    label: 'Profile',
    category: 'Profile',
    title: '35+ projects.\n8+ client accounts.',
    subtitle:
      'Coordinated 35+ client projects at Mindscape and communication across 250+ stakeholders at PFS. Secured BDT 1.4M+ in sponsorship commitments through NSU Debate Club leadership.',
    color: '#ded9cd',
    accent: '#756047',
    ink: '#282b27',
  },
  education: {
    label: 'Education',
    category: 'Education',
    title: 'Supply chain\n& marketing.',
    subtitle:
      'Bachelor of Business Administration at North South University. Expected graduation: Fall 2026. Current CGPA: 3.21/4.00.',
    color: '#c2c6ba',
    accent: '#5c6959',
    ink: '#2c332c',
  },
  experience: {
    label: 'Work Experience',
    category: 'Experience',
    title: '35+ projects.\n8+ client accounts.',
    subtitle:
      'Helped shorten planning-to-execution turnaround by an estimated 15–20% at Mindscape. Built a Notion workflow that reduced recurring status-check effort by an estimated 20–25%.',
    color: '#c1cacb',
    accent: '#526568',
    ink: '#293435',
  },
  projects: {
    label: 'Projects',
    category: 'Projects',
    title: '18 projects.\n6 featured applications.',
    subtitle:
      '30+ supply-chain KPIs, 15 distribution modules, and a 120-day production scheduler. AI-assisted prototypes translating operational requirements into analysis, reporting, and scenario decisions.',
    color: '#ddd5c9',
    accent: '#77604e',
    ink: '#342e29',
  },
  skills: {
    label: 'Skills',
    category: 'Skills',
    title: 'Analysis, planning\n& communication.',
    subtitle:
      'Applied across 35+ client projects, 250+ stakeholder records and follow-ups, and prototypes covering 30+ supply-chain KPIs and 15 distribution modules.',
    color: '#c7ccbd',
    accent: '#626a53',
    ink: '#30372b',
  },
  achievements: {
    label: 'Leadership',
    category: 'Leadership',
    title: 'BDT 1.4M+\nin commitments.',
    subtitle:
      'Secured BDT 1.4M+ in sponsorship and partnership commitments at NSU Debate Club. Co-led a 300-member volunteer network and coordinated 60+ initiatives reaching 350+ participants.',
    color: '#d3c8b6',
    accent: '#806b4d',
    ink: '#3d362b',
  },
  contact: {
    label: 'Contact',
    category: 'Contact',
    title: 'Graduate roles\n& opportunities.',
    subtitle:
      'Based in Dhaka. Interested in graduate and management trainee roles across supply chain, operations, business analysis, and commercial planning.',
    color: '#cec9c4',
    accent: '#746660',
    ink: '#35302e',
  },
};
export const experiences: WorldItem[] = [
  {
    eyebrow: '2023–2025 · PROJECT PLANNING',
    title: 'Mindscape Communication',
    body: 'Coordinated 35+ marketing, branding, and activation projects across 8+ client accounts, helping shorten planning-to-execution turnaround by an estimated 15–20%. Junior Executive, Planning and Project Management.',
    highlights: [
      'Reduced recurring status-check effort by an estimated 20–25% through a Notion workflow centralising requirements, task ownership, approvals, revisions, and cross-functional follow-ups.',
      'Supported 30+ client and internal reviews with structured briefs and presentation-ready proposals, helping reduce clarification cycles by an estimated 8%.',
      'Coordinated technical and operational requirements across 5+ major campaigns, including BATB–We Race As One, BATB IWS, and BAT UK–TOPS.',
      'Supported 8+ accounts, including Igloo, IOM, UNDP, USAID, IFC, and Swisscontact, through Mindscape Communication; aligned briefs, timelines, approvals, and delivery requirements across accounts.',
    ],
  },
  {
    eyebrow: '2022–2023 · ADMINISTRATION',
    title: 'Albeliz.com',
    body: 'Completed 300+ website updates and organised 150+ financial and administrative records, supporting accurate customer-facing information and traceable business documentation. Office Assistant, Administration.',
    highlights: [
      'Completed 300+ website content updates to maintain accurate product, business, and promotional information.',
      'Organised 150+ financial and administrative records to support transaction documentation, routine reporting, and information retrieval.',
    ],
  },
  {
    eyebrow: '2020–2023 · STAKEHOLDER COORDINATION',
    title: 'Project Finance Solution',
    body: 'Maintained communication records and follow-ups across 250+ stakeholders and coordinated 50+ client and internal meetings, improving visibility of pending actions. Stakeholder Communication Coordinator, Administration.',
    highlights: [
      'Coordinated logistics and participant communication for 50+ client and internal meetings.',
      'Confirmed schedules, participants, and required information, and tracked pending actions between clients and the administrative team.',
    ],
  },
  {
    eyebrow: '2020–2021 · ADMINISTRATIVE OPERATIONS',
    title: 'CrossRoads Initiative',
    body: 'Standardised 100+ administrative and operational records and coordinated 50+ meetings and activities, improving information access, task ownership, and follow-up consistency. Administrative Coordinator.',
    highlights: [
      'Centralised 100+ administrative and operational records to improve consistency and access to information.',
      'Coordinated 50+ internal meetings and operational activities, including schedules, responsibilities, and follow-up requirements.',
    ],
  },
];
export const projects: WorldItem[] = [
  {
    eyebrow: '120 DAYS · 30 ORDERS · 3 FACTORIES',
    title: 'PlantCore',
    body: 'Built a 120-day production-planning prototype for 30 garment orders across 3 factories, 8 sewing lines, and 10 styles, comparing capacity, shipment risk, and disruption-recovery decisions using demonstration data.',
    highlights: [
      'Evaluates 7 recovery alternatives and 5 dispatch rules to compare responses to capacity, material, quality, and delivery disruptions.',
      'Compares recovery options using available capacity, shipment delays, incremental costs, penalties, and margin exposure.',
      'Links corrective actions to RACI responsibilities and PDCA/Kaizen reviews; evaluates disruption scenarios using modelled delivery, cost, and margin outcomes.',
    ],
    language: 'Python · FastAPI · SQLite',
    link: 'https://github.com/Mah-era/PlantCore',
    linkLabel: 'View repository',
  },
  {
    eyebrow: '20 SCENARIOS · QUALITY & RECOVERY',
    title: 'FactorySphere',
    body: 'Built an apparel quality-analysis prototype with 20 synthetic quality scenarios to trace defects, calculate Cost of Poor Quality, and compare recovery decisions against capacity, cost, and delivery constraints.',
    highlights: [
      'Connects defects with factories, production lines, operators, material lots, and shipments to support structured root-cause investigation.',
      'Calculates quality trends and Cost of Poor Quality, then compares recovery options using inspection capacity, rework feasibility, and delivery risk.',
      'Structures CAPA closure around evidence gates, effectiveness checks, and 30/60/90-day follow-up reviews using demonstration scenarios.',
    ],
    language: 'JavaScript · IndexedDB · SheetJS',
    link: 'https://github.com/Mah-era/FactorySphere',
    linkLabel: 'View repository',
  },
  {
    eyebrow: '8 DOMAINS · 30+ KPIS',
    title: 'SCM Analytics Studio',
    body: 'Consolidated 8 supply-chain domains and 30+ KPIs into one offline analytics prototype, automating data preparation, performance calculations, and management-report exports.',
    highlights: [
      'Imports CSV and Excel data, maps columns, cleans records, and retains mappings for repeat uploads.',
      'Calculates forecast error, inventory, supplier, service, and cost measures; includes ABC/XYZ segmentation, safety stock, and reorder-point analysis.',
      'Exports management reports and analysis outputs using Python, Streamlit, Pandas, Plotly, and SQLite.',
    ],
    language: 'Python · Streamlit · Pandas',
    image: './assets/scm-studio.png',
    link: 'https://github.com/Mah-era/scm-analytics-studio',
    linkLabel: 'View repository',
  },
  {
    eyebrow: '13 MODULES · 9 KPI DASHBOARDS',
    title: 'ForecastSync',
    body: 'Built 13 analysis modules, a 10-factor forecast engine, 9 KPI dashboards, and 15 visualisations to compare demand, inventory, and forecast risk in one planning prototype.',
    highlights: [
      'Validates uploaded CSV, Excel, and JSON records before analysis.',
      'Compares forecasting methods and calculates forecast error, safety stock, and reorder points to support planning decisions.',
      'Combines regional demand views with optional external market research, keeping data sources and assumptions visible.',
    ],
    language: 'TypeScript · Next.js · Recharts',
    image: './assets/forecastsync.png',
    link: 'https://github.com/Mah-era/ForecastSync',
    linkLabel: 'View repository',
  },
  {
    eyebrow: '15 MODULES · 21+ VISUALISATIONS',
    title: 'Distributor Management',
    body: 'Centralised 15 distribution modules and 21+ performance visualisations in a browser-based prototype, connecting inventory, orders, transport, delivery, returns, and cost monitoring.',
    highlights: [
      'Centralises operational records and filters across channels, warehouses, orders, deliveries, and returns.',
      'Displays KPI formulas and underlying values alongside performance charts to make calculations traceable.',
      'Provides route visibility, management reports, and data exports. Records are stored locally in the browser.',
    ],
    language: 'React · Recharts · ECharts',
    image: './assets/distributor-management.png',
    link: 'https://github.com/Mah-era/scm-distributor-management',
    linkLabel: 'View repository',
  },
  {
    eyebrow: '10 TRANSFORMATIONS · 24 VISUALS',
    title: 'InsightBI',
    body: 'Built a reporting prototype supporting 50 MB CSV/Excel uploads, 10 data transformations, and 24 visualisation types, connecting raw data to SQL aggregation, calculated measures, and interactive reports.',
    highlights: [
      'Supports CSV/Excel ingestion, 10 data transformations, SQL aggregation, and DAX-lite calculated measures.',
      'Provides 24 visualisation types with cross-filtering and drill-down for investigating trends and exceptions.',
      'Validated reporting workflows across 13 demonstration datasets, 8 reports, and 136 dashboard widgets; implemented authentication and 3 access levels.',
    ],
    language: 'TypeScript · React · SQL',
    image: './assets/insightbi.png',
    link: 'https://github.com/Mah-era/insightbi',
    linkLabel: 'View repository',
  },
  {
    eyebrow: 'FMCG BRAND & CUSTOMER EXPERIENCE',
    title: 'FruTea',
    body: 'Translated 5 instant-tea flavour concepts into an interactive brand website, combining 3D packaging demonstrations, preparation guidance, and customer-facing product information.',
    highlights: [
      'Presents five flavour concepts through interactive 3D packaging and preparation guidance.',
      'Coordinates product information and scroll-based demonstrations to explain the proposed customer experience.',
      'Includes a brand-themed arcade game. FruTea is a product and website concept, not an operating consumer-goods business.',
    ],
    language: 'JavaScript · Three.js · GSAP',
    image: './assets/frutea-site.webp',
    link: 'https://github.com/Mah-era/frutea',
    linkLabel: 'View repository',
  },
  {
    eyebrow: 'LEARNING SIMULATION',
    title: 'Purrfect Supply Chain',
    body: 'Modelled 6 operational locations in a supply-chain simulation, connecting ordering decisions and lead times to stockouts, service levels, operating costs, and the bullwhip ratio.',
    highlights: [
      'Models replenishment, stochastic demand, and stockouts across six operational locations.',
      'Calculates forecast error, operating costs, service levels, and the bullwhip ratio as decisions change.',
      'Explains cause and effect through analytical feedback and report exports; results describe simulated operations.',
    ],
    language: 'JavaScript · React · SVG',
    image: './assets/purrfect-supply-chain.webp',
    link: 'https://github.com/Mah-era/cozy-cat-scm-bull-game',
    linkLabel: 'View repository',
  },
  {
    eyebrow: 'TASK PLANNING & PRIORITISATION',
    title: 'FocusFlow Planner',
    body: 'Developed an offline planning tool that organises tasks, deadlines, and dependencies using a rule-based text parser, calendar views, and a Gantt timeline.',
    highlights: [
      'Stores task records locally in IndexedDB and supports offline access through service-worker caching.',
      'Combines deadline reminders and a persistent focus timer with planning views to support daily prioritisation.',
    ],
    language: 'JavaScript · IndexedDB · PWA',
    link: 'https://github.com/Mah-era/focusflow-planner',
    linkLabel: 'View repository',
  },
  {
    eyebrow: 'PERSONAL FINANCE ANALYSIS',
    title: 'Mahera’s Pocket',
    body: 'Developed a personal-finance tracker for recording income, expenses, and savings, then reviewing spending patterns through period comparisons and category summaries.',
    highlights: [
      'Calculates savings-rate alerts, spending projections, and category anomalies using defined rules.',
      'Provides searchable transaction records, calendar summaries, custom charts, and data exports with browser-local storage.',
    ],
    language: 'JavaScript · Canvas · localStorage',
    link: 'https://github.com/Mah-era/finance-tracker',
    linkLabel: 'View repository',
  },
  {
    eyebrow: 'PERSONAL DATA & VISUALISATION',
    title: 'Mood Garden',
    body: 'Converted daily records across 5 mood states, stress, energy, and habits into calendar heatmaps, monthly trends, and exploratory comparisons in an offline analytics tracker.',
    highlights: [
      'Records five mood states alongside stress, energy, and daily prayer completion.',
      'Generates calendar heatmaps, trend charts, and exploratory comparisons; supports JSON import and export for backups.',
    ],
    language: 'JavaScript · SVG · Canvas',
    link: 'https://github.com/Mah-era/moodtracker',
    linkLabel: 'View repository',
  },
  {
    eyebrow: 'DIGITAL COMMUNICATION',
    title: '3D Portfolio',
    body: 'Organised 18 projects and professional experience into 7 interactive 3D rooms, with 6 featured project exhibits, mobile navigation, and selectable lighting modes.',
    highlights: [
      'Built room transitions, interactive project displays, animated residents, and selectable lighting modes.',
      'Separated content data from reusable scene components and configured static deployment through GitHub Actions.',
    ],
    language: 'React · TypeScript · Three.js',
    link: 'https://github.com/Mah-era/Portfolio',
    linkLabel: 'View repository',
  },
  {
    eyebrow: 'INTERACTION & REUSABLE LOGIC',
    title: 'Save Farzu',
    body: 'Developed a collection of 21 browser microgames using shared game states, timed challenges, and reusable interaction logic.',
    highlights: [
      'Supports keyboard, mouse, and touch controls with difficulty adjustments across challenges.',
      'Combines character animation, procedural audio, and logic checks within a shared application structure.',
    ],
    language: 'JavaScript · SVG · Web Audio',
    link: 'https://github.com/Mah-era/save-farzu',
    linkLabel: 'View repository',
  },
  {
    eyebrow: 'STATE & PROGRESSION SYSTEMS',
    title: 'PawPaw World',
    body: 'Developed a 2D browser exploration game with interconnected environments, movement physics, quests, and persistent progress.',
    highlights: [
      'Organised world rendering, player movement, audio, and game progression into separate JavaScript modules.',
      'Tracks collectibles, upgrades, and quest completion through a journal and locally saved records.',
    ],
    language: 'JavaScript · Canvas · Web Audio',
    link: 'https://github.com/Mah-era/pawpaw-world',
    linkLabel: 'View repository',
  },
  {
    eyebrow: '3D DEVELOPMENT · ARCHIVED VERSION',
    title: 'PawPaw World 3D',
    body: 'Adapted a 2D exploration game into 5 navigable 3D districts, rebuilding movement, camera behaviour, mission tracking, and persistent progress for a browser environment.',
    highlights: [
      'Generates five consistent city districts with third-person controls, vertical traversal, and obstacle-aware camera movement.',
      'Maintains mission and collectible progress across sessions. Version 1 is preserved as a separate development archive.',
    ],
    language: 'JavaScript · Three.js · WebGL',
    link: 'https://github.com/Mah-era/PawPaw-World-3D-v1',
    linkLabel: 'View repository',
  },
  {
    eyebrow: 'ONBOARDING & SYSTEM VALIDATION',
    title: 'PawPaw Power',
    body: 'Built a browser platform game with 1 tutorial, 5 campaign levels, and 52 tutorial objectives, linking player actions to progression gates and reusable game systems.',
    highlights: [
      'Organised one tutorial and five campaign levels around shared scene, player, enemy, and boss systems.',
      'Mapped 52 tutorial objectives to observable actions and progression gates, with validation of task dependencies.',
    ],
    language: 'JavaScript · Phaser · Vite',
    link: 'https://github.com/Mah-era/pawpaw-power-retro-game',
    linkLabel: 'View repository',
  },
  {
    eyebrow: 'DISTRIBUTION INTERFACE CONCEPT',
    title: 'Distributor UI Concept',
    body: 'An earlier interface-design project exploring how distributor-management information can be organised into a web application. Kept separately from the fuller Distributor Management prototype.',
    language: 'JavaScript',
    link: 'https://distributormanagement-frontendde.netlify.app/',
    linkLabel: 'View interface demo',
  },
  {
    eyebrow: 'PROGRAMMING COURSEWORK',
    title: 'Programming Coursework',
    body: 'A separate archive of programming coursework and learning exercises. Included as educational work rather than a business application.',
    language: 'Python',
  },
];

// The room features the most role-relevant work; the full collection stays available.
export const featuredProjects = projects.slice(0, 6);

export const roomItems: Record<RoomId, WorldItem[]> = {
  hub: [
    {
      eyebrow: 'BBA · NORTH SOUTH UNIVERSITY',
      title: '35+ Client Projects',
      body: 'Coordinated 35+ projects across 8+ client accounts at Mindscape, helping shorten planning-to-execution turnaround by an estimated 15–20%. BBA candidate in Supply Chain Management and Marketing, graduating Fall 2026.',
      highlights: [
        'Coordinated 35+ marketing, branding, and activation projects across 8+ client accounts at Mindscape Communication.',
        'Developed self-initiated analytics prototypes for demand planning, distribution, production, quality, and business reporting.',
        'Seeking graduate and management trainee opportunities across supply chain, operations, business analysis, and commercial planning.',
      ],
    },
    {
      eyebrow: 'ESTIMATED · STATUS-CHECK EFFORT',
      title: '20–25% Less Status-check Effort',
      body: 'Reduced recurring status-check effort by an estimated 20–25% through a Notion coordination workflow. Centralised requirements, ownership, approvals, revisions, and pending actions across client contacts and internal teams.',
      highlights: [
        'Prepared structured briefs and proposals for 30+ client and internal reviews.',
        'Coordinated communication records and meeting follow-ups across 250+ stakeholders at Project Finance Solution.',
      ],
    },
    {
      eyebrow: 'LEADERSHIP · ANALYSIS · COMMUNICATION',
      title: 'BDT 1.4M+ Secured',
      body: 'Secured BDT 1.4M+ in corporate sponsorship and partnership commitments as Vice President, Debate Development at NSU Debate Club. Brings 12+ years of competitive debating and leadership experience.',
      highlights: [
        'Co-led a 10-member sub-executive team and a 300-member volunteer network; coordinated 60+ initiatives reaching 350+ participants.',
        'Uses AI-assisted development to prototype reporting and operational workflows, combining business requirements with data analysis and iterative testing.',
      ],
    },
  ],
  education: [
    {
      eyebrow: 'BBA · EXPECTED FALL 2026',
      title: 'North South University',
      body: 'Bachelor of Business Administration, majoring in Supply Chain Management and Marketing. Spring 2022 intake; expected graduation in Fall 2026. Current CGPA: 3.21/4.00.',
    },
    {
      eyebrow: 'HIGHER SECONDARY CERTIFICATE · 2020',
      title: 'Holy Cross College',
      body: 'Higher Secondary Certificate in Humanities. GPA: 5.00/5.00.',
    },
    {
      eyebrow: 'SECONDARY SCHOOL CERTIFICATE · 2018',
      title: 'YWCA Girls’ School',
      body: 'Secondary School Certificate in Science from YWCA Higher Secondary Girls’ School. GPA: 5.00/5.00.',
    },
  ],
  experience: experiences,
  projects,
  skills: [
    {
      eyebrow: 'DATA PREPARATION & REPORTING',
      title: 'Business Analysis',
      body: 'Consolidated 30+ KPIs across 8 supply-chain domains in SCM Analytics Studio and built 24 visualisation types in InsightBI. Applies data cleaning, dashboard development, and structured reporting through analytics prototypes.',
      highlights: [
        'SCM Analytics Studio: data preparation, supply-chain KPI calculations, and reporting exports.',
        'ForecastSync and InsightBI: forecast comparison, interactive reports, calculated measures, and drill-down analysis.',
      ],
    },
    {
      eyebrow: 'PLANNING & PROCESS IMPROVEMENT',
      title: 'Operations Planning',
      body: 'Modelled a 120-day production horizon across 3 factories and centralised 15 distribution modules in independent prototypes. Applies capacity planning, inventory analysis, QCD trade-offs, and root-cause investigation.',
      highlights: [
        'PlantCore: capacity constraints, disruption recovery, and quality, cost, and delivery trade-offs.',
        'FactorySphere: defect traceability, Cost of Poor Quality, and corrective-action workflows.',
        'Notion and Microsoft 365: project tracking, documentation, presentations, and task coordination.',
      ],
    },
    {
      eyebrow: 'CLIENTS, TEAMS & PARTNERS',
      title: 'Stakeholder Coordination',
      body: 'Coordinated 35+ client projects at Mindscape, communication across 250+ stakeholders at PFS, and BDT 1.4M+ in sponsorship commitments at NSU Debate Club through proposals, partner engagement, and follow-up.',
      highlights: [
        '35+ client projects at Mindscape Communication; communication records and follow-ups across 250+ stakeholders at Project Finance Solution.',
        'Sponsorship proposals, partner deliverables, training programmes, and volunteer coordination through debate-club leadership.',
      ],
    },
    {
      eyebrow: 'AI-ASSISTED DEVELOPMENT',
      title: 'Analytics Prototyping',
      body: 'Built a portfolio of 18 projects, including planning, distribution, quality, and reporting prototypes. Uses AI-assisted development to translate business requirements into calculation logic, workflows, and testable applications.',
      highlights: [
        'Project tools include Python, Pandas, Streamlit, SQL, SQLite, JavaScript, TypeScript, and React.',
        'Work includes local data storage, import and export workflows, operational dashboards, and scenario models.',
        'Validates workflows with demonstration datasets, scenario analysis, and iterative testing.',
      ],
    },
  ],
  achievements: [
    {
      eyebrow: 'NSU DEBATE CLUB · 2025–2026',
      title: 'Vice President',
      body: 'Secured BDT 1.4M+ in sponsorship and partnership commitments, co-led a 300-member volunteer network, and coordinated 60+ initiatives reaching 350+ participants as Vice President, Debate Development.',
      highlights: [
        'Secured BDT 1.4M+ in corporate sponsorship and partnership commitments through proposals, partner engagement, and agreed deliverables.',
        'Co-led a 10-member sub-executive team and a 300-member volunteer network across six functional streams.',
        'Coordinated 60+ training, workshop, and recruitment initiatives reaching 350+ participants; contributed to the club’s 15+ national-level debate championships through coaching and development programmes.',
      ],
    },
    {
      eyebrow: 'NSU TOURNAMENTS · 2023–2024',
      title: 'Tournament Operations',
      body: 'Coordinated 2 tournaments, each with 300+ participants and a 20-member organising team, as Assistant Tournament Director for NSU Dialogue and NSU BDC ProAms in 2024.',
      highlights: [
        'Helped deliver two tournaments, each involving 300+ participants and a 20-member organising team.',
        'Previously served on the NSU IV 2023 Sub-Executive Committee, coordinating a 20-member volunteer team across registration, communications, and operations.',
      ],
    },
    {
      eyebrow: 'HCDC CHAMPIONSHIPS · 2019 & 2021',
      title: 'Tournament President',
      body: 'Secured BDT 300K+ per championship, led 70-member organising teams, and coordinated 24 colleges per event as President of the 10th and 11th HCDC Inter-College Championships.',
      highlights: [
        'Secured BDT 300K+ in sponsorship and partnership commitments for each championship.',
        'Led 70-member organising teams and coordinated participation from 24 colleges per event, within fixed schedules and institutional requirements.',
      ],
    },
    {
      eyebrow: 'YWCA TOURNAMENT · 2017',
      title: 'Event Leadership',
      body: 'Secured BDT 250K+ in sponsorship and led a 15-member team to deliver a debate and quiz tournament for 200+ participants as President of the YWCA Inter-School and College Tournament.',
      highlights: [
        'Secured BDT 250K+ in corporate sponsorship and led a 15-member organising team.',
        'Coordinated 200+ participants across the debate and quiz programme.',
      ],
    },
  ],
  contact: [
    {
      eyebrow: 'RECRUITMENT & PROFESSIONAL CONTACT',
      title: 'LinkedIn',
      body: 'Professional profile for graduate and management trainee opportunities in supply chain, operations, business analysis, and commercial planning.',
      link: 'https://www.linkedin.com/in/mahera-tasfee/',
      linkLabel: 'View LinkedIn profile',
    },
    {
      eyebrow: 'PROJECT CODE & DOCUMENTATION',
      title: 'GitHub',
      body: 'Repositories for analytics prototypes, operational models, personal tools, and interactive projects. Review the code and documentation for each project’s scope.',
      link: 'https://github.com/Mah-era',
      linkLabel: 'View GitHub profile',
    },
    {
      eyebrow: 'BASED IN DHAKA, BANGLADESH',
      title: 'Email',
      body: 'For role discussions, interviews, and project questions. Expected BBA graduation: Fall 2026.',
      link: 'mailto:maheratasfee@gmail.com',
      linkLabel: 'Email Mahera',
    },
  ],
};
