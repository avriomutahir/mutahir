export const portfolioHistory = [
  {
    slug: 'ai-ocr-sentiment-platform',
    title: 'AI-Powered OCR & Sentiment Platform',
    type: 'Artificial Intelligence · Machine Learning',
    summary:
      'Designed and built an end-to-end AI platform that extracts text from scanned documents via OCR and runs real-time sentiment analysis on customer feedback.',
    image: '/images/portfolio-forecasting.svg',
    imageAlt: 'AI OCR and sentiment analysis dashboard preview',
    ats: {
      client: 'Enterprise SaaS Client',
      role: 'Lead AI & Backend Engineer',
      timeline: '5 months',
      impact: 'Reduced manual data-entry effort by 70% and surfaced actionable customer sentiment in real time.',
      keywords: ['OCR', 'Sentiment Analysis', 'Natural Language Processing', 'Python', 'REST API', 'AI Integration'],
      responsibilities: [
        'Architected an OCR pipeline to extract structured data from scanned PDFs and images with high accuracy.',
        'Integrated a fine-tuned NLP model for multi-class sentiment classification across customer communications.',
        'Built a RESTful API layer consumed by React JS dashboards for real-time analytics and reporting.',
        'Optimised inference performance to handle 10,000+ documents per day within SLA thresholds.',
      ],
      stack: ['Python', 'Tesseract OCR', 'Hugging Face Transformers', 'FastAPI', 'React JS', 'PostgreSQL'],
    },
  },
  {
    slug: 'react-native-cross-platform-app',
    title: 'Cross-Platform Mobile Application',
    type: 'Mobile Development · React Native',
    summary:
      'Built a feature-rich cross-platform mobile application for iOS and Android using React Native, delivering a native-quality experience from a single codebase.',
    image: '/images/portfolio-design-system.svg',
    imageAlt: 'React Native mobile app screens and component design',
    ats: {
      client: 'Product-stage startup',
      role: 'Senior React Native Developer',
      timeline: '7 months',
      impact: 'Launched to both app stores simultaneously; achieved 4.6-star rating within the first month.',
      keywords: ['React Native', 'iOS', 'Android', 'Mobile UI', 'Push Notifications', 'Offline Mode'],
      responsibilities: [
        'Led end-to-end mobile development from architecture through App Store and Play Store release.',
        'Implemented offline-first data synchronisation using Redux Persist and SQLite.',
        'Integrated push notifications, deep linking, and biometric authentication.',
        'Collaborated with UI/UX designers to deliver pixel-perfect, accessible interfaces on both platforms.',
      ],
      stack: ['React Native', 'Expo', 'Redux Toolkit', 'TypeScript', 'Firebase', 'REST APIs'],
    },
  },
  {
    slug: 'laravel-enterprise-web-platform',
    title: 'Enterprise Web Platform (Laravel + React)',
    type: 'Full-Stack Web Development',
    summary:
      'Delivered a large-scale enterprise web platform with a PHP Laravel backend, React JS frontend, and role-based access control for multi-tenant business operations.',
    image: '/images/portfolio-rebrand.svg',
    imageAlt: 'Enterprise web platform dashboard and admin panel',
    ats: {
      client: 'B2B Enterprise Client',
      role: 'Senior Full-Stack Developer',
      timeline: '10 months',
      impact: 'Onboarded 5 enterprise tenants on launch day; reduced reporting time by 45% through automated dashboards.',
      keywords: ['PHP Laravel', 'React JS', 'Multi-Tenant', 'REST API', 'Role-Based Access', 'C#'],
      responsibilities: [
        'Designed a multi-tenant Laravel backend with modular service architecture and comprehensive API documentation.',
        'Built a dynamic React JS admin dashboard with role-based views, reporting charts, and real-time updates.',
        'Integrated a C# microservice for high-throughput data processing and third-party ERP connectivity.',
        'Managed CI/CD pipelines, database migrations, and production deployments with zero-downtime releases.',
      ],
      stack: ['PHP Laravel', 'React JS', 'C#', '.NET', 'MySQL', 'Docker', 'GitHub Actions'],
    },
  },
]
