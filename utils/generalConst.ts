/* Este archivo permite guardar todas las estructuras de datos que posteriormete seran implementadas (Exportadas) en los componentes, este con el objetivo de obtener la mayor puresa de los archivos de componentes. */

// Menus
export const itemsMenuSidebar = [
  {
    id: 1,
    iconCategory: 'akar-icons',
    iconName: 'home',
    title: 'Inicio',
    path: '/',
  },
  {
    id: 2,
    iconCategory: 'ph',
    iconName: 'student',
    title: 'Información Académica',
    path: '/academy',
  },
  {
    id: 3,
    iconCategory: 'ph',
    iconName: 'certificate',
    title: 'Certificados',
    path: '/experience',
  },
  {
    id: 4,
    iconCategory: 'ph',
    iconName: 'read-cv-logo',
    title: 'Experiencia Laboral',
    path: '/hitos/create',
  },
  {
    id: 5,
    iconCategory: 'ph',
    iconName: 'folder-user',
    title: 'Hito Personal',
    path: '/hitos/create_staff',
  },
  // {
  //   id: 2,
  //   iconCategory: 'ph',
  //   iconName: 'layout',
  //   title: 'Projects',
  //   path: '/admin/projects',
  // },
  // {
  //   id: 3,
  //   iconCategory: 'clarity',
  //   iconName: 'favorite-line',
  //   title: 'Favorites',
  //   path: '/Favorites',
  // },
  // {
  //   id: 4,
  //   iconCategory: 'icon-park-outline',
  //   iconName: 'doc-search-two',
  //   title: 'Master Data',
  //   path: '/admin',
  // },
  // {
  //   id: 5,
  //   iconCategory: 'carbon',
  //   iconName: 'flow',
  //   title: 'Workflows',
  //   path: '/Workflows',
  // },
  // {
  //   id: 6,
  //   iconCategory: 'ph',
  //   iconName: 'folder-user',
  //   title: 'Corporate Documnents',
  //   path: '/Corporate Documnents',
  // },
  // {
  //   id: 7,
  //   iconCategory: 'ph',
  //   iconName: 'signature',
  //   title: 'Signatures',
  //   path: '/Maestro clientes',
  // },
];
export const itemsMenuSidebarMobile = [
  // {
  //   id: 1,
  //   iconCategory: 'icon-park-outline',
  //   iconName: 'doc-search-two',
  //   title: 'Master Data',
  //   path: '/admin',
  // },
  // {
  //   id: 2,
  //   iconCategory: 'carbon',
  //   iconName: 'flow',
  //   title: 'Workflows',
  //   path: '/Workflows',
  // },
  // {
  //   id: 3,
  //   iconCategory: 'ph',
  //   iconName: 'folder-user',
  //   title: 'Corporate Documnents',
  //   path: '/Corporate Documnents',
  // },
  // {
  //   id: 4,
  //   iconCategory: 'ph',
  //   iconName: 'signature',
  //   title: 'Signatures',
  //   path: '/Maestro clientes',
  // },
  {
    id: 1,
    iconCategory: 'akar-icons',
    iconName: 'home',
    title: 'Inicio',
    path: '/',
  },
  {
    id: 2,
    iconCategory: 'ph',
    iconName: 'student',
    title: 'Información Académica',
    path: '/academy',
  },
  {
    id: 3,
    iconCategory: 'ph',
    iconName: 'certificate',
    title: 'Certificados',
    path: '/experience',
  },
  {
    id: 4,
    iconCategory: 'ph',
    iconName: 'read-cv-logo',
    title: 'Experiencia Laboral',
    path: '/Experiencia Laboral',
  },
  {
    id: 5,
    iconCategory: 'ph',
    iconName: 'folder-user',
    title: 'Hito Personal',
    path: '/Hitos Personales',
  },
];
export const itemsMenuFooterTab = [
  {
    id: 1,
    iconCategory: 'akar-icons',
    iconName: 'home',
    title: 'Home',
    path: '/',
  },
  // {
  //   id: 2,
  //   iconCategory: 'ph',
  //   iconName: 'layout',
  //   title: 'Projects',
  //   path: '/Favorites',
  // },
  // {
  //   id: 3,
  //   iconCategory: 'ph',
  //   iconName: 'folder-user',
  //   title: 'Favorites',
  //   path: '/gngngn',
  // },
];

