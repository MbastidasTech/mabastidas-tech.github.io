import {
  shopify,
  excel,
  word,
  powerpoint,
  odoo,
  windows,
  sharepoint,
  stellarpos,
  drive,
  onedrive,
  mega,
  microsoft365,
  canva,
  testimonio,
  testimonio2,
  testimonio3,
  analistafinanzas,
  administrativa,
  agentenegocios,
  seguridadlaboral,
  proyecto_riesgos,
  proyecto2,
  flujocaja,
  liontech,
  canguro,
  titulo,
  certificado,
  certificado2
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca",
  },
  {
    id: "work",
    title: "Trabajo",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Analista de Finanzas",
    icon: analistafinanzas,
  },
  {
    title: "Analista Administrativa",
    icon: administrativa,
  },
  {
    title: "Asesora de Negocios",
    icon: agentenegocios,
  },
  {
    title: "Analista de Seguridad Laboral",
    icon: seguridadlaboral,
  },
];

const technologies = [
  {
    name: "excel",
    icon: excel,
  },
  {
    name: "word",
    icon: word,
  },
  {
    name: "powerpoint",
    icon: powerpoint,
  },
  {
    name: "sharepoint",
    icon: sharepoint,
  },
  {
    name: "drive",
    icon: drive,
  },
  {
    name: "windows",
    icon: windows,
  },
  {
    name: "odoo",
    icon: odoo,
  },
  {
    name: "stellarpos",
    icon: stellarpos,
  },
  {
    name: "onedrive",
    icon: onedrive,
  },
  {
    name: "mega",
    icon: mega,
  },
  {
    name: "microsoft365",
    icon: microsoft365,
  },
  {
    name: "canva",
    icon: canva,
  },
];

