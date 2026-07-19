import {
  EducationItem,
  Experience,
  Metric,
  NavigationItem,
  Project,
  SkillGroup,
  SpokenLanguage
} from '../core/models/portfolio.model';

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { id: 'inicio', label: { es: 'Inicio', en: 'Home' } },
  { id: 'perfil', label: { es: 'Perfil', en: 'About' } },
  { id: 'experiencia', label: { es: 'Experiencia', en: 'Experience' } },
  { id: 'proyectos', label: { es: 'Proyectos', en: 'Projects' } },
  { id: 'tecnologias', label: { es: 'Tecnologías', en: 'Skills' } },
  { id: 'formacion', label: { es: 'Formación', en: 'Education' } },
  { id: 'contacto', label: { es: 'Contacto', en: 'Contact' } }
];

export const HERO_METRICS: readonly Metric[] = [
  {
    value: '5+',
    label: {
      es: 'años desarrollando proyectos y soluciones',
      en: 'years building projects and solutions'
    }
  },
  {
    value: '3',
    label: {
      es: 'puestos alcanzados mediante promociones internas',
      en: 'roles reached through internal promotions'
    }
  },
  {
    value: '8',
    label: {
      es: 'proyectos destacados documentados',
      en: 'documented featured projects'
    }
  },
  {
    value: 'ES / EN',
    label: {
      es: 'portafolio bilingüe y código en inglés',
      en: 'bilingual portfolio with English code'
    }
  }
];