export const itemsNotifications = [
  {
    id: 1,
    user: 'Juan Pablo',
    description: 'viewed Project Gantt Document',
    lastUpdate: 'Today',
    time: '09:24 AM',
    statusView: false,
  },
  {
    id: 2,
    user: 'Maria Gonzalez',
    description: 'commented on Task #34',
    lastUpdate: 'Today',
    time: '11:15 AM',
    statusView: false,
  },
  {
    id: 3,
    user: 'Carlos Ramirez',
    description: 'added new file to the repository',
    lastUpdate: 'Today',
    time: '12:45 PM',
    statusView: false,
  },
  {
    id: 4,
    user: 'Luisa Fernandez',
    description: 'assigned you a new task',
    lastUpdate: 'Yesterday',
    time: '04:30 PM',
    statusView: false,
  },
  {
    id: 5,
    user: 'Ana Lopez',
    description: 'updated the project status',
    lastUpdate: 'Yesterday',
    time: '06:55 PM',
    statusView: false,
  },
  {
    id: 6,
    user: 'Pedro Sanchez',
    description: 'mentioned you in a comment',
    lastUpdate: '2 days ago',
    time: '09:10 AM',
    statusView: false,
  },
];

// Cards
export const dataCardRecents = [
  {
    id: 1,
    iconCategory: 'grommet-icons',
    iconName: 'projects',
    title: 'Projecto prueba',
    category: 'Sponsor',
    favourite: true,
    lastUpdate: '30/06/2023',
  },
  {
    id: 2,
    iconCategory: 'grommet-icons',
    iconName: 'projects',
    title: 'Projecto p2',
    category: 'Sponsor',
    favourite: false,
    lastUpdate: '01/07/2023',
  },
  {
    id: 3,
    iconCategory: 'grommet-icons',
    iconName: 'projects',
    title: 'Documento prueba',
    category: 'Regulatory binder',
    favourite: true,
    lastUpdate: '29/06/2023',
  },
  {
    id: 4,
    iconCategory: 'mdi',
    iconName: 'contract-outline',
    title: 'Documento prueba',
    category: 'Regulatory binder',
    favourite: true,
    lastUpdate: '29/06/2023',
  },
  {
    id: 5,
    iconCategory: 'mdi',
    iconName: 'contract-outline',
    title: 'Project p3',
    category: 'Sponsor',
    favourite: true,
    lastUpdate: '29/08/2023',
  },
  {
    id: 6,
    iconCategory: 'mdi',
    iconName: 'contract-outline',
    title: 'Documents',
    category: 'Sponsor',
    favourite: true,
    lastUpdate: '29/08/2023',
  },
];
export const dataCardMaster = [
  {
    id: 1,
    title: 'Master projects',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti nobis ipsam eum possimus earum iusto hic labore magni fugiat molestiae odit, sit, architecto, ullam voluptate ducimus optio sed provident eos.',
    path: '/admin/masters/master-projects',
  },
  {
    id: 2,
    title: 'Master projects news',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti nobis ipsam eum possimus earum iusto hic labore magni fugiat molestiae odit, sit, architecto, ullam voluptate ducimus optio sed provident eos.',
    path: '/',
  },

  {
    id: 4,
    title: 'Master users',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti nobis ipsam eum possimus earum iusto hic labore magni fugiat molestiae odit, sit, architecto, ullam voluptate ducimus optio sed provident eos.',
    path: '/admin/masters/master-users',
  },

  {
    id: 6,
    title: 'Master time zone',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti nobis ipsam eum possimus earum iusto hic labore magni fugiat molestiae odit, sit, architecto, ullam voluptate ducimus optio sed provident eos.',
    path: '/',
  },
];