const experiences = [
  {
    title: "Asesora de Negocios",
    company_name: "LION TECH / Rubro tecnológico - Mayorista", // Puedes poner el nombre real aquí
    icon: liontech, // Usamos el logo de LIONTECH
    iconBg: "#383E56",
    date: "Marzo 2025 - Actualidad",
    points: [
      "Asesoramiento especializado a clientes sobre soluciones tecnológicas y repuestos.",
      "Cumplimiento de metas mensuales de ventas y captación de nuevos clientes corporativos.",
      "Creación de Estrategias para Ventas/Negocios",
      "Gestión de Contenido en Redes Sociales.",
      "Gestión de Inventario.",
    ],
  },
  {
    title: "Analista de Finanzas y Administrativo",
    company_name: "DISTRICUEROS EL CANGURO / Rubro Tecnológico y telefonía", // Puedes poner el nombre real aquí
    icon: canguro, // Usamos el de canguro logo
    iconBg: "#383E56",
    date: "Septiembre 2021 - Enero 2025",
    points: [
      "Gestión de cuentas por cobrar y recuperación de cartera de clientes a nivel regional (Estado Lara).",
      "Ejecución de conciliaciones bancarias y análisis detallado de flujo de caja.",
      "Control administrativo de facturación y cobranzas en un entorno de alto volumen transaccional.",
      "Optimización de procesos financieros internos para mejorar los tiempos de respuesta operativo.",
      "Manejo de Sistemas integrales y Administrativos como Odoo 18 y Stellar, y especialista en herramientas ofimáticas.",
    ],
  },
  {
  title: "Asistente Integral, Contable y Recursos Humanos",
  company_name: "Centro de Adiestramiento Profesional Zarina de Asuaje (CEMPROZA)",
  icon: certificado2,
  iconBg: "#E6DEDD",
  date: "Agosto 2024 - Octubre 2024",
  points: [
    "Capacitación en procesos contables fundamentales: Estados Financieros, Ecuación Contable y Teoría de la Partida Doble.",
    "Gestión administrativa avanzada: Elaboración de retenciones a clientes/proveedores, facturación, notas de crédito y declaraciones de I.V.A e I.S.L.R.",
    "Dominio de legislación laboral y recursos humanos: Nómina, cálculos de impuestos para-fiscales (S.S.O, INCES, FAOV), prestaciones sociales y liquidaciones.",
    "Manejo técnico de documentos mercantiles, cuadres de caja y reportes de ventas.",
    ],
  },
  {
    title: "Asesora de Ventas y Control de Inventario",
    company_name: "ANKARA 2018, C.A. / Rubro Cuidado Personal",
    icon: shopify, 
    iconBg: "#E6DEDD",
    date: "Enero 2021 - Septiembre 2021",
    points: [
      "Liderazgo en el asesoramiento técnico especializado sobre productos de cuidado personal y soluciones",
      "Gestión efectiva de metas de ventas mensuales, logrando un incremento constante en la captación de clientes.",
      "Control riguroso de facturación, cierre de caja diario y auditoría de inventarios para asegurar la precisión financiera.",
      "Resolución de conflictos y atención al clientes, garantizando altos estándares de satisfacción y fidelización.",
    ],
  },
  {
    title: "Atención al Clientes y Ventas",
    company_name: "INVERSIONES BURBUJAS C.A. / Rubro Papelería",
    icon: shopify, 
    iconBg: "#E6DEDD",
    date: "Junio 2019 - Enero 2021",
    points: [
      "Excelencia en la atención al cliente y ventas consultivas, identificando necesidades específicas para ofrecer soluciones y productos.",
      "Ejecución de procesos administrativos clave, incluyendo la gestión de facturación y el manejo de flujos de caja operativos.",
      "Optimización de los tiempos de respuesta en el servicio post-venta, elevando los niveles de fidelización de la cartera de clientes.",
      "Colaboración directa en la organización logística y el control de inventarios para garantizar la disponibilidad de productos.",
    ],
  },
  {
    title: "TSU en Higiene y Seguridad Laboral",
    company_name: "UPTAEB / Formación Educativa Profesional",
    icon: titulo,
    iconBg: "#383E56",
    date: "Título Profesional Universitario (2017-2020)",
    points: [
      "Evaluación y prevención de riesgos laborales en entornos operativos y administrativos.",
      "Diseño de estrategias de seguridad para garantizar el cumplimiento de normativas legales.",
      "Visión integral: capacidad para alinear la seguridad laboral con la rentabilidad financiera.",
    ],
  },
  {
  title: "Asistente de Oficina Computarizado",
  company_name: "Centro de Secretariado Ejecutivo",
  icon: certificado, // Aquí usamos la imagen que importaste
  iconBg: "#E6DEDD",
  date: "Abril 2017",
  points: [
    "Aprobación con promedio sobresaliente de 20 puntos en módulos técnicos y administrativos.",
    "Dominio de herramientas de ofimática (MS Word), redacción de correspondencia y cálculo mercantil.",
    "Capacitación integral en relaciones humanas, archivo, kardex y prácticas secretariales.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Su capacidad para organizar las finanzas y su enfoque en el detalle es impresionante. Una profesional excepcional en la que se puede confiar plenamente.",
    name: "Rafael Escobar",
    designation: "Ing. Sistemas",
    company: "CCO Systems",
    image: testimonio,
  },
  {
    testimonial:
      "Su enfoque integral no solo optimizó nuestras finanzas, sino que transformó nuestra cultura de seguridad. Una profesional con una visión analítica impecable.",
    name: "Jesús Cuicas",
    designation: "Ing. Informática",
    company: "CONTIGO CORP",
    image: testimonio2,
  },
  {
    testimonial:
      "Maryelis optimizó nuestros flujos de caja de manera increíble. Altamente recomendada!",
    name: "Marilin Colmenarez",
    designation: "Analista Cobranza",
    company: "LION TECH",
    image: testimonio3,
  },
];

const projects = [
   {
    name: "Identificación de Factores de Riesgo",
    description:
      "Informe técnico detallado sobre el diagnóstico de vulnerabilidades en entornos industriales, evaluando riesgos físicos, químicos y ergonómicos para la prevención de accidentes.",
    tags: [
      { name: "Seguridad Industrial", color: "blue-text-gradient" },
      { name: "ISO 45001", color: "green-text-gradient" },
      { name: "Auditoría", color: "pink-text-gradient" },
    ],
    image: proyecto_riesgos,
    source_code_link: "https://docs.google.com/document/d/1bARXk1Rzyvmi-dbN6Ar1NtAhC8ggq-bi/edit?usp=sharing&ouid=103404478456539095316&rtpof=true&sd=true",
  },
  {
    name: "Métodos de Prevención y Control",
    description:
      "Diseño de estrategias de mitigación y protocolos de actuación ante factores de riesgo laboral, incluyendo planes de capacitación y selección de EPP especializados.",
    tags: [
      { name: "Prevención", color: "blue-text-gradient" },
      { name: "Salud Ocupacional", color: "green-text-gradient" },
      { name: "COVENIN", color: "orange-text-gradient" },
    ],
    image: proyecto2,
    source_code_link: "https://docs.google.com/document/d/1bARXk1Rzyvmi-dbN6Ar1NtAhC8ggq-bi/edit?usp=sharing&ouid=103404478456539095316&rtpof=true&sd=true",
  },
  {
    name: "Optimización de Flujos de Caja",
    description:
      "Implementación de un sistema de control administrativo para la gestión de tesorería e inventarios, logrando una reducción en los tiempos de conciliación y mayor precisión en los cierres diarios.",
    tags: [
      { name: "Finanzas", color: "blue-text-gradient" },
      { name: "Excel Avanzado", color: "green-text-gradient" },
      { name: "Auditoría", color: "pink-text-gradient" },
    ],
    image: flujocaja,
    source_code_link: "#", // Puedes dejarlo con # si no hay link externo
  },
];




export { services, technologies, experiences, testimonials, projects };
