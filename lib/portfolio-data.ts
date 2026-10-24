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
    title: 'Project coordination.\nOperational analysis.',
    subtitle:
      'BBA candidate in Supply Chain Management and Marketing, with experience coordinating 35+ client projects, leading debate programmes, and developing analytics prototypes.',
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
    title: 'Planning, coordination\n& execution.',
    subtitle:
      'Experience translating client requirements into briefs, timelines, assigned responsibilities, and delivery plans across marketing, administration, and event operations.',
    color: '#c1cacb',
    accent: '#526568',
    ink: '#293435',
  },
  projects: {
    label: 'Projects',
    category: 'Projects',
    title: 'Analytics tools.\nOperational models.',
    subtitle:
      'Self-initiated prototypes for demand planning, distribution, production, quality, and business reporting, alongside personal tools and interactive projects.',
    color: '#ddd5c9',
    accent: '#77604e',
    ink: '#342e29',
  },
  skills: {
    label: 'Skills',
    category: 'Skills',
    title: 'Analysis, planning\n& communication.',
    subtitle:
      'Applied through client project coordination, stakeholder communication, data preparation, KPI reporting, and supply-chain prototypes.',
    color: '#c7ccbd',
    accent: '#626a53',
    ink: '#30372b',
  },
  achievements: {
    label: 'Leadership',
    category: 'Leadership',
    title: 'Team leadership.\nEvent delivery.',
    subtitle:
      '12+ years of competitive debating and leadership experience, including sponsorship, training programmes, volunteer coordination, and tournament operations.',
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
    body: 'Junior Executive, Planning and Project Management. Converted client requirements into execution plans for 35+ digital marketing, branding, and activation projects across 8+ client accounts.',
    highlights: [
      'Prepared campaign briefs, execution timelines, technical proposals, AV requirements, and budget inputs; supported 30+ client and internal reviews.',
      'Built a Notion workflow to centralise requirements, task ownership, approvals, revisions, and follow-ups across client contacts and internal teams. Estimated reduction in recurring status-check effort: 20–25%.',
      'Coordinated technical and operational requirements across 5+ major campaigns, including BATB–We Race As One, BATB IWS, and BAT UK–TOPS.',
      'Supported accounts including Igloo, IOM, UNDP, USAID, IFC, and Swisscontact through Mindscape Communication. Estimated improvement in planning-to-execution turnaround: 15–20%.',
    ],
  },
  {
    eyebrow: '2022–2023 · ADMINISTRATION',
    title: 'Albeliz.com',
    body: 'Office Assistant, Administration. Maintained website content and financial and administrative records for day-to-day business operations.',
    highlights: [
      'Completed 300+ website content updates to maintain accurate product, business, and promotional information.',
      'Organised 150+ financial and administrative records to support transaction documentation, routine reporting, and information retrieval.',
    ],
  },
  {
    eyebrow: '2020–2023 · STAKEHOLDER COORDINATION',
    title: 'Project Finance Solution',
    body: 'Stakeholder Communication Coordinator, Administration. Maintained communication records, routine queries, and meeting follow-ups across 250+ stakeholders.',
    highlights: [
      'Coordinated logistics and participant communication for 50+ client and internal meetings.',
      'Confirmed schedules, participants, and required information, and tracked pending actions between clients and the administrative team.',
    ],
  },
  {
    eyebrow: '2020–2021 · ADMINISTRATIVE OPERATIONS',
    title: 'CrossRoads Initiative',
    body: 'Administrative Coordinator. Standardised records and supported scheduling, internal communication, and operational activities in a startup environment.',
    highlights: [
      'Centralised 100+ administrative and operational records to improve consistency and access to information.',
      'Coordinated 50+ internal meetings and operational activities, including schedules, responsibilities, and follow-up requirements.',
    ],
  },
];
export const projects: WorldItem[] = [
  {
    eyebrow: 'PRODUCTION PLANNING',
    title: 'PlantCore',
    body: 'Developed an apparel production-planning prototype to schedule orders across partner factories and compare responses to capacity, material, quality, and delivery disruptions.',
    highlights: [
      'Models a 120-day planning horizon with demonstration data for 30 orders across 3 factories, 8 sewing lines, and 10 styles.',
      'Compares recovery options using available capacity, shipment delays, incremental costs, penalties, and margin exposure.',
      'Links corrective actions to RACI responsibilities and PDCA/Kaizen reviews. Scenario outputs are modelled estimates, not realised factory results.',
    ],
    language: 'Python · FastAPI · SQLite',
    link: 'https://github.com/Mah-era/PlantCore',
    linkLabel: 'View repository',
  },
  {
    eyebrow: 'QUALITY & ROOT-CAUSE ANALYSIS',
    title: 'FactorySphere',
    body: 'Developed an apparel quality-analysis prototype that traces defects across production records and compares corrective actions against quality, cost, and delivery constraints.',
    highlights: [
      'Connects defects with factories, production lines, operators, material lots, and shipments to support structured root-cause investigation.',
      'Calculates quality trends and Cost of Poor Quality, then compares recovery options using inspection capacity, rework feasibility, and delivery risk.',
      'Structures CAPA closure around evidence, effectiveness checks, and follow-up reviews. Demonstration scenarios illustrate the workflow; they do not establish operational savings.',
    ],
    language: 'JavaScript · IndexedDB · SheetJS',
    link: 'https://github.com/Mah-era/FactorySphere',
    linkLabel: 'View repository',
  },
  {
    eyebrow: 'SUPPLY CHAIN ANALYTICS',
    title: 'SCM Analytics Studio',
    body: 'Developed an offline supply-chain analytics prototype consolidating 8 operational domains and 30+ KPIs into a repeatable data preparation, analysis, and reporting workflow.',
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
    eyebrow: 'DEMAND PLANNING',
    title: 'ForecastSync',
    body: 'Developed a demand-planning prototype that converts uploaded operational data into forecasts, inventory calculations, and risk analysis across 13 analysis modules.',
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
    eyebrow: 'DISTRIBUTION OPERATIONS',
    title: 'Distributor Management',
    body: 'Developed the SCM Distributor Management Tracker, a browser-based prototype covering 15 distribution modules, from inventory and order fulfilment to transport, returns, and cost monitoring.',
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
    eyebrow: 'BUSINESS INTELLIGENCE',
    title: 'InsightBI',
    body: 'Developed a business-intelligence prototype for importing data, applying transformations, defining measures, and investigating performance through interactive reports.',
    highlights: [
      'Supports CSV/Excel ingestion, 10 data transformations, SQL aggregation, and DAX-lite calculated measures.',
      'Provides 24 visualisation types with cross-filtering and drill-down for investigating trends and exceptions.',
      'Implements authentication and three access levels; reporting workflows were tested using demonstration datasets.',
    ],
    language: 'TypeScript · React · SQL',
    image: './assets/insightbi.png',
    link: 'https://github.com/Mah-era/insightbi',
    linkLabel: 'View repository',
  },
  {
    eyebrow: 'FMCG BRAND & CUSTOMER EXPERIENCE',
    title: 'FruTea',
    body: 'Designed an interactive website for a proposed instant-tea brand, translating product positioning into flavour information, packaging demonstrations, and customer-facing content.',
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
    body: 'Developed an educational supply-chain simulation to demonstrate how ordering decisions, lead times, and demand variability affect inventory, service levels, and the bullwhip effect.',
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
    body: 'Developed an offline personal analytics tracker that converts daily mood, stress, energy, and habit entries into monthly trends and visual summaries.',
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
    body: 'Developed this interactive portfolio to organise professional experience, education, projects, and leadership into a navigable 3D environment.',
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
    body: 'Adapted a 2D exploration game into a 3D browser environment, redesigning movement, camera behaviour, navigation, and interaction for three-dimensional space.',
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
    body: 'Developed a browser platform game with configurable levels, reusable player and enemy behaviour, and an interactive tutorial linked to progression requirements.',
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
      title: 'Business & Operations',
      body: 'BBA candidate majoring in Supply Chain Management and Marketing, with expected graduation in Fall 2026. Experience spans client project coordination, administrative operations, and student leadership.',
      highlights: [
        'Coordinated 35+ marketing, branding, and activation projects across 8+ client accounts at Mindscape Communication.',
        'Developed self-initiated analytics prototypes for demand planning, distribution, production, quality, and business reporting.',
        'Seeking graduate and management trainee opportunities across supply chain, operations, business analysis, and commercial planning.',
      ],
    },
    {
      eyebrow: 'REQUIREMENTS · OWNERSHIP · FOLLOW-UP',
      title: 'Project Coordination',
      body: 'Translated client requirements into execution plans, clarified responsibilities across teams, and tracked approvals and deliverables through a centralised Notion workflow.',
      highlights: [
        'Prepared structured briefs and proposals for 30+ client and internal reviews.',
        'Coordinated communication records and meeting follow-ups across 250+ stakeholders at Project Finance Solution.',
      ],
    },
    {
      eyebrow: 'LEADERSHIP · ANALYSIS · COMMUNICATION',
      title: 'Applied Experience',
      body: '12+ years of competitive debating and leadership experience, including Vice President, Debate Development at NSU Debate Club. Applies structured analysis and communication in team coordination and independent project work.',
      highlights: [
        'Developed sponsorship proposals, coordinated training programmes, and led tournament organising teams.',
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
      body: 'Data cleaning, KPI definition, dashboard development, forecasting, and scenario analysis. Uses Excel, Power BI, Python, and SQL-based project tools to structure data and interpret results.',
      highlights: [
        'SCM Analytics Studio: data preparation, supply-chain KPI calculations, and reporting exports.',
        'ForecastSync and InsightBI: forecast comparison, interactive reports, calculated measures, and drill-down analysis.',
      ],
    },
    {
      eyebrow: 'PLANNING & PROCESS IMPROVEMENT',
      title: 'Operations Planning',
      body: 'Process mapping, demand and inventory analysis, production planning, delivery monitoring, and root-cause analysis. Applies these methods in academic and self-initiated prototype work.',
      highlights: [
        'PlantCore: capacity constraints, disruption recovery, and quality, cost, and delivery trade-offs.',
        'FactorySphere: defect traceability, Cost of Poor Quality, and corrective-action workflows.',
        'Notion and Microsoft 365: project tracking, documentation, presentations, and task coordination.',
      ],
    },
    {
      eyebrow: 'CLIENTS, TEAMS & PARTNERS',
      title: 'Stakeholder Coordination',
      body: 'Client brief development, proposal writing, meeting coordination, sponsorship engagement, and cross-functional follow-up, supported by professional roles and debate leadership.',
      highlights: [
        '35+ client projects at Mindscape Communication; communication records and follow-ups across 250+ stakeholders at Project Finance Solution.',
        'Sponsorship proposals, partner deliverables, training programmes, and volunteer coordination through debate-club leadership.',
      ],
    },
    {
      eyebrow: 'AI-ASSISTED DEVELOPMENT',
      title: 'Analytics Prototyping',
      body: 'Uses AI-assisted coding to develop and refine prototypes from business requirements, with attention to data structure, calculation logic, user workflows, and testing.',
      highlights: [
        'Project tools include Python, Pandas, Streamlit, SQL, SQLite, JavaScript, TypeScript, and React.',
        'Work includes local data storage, import and export workflows, operational dashboards, and scenario models.',
        'Projects demonstrate applied learning and prototyping; they are not presented as deployed enterprise systems.',
      ],
    },
  ],
  achievements: [
    {
      eyebrow: 'NSU DEBATE CLUB · 2025–2026',
      title: 'Vice President',
      body: 'Vice President, Debate Development at North South University Debate Club. Coordinated debate development, sponsorship, training, and cross-functional event work.',
      highlights: [
        'Secured BDT 1.4M+ in corporate sponsorship and partnership commitments through proposals, partner engagement, and agreed deliverables.',
        'Co-led a 10-member sub-executive team and a 300-member volunteer network across six functional streams.',
        'Coordinated 60+ training, workshop, and recruitment initiatives reaching 350+ participants; contributed to the club’s 15+ national-level debate championships through coaching and development programmes.',
      ],
    },
    {
      eyebrow: 'NSU TOURNAMENTS · 2023–2024',
      title: 'Tournament Operations',
      body: 'Assistant Tournament Director for NSU Dialogue and NSU BDC ProAms in 2024. Coordinated registration, institutional communication, adjudicators, logistics, and event-day issues.',
      highlights: [
        'Helped deliver two tournaments, each involving 300+ participants and a 20-member organising team.',
        'Previously served on the NSU IV 2023 Sub-Executive Committee, coordinating a 20-member volunteer team across registration, communications, and operations.',
      ],
    },
    {
      eyebrow: 'HCDC CHAMPIONSHIPS · 2019 & 2021',
      title: 'Tournament President',
      body: 'President of the 10th and 11th HCDC Inter-College Championships. Led organising teams and coordinated institutions, sponsors, adjudicators, and tournament logistics.',
      highlights: [
        'Secured BDT 300K+ in sponsorship and partnership commitments for each championship.',
        'Led 70-member organising teams and coordinated participation from 24 colleges per event, within fixed schedules and institutional requirements.',
      ],
    },
    {
      eyebrow: 'YWCA TOURNAMENT · 2017',
      title: 'Event Leadership',
      body: 'President of the YWCA Inter-School and College Debate and Quiz Tournament. Managed institutional outreach, registration, scheduling, sponsor coordination, and logistics.',
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