export const dataCardProjects = [
  {
    id: 1,
    iconCategory: 'grommet-icons',
    iconName: 'projects',
    projectName: 'Proyecto prueba',
    state: 'start up',
    category: 'sponsor',
    protocolId: '000000-1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id consequuntur, officia culpa inventore autem est',
    subjects: 100,
    sites: 20,
    studyGlobalProgress: '60',
    users: ['john chavarro', 'Nelly urrea', 'juan pablo'],
    lastUpdate: '30/06/2023',
  },
  {
    id: 2,
    iconCategory: 'grommet-icons',
    iconName: 'tasks',
    projectName: 'Tarea importante',
    state: 'close out',
    category: 'tarea',
    protocolId: '000001-1',
    description: 'Esta es una tarea importante que debe completarse pronto.',
    subjects: 50,
    sites: 10,
    studyGlobalProgress: '50',
    users: ['ana garcía', 'Pedro Pérez'],
    lastUpdate: '01/08/2023',
  },
  {
    id: 3,
    iconCategory: 'grommet-icons',
    iconName: 'document-text',
    projectName: 'Informe final',
    state: 'on hold',
    category: 'documento',
    protocolId: '000002-1',
    description: 'Informe detallado del proyecto realizado.',
    subjects: 200,
    sites: 30,
    studyGlobalProgress: '10',
    users: ['maría rodríguez', 'Ricardo Gómez'],
    lastUpdate: '25/07/2023',
  },
  {
    id: 4,
    iconCategory: 'grommet-icons',
    iconName: 'book',
    projectName: 'Investigación científica',
    state: 'close out',
    category: 'investigación',
    protocolId: '000003-1',
    description: 'Resultados de una investigación científica.',
    subjects: 500,
    sites: 50,
    studyGlobalProgress: '90',
    users: ['laura martínez', 'Carlos Sánchez', 'Elena Castro'],
    lastUpdate: '15/07/2023',
  },
  {
    id: 5,
    iconCategory: 'grommet-icons',
    iconName: 'user-settings',
    projectName: 'Configuración de usuario',
    state: 'follow up',
    category: 'configuración',
    protocolId: '000004-1',
    description: 'Configuración personalizada para cada usuario.',
    subjects: 20,
    sites: 5,
    studyGlobalProgress: '76',
    users: ['pedro pérez', 'Elena Castro'],
    lastUpdate: '20/07/2023',
  },
  {
    id: 6,
    iconCategory: 'grommet-icons',
    iconName: 'calendar',
    projectName: 'Calendario de eventos',
    state: 'suspended',
    category: 'calendario',
    protocolId: '000005-1',
    description: 'Calendario con los eventos importantes del año.',
    subjects: 150,
    sites: 40,
    studyGlobalProgress: '40',
    users: ['maría rodríguez', 'Ricardo Gómez', 'laura martínez'],
    lastUpdate: '28/07/2023',
  },
  {
    id: 7,
    iconCategory: 'grommet-icons',
    iconName: 'money',
    projectName: 'Presupuesto financiero',
    state: 'start up',
    category: 'finanzas',
    protocolId: '000006-1',
    description: 'Detalles del presupuesto financiero del proyecto.',
    subjects: 80,
    sites: 15,
    studyGlobalProgress: '30',
    users: ['ana garcía', 'Carlos Sánchez'],
    lastUpdate: '10/07/2023',
  },
  {
    id: 8,
    iconCategory: 'grommet-icons',
    iconName: 'security',
    projectName: 'Informe de seguridad',
    state: 'close out',
    category: 'seguridad',
    protocolId: '000007-1',
    description: 'Informe de seguridad para el sistema informático.',
    subjects: 300,
    sites: 25,
    studyGlobalProgress: '50',
    users: ['john chavarro', 'Nelly urrea', 'juan pablo'],
    lastUpdate: '05/07/2023',
  },
  {
    id: 9,
    iconCategory: 'grommet-icons',
    iconName: 'analytics',
    projectName: 'Análisis de datos',
    state: 'on hold',
    category: 'análisis',
    protocolId: '000008-1',
    description: 'Resultados y conclusiones del análisis de datos.',
    subjects: 400,
    sites: 35,
    studyGlobalProgress: '20',
    users: ['Elena Castro', 'Pedro Pérez', 'maría rodríguez'],
    lastUpdate: '15/06/2023',
  },
  {
    id: 10,
    iconCategory: 'grommet-icons',
    iconName: 'language',
    projectName: 'Traducción al español',
    state: 'suspended',
    category: 'traducción',
    protocolId: '000009-1',
    description: 'Documento en proceso de traducción al español.',
    subjects: 50,
    sites: 8,
    studyGlobalProgress: '20',
    users: ['laura martínez', 'Carlos Sánchez'],
    lastUpdate: '29/07/2023',
  },
];

