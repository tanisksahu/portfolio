import taniskAiPortrait from '../assets/images/tanisk_ai_portrait_1785699009866.jpg';
import studynexPreview from '../assets/images/studynex_app_preview_1785696470263.jpg';
import analyticsDashboard from '../assets/images/analytics_dashboard_1785696485562.jpg';
import canvaMockup from '../assets/images/canva_design_mockup_1785696516557.jpg';
import kadamFoundationPoster from '../assets/images/kadam_poster_enhanced_1785738912674.jpg';
import mbaFinanceAiPoster from '../assets/images/mba_ai_poster_enhanced_1785738926679.jpg';
import bbaIndustryKpmgPoster from '../assets/images/bba_kpmg_poster_enhanced_1785738938699.jpg';
import mbaNexGenAnalystPoster from '../assets/images/mba_nexgen_enhanced_1785738965057.jpg';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Business Analytics' | 'AI & ML' | 'Product Design' | 'Marketing' | 'Web Apps';
  problem: string;
  solution: string;
  techStack: string[];
  outcome: string;
  metrics: string[];
  image: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface CanvaDesign {
  id: string;
  title: string;
  type: string;
  category: string;
  description: string;
  canvaUrl: string;
  previewImage: string;
  role: string;
  problem: string;
  solution: string;
  process: string[];
  tools: string[];
  learnings: string;
  tags: string[];
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; level: number; icon: string }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  skillsLearned: string[];
  badgeColor: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  organization: string;
  role: string;
  type: 'Education' | 'Internship' | 'Leadership' | 'Project' | 'Milestone';
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Tanisk Sahu',
    tagline: 'Graphic Designer • Presentations (PPT) • Brochures • E-Magazines • Proposals & Document Design',
    heroHeadlines: [
      'Graphic Designer Crafting All Types of Presentations, Brochures, E-Magazines & Business Proposals.',
      'High-Impact Visual Document Architecture & Brand Identity Kits.'
    ],
    bio: 'Versatile Graphic Designer & Visual Communications Specialist. Expert in creating ALL types of design deliverables: Investor Pitch Decks & PPTs, Corporate & NGO Brochures, Editorial E-Magazines, Formal Business Proposals, Executive Reports, Posters, and Brand Kits.',
    availability: 'Open for Graphic Design, Presentation Design & Document Projects',
    email: '25BBA70006@cuchd.in',
    alternateEmail: 'tanisksahud@gmail.com',
    phone: '+91 94799 55283',
    location: 'India (Chandigarh / Bhopal / Remote)',
    linkedin: 'https://linkedin.com/in/tanisksahu',
    github: 'https://github.com/tanisksahu',
    instagram: 'https://instagram.com/tanishk._sh',
    profileImage: taniskAiPortrait,
    stats: [
      { label: 'Work Types', value: 'PPT, Brochure, Magazine, Proposal', change: 'All Formats Handled' },
      { label: 'Graphic Case Studies', value: '15+ Projects', change: 'Live Canva Portfolio' },
      { label: 'Academic Standing', value: 'BBA Analytics', change: 'Chandigarh University' },
      { label: 'Leadership', value: 'PR Head', change: 'E-Club & Campus' }
    ]
  },

  canvaDesigns: [
    {
      id: 'canva-business-proposal',
      title: 'Commercial Client Pitch & Business Proposal Document',
      type: 'Business Proposal',
      category: 'Proposals & Docs',
      description: 'Comprehensive corporate proposal document layout featuring scope of work, timeline deliverables, pricing tables, and SLA agreements.',
      canvaUrl: 'https://www.canva.com/d/2hGuy39j8rYfA_D',
      previewImage: canvaMockup,
      role: 'Document Architect & Lead Designer',
      problem: 'Unformatted text proposal documents lead to client drop-off and lack of executive trust.',
      solution: 'Created a sleek, modular proposal template with structured pricing blocks, scope callouts, and clean signature pages.',
      process: ['Scope breakdown drafting', 'Pricing table alignment', 'Brand styling', 'High-res PDF export'],
      tools: ['Canva Pro', 'Document Layout', 'Corporate Branding'],
      learnings: 'Visually formatted proposals increase client sign-off rates and project approval speed.',
      tags: ['Proposal', 'Business Document', 'Pricing Table', 'Corporate'],
      featured: true
    },
    {
      id: 'canva-e-magazine',
      title: 'Tech & Lifestyle Editorial E-Magazine Edition',
      type: 'Digital Magazine / E-Book',
      category: 'E-Magazines',
      description: 'Multi-page digital magazine publication featuring editorial article spreads, custom typography grids, pull-quotes, and high-impact visuals.',
      canvaUrl: 'https://www.canva.com/d/FBVBy96zFs56LkV',
      previewImage: canvaMockup,
      role: 'Editor & Creative Director',
      problem: 'Digital e-magazines often feel dry and lack the engaging tactile flow of premium print publications.',
      solution: 'Engineered a 16-page editorial layout using structured column grids, bold lead typography, and immersive layout spreads.',
      process: ['Typesetting articles', 'Image curation', 'Double-page spread styling', 'Digital PDF publishing'],
      tools: ['Canva Pro', 'Editorial Design', 'E-Magazine Layout'],
      learnings: 'Editorial design principles turn standard PDF publications into high-engagement interactive media.',
      tags: ['E-Magazine', 'Editorial', 'Magazine', 'Publication', 'Newsletter'],
      featured: true
    },
    {
      id: 'canva-furniture-brochure',
      title: 'Modern Luxury Furniture Product Catalog & Brochure',
      type: 'Tri-Fold & Multi-Page Brochure',
      category: 'Brochures',
      description: 'Minimalist product brochure & catalog crafted for premium interior brands, combining product highlights with elegant print grid layouts.',
      canvaUrl: 'https://www.canva.com/d/ekmswzRReCcSnvH',
      previewImage: canvaMockup,
      role: 'Visual Designer',
      problem: 'Overcrowded promotional flyers reduce luxury brand value and confuse prospective buyers.',
      solution: 'Utilized generous negative space, editorial grid structures, and typography pairing to highlight craftsmanship.',
      process: ['Product grid layout', 'Typography system', 'Color tone matching', 'Brochure print export'],
      tools: ['Canva Pro', 'Brochure Grid', 'Catalog Layout'],
      learnings: 'Refined brochure layouts significantly raise perceived product quality and brand credibility.',
      tags: ['Brochure', 'Tri-Fold', 'Catalog', 'Print Design'],
      featured: true
    },
    {
      id: 'canva-boat-astra',
      title: 'boAt Astra Smartwatch Product Launch Presentation Deck (PPT)',
      type: 'PowerPoint / Pitch Deck',
      category: 'PPTs & Decks',
      description: 'High-energy presentation deck detailing product positioning, target demographic analysis, and multi-channel launch strategy.',
      canvaUrl: 'https://www.canva.com/d/ifN4d7dN9QJd9ek',
      previewImage: canvaMockup,
      role: 'Presentation Designer & Strategist',
      problem: 'Launching new products requires visual slide decks that maintain executive attention.',
      solution: 'Crafted a dark-mode presentation with feature comparison slides, battery life callouts, and go-to-market roadmaps.',
      process: ['Market research', 'Competitor benchmarking', 'Slide deck design', 'Visual flow tuning'],
      tools: ['Canva Pro', 'PowerPoint / Deck Architecture', 'Visual Storytelling'],
      learnings: 'High-contrast presentation decks keep audiences engaged throughout pitch meetings.',
      tags: ['PPT', 'Presentation', 'Pitch Deck', 'Product Launch'],
      featured: true
    },
    {
      id: 'canva-business-analytics',
      title: 'Executive Business Analytics & KPI Report Deck',
      type: 'Executive Presentation (PPT)',
      category: 'PPTs & Decks',
      description: 'Data-driven presentation deck converting complex raw metrics into intuitive visual charts, cohort models, and action plans.',
      canvaUrl: 'https://www.canva.com/d/-d1DtHL693CAyxZ',
      previewImage: analyticsDashboard,
      role: 'Analyst & Deck Author',
      problem: 'Executive leaders struggle to digest plain text or spreadsheet data during short decision meetings.',
      solution: 'Transformed multi-variable datasets into clean infographics, card metrics, and color-coded trend indicators.',
      process: ['Dataset extraction', 'Chart selection', 'Infographic visualization', 'Summary slide curation'],
      tools: ['Canva Pro', 'Data Storytelling', 'KPI Decks'],
      learnings: 'Visual chart layouts lead to faster decisions among non-technical stakeholders.',
      tags: ['PPT', 'KPI Report', 'Analytics Deck', 'Executive'],
      featured: true
    },
    {
      id: 'canva-resume',
      title: 'Tanisk Sahu — Executive Resume & Visual CV Document',
      type: 'Executive Resume / CV',
      category: 'Proposals & Docs',
      description: 'An executive 2-page CV layout engineered for maximum legibility, clear hierarchical flow, and high recruiter retention.',
      canvaUrl: 'https://www.canva.com/d/y-nP_l7pIDXdFtj',
      previewImage: canvaMockup,
      role: 'Sole Designer & Content Architect',
      problem: 'Standard plain resumes fail to highlight multi-faceted skillsets across design and analytics.',
      solution: 'Created an editorial visual structure with distinct sections for technical skills, leadership impact, and certifications.',
      process: ['Grid layout setup', 'Information hierarchy', 'Typography pairing', 'Export optimization'],
      tools: ['Canva Pro', 'Resume Layout', 'Typography System'],
      learnings: 'Visual CV architecture increases reader retention by callout placement.',
      tags: ['Resume', 'CV', 'Document Design', 'Executive'],
      featured: true
    },
    {
      id: 'canva-bba-apex',
      title: 'BBA (Industry Collaborated) with KPMG & SAS — Campaign Kit',
      type: 'Brand Kit & Event Posters',
      category: 'Posters & Marketing',
      description: 'Industry collaborated BBA visual marketing kit created in partnership with KPMG and SAS, highlighting business analytics and digital strategy.',
      canvaUrl: 'https://www.canva.com/d/OIGFbK-8q9R_Lz2',
      previewImage: bbaIndustryKpmgPoster,
      role: 'Head of PR & Lead Designer',
      problem: 'The event lacked a cohesive visual language to attract corporate sponsors and participants.',
      solution: 'Designed an energetic brand kit with sponsor tier slides, social banners, and promotional posters.',
      process: ['Sponsor deck creation', 'Social media banner series', 'Event credential design', 'Rollout'],
      tools: ['Canva Pro', 'Brand System', 'Poster Design'],
      learnings: 'Strong promotional poster graphics significantly raise registration response rates.',
      tags: ['Poster', 'Branding', 'Event Campaign', 'Marketing'],
      featured: true
    },
    {
      id: 'canva-kadam-foundation',
      title: 'Kadam Foundation — Annual Social Impact Brochure & Report',
      type: 'Impact Brochure & Report',
      category: 'Brochures',
      description: 'Multi-page impact brochure and report documenting community development, education, women empowerment, and youth welfare.',
      canvaUrl: 'https://www.canva.com/d/5hOH2300LUuBVg4',
      previewImage: kadamFoundationPoster,
      role: 'Lead Designer',
      problem: 'NGOs struggle to present qualitative stories and quantitative impact data to donors clearly.',
      solution: 'Created an inspiring visual brochure combining field photos, beneficiary statistics, and multi-city campaign metrics.',
      process: ['Field data collection', 'Impact metric design', 'Brochure layout', 'Final report publish'],
      tools: ['Canva Pro', 'Brochure Design', 'Impact Storytelling'],
      learnings: 'Combining human stories with metric cards generates maximum donor trust.',
      tags: ['Brochure', 'Report', 'NGO', 'Social Impact'],
      featured: true
    },
    {
      id: 'canva-mba-ai-tools',
      title: 'MBA Finance — AI Tools Campaign & Promotional Posters',
      type: 'Promotional Posters & Social Kit',
      category: 'Posters & Marketing',
      description: 'High-impact educational campaign highlighting 90+ No-Code AI tools (Claude, Meta AI, OpenAI) in MBA Finance curriculum.',
      canvaUrl: 'https://www.canva.com/d/INEA1MFJakSGiqz',
      previewImage: mbaFinanceAiPoster,
      role: 'Lead Designer',
      problem: 'University admission marketing requires eye-catching visual poster designs that stand out in feed scroll.',
      solution: 'Created a futuristic ad poster kit emphasizing practical AI tools, FinTech analytics, and career readiness.',
      process: ['Ad copy creation', 'Poster formatting', 'AI Tool matrix integration', 'Batch export'],
      tools: ['Canva Pro', 'Poster Design', 'Social Campaign'],
      learnings: 'Showcasing key tools on promotional posters increases click-through rates.',
      tags: ['Poster', 'AI Tools', 'Higher Ed', 'Promotional'],
      featured: true
    },
    {
      id: 'canva-mba-nexgen-analyst',
      title: 'MBA Finance with AI — NexGen Financial Analyst Campaign',
      type: 'Higher Ed Marketing Poster',
      category: 'Posters & Marketing',
      description: 'Next-generation AI Financial Analyst campaign poster featuring Bloomberg, Refinitiv, BlackRock integration and 9000+ placement records.',
      canvaUrl: 'https://www.canva.com/d/NYMcUDjkcRI0dod',
      previewImage: mbaNexGenAnalystPoster,
      role: 'Lead Visual Strategist',
      problem: 'Modern finance courses demand visual marketing that signals cutting-edge tech and institutional partnerships.',
      solution: 'Designed an executive promotional poster highlighting top global tier placements (1.7 Cr package) and corporate logos.',
      process: ['Partner logo layout', 'Placement stats hierarchy', 'High-res print export'],
      tools: ['Canva Pro', 'Poster Design', 'Higher Ed'],
      learnings: 'Clear data callouts on marketing posters maximize audience conversion.',
      tags: ['Poster', 'Financial Analyst', 'Bloomberg', 'Higher Ed'],
      featured: true
    },
    {
      id: 'canva-presentation-2',
      title: 'Executive Pitch Deck Master Presentation Template',
      type: 'Master Pitch Deck (PPT)',
      category: 'PPTs & Decks',
      description: 'Sleek, reusable investor pitch deck framework with built-in financial models, team cards, and roadmap timelines.',
      canvaUrl: 'https://www.canva.com/d/H1zQFAGE6DtCGqM',
      previewImage: canvaMockup,
      role: 'Template Architect',
      problem: 'Founders spend excessive hours building pitch decks from scratch instead of refining core messaging.',
      solution: 'Designed a plug-and-play master PPT template with flexible slide layouts for vision, traction, business model, and ask.',
      process: ['Template architecture', 'Color token definition', 'Slide variety design', 'Export optimization'],
      tools: ['Canva Pro', 'PPT Master Templates', 'Investor Frameworks'],
      learnings: 'Standardizing slide components cuts presentation creation time in half.',
      tags: ['PPT', 'Pitch Deck', 'Presentation', 'Master Template'],
      featured: false
    },
    {
      id: 'canva-kadam-certificate',
      title: 'Official Certificate & Recognition Document System',
      type: 'Official Certificate / Document',
      category: 'Proposals & Docs',
      description: 'Official credential design template created for recognizing volunteers and event participants with security guilloche borders.',
      canvaUrl: 'https://www.canva.com/d/-GFqnNUw7ScZBOR',
      previewImage: kadamFoundationPoster,
      role: 'Visual Designer',
      problem: 'Generic certificates look unprofessional and diminish recipient sense of achievement.',
      solution: 'Designed an official credential layout featuring custom borders, seal placement, and script typography.',
      process: ['Pattern vectorization', 'Seal placement', 'Variable text alignment', 'Print setup'],
      tools: ['Canva Pro', 'Certificate Design', 'Document Security'],
      learnings: 'Attention to detail in recognition documents strengthens institutional trust.',
      tags: ['Certificate', 'Document Design', 'Official Seal', 'Merit'],
      featured: false
    }
  ] as CanvaDesign[],

  projects: [
    {
      id: 'studynex',
      title: 'StudyNex — Student Productivity & Learning Platform',
      subtitle: 'Smart student study operating system with Firebase backend, interactive schedule manager, and AI learning tools.',
      category: 'AI & ML',
      problem: 'Students struggle to manage study timetables, track academic performance, and extract actionable insights from lecture notes.',
      solution: 'Built StudyNex using React, Firebase Authentication, Firestore database, and Gemini AI APIs. Includes smart study schedule generation, lecture PDF summarization, and performance tracking.',
      techStack: ['React', 'TypeScript', 'Firebase Firestore', 'Gemini AI API', 'Tailwind CSS'],
      outcome: 'Reduced study session planning time by 60% and improved quiz retention rate across test users.',
      metrics: ['Firebase Cloud Database', 'Real-time Auth', 'AI PDF Summarizer'],
      image: studynexPreview,
      liveDemoUrl: 'https://studynex.demo.app',
      githubUrl: 'https://github.com/tanisksahu/studynex-ai',
      featured: true
    },
    {
      id: 'business-dashboard',
      title: 'Executive Retail Analytics & Financial Forecasting Model',
      subtitle: 'Comprehensive multi-region sales cohort analysis, DAX measures, and revenue growth forecast model.',
      category: 'Business Analytics',
      problem: 'Retail managers lacked real-time visibility into customer churn, product margin degradation, and cross-channel promotions.',
      solution: 'Developed a dynamic Power BI & Python analytics suite featuring RFM customer segmentation, predictive revenue forecasting models, and automated executive alerts.',
      techStack: ['Power BI', 'Python', 'Pandas', 'SQL', 'DAX', 'Excel'],
      outcome: 'Identified key underperforming inventory lines and highlighted high-value customer retention opportunities.',
      metrics: ['Advanced DAX Measures', 'RFM Segmentation', 'Automated Refresh'],
      image: analyticsDashboard,
      liveDemoUrl: 'https://app.powerbi.com/view?r=example-tanisk-dashboard',
      githubUrl: 'https://github.com/tanisksahu/retail-analytics-dashboard',
      featured: true
    }
  ] as Project[],

  skillCategories: [
    {
      title: 'Graphic & Document Design (All Formats)',
      description: 'Expert in crafting PPTs, Brochures, E-Magazines, Business Proposals, Reports, and Brand Kits.',
      iconName: 'Palette',
      skills: [
        { name: 'Presentations & PPT Decks', level: 98, icon: 'Presentation' },
        { name: 'Brochures & Tri-Fold Layouts', level: 96, icon: 'Layout' },
        { name: 'E-Magazines & Digital Books', level: 95, icon: 'BookOpen' },
        { name: 'Business Proposals & Reports', level: 96, icon: 'FileText' },
        { name: 'Canva Pro & Brand Systems', level: 98, icon: 'Palette' },
        { name: 'Promotional Posters & Ads', level: 95, icon: 'Image' }
      ]
    },
    {
      title: 'Business Analytics & Data',
      description: 'Extracting executive insights from complex datasets with SQL, Excel, SAS, and Power BI.',
      iconName: 'TrendingUp',
      skills: [
        { name: 'Advanced Excel & Modeling', level: 95, icon: 'Table' },
        { name: 'SQL & Database Queries', level: 88, icon: 'Database' },
        { name: 'Power BI & DAX Calculations', level: 92, icon: 'BarChart' },
        { name: 'SAS Visual Statistics', level: 85, icon: 'Activity' },
        { name: 'Google Analytics 4', level: 82, icon: 'TrendingUp' }
      ]
    },
    {
      title: 'AI & Emerging Tech',
      description: 'Leveraging Generative AI, LLMs, prompt engineering, and modern web tech.',
      iconName: 'Cpu',
      skills: [
        { name: 'Generative AI & LLM Workflows', level: 92, icon: 'Sparkles' },
        { name: 'Prompt Engineering', level: 94, icon: 'Bot' },
        { name: 'Firebase Cloud DB & Auth', level: 86, icon: 'Cloud' },
        { name: 'AI-Assisted Development', level: 90, icon: 'Code' }
      ]
    },
    {
      title: 'Leadership & Soft Skills',
      description: 'Leading PR initiatives, managing events, and presenting strategic recommendations.',
      iconName: 'Award',
      skills: [
        { name: 'PR & Public Relations Lead', level: 94, icon: 'Users' },
        { name: 'Executive Communication', level: 92, icon: 'MessageSquare' },
        { name: 'Event Management & Outreach', level: 90, icon: 'Calendar' },
        { name: 'Design Thinking & Leadership', level: 88, icon: 'Award' }
      ]
    }
  ],

  certifications: [
    {
      id: 'cert-1',
      title: 'Google Search Ads 360 Certification',
      issuer: 'Google Digital Academy (Skillshop)',
      category: 'Google',
      date: 'Verified 2025',
      credentialId: 'GOOGLE-SA360-CERT',
      verifyUrl: 'https://skillshop.exceedlms.com',
      skillsLearned: ['Search Campaign Strategy', 'Bidding Optimization', 'Search Ads 360', 'ROI Analytics'],
      badgeColor: 'from-blue-500 to-green-500'
    },
    {
      id: 'cert-2',
      title: 'Build with AI Bootcamp',
      issuer: 'Google for Developers',
      category: 'Google',
      date: 'Verified 2025',
      credentialId: 'GOOGLE-DEV-AI-BOOTCAMP',
      verifyUrl: 'https://developers.google.com',
      skillsLearned: ['Generative AI', 'Gemini APIs', 'Prompt Engineering', 'LLM Integration'],
      badgeColor: 'from-amber-500 to-red-500'
    },
    {
      id: 'cert-3',
      title: 'SAS Visual Statistics on SAS Viya: Interactive Model Building',
      issuer: 'SAS',
      category: 'SAS',
      date: 'Verified 2025',
      credentialId: 'SAS-VIYA-STAT-2025',
      verifyUrl: 'https://www.sas.com',
      skillsLearned: ['SAS Viya', 'Interactive Modeling', 'Statistical Pipelines', 'Predictive Analysis'],
      badgeColor: 'from-blue-600 to-indigo-600'
    },
    {
      id: 'cert-4',
      title: 'Data Analytics Virtual Experience Program',
      issuer: 'Deloitte',
      category: 'Deloitte',
      date: 'Verified 2025',
      credentialId: 'DELOITTE-DA-SIMULATION',
      verifyUrl: 'https://www.theforage.com/deloitte',
      skillsLearned: ['Data Quality Audit', 'Executive Dashboarding', 'Client Presentation', 'Business Insights'],
      badgeColor: 'from-emerald-600 to-teal-700'
    },
    {
      id: 'cert-5',
      title: 'GenAI Powered Data Analytics Job Simulation',
      issuer: 'Tata Group',
      category: 'Tata',
      date: 'Verified 2025',
      credentialId: 'TATA-GENAI-SIMULATION',
      verifyUrl: 'https://www.theforage.com/tata',
      skillsLearned: ['GenAI Analytics', 'Automated Insights', 'Business Strategy', 'Data Storytelling'],
      badgeColor: 'from-purple-600 to-pink-600'
    },
    {
      id: 'cert-6',
      title: 'Learning Design Thinking: Lead Change in Your Organization',
      issuer: 'LinkedIn Learning / Industry Certified',
      category: 'Design Thinking',
      date: 'Verified 2024',
      credentialId: 'DESIGN-THINKING-LEAD',
      verifyUrl: 'https://linkedin.com/learning',
      skillsLearned: ['User Empathy', 'Ideation Frameworks', 'Prototyping', 'Change Leadership'],
      badgeColor: 'from-orange-500 to-amber-500'
    },
    {
      id: 'cert-7',
      title: 'Business Communication Certification',
      issuer: 'HP LIFE',
      category: 'HP LIFE',
      date: 'Verified 2024',
      credentialId: 'HP-LIFE-BIZ-COMM',
      verifyUrl: 'https://www.life-global.org',
      skillsLearned: ['Executive Writing', 'Stakeholder Pitching', 'Cross-cultural Communication'],
      badgeColor: 'from-cyan-600 to-blue-600'
    },
    {
      id: 'cert-8',
      title: 'NISM Certification',
      issuer: 'National Institute of Securities Markets (NISM)',
      category: 'NISM',
      date: 'Verified 2024',
      credentialId: 'NISM-FIN-MARKETS',
      verifyUrl: 'https://www.nism.ac.in',
      skillsLearned: ['Financial Markets', 'Capital Market Basics', 'Regulatory Compliance'],
      badgeColor: 'from-green-600 to-emerald-700'
    }
  ] as Certification[],

  timeline: [
    {
      year: '2025 - Present',
      title: 'Head of Marketing & Public Relations',
      organization: 'Entrepreneurship Club, Chandigarh University',
      role: 'PR Team Head & Lead Marketer',
      type: 'Leadership',
      description: 'Leading outreach and promotional activities for campus entrepreneurship events, driving student engagement, sponsor communications, PPT presentation decks, brochures, and brand visual design.',
      highlights: ['Led club PR and event marketing', 'Designed event collateral, brochures & sponsor pitch decks', 'Increased event participation significantly']
    },
    {
      year: '2025 - 2029',
      title: 'BBA (Hons.) in Business Analytics',
      organization: 'Chandigarh University, Mohali, Punjab',
      role: 'Honors Student',
      type: 'Education',
      description: 'Specializing in Business Analytics, Advanced Excel, SQL, Data Visualization, SAS Visual Statistics, and AI-assisted product strategy.',
      highlights: ['Top academic standing', 'Member of Entrepreneurship Club', 'Built StudyNex & AI E-Commerce apps']
    },
    {
      year: 'Achievements',
      title: 'Silver Tier Winner — Inter-School Business Competition',
      organization: 'Institute of Professional Education & Research (IPER), Bhopal',
      role: 'District Competitor',
      type: 'Milestone',
      description: 'Competed among top schools across Bhopal in Season 2 of District-Level Inter-School Business Competition, contributing to the Overall Champion Award.',
      highlights: ['Silver Tier Winner', 'Competed across top Bhopal schools', 'Contributed to Overall Institution Champion Trophy']
    },
    {
      year: 'High School',
      title: 'Class XII (79.00%) & Class X (68.00%)',
      organization: 'St Paul Sr. Sec Co-Ed School, Bhopal',
      role: 'CBSE Student',
      type: 'Education',
      description: 'Completed CBSE senior secondary education with strong focus on mathematics, business studies, and computer applications.',
      highlights: ['Class XII: 79.00% (CBSE)', 'Class X: 68.00% (CBSE)', 'Active in school co-curricular competitions']
    }
  ] as TimelineEvent[],

  testimonials: [
    {
      id: 't-1',
      name: 'Faculty Coordinator',
      role: 'Department Head of Analytics',
      company: 'Chandigarh University',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      quote: 'Tanisk possesses a rare combination of quantitative analytics skills and exceptional presentation design taste. His PR leadership, brochures, and Canva decks set a benchmark for student excellence.'
    },
    {
      id: 't-2',
      name: 'Entrepreneurship Club Advisor',
      role: 'Senior Faculty Mentor',
      company: 'E-Club, Chandigarh University',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      quote: 'As Head of PR, Tanisk consistently delivered high-quality promotional strategy, e-magazines, and sponsor pitch presentations that significantly elevated the visibility of our campus startup events.'
    }
  ] as Testimonial[]
};