export const EXPERIENCES: readonly Experience[] = [
  {
    company: 'Contec / Conductores Tecnológicos de Juárez',
    location: { es: 'Guasave, Sinaloa, México', en: 'Guasave, Sinaloa, Mexico' },
    period: { es: 'Agosto 2025 – Actualidad', en: 'August 2025 – Present' },
    summary: {
      es: 'Trayectoria de crecimiento interno en aseguramiento de calidad dentro de la manufactura de arneses automotrices. La experiencia operativa ha sido la base para identificar oportunidades de digitalización, control y automatización.',
      en: 'A track record of internal growth in quality assurance within automotive wiring-harness manufacturing. This operational experience has become the foundation for identifying opportunities in digitization, control, and automation.'
    },
    roles: [
      {
        title: { es: 'Supervisor de Aseguranza', en: 'Quality Assurance Supervisor' },
        period: { es: '8 mayo 2026 – Actualidad', en: 'May 8, 2026 – Present' },
        responsibilities: [
          {
            es: 'Supervisión y seguimiento de actividades de aseguramiento de calidad, liberaciones, hallazgos y cumplimiento de requerimientos.',
            en: 'Supervision and follow-up of quality assurance activities, releases, findings, and compliance requirements.'
          },
          {
            es: 'Coordinación operativa para dar continuidad a revisiones, correcciones y acciones enfocadas en prevenir reincidencias.',
            en: 'Operational coordination to maintain continuity across inspections, corrections, and actions focused on preventing recurrence.'
          },
          {
            es: 'Análisis de información y detección de oportunidades para mejorar trazabilidad, estandarización y control visual.',
            en: 'Analysis of operational information and identification of opportunities to improve traceability, standardization, and visual control.'
          }
        ]
      },
      {
        title: { es: 'Técnico de Aseguranza', en: 'Quality Assurance Technician' },
        period: { es: '20 octubre 2025 – 7 mayo 2026', en: 'October 20, 2025 – May 7, 2026' },
        responsibilities: [
          {
            es: 'Validación de dimensiones, amarres, ruteo, clips y componentes contra planos y requerimientos del proceso.',
            en: 'Validation of dimensions, ties, routing, clips, and components against drawings and process requirements.'
          },
          {
            es: 'Verificación de tableros, holders, horquillas, pistolas, picas y demás herramental utilizado en producción.',
            en: 'Verification of boards, holders, forks, tools, and other production tooling.'
          },
          {
            es: 'Documentación de hallazgos y apoyo en la definición y seguimiento de acciones correctivas.',
            en: 'Documentation of findings and support in defining and following up corrective actions.'
          }
        ]
      },
      {
        title: { es: 'Inspector de Calidad', en: 'Quality Inspector' },
        period: { es: '12 agosto 2025 – 19 octubre 2025', en: 'August 12, 2025 – October 19, 2025' },
        responsibilities: [
          {
            es: 'Inspección de arneses terminados y detección de defectos relacionados con ensamble, dimensiones y presentación.',
            en: 'Inspection of completed wiring harnesses and detection of assembly, dimensional, and workmanship defects.'
          },
          {
            es: 'Registro de resultados y comunicación de desviaciones al personal involucrado en el proceso.',
            en: 'Recording results and communicating deviations to personnel involved in the process.'
          }
        ]
      }
    ],
    tags: ['Quality', 'Manufacturing', 'Leadership', 'Process improvement', 'Automation']
  },
  {
    company: 'MaxSoft México',
    period: { es: 'Diciembre 2025 – Actualidad', en: 'December 2025 – Present' },
    summary: {
      es: 'Proyecto emprendedor enfocado en desarrollo web, soluciones personalizadas y automatización para negocios. Participación en definición de servicios, identidad digital, plantillas y construcción de productos.',
      en: 'Entrepreneurial project focused on web development, custom solutions, and business automation. Involvement in service definition, digital identity, templates, and product development.'
    },
    roles: [
      {
        title: { es: 'Cofundador y Desarrollador de Software', en: 'Co-founder and Software Developer' },
        period: { es: 'Diciembre 2025 – Actualidad', en: 'December 2025 – Present' },
        responsibilities: [
          {
            es: 'Diseño y desarrollo de sitios, landing pages, catálogos y propuestas de software personalizado.',
            en: 'Design and development of websites, landing pages, catalogs, and custom software proposals.'
          },
          {
            es: 'Construcción de interfaces responsivas y despliegues en plataformas web modernas.',
            en: 'Development of responsive interfaces and deployments on modern web platforms.'
          },
          {
            es: 'Organización de un catálogo de plantillas y servicios tecnológicos para clientes potenciales.',
            en: 'Organization of a catalog of templates and technology services for potential clients.'
          }
        ]
      }
    ],
    tags: ['React', 'Vite', 'Tailwind CSS', 'Business', 'Web development'],
    logo: 'assets/images/maxsoft-logo.webp'
  },
  {
    company: 'Desarrollo independiente',
    period: { es: '2018 – Actualidad', en: '2018 – Present' },
    summary: {
      es: 'Desarrollo continuo de sistemas web, aplicaciones de escritorio, automatizaciones, prototipos y soluciones de base de datos para fortalecer habilidades Full Stack.',
      en: 'Continuous development of web systems, desktop applications, automations, prototypes, and database solutions to strengthen Full Stack capabilities.'
    },
    roles: [
      {
        title: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
        period: { es: '2018 – Actualidad', en: '2018 – Present' },
        responsibilities: [
          {
            es: 'Implementación de CRUD, autenticación, roles, APIs REST, reportes, dashboards y reglas de negocio.',
            en: 'Implementation of CRUD operations, authentication, roles, REST APIs, reports, dashboards, and business rules.'
          },
          {
            es: 'Modelado y administración de bases de datos con SQL Server, SQLite, PostgreSQL, Supabase y Azure SQL Database.',
            en: 'Database modeling and management with SQL Server, SQLite, PostgreSQL, Supabase, and Azure SQL Database.'
          }
        ]
      }
    ],
    tags: ['C#', '.NET', 'Angular', 'SQL', 'APIs', 'Automation']
  },
  {
    company: 'Universidad Autónoma de Occidente',
    location: { es: 'Los Mochis, Sinaloa, México', en: 'Los Mochis, Sinaloa, Mexico' },
    period: { es: '2018 – 2020', en: '2018 – 2020' },
    summary: {
      es: 'Experiencia técnica y de desarrollo dentro del entorno universitario, apoyando procesos administrativos y equipos de cómputo.',
      en: 'Technical and development experience within the university environment, supporting administrative processes and computer equipment.'
    },
    roles: [
      {
        title: { es: 'Desarrollador Web', en: 'Web Developer' },
        period: { es: '2019 – 2020', en: '2019 – 2020' },
        responsibilities: [
          {
            es: 'Desarrollo de funcionalidades con ASP.NET, JavaScript y SQL Server para gestión de alumnos y eventos.',
            en: 'Development of features using ASP.NET, JavaScript, and SQL Server for student and event management.'
          },
          {
            es: 'Automatización de constancias, reportes PDF y documentos administrativos.',
            en: 'Automation of certificates, PDF reports, and administrative documents.'
          }
        ]
      },
      {
        title: { es: 'Técnico en Mantenimiento', en: 'IT Maintenance Technician' },
        period: { es: '2018', en: '2018' },
        responsibilities: [
          {
            es: 'Mantenimiento preventivo y correctivo, instalación de software y diagnóstico de hardware y sistema operativo.',
            en: 'Preventive and corrective maintenance, software installation, and hardware and operating-system diagnostics.'
          }
        ]
      }
    ],
    tags: ['ASP.NET', 'JavaScript', 'SQL Server', 'PDF', 'IT support']
  }
];