export const colorsAssignmentstateForState = {
  'start up': '#008c94',
  'close out': '#ff9e10',
  'follow up': '#27394f',
  'on hold': '#c73e28',
  suspended: '#424f5e',
};

export const dataCardMiniProjectId = [
  {
    id: 1,
    name: 'Active sites',
  },
  {
    id: 2,
    name: 'Sites pending',
  },
  {
    id: 3,
    name: 'Pending to be active',
  },
  {
    id: 4,
    name: 'Number of subjeccts',
  },
  {
    id: 5,
    name: 'Roll',
  },
];

// Shortcuts
export const dataShortcutsButtons = [
  {
    id: 1,
    iconCategory: 'ph',
    iconName: 'signature',
    title: 'Signature',
    path: '/',
  },
  {
    id: 2,
    iconCategory: 'ph',
    iconName: 'check',
    title: 'Approvals',
    path: '/',
  },
  {
    id: 3,
    iconCategory: 'prime',
    iconName: 'user',
    title: 'Master Users',
    path: '/admin/masters/master-users',
  },
  {
    id: 4,
    iconCategory: 'bi',
    iconName: 'diagram-3',
    title: 'Workflows',
    path: '/',
  },
];

// Gauge
export const dataFinanceDetails = [
  {
    id: 1,
    color: '#26b693',
    label: 'Total project budget',
    background: '#008d9422',
    percentage: 70,
    value: '12.0',
  },
  {
    id: 2,
    color: '#008c94',
    label: 'Total executed',
    background: '#008d9422',
    percentage: 20,
    value: '55.5',
  },
  {
    id: 3,
    color: '#00617b',
    label: 'Budget remaining',
    background: '#00607b22',
    percentage: 90,
    value: '15.0',
  },
];

