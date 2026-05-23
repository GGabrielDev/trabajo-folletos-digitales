export type BrochureMode = 'dark' | 'light';

export type BrochureCard = {
  icon:
    | 'shelter'
    | 'warning'
    | 'radio'
    | 'water'
    | 'electric'
    | 'route'
    | 'home'
    | 'supply'
    | 'community'
    | 'fire'
    | 'spill'
    | 'swarm';
  title: string;
  description: string;
};

export type AlertLevel = {
  label: string;
  description: string;
  tone: 'green' | 'yellow' | 'red';
};

export type Brochure = {
  slug:
    | 'sismos'
    | 'inundaciones'
    | 'orden-publico'
    | 'otros-riesgos'
    | 'brigadas-escolares'
    | 'plan-escolar-pegir'
    | 'evacuacion-simulacros'
    | 'senales-seguridad';
  topicNumber: string;
  topicLabel: string;
  badge: string;
  image: string;
  dashboardSummary: string;
  title: string;
  summary: string;
  ribbon: string;
  cards: BrochureCard[];
  alertLevels?: AlertLevel[];
  footer?: string;
  styleVariant?: 'default' | 'rounded-glass' | 'timeline-step';
};

export const brochures: Brochure[] = [
  {
    slug: 'sismos',
    topicNumber: 'Tema 01',
    topicLabel: 'Sismos y terremotos',
    badge: 'Alerta sismica',
    image: '/assets/earthquake_illustration_1774892678686.png',
    dashboardSummary: 'Protocolo inmediato, refugio seguro y acciones posteriores.',
    title: 'Agachate, cubrete y agarrate: Que hacer si tiembla',
    summary: 'Protocolo oficial basico de autoproteccion ante eventos sismicos segun FUNVISIS. Guia clara para actuar con serenidad, buscar refugio y evitar zonas de peligro.',
    ribbon: 'ALERTA | Respire, piense con claridad, proteja cabeza y cuello y no use ascensores ni escaleras',
    cards: [
      {
        icon: 'shelter',
        title: 'Refugio seguro y permanencia',
        description: 'Si esta en interiores, quedese adentro. Ubiquese bajo una mesa o mueble resistente y sujetese con firmeza para reducir lesiones por objetos que caen.',
      },
      {
        icon: 'warning',
        title: 'Conserve la calma y evite riesgos',
        description: 'Respire profundo para pensar con claridad. No use marcos de puertas, ascensores, escaleras ni se acerque a vidrios mientras ocurre el movimiento.',
      },
      {
        icon: 'radio',
        title: 'Informacion y evaluacion posterior',
        description: 'Finalizado el movimiento, corte el gas, verifique daños o fugas, sintonice estaciones de radio a baterias y espere orientaciones oficiales antes de reingresar.',
      },
    ],
    footer: 'Mantenga rutas de evacuacion despejadas y un kit de emergencia accesible. Verifique fugas o daños y espere orientaciones oficiales antes de reingresar.',
  },
  {
    slug: 'inundaciones',
    topicNumber: 'Tema 02',
    topicLabel: 'Lluvias e inundaciones',
    badge: 'Hidrometeorologia',
    image: '/assets/floods_illustration_1774910201216.png',
    dashboardSummary: 'Prevencion, desplazamiento seguro y niveles de alerta.',
    title: 'Prevencion ante Lluvias e Inundaciones',
    summary: 'Protocolo oficial de autoproteccion ante lluvias severas, crecidas y tormentas segun INAMEH. Acciones para alejarse del agua, resguardarse y realizar limpieza segura.',
    ribbon: 'ALERTA | Si sube el agua, busque zonas altas y evite cruzar corrientes',
    cards: [
      {
        icon: 'water',
        title: 'Peligro de corrientes y alejarse del agua',
        description: 'Nunca intente cruzar corrientes de agua, rios crecidos ni calles anegadas. Pocos centimetros de agua en movimiento bastan para arrastrar personas o vehiculos.',
      },
      {
        icon: 'electric',
        title: 'Proteccion electrica y resguardo',
        description: 'Si el agua entra en la vivienda, corte la electricidad general. Evite resguardarse bajo arboles o tendidos electricos durante tormentas.',
      },
      {
        icon: 'route',
        title: 'Movilidad segura y post-emergencia',
        description: 'Priorice rutas altas alejadas de rios y quebradas. Despues del evento, limpie y desinfecte bien las zonas afectadas para evitar enfermedades por agua empozada.',
      },
    ],
    alertLevels: [
      { label: 'Alerta verde', description: 'Pase preventivo con precaucion', tone: 'green' },
      { label: 'Alerta amarilla', description: 'Mucha precaucion - Evite vehiculos livianos', tone: 'yellow' },
      { label: 'Alerta roja', description: 'No pase - Prohibicion absoluta de paso', tone: 'red' },
    ],
  },
  {
    slug: 'orden-publico',
    topicNumber: 'Tema 03',
    topicLabel: 'Orden publico y crisis',
    badge: 'Seguridad civil',
    image: '/assets/civil_safety_illustration_1774910214897.png',
    dashboardSummary: 'Refugio domestico, suministros y coordinacion comunitaria.',
    title: 'Autoproteccion and Resguardo Vecinal',
    summary: 'Medidas de autoproteccion y guia familiar ante escenarios de alteracion del orden publico para mantenerse a salvo y apoyarse mutuamente.',
    ribbon: 'ALERTA | Priorice resguardo, abastecimiento basico y coordinacion vecinal',
    cards: [
      {
        icon: 'home',
        title: 'Refugio domestico y resguardo seguro',
        description: 'Permanezca bajo resguardo en el hogar y asegure todos los accesos. Alejese de ventanas de cristal y, si es necesario, refuerce los vidrios con cinta en X.',
      },
      {
        icon: 'supply',
        title: 'Autosuficiencia y despensa familiar',
        description: 'Mantenga un suministro de agua potable, alimentos no perecederos, medicamentos y articulos de primera necesidad para evitar salir innecesariamente.',
      },
      {
        icon: 'community',
        title: 'Vecinos atentos y prevencion',
        description: 'Evite confrontaciones en la calle y coordinese con vecinos de confianza para establecer redes de apoyo, vigilancia mutua e intercambio seguro de informacion.',
      },
    ],
  },
  {
    slug: 'otros-riesgos',
    topicNumber: 'Tema 04',
    topicLabel: 'Riesgos especificos',
    badge: 'Otras amenazas',
    image: '/assets/fire_safety_illustration_1774910229007.png',
    dashboardSummary: 'Incendios, derrames and otros eventos puntuales de riesgo.',
    title: 'Riesgos Especificos y Amenazas Ambientales',
    summary: 'Medidas de prevencion y reaccion ante incendios forestales, derrames de hidrocarburos o sustancias quimicas y enjambres peligrosos en el territorio nacional.',
    ribbon: 'ALERTA | Mantenga distancia, avise oportunamente y no improvise respuesta ante amenazas',
    cards: [
      {
        icon: 'fire',
        title: 'Incendios forestales',
        description: 'Mantenga un espacio libre de vegetacion seca alrededor de su edificacion. Si observa fuego, evacue caminando en direccion contraria al viento y lejos de las llamas.',
      },
      {
        icon: 'spill',
        title: 'Derrames quimicos o de hidrocarburos',
        description: 'Evacue de inmediato la zona si observa derrames de petroleo o quimicos por alto riesgo de intoxicacion, incendio o explosion. La contencion es tarea de especialistas.',
      },
      {
        icon: 'swarm',
        title: 'Enjambres y panales peligrosos',
        description: 'No arroje agua ni insecticidas a las abejas o avispas para no agredirlas. Acordone el area de peligro y notifique de inmediato a Proteccion Civil o bomberos.',
      },
    ],
  },
  {
    slug: 'brigadas-escolares',
    topicNumber: 'Escuela 01',
    topicLabel: 'Brigadas y Comités',
    badge: 'Gestión Escolar',
    image: '/assets/1_classroom_2_students_3_teacher_4.jpg',
    dashboardSummary: 'Estructura del comité de riesgo, responsabilidades de la comunidad y brigadas.',
    styleVariant: 'default',
    title: 'Comités y Brigadas Escolares de Gestión del Riesgo',
    summary: 'Capacitación y organización de la comunidad educativa para fortalecer la capacidad de respuesta y resiliencia ante eventos adversos.',
    ribbon: 'ORGANIZACIÓN | La prevención escolar es compromiso de directivos, docentes, alumnos y representantes',
    cards: [
      {
        icon: 'community',
        title: 'El Comité Escolar (Directivos)',
        description: 'Liderar el Plan de Gestión de Riesgos, identificar peligros, elaborar mapas de riesgo y organizar simulacros periódicos.',
      },
      {
        icon: 'warning',
        title: 'Docentes y Personal',
        description: 'Capacitarse en gestión del riesgo, integrar la prevención en las clases y guiar activamente a los alumnos durante las emergencias.',
      },
      {
        icon: 'shelter',
        title: 'Alumnos y Representantes',
        description: 'Los estudiantes participan en brigadas y respetan las señalizaciones. Los padres apoyan las acciones escolares y crean sus planes familiares de emergencia.',
      },
    ],
    footer: 'La juramentación de brigadas es un acto solemne apoyado por Protección Civil para sellar el compromiso con la cultura preventiva escolar.',
  },
  {
    slug: 'plan-escolar-pegir',
    topicNumber: 'Escuela 02',
    topicLabel: 'Plan de Riesgos (PEGIR)',
    badge: 'Planificación',
    image: '/assets/a_group_of_students_in_white_shirts_and_navy_blue.jpg',
    dashboardSummary: 'Elaboración del Plan Escolar de Gestión Integral del Riesgo (PEGIR) y mapa de recursos.',
    styleVariant: 'rounded-glass',
    title: 'Plan Escolar de Gestión de Riesgos (PEGIR)',
    summary: 'Hoja de ruta dinámica para identificar amenazas, reducir la vulnerabilidad y optimizar los recursos internos y externos de la institución.',
    ribbon: 'PLANIFICACIÓN | El mapa de riesgos escolar debe ser participativo y actualizarse cada año',
    cards: [
      {
        icon: 'supply',
        title: 'Componentes de Planificación',
        description: 'Evaluación de amenazas, medidas de reducción (infraestructura, ordenamiento) y planes de contingencia para la continuidad educativa.',
      },
      {
        icon: 'warning',
        title: 'Mapa de Riesgos (Amenazas)',
        description: 'Señala amenazas naturales (inundaciones, sismos) e internas (cables sueltos, laboratorios, escaleras deterioradas) con colores estándar.',
      },
      {
        icon: 'community',
        title: 'Recursos y Capacidades',
        description: 'Identificar extintores, botiquines, líderes capacitados y zonas seguras o puntos de encuentro libres de obstáculos.',
      },
    ],
    alertLevels: [
      { label: 'Rojo (Peligro)', description: 'Zonas de alto peligro o riesgo inmediato en la infraestructura.', tone: 'red' },
      { label: 'Amarillo (Precaución)', description: 'Riesgo medio o áreas de precaución que requieren mantenimiento.', tone: 'yellow' },
      { label: 'Verde (Seguridad)', description: 'Zonas seguras de reunión, rutas despejadas y recursos de auxilio.', tone: 'green' },
    ],
    footer: 'El PEGIR y el mapa son herramientas visuales de concientización y planificación para decidir dónde priorizar esfuerzos y recursos.',
  },
  {
    slug: 'evacuacion-simulacros',
    topicNumber: 'Escuela 03',
    topicLabel: 'Evacuación y Simulacros',
    badge: 'Ejecución y Práctica',
    image: '/assets/title_children_under_a_table_description_two_children_sitting_under.jpg',
    dashboardSummary: 'Sistema de evacuación escolar, fases de desalojo y entrenamiento práctico.',
    styleVariant: 'timeline-step',
    title: 'Sistema de Evacuación Escolar y Simulacros',
    summary: 'Protocolo coordinado para desalojar las aulas de forma rápida, ordenada y segura. Ensayos prácticos para salvar vidas.',
    ribbon: 'SIMULACRO | El simulacro escolar genera memoria muscular para actuar por instinto y evitar el pánico',
    cards: [
      {
        icon: 'route',
        title: 'Evacuación en 5 Fases',
        description: '1. Detección (peligro). 2. Alarma (señal). 3. Preparación (formación). 4. Salida (ruta establecida). 5. Conteo (pasar lista).',
      },
      {
        icon: 'warning',
        title: 'Las 3 Reglas de Oro',
        description: 'No Corro (evita caídas), No Grito (para escuchar instrucciones), No Empujo (mantiene la fila y evita accidentes).',
      },
      {
        icon: 'radio',
        title: 'Tipos de Ensayos',
        description: 'Simulacros Avisados (aprender la ruta), Sorpresa (evaluar respuesta real) y Con Lesionados (para primeros auxilios).',
      },
    ],
    footer: 'El SEE debe ser lúdico, visual y adaptado a las edades de los niños. La prioridad absoluta son las personas con discapacidad o movilidad reducida.',
  },
  {
    slug: 'senales-seguridad',
    topicNumber: 'Escuela 04',
    topicLabel: 'Señales de Seguridad',
    badge: 'Prevención',
    image: '/assets/senales-seguridad.jpg',
    dashboardSummary: 'Simbología universal, colores de seguridad y letreros informativos para evacuación escolar.',
    styleVariant: 'default',
    title: 'Señales de Seguridad y Salvamento',
    summary: 'Identificación y comprensión de símbolos, colores y formas universales diseñados para guiar a la comunidad escolar en desalojos y emergencias sin necesidad de palabras.',
    ribbon: 'PREVENCIÓN | Las señales salvan vidas al guiar de forma rápida y universal en contingencias',
    cards: [
      {
        icon: 'warning',
        title: 'Colores Normativos',
        description: 'Rojo (prohibición y extinción de incendios), Amarillo (advertencia de riesgo), Azul (obligación/acción requerida) y Verde (salvamento/vías de evacuación).',
      },
      {
        icon: 'route',
        title: 'Señalización de Ruta',
        description: 'Uso de flechas de dirección verdes y letreros de Salida de Emergencia colocados en pasillos y escaleras para guiar hacia zonas seguras.',
      },
      {
        icon: 'radio',
        title: 'Sistemas de Alerta',
        description: 'Alarmas sonoras (sirenas, timbres específicos o silbatos) con códigos conocidos por toda la institución escolar para alertar en simulacros y emergencias.',
      },
    ],
    footer: 'Toda señalización de seguridad escolar debe ser visible, estar a la altura reglamentaria y libre de obstáculos en todo momento.',
  },
];

export const brochureBySlug = Object.fromEntries(
  brochures.map((brochure) => [brochure.slug, brochure]),
) as Record<Brochure['slug'], Brochure>;