const pendingResources = {
  screenshots: {
    es: 'Capturas con datos de demostración pendientes',
    en: 'Screenshots with demo data pending'
  },
  repository: {
    es: 'Repositorio en preparación',
    en: 'Repository being prepared'
  }
} as const;

export const PROJECTS: readonly Project[] = [
  {
    slug: 'assurance-certification-system',
    title: {
      es: 'Sistema de Certificaciones “Aseguranza”',
      en: '“Aseguranza” Certification Management System'
    },
    shortDescription: {
      es: 'Aplicación de escritorio para administrar trabajadores, procesos, vigencias, fotografías, expedientes y credenciales.',
      en: 'Desktop application for managing employees, processes, validity periods, photos, files, and credentials.'
    },
    problem: {
      es: 'El control manual de certificaciones dificulta conocer vigencias, localizar expedientes y verificar rápidamente el estado de cada trabajador.',
      en: 'Manual certification control makes it difficult to track validity periods, locate records, and quickly verify each employee’s status.'
    },
    solution: {
      es: 'Sistema WinForms con lógica de negocio, base de datos relacional, estados visuales, cámara, generación de credenciales y conexión a Azure SQL Database.',
      en: 'A WinForms system with business logic, a relational database, visual statuses, camera support, credential generation, and Azure SQL Database connectivity.'
    },
    highlights: [
      {
        es: 'Estados: vigente, por vencer, vencida, sin certificar y anulada.',
        en: 'Statuses: active, expiring soon, expired, uncertified, and voided.'
      },
      {
        es: 'Fotografías, expedientes, credenciales HTML y preparación para almacenamiento en la nube.',
        en: 'Photos, files, HTML credentials, and preparation for cloud storage.'
      },
      {
        es: 'Versiones con SQL Server, SQLite portable y Azure SQL Database.',
        en: 'Versions using SQL Server, portable SQLite, and Azure SQL Database.'
      }
    ],
    technologies: ['C#', '.NET', 'WinForms', 'SQL Server', 'SQLite', 'Azure SQL', 'WebView2'],
    categories: ['desktop'],
    status: 'active',
    resourceStatus: pendingResources,
    featured: true
  },
  {
    slug: 'ipd-management-platform',
    title: {
      es: 'Plataforma de Gestión IPD',
      en: 'IPD Management Platform'
    },
    shortDescription: {
      es: 'Aplicación web multiusuario para capturar producción, defectos e indicadores IPD por línea.',
      en: 'Multi-user web application for capturing production, defects, and IPD indicators by line.'
    },
    problem: {
      es: 'La captura distribuida de producción y defectos requiere centralización, control de acceso y visualización en tiempo real.',
      en: 'Distributed production and defect capture requires centralization, access control, and real-time visibility.'
    },
    solution: {
      es: 'Aplicación Angular con Supabase, autenticación, roles, RLS, captura diaria, desglose de defectos, dashboard y operaciones en tiempo real.',
      en: 'Angular application with Supabase, authentication, roles, RLS, daily capture, defect breakdown, dashboards, and real-time operations.'
    },
    highlights: [
      {
        es: 'Roles Admin, Supervisor y Viewer con políticas Row Level Security.',
        en: 'Admin, Supervisor, and Viewer roles with Row Level Security policies.'
      },
      {
        es: 'Live Operations con actualizaciones, alertas y sonido.',
        en: 'Live Operations with updates, alerts, and sound.'
      },
      {
        es: 'Interfaz en español, implementación técnica en inglés y tema claro/oscuro.',
        en: 'Spanish interface, English technical implementation, and light/dark theme.'
      }
    ],
    technologies: ['Angular', 'TypeScript', 'Supabase', 'PostgreSQL', 'Realtime', 'RLS'],
    categories: ['web'],
    status: 'development',
    resourceStatus: pendingResources,
    featured: true
  },
  {
    slug: 'quality-findings-system',
    title: {
      es: 'Sistema Visual de Liberaciones y Hallazgos',
      en: 'Visual Release and Quality Findings System'
    },
    shortDescription: {
      es: 'Solución en Excel/VBA con layouts interactivos, validación dimensional, estados y trazabilidad de hallazgos.',
      en: 'Excel/VBA solution with interactive layouts, dimensional validation, statuses, and finding traceability.'
    },
    problem: {
      es: 'El seguimiento manual de puntos inspeccionados y hallazgos dificulta visualizar el estado de una estación y consultar el historial.',
      en: 'Manual tracking of inspected points and findings makes it difficult to visualize station status and review history.'
    },
    solution: {
      es: 'Primera versión funcional en Excel/VBA para validar el proceso real; migración planeada a una aplicación web multiusuario.',
      en: 'A functional Excel/VBA first version used to validate the real process; migration to a multi-user web application is planned.'
    },
    highlights: [
      {
        es: 'Registro por fecha, turno, línea, estación, arnés, modelo, nivel de diseño y punto.',
        en: 'Capture by date, shift, line, station, harness, model, design level, and point.'
      },
      {
        es: 'Estados abierto, en proceso y cerrado representados directamente sobre el layout.',
        en: 'Open, in-progress, and closed statuses displayed directly on the layout.'
      },
      {
        es: 'Validación de mediciones contra tolerancias y formularios para apertura y cierre.',
        en: 'Measurement validation against tolerances and forms for opening and closing findings.'
      }
    ],
    technologies: ['Excel', 'VBA', 'Automation', 'Dashboards', 'Angular (planned)'],
    categories: ['automation', 'web'],
    status: 'planned',
    resourceStatus: pendingResources,
    featured: true
  },
  {
    slug: 'maxsoft-mexico',
    title: { es: 'MaxSoft México', en: 'MaxSoft Mexico' },
    shortDescription: {
      es: 'Sitio comercial y catálogo de soluciones tecnológicas, páginas web y plantillas para negocios.',
      en: 'Commercial website and catalog of technology solutions, websites, and business templates.'
    },
    problem: {
      es: 'Los negocios pequeños requieren una presencia digital clara y soluciones accesibles para presentar sus servicios.',
      en: 'Small businesses need a clear digital presence and accessible solutions to present their services.'
    },
    solution: {
      es: 'Marca digital con catálogo de plantillas, sitios responsivos y propuestas de desarrollo personalizado.',
      en: 'A digital brand with a template catalog, responsive websites, and custom development proposals.'
    },
    highlights: [
      {
        es: 'Más de diez conceptos de plantillas orientadas a distintos giros.',
        en: 'More than ten template concepts focused on different business sectors.'
      },
      {
        es: 'Despliegue web y construcción de interfaces responsivas.',
        en: 'Web deployment and development of responsive interfaces.'
      }
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Bootstrap', 'Netlify', 'Vercel'],
    categories: ['web'],
    status: 'active',
    resourceStatus: pendingResources,
    liveUrl: 'https://maxsoftmexico.com'
  },
  {
    slug: 'academic-events-system',
    title: {
      es: 'Sistema de Gestión de Eventos Académicos',
      en: 'Academic Event Management System'
    },
    shortDescription: {
      es: 'Sistema web para congresos, inscripción de participantes, control de asistentes y generación de constancias.',
      en: 'Web system for conferences, participant registration, attendance control, and certificate generation.'
    },
    problem: {
      es: 'La gestión manual de registros, asistentes y documentos incrementa el tiempo administrativo y el riesgo de errores.',
      en: 'Manual management of registrations, attendees, and documents increases administrative time and the risk of errors.'
    },
    solution: {
      es: 'Sistema con módulos CRUD, inscripción en línea y generación automática de constancias PDF y reportes Excel.',
      en: 'A system with CRUD modules, online registration, and automatic generation of PDF certificates and Excel reports.'
    },
    highlights: [
      {
        es: 'Administración de participantes, eventos y asistencia.',
        en: 'Participant, event, and attendance management.'
      },
      {
        es: 'Automatización de documentos y reportes.',
        en: 'Document and report automation.'
      }
    ],
    technologies: ['ASP.NET', 'Angular', 'SQL Server', 'JavaScript', 'PDF', 'Excel'],
    categories: ['web'],
    status: 'completed',
    resourceStatus: pendingResources
  },
  {
    slug: 'inventory-pos-system',
    title: {
      es: 'Sistema de Inventario y Punto de Venta',
      en: 'Inventory and Point-of-Sale System'
    },
    shortDescription: {
      es: 'Aplicación de escritorio para productos, usuarios, almacenes, movimientos, permisos y reportes.',
      en: 'Desktop application for products, users, warehouses, movements, permissions, and reports.'
    },
    problem: {
      es: 'El inventario requiere un registro centralizado de entradas, salidas, existencias y permisos de usuario.',
      en: 'Inventory operations require centralized tracking of entries, exits, stock levels, and user permissions.'
    },
    solution: {
      es: 'Aplicación WinForms con base de datos SQL Server, administración de catálogos, movimientos y generación de reportes.',
      en: 'A WinForms application with SQL Server, catalog administration, inventory movements, and report generation.'
    },
    highlights: [
      {
        es: 'Control de productos, almacenes y movimientos.',
        en: 'Product, warehouse, and movement control.'
      },
      {
        es: 'Permisos por usuario y reportes operativos.',
        en: 'User permissions and operational reports.'
      }
    ],
    technologies: ['C#', 'WinForms', 'SQL Server', 'Reports'],
    categories: ['desktop'],
    status: 'completed',
    resourceStatus: pendingResources
  },
  {
    slug: 'community-treasury',
    title: {
      es: 'Sistema de Tesorería Comunitaria',
      en: 'Community Treasury System'
    },
    shortDescription: {
      es: 'Sistema para controlar ingresos, egresos, usuarios y permisos en versiones web y de escritorio.',
      en: 'System for controlling income, expenses, users, and permissions in web and desktop versions.'
    },
    problem: {
      es: 'El registro financiero comunitario necesita orden, historial, clasificación y control de acceso.',
      en: 'Community financial records require organization, history, classification, and access control.'
    },
    solution: {
      es: 'Sistema administrativo con movimientos financieros, usuarios con roles y consultas de seguimiento.',
      en: 'Administrative system with financial movements, role-based users, and tracking queries.'
    },
    highlights: [
      {
        es: 'Registro de ingresos y egresos.',
        en: 'Income and expense tracking.'
      },
      {
        es: 'Control de usuarios y roles.',
        en: 'User and role management.'
      }
    ],
    technologies: ['C#', 'ASP.NET', 'SQL Server', 'Desktop'],
    categories: ['web', 'desktop'],
    status: 'completed',
    resourceStatus: pendingResources
  },
  {
    slug: 'ecoride',
    title: { es: 'EcoRide', en: 'EcoRide' },
    shortDescription: {
      es: 'Concepto móvil offline-first para renta local de scooters eléctricos y control de tiempo.',
      en: 'Offline-first mobile concept for local electric-scooter rentals and time control.'
    },
    problem: {
      es: 'Un negocio de renta local necesita controlar unidades disponibles, tiempo contratado y alertas sin depender siempre de internet.',
      en: 'A local rental business needs to control available units, rental time, and alerts without always depending on internet access.'
    },
    solution: {
      es: 'Prototipo con .NET MAUI y SQLite para registrar rentas, disponibilidad y finalización del tiempo contratado.',
      en: 'Prototype using .NET MAUI and SQLite to register rentals, availability, and rental-time completion.'
    },
    highlights: [
      {
        es: 'Operación local y persistencia SQLite.',
        en: 'Local operation and SQLite persistence.'
      },
      {
        es: 'Renta de una o varias unidades y alertas de tiempo.',
        en: 'Single or multiple unit rentals with time alerts.'
      }
    ],
    technologies: ['.NET MAUI', 'C#', 'SQLite', 'Offline-first'],
    categories: ['mobile'],
    status: 'concept',
    resourceStatus: pendingResources
  }
];

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    title: { es: 'Lenguajes', en: 'Languages' },
    description: {
      es: 'Lenguajes utilizados en aplicaciones, automatizaciones y bases de datos.',
      en: 'Languages used across applications, automations, and databases.'
    },
    items: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'HTML5', 'CSS3 / SCSS', 'VBA']
  },
  {
    title: { es: 'Frontend', en: 'Frontend' },
    description: {
      es: 'Interfaces responsivas, componentes reutilizables y experiencias web modernas.',
      en: 'Responsive interfaces, reusable components, and modern web experiences.'
    },
    items: ['Angular', 'React', 'RxJS', 'Angular Material', 'Tailwind CSS', 'Bootstrap', 'Responsive Design']
  },
  {
    title: { es: 'Backend y APIs', en: 'Backend and APIs' },
    description: {
      es: 'Servicios, reglas de negocio, autenticación e integración de datos.',
      en: 'Services, business rules, authentication, and data integration.'
    },
    items: ['ASP.NET Core', 'ASP.NET Framework', 'Node.js', 'Express', 'NestJS', 'REST APIs', 'JWT']
  },
  {
    title: { es: 'Datos y nube', en: 'Data and cloud' },
    description: {
      es: 'Diseño relacional, procedimientos, persistencia local y servicios administrados.',
      en: 'Relational design, procedures, local persistence, and managed services.'
    },
    items: ['SQL Server', 'SQLite', 'PostgreSQL', 'Supabase', 'Azure SQL Database', 'Stored Procedures', 'RLS']
  },
  {
    title: { es: 'Desktop y móvil', en: 'Desktop and mobile' },
    description: {
      es: 'Aplicaciones empresariales locales, captura de imágenes y prototipos móviles.',
      en: 'Local business applications, image capture, and mobile prototypes.'
    },
    items: ['WinForms', 'WPF', '.NET MAUI', 'WebView2', 'AForge.Video', 'Offline-first']
  },
  {
    title: { es: 'Herramientas y automatización', en: 'Tools and automation' },
    description: {
      es: 'Flujo de desarrollo, despliegue, control de versiones y productividad.',
      en: 'Development workflow, deployment, version control, and productivity.'
    },
    items: ['Git', 'GitHub', 'Docker', 'Excel VBA', 'Netlify', 'Vercel', 'Visual Studio', 'VS Code']
  }
];

export const EDUCATION: readonly EducationItem[] = [
  {
    degree: {
      es: 'Licenciatura en Sistemas Computacionales',
      en: 'Bachelor’s Degree in Computer Systems'
    },
    institution: 'Universidad Autónoma de Occidente (UAdeO)',
    period: { es: 'Finalizada en julio de 2020', en: 'Completed in July 2020' },
    detail: {
      es: 'Formación en desarrollo de software, programación, bases de datos, análisis de sistemas y solución de problemas mediante tecnología.',
      en: 'Education in software development, programming, databases, systems analysis, and technology-driven problem solving.'
    }
  }
];

export const SPOKEN_LANGUAGES: readonly SpokenLanguage[] = [
  {
    name: { es: 'Español', en: 'Spanish' },
    level: { es: 'Nativo', en: 'Native' }
  },
  {
    name: { es: 'Inglés', en: 'English' },
    level: { es: 'B2 · Intermedio', en: 'B2 · Intermediate' }
  },
  {
    name: { es: 'Portugués', en: 'Portuguese' },
    level: { es: 'B2 · Intermedio', en: 'B2 · Intermediate' }
  }
];