/* Tables */
// -- Data example user
export const dataHeaderTableUser = [
  'Role',
  'First Name',
  'Last Name',
  'Email',
  'Company',
  'Active/ inactive',
  'Delete',
  'Action',
];
export const dataBodyTableUser = [
  {
    id: 1,
    role: 'Administrador',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    company: 'Example Corp',
    activeInactive: 'Activo',
    delete: 'No',
    phone: '+1234567890',
    contry: 'United States',
    city: 'New York',
    state: 'NY',
    state2: '',
    projectName: 'Project X',
    titlePosition: 'Gerente de Proyecto',
    adress: '123 Main Street',
    action: 'Editar',
  },
  {
    id: 2,
    role: 'Usuario',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    company: 'Another Company',
    activeInactive: 'Inactivo',
    delete: 'No',
    phone: '+9876543210',
    contry: 'Canada',
    city: 'Toronto',
    state: 'Ontario',
    state2: '',
    projectName: 'Project Y',
    titlePosition: 'Analista de Datos',
    adress: '456 Maple Avenue',
    action: 'Ver Detalles',
  },
  {
    id: 3,
    role: 'Usuario',
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael.johnson@example.com',
    company: 'Tech Solutions',
    activeInactive: 'Activo',
    delete: 'No',
    phone: '+5555555555',
    contry: 'United Kingdom',
    city: 'London',
    state: '',
    state2: '',
    projectName: 'Project Z',
    titlePosition: 'Desarrollador de Software',
    adress: '789 Oak Road',
    action: 'Eliminar',
  },
  {
    id: 4,
    role: 'Administrador',
    firstName: 'Emily',
    lastName: 'Williams',
    email: 'emily.williams@example.com',
    company: 'Global Enterprises',
    activeInactive: 'Activo',
    delete: 'No',
    phone: '+9999999999',
    contry: 'Australia',
    city: 'Sydney',
    state: 'NSW',
    state2: '',
    projectName: 'Project Alpha',
    titlePosition: 'Director de Marketing',
    adress: '555 Elm Street',
    action: 'Editar',
  },
  {
    id: 5,
    role: 'Usuario',
    firstName: 'Robert',
    lastName: 'Lee',
    email: 'robert.lee@example.com',
    company: 'Innovative Tech',
    activeInactive: 'Inactivo',
    delete: 'No',
    phone: '+1111111111',
    contry: 'Germany',
    city: 'Berlin',
    state: '',
    state2: '',
    projectName: 'Project Beta',
    titlePosition: 'Diseñador Gráfico',
    adress: '222 Cedar Lane',
    action: 'Ver Detalles',
  },
  {
    id: 6,
    role: 'Usuario',
    firstName: 'Sophia',
    lastName: 'Garcia',
    email: 'sophia.garcia@example.com',
    company: 'Tech Innovators',
    activeInactive: 'Activo',
    delete: 'No',
    phone: '+7777777777',
    contry: 'Spain',
    city: 'Madrid',
    state: '',
    state2: '',
    projectName: 'Project Gamma',
    titlePosition: 'Consultor de Ventas',
    adress: '333 Pine Avenue',
    action: 'Eliminar',
  },
  {
    id: 7,
    role: 'Administrador',
    firstName: 'Liam',
    lastName: 'Martin',
    email: 'liam.martin@example.com',
    company: 'Data Analytics Inc.',
    activeInactive: 'Activo',
    delete: 'No',
    phone: '+4444444444',
    contry: 'France',
    city: 'Paris',
    state: '',
    state2: '',
    projectName: 'Project Delta',
    titlePosition: 'Director de Operaciones',
    adress: '444 Oak Lane',
    action: 'Editar',
  },
  {
    id: 8,
    role: 'Usuario',
    firstName: 'Olivia',
    lastName: 'Gonzalez',
    email: 'olivia.gonzalez@example.com',
    company: 'Web Solutions',
    activeInactive: 'Inactivo',
    delete: 'No',
    phone: '+6666666666',
    contry: 'Italy',
    city: 'Rome',
    state: 'Lazio',
    state2: '',
    projectName: 'Project Epsilon',
    titlePosition: 'Analista de Sistemas',
    adress: '555 Maple Lane',
    action: 'Ver Detalles',
  },
  {
    id: 9,
    role: 'Usuario',
    firstName: 'Noah',
    lastName: 'Rodriguez',
    email: 'noah.rodriguez@example.com',
    company: 'Design Studio',
    activeInactive: 'Activo',
    delete: 'No',
    phone: '+2222222222',
    contry: 'Brazil',
    city: 'Rio de Janeiro',
    state: 'RJ',
    state2: '',
    projectName: 'Project Zeta',
    titlePosition: 'Diseñador de UI/UX',
    adress: '777 Elm Lane',
    action: 'Eliminar',
  },
  {
    id: 10,
    role: 'Administrador',
    firstName: 'Emma',
    lastName: 'Lopez',
    email: 'emma.lopez@example.com',
    company: 'Media Productions',
    activeInactive: 'Activo',
    delete: 'No',
    phone: '+3333333333',
    contry: 'Japan',
    city: 'Tokyo',
    state: '',
    state2: '',
    projectName: 'Project Omega',
    titlePosition: 'Gerente de Recursos Humanos',
    adress: '666 Pine Road',
    action: 'Editar',
  },
  {
    id: 11,
    role: 'Usuario',
    firstName: 'Mia',
    lastName: 'Perez',
    email: 'mia.perez@example.com',
    company: 'E-commerce Solutions',
    activeInactive: 'Inactivo',
    delete: 'No',
    phone: '+8888888888',
    contry: 'India',
    city: 'Mumbai',
    state: 'Maharashtra',
    state2: '',
    projectName: 'Project Sigma',
    titlePosition: 'Especialista en Marketing Digital',
    adress: '999 Oak Avenue',
    action: 'Ver Detalles',
  },
  {
    id: 12,
    role: 'Usuario',
    firstName: 'Elijah',
    lastName: 'Sanchez',
    email: 'elijah.sanchez@example.com',
    company: 'Tech Support Ltd.',
    activeInactive: 'Activo',
    delete: 'No',
    phone: '+7777777777',
    contry: 'Russia',
    city: 'Moscow',
    state: '',
    state2: '',
    projectName: 'Project Lambda',
    titlePosition: 'Especialista en Seguridad Informática',
    adress: '123 Cedar Lane',
    action: 'Eliminar',
  },
  {
    id: 13,
    role: 'Administrador',
    firstName: 'Ava',
    lastName: 'Ramirez',
    email: 'ava.ramirez@example.com',
    company: 'Tech Solutions',
    activeInactive: 'Activo',
    delete: 'No',
    phone: '+4444444444',
    contry: 'China',
    city: 'Shanghai',
    state: '',
    state2: '',
    projectName: 'Project Theta',
    titlePosition: 'Director de Tecnología',
    adress: '222 Pine Road',
    action: 'Editar',
  },
  {
    id: 14,
    role: 'Usuario',
    firstName: 'James',
    lastName: 'Torres',
    email: 'james.torres@example.com',
    company: 'Data Analytics Inc.',
    activeInactive: 'Inactivo',
    delete: 'No',
    phone: '+6666666666',
    contry: 'South Korea',
    city: 'Seoul',
    state: '',
    state2: '',
    projectName: 'Project Iota',
    titlePosition: 'Analista de Datos',
    adress: '333 Elm Avenue',
    action: 'Ver Detalles',
  },
  {
    id: 15,
    role: 'Usuario',
    firstName: 'Isabella',
    lastName: 'Nguyen',
    email: 'isabella.nguyen@example.com',
    company: 'Design Studio',
    activeInactive: 'Activo',
    delete: 'No',
    phone: '+2222222222',
    contry: 'Mexico',
    city: 'Mexico City',
    state: '',
    state2: '',
    projectName: 'Project Kappa',
    titlePosition: 'Diseñador de UI/UX',
    adress: '555 Cedar Road',
    action: 'Eliminar',
  },
  {
    id: 16,
    role: 'Administrador',
    firstName: 'Alexander',
    lastName: 'Kim',
    email: 'alexander.kim@example.com',
    company: 'Media Productions',
    activeInactive: 'Activo',
    delete: 'No',
    phone: '+3333333333',
    contry: 'Netherlands',
    city: 'Amsterdam',
    state: '',
    state2: '',
    projectName: 'Project Omicron',
    titlePosition: 'Gerente de Marketing',
    adress: '666 Elm Lane',
    action: 'Editar',
  },
  {
    id: 17,
    role: 'Usuario',
    firstName: 'Ella',
    lastName: 'Le',
    email: 'ella.le@example.com',
    company: 'E-commerce Solutions',
    activeInactive: 'Inactivo',
    delete: 'No',
    phone: '+8888888888',
    contry: 'Argentina',
    city: 'Buenos Aires',
    state: '',
    state2: '',
    projectName: 'Project Rho',
    titlePosition: 'Especialista en Logística',
    adress: '999 Pine Avenue',
    action: 'Ver Detalles',
  },
  {
    id: 18,
    role: 'Usuario',
    firstName: 'Aiden',
    lastName: 'Gupta',
    email: 'aiden.gupta@example.com',
    company: 'Tech Support Ltd.',
    activeInactive: 'Activo',
    delete: 'No',
    phone: '+7777777777',
    contry: 'South Africa',
    city: 'Cape Town',
    state: '',
    state2: '',
    projectName: 'Project Phi',
    titlePosition: 'Especialista en Redes',
    adress: '123 Maple Road',
    action: 'Eliminar',
  },
  {
    id: 19,
    role: 'Administrador',
    firstName: 'Scarlett',
    lastName: 'Hernandez',
    email: 'scarlett.hernandez@example.com',
    company: 'Tech Solutions',
    activeInactive: 'Activo',
    delete: 'No',
    phone: '+4444444444',
    contry: 'Brazil',
    city: 'Sao Paulo',
    state: 'SP',
    state2: '',
    projectName: 'Project Sigma',
    titlePosition: 'Director de Operaciones',
    adress: '222 Cedar Lane',
    action: 'Editar',
  },
  {
    id: 20,
    role: 'Usuario',
    firstName: 'Lucas',
    lastName: 'Chen',
    email: 'lucas.chen@example.com',
    company: 'Data Analytics Inc.',
    activeInactive: 'Inactivo',
    delete: 'No',
    phone: '+6666666666',
    contry: 'Canada',
    city: 'Vancouver',
    state: 'British Columbia',
    state2: '',
    projectName: 'Project Tau',
    titlePosition: 'Analista de Datos',
    adress: '333 Pine Road',
    action: 'Ver Detalles',
  },
];

// -- Data example project
export const dataHeaderTableProject = [
  'Sponsor name',
  'Study name',
  'Study type',
  'Disease/Target marked',
  '# subjects',
  '# clinical sites: feasibility',
  '# clinical sites: qualification',
  '# clinical sites: selection',
  'Action',
];

export const dataBodyTableProject = [
  {
    id: 1,
    sponsorName: 'ABC Pharmaceuticals',
    studyName: 'Estudio de Eficacia del Medicamento XYZ',
    studyType: 'Ensayo Clínico de Fase III',
    diseaseTargetMarked: 'Cáncer de Pulmón',
    subjects: '500',
    clinicalSitesFeasibility: 'Completado',
    clinicalSitesQualificationlete: 'En progreso',
    clinicalSitesSelection: 'En progreso',
    action: 'Ver Detalles',
  },
  {
    id: 2,
    sponsorName: 'XYZ Biotech',
    studyName: 'Ensayo de Seguridad del Medicamento ABC',
    studyType: 'Ensayo Clínico de Fase I',
    diseaseTargetMarked: 'Artritis Reumatoide',
    subjects: '200',
    clinicalSitesFeasibility: 'En progreso',
    clinicalSitesQualificationlete: 'No iniciado',
    clinicalSitesSelection: 'No iniciado',
    action: 'Ver Detalles',
  },
  {
    id: 3,
    sponsorName: 'PharmaCorp',
    studyName: 'Estudio de Efectividad del Tratamiento MNO',
    studyType: 'Ensayo Clínico de Fase II',
    diseaseTargetMarked: 'Diabetes Tipo 2',
    subjects: '300',
    clinicalSitesFeasibility: 'Completado',
    clinicalSitesQualificationlete: 'Completado',
    clinicalSitesSelection: 'Completado',
    action: 'Ver Detalles',
  },
  {
    id: 4,
    sponsorName: 'HealthCare Inc.',
    studyName: 'Estudio de Prevención de Gripe',
    studyType: 'Estudio Observacional',
    diseaseTargetMarked: 'Gripe',
    subjects: '1000',
    clinicalSitesFeasibility: 'Completado',
    clinicalSitesQualificationlete: 'Completado',
    clinicalSitesSelection: 'Completado',
    action: 'Ver Detalles',
  },
  {
    id: 5,
    sponsorName: 'MedResearch Labs',
    studyName: 'Ensayo de Vacuna VZY',
    studyType: 'Ensayo Clínico de Fase II',
    diseaseTargetMarked: 'VIH',
    subjects: '800',
    clinicalSitesFeasibility: 'Completado',
    clinicalSitesQualificationlete: 'Completado',
    clinicalSitesSelection: 'Completado',
    action: 'Ver Detalles',
  },
  {
    id: 6,
    sponsorName: 'BioPharma Innovations',
    studyName: 'Estudio de Eficacia del Tratamiento PQR',
    studyType: 'Ensayo Clínico de Fase III',
    diseaseTargetMarked: 'Enfermedad de Alzheimer',
    subjects: '600',
    clinicalSitesFeasibility: 'En progreso',
    clinicalSitesQualificationlete: 'No iniciado',
    clinicalSitesSelection: 'No iniciado',
    action: 'Ver Detalles',
  },
  {
    id: 7,
    sponsorName: 'Gene Therapeutics',
    studyName: 'Ensayo de Terapia Génica ABC123',
    studyType: 'Ensayo Clínico de Fase I',
    diseaseTargetMarked: 'Fibrosis Quística',
    subjects: '150',
    clinicalSitesFeasibility: 'Completado',
    clinicalSitesQualificationlete: 'Completado',
    clinicalSitesSelection: 'Completado',
    action: 'Ver Detalles',
  },
  {
    id: 8,
    sponsorName: 'PharmaCure',
    studyName: 'Estudio de Efectividad del Medicamento XYZ',
    studyType: 'Ensayo Clínico de Fase II',
    diseaseTargetMarked: 'Hipertensión',
    subjects: '400',
    clinicalSitesFeasibility: 'Completado',
    clinicalSitesQualificationlete: 'Completado',
    clinicalSitesSelection: 'Completado',
    action: 'Ver Detalles',
  },
  {
    id: 9,
    sponsorName: 'Health Solutions',
    studyName: 'Estudio de Seguridad del Tratamiento DEF',
    studyType: 'Estudio Observacional',
    diseaseTargetMarked: 'Esclerosis Múltiple',
    subjects: '300',
    clinicalSitesFeasibility: 'En progreso',
    clinicalSitesQualificationlete: 'En progreso',
    clinicalSitesSelection: 'No iniciado',
    action: 'Ver Detalles',
  },
  {
    id: 10,
    sponsorName: 'InnovaPharm',
    studyName: 'Estudio de Eficacia del Medicamento PQR',
    studyType: 'Ensayo Clínico de Fase II',
    diseaseTargetMarked: 'Depresión',
    subjects: '250',
    clinicalSitesFeasibility: 'Completado',
    clinicalSitesQualificationlete: 'Completado',
    clinicalSitesSelection: 'En progreso',
    action: 'Ver Detalles',
  },
  {
    id: 11,
    sponsorName: 'MedLife Research',
    studyName: 'Ensayo de Vacuna ABC',
    studyType: 'Ensayo Clínico de Fase III',
    diseaseTargetMarked: 'COVID-19',
    subjects: '1000',
    clinicalSitesFeasibility: 'En progreso',
    clinicalSitesQualificationlete: 'No iniciado',
    clinicalSitesSelection: 'No iniciado',
    action: 'Ver Detalles',
  },
  {
    id: 12,
    sponsorName: 'PharmaGen',
    studyName: 'Estudio de Efectividad del Tratamiento XYZ',
    studyType: 'Ensayo Clínico de Fase II',
    diseaseTargetMarked: 'Artritis Psoriásica',
    subjects: '350',
    clinicalSitesFeasibility: 'Completado',
    clinicalSitesQualificationlete: 'Completado',
    clinicalSitesSelection: 'Completado',
    action: 'Ver Detalles',
  },
  {
    id: 13,
    sponsorName: 'Biotech Solutions',
    studyName: 'Ensayo de Terapia Génica ZYX321',
    studyType: 'Ensayo Clínico de Fase I',
    diseaseTargetMarked: 'Distrofia Muscular',
    subjects: '200',
    clinicalSitesFeasibility: 'Completado',
    clinicalSitesQualificationlete: 'Completado',
    clinicalSitesSelection: 'Completado',
    action: 'Ver Detalles',
  },
];
