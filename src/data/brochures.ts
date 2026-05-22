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

export type BrochureVariant = {
  title: string;
  summary: string;
  ribbon: string;
  cards: BrochureCard[];
  alertLevels?: AlertLevel[];
  footer?: string;
};

export type Brochure = {
  slug: 'sismos' | 'inundaciones' | 'orden-publico' | 'otros-riesgos' | 'brigadas-escolares' | 'plan-escolar-pegir' | 'evacuacion-simulacros' | 'senales-seguridad';
  topicNumber: string;
  topicLabel: string;
  badge: string;
  image: string;
  darkHref: string;
  lightHref: string;
  dashboardSummary: string;
  dark: BrochureVariant;
  light: BrochureVariant;
  styleVariant?: 'default' | 'rounded-glass' | 'timeline-step';
};

export const brochures: Brochure[] = [
  {
    slug: 'sismos',
    topicNumber: 'Tema 01',
    topicLabel: 'Sismos y terremotos',
    badge: 'Alerta sismica',
    image: '/assets/earthquake_illustration_1774892678686.png',
    darkHref: '/sismos-dark',
    lightHref: '/sismos-light',
    dashboardSummary: 'Protocolo inmediato, refugio seguro y acciones posteriores.',
    dark: {
      title: 'Agachate, cubrete y agarrate',
      summary: 'Protocolo oficial basico de autoproteccion ante eventos sismicos segun FUNVISIS.',
      ribbon: 'ALERTA | Durante el sismo no use ascensores ni escaleras',
      cards: [
        {
          icon: 'shelter',
          title: 'Permanezca en el sitio',
          description:
            'Si esta en interiores, quedese adentro. Refugiese bajo un mueble fuerte y agarrese de el hasta que pase el temblor.',
        },
        {
          icon: 'warning',
          title: 'Lo que no debe hacer',
          description:
            'No use el marco de la puerta. Nunca use ascensores ni escaleras durante el sismo.',
        },
        {
          icon: 'radio',
          title: 'Informacion oficial',
          description:
            'Finalizado el movimiento, corte el gas y sintonice estaciones de radio con un dispositivo a baterias.',
        },
      ],
      footer:
        'Mantenga rutas de evacuacion despejadas y un kit de emergencia accesible en hogar, escuela o trabajo.',
    },
    light: {
      title: 'Que hacer si tiembla',
      summary: 'Guia clara para actuar con serenidad, buscar refugio y evitar zonas de peligro.',
      ribbon: 'PREVENCION | Respire, piense con claridad y proteja cabeza y cuello',
      cards: [
        {
          icon: 'warning',
          title: 'Conserve la calma',
          description:
            'Respire profundo. El miedo es normal, pero debe pensar con claridad para mantenerse a salvo.',
        },
        {
          icon: 'shelter',
          title: 'Refugio seguro',
          description:
            'Ubicarse bajo una mesa resistente y sujetarse con firmeza reduce lesiones por objetos que caen.',
        },
        {
          icon: 'radio',
          title: 'Zonas de peligro',
          description:
            'Evite ascensores, vidrios y escaleras mientras ocurre el movimiento. Espere a que termine para evacuar.',
        },
      ],
      footer:
        'Despues del evento, verifique fugas, daños y espere orientaciones oficiales antes de reingresar.',
    },
  },
  {
    slug: 'inundaciones',
    topicNumber: 'Tema 02',
    topicLabel: 'Lluvias e inundaciones',
    badge: 'Hidrometeorologia',
    image: '/assets/floods_illustration_1774910201216.png',
    darkHref: '/inundaciones-dark',
    lightHref: '/inundaciones-light',
    dashboardSummary: 'Prevencion, desplazamiento seguro y niveles de alerta.',
    dark: {
      title: 'Prevencion de inundaciones',
      summary: 'Protocolo oficial basico de autoproteccion ante lluvias severas y crecidas segun INAMEH.',
      ribbon: 'ALERTA | No cruce corrientes ni zonas anegadas aunque parezcan bajas',
      cards: [
        {
          icon: 'water',
          title: 'Peligro de corrientes',
          description:
            'Nunca intente cruzar corrientes de agua. Pocos centimetros bastan para derribar personas o arrastrar vehiculos.',
        },
        {
          icon: 'electric',
          title: 'Proteccion electrica',
          description:
            'Desconecte la energia general si el agua penetra en la vivienda y evite resguardarse bajo arboles durante tormentas.',
        },
        {
          icon: 'route',
          title: 'Movilidad segura',
          description:
            'Priorice rutas altas y alejadas de rios, quebradas y pasos a desnivel. La salida temprana reduce el riesgo.',
        },
      ],
      alertLevels: [
        { label: 'Alerta verde', description: 'Pase con precaucion', tone: 'green' },
        { label: 'Alerta amarilla', description: 'Evite vehiculos livianos', tone: 'yellow' },
        { label: 'Alerta roja', description: 'Prohibicion de paso', tone: 'red' },
      ],
    },
    light: {
      title: 'Inundaciones y lluvias',
      summary: 'Acciones claras para alejarse del agua, subir a zonas altas y limpiar con seguridad.',
      ribbon: 'PREVENCION | Si sube el agua, suba usted primero',
      cards: [
        {
          icon: 'water',
          title: 'Alejese del agua',
          description:
            'No cruce rios crecidos ni calles anegadas. La corriente puede arrastrar rapidamente.',
        },
        {
          icon: 'route',
          title: 'Zonas altas',
          description:
            'Si el agua entra en casa, suba a pisos superiores y corte la electricidad principal.',
        },
        {
          icon: 'electric',
          title: 'Despues del evento',
          description:
            'Limpie y desinfecte bien. El agua empozada puede traer enfermedades, insectos y riesgos electricos.',
        },
      ],
      alertLevels: [
        { label: 'Alerta verde', description: 'Pase preventivo', tone: 'green' },
        { label: 'Alerta amarilla', description: 'Mucha precaucion', tone: 'yellow' },
        { label: 'Alerta roja', description: 'No pase', tone: 'red' },
      ],
    },
  },
  {
    slug: 'orden-publico',
    topicNumber: 'Tema 03',
    topicLabel: 'Orden publico y crisis',
    badge: 'Seguridad civil',
    image: '/assets/civil_safety_illustration_1774910214897.png',
    darkHref: '/orden-publico-dark',
    lightHref: '/orden-publico-light',
    dashboardSummary: 'Refugio domestico, suministros y coordinacion comunitaria.',
    dark: {
      title: 'Orden publico y crisis',
      summary: 'Medidas de autoproteccion ante escenarios de alteracion del orden publico.',
      ribbon: 'ALERTA | Priorice resguardo, abastecimiento basico y coordinacion vecinal',
      cards: [
        {
          icon: 'home',
          title: 'Refugio domestico',
          description:
            'Alejese de focos de conflicto y refuerce cristales con cinta en X para reducir proyecciones.',
        },
        {
          icon: 'supply',
          title: 'Autosuficiencia',
          description:
            'Mantenga agua, alimentos duraderos, medicinas y articulos esenciales para varias semanas.',
        },
        {
          icon: 'community',
          title: 'Evite confrontacion',
          description:
            'Permanezca en el hogar, asegure accesos y coordinese con vecinos de confianza para vigilancia mutua.',
        },
      ],
    },
    light: {
      title: 'Cuidarnos en comunidad',
      summary: 'Guia familiar para mantenerse bajo resguardo y apoyarse con vecinos de confianza.',
      ribbon: 'PREVENCION | Menos exposicion en calle, mas coordinacion en hogar',
      cards: [
        {
          icon: 'home',
          title: 'Casita segura',
          description:
            'Quedese adentro si hay problemas en la calle y alejese de ventanas grandes o de cristal.',
        },
        {
          icon: 'supply',
          title: 'Prepare la despensa',
          description:
            'Guarde comida que dure y agua suficiente para evitar salidas innecesarias.',
        },
        {
          icon: 'community',
          title: 'Vecinos atentos',
          description:
            'Acordar apoyo con personas de confianza mejora vigilancia, ayuda y circulacion de informacion.',
        },
      ],
    },
  },
  {
    slug: 'otros-riesgos',
    topicNumber: 'Tema 04',
    topicLabel: 'Riesgos especificos',
    badge: 'Otras amenazas',
    image: '/assets/fire_safety_illustration_1774910229007.png',
    darkHref: '/otros-riesgos-dark',
    lightHref: '/otros-riesgos-light',
    dashboardSummary: 'Incendios, derrames y otros eventos puntuales de riesgo.',
    dark: {
      title: 'Incendios forestales y especiales',
      summary: 'Manejo de fuego forestal, derrames y enjambres peligrosos en territorio nacional.',
      ribbon: 'ALERTA | No improvise respuesta ante fuego, derrames o enjambres',
      cards: [
        {
          icon: 'fire',
          title: 'Contingencia forestal',
          description:
            'Mantenga un espacio defendible alrededor de la edificacion y evacue en sentido contrario al viento.',
        },
        {
          icon: 'spill',
          title: 'Derrame de hidrocarburos',
          description:
            'Evacue de inmediato por riesgo de explosion. La contencion corresponde a entes especializados.',
        },
        {
          icon: 'swarm',
          title: 'Enjambres peligrosos',
          description:
            'No agreda abejas o avispas con agua o insecticida. Acordone la zona y notifique a Proteccion Civil.',
        },
      ],
    },
    light: {
      title: 'Cuidado en el exterior',
      summary: 'Medidas simples para reaccionar ante fuego, panales y derrames en espacios abiertos.',
      ribbon: 'PREVENCION | Distancia, aviso oportuno y salida temprana',
      cards: [
        {
          icon: 'fire',
          title: 'Fuego en monte',
          description:
            'Si observa fuego forestal, camine en direccion contraria al viento y alejese del frente de llamas.',
        },
        {
          icon: 'swarm',
          title: 'Panales peligrosos',
          description:
            'No arroje agua ni insecticida. Reporte a rescatistas o autoridades competentes.',
        },
        {
          icon: 'spill',
          title: 'Derrames',
          description:
            'Si ve petroleo o quimicos, alejese de inmediato por riesgo de incendio, intoxicacion o explosion.',
        },
      ],
    },
  },
  {
    slug: 'brigadas-escolares',
    topicNumber: 'Escuela 01',
    topicLabel: 'Brigadas y Comités',
    badge: 'Gestión Escolar',
    image: '/assets/1_classroom_2_students_3_teacher_4.jpg',
    darkHref: '/brigadas-escolares-dark',
    lightHref: '/brigadas-escolares-light',
    dashboardSummary: 'Estructura del comité de riesgo, responsabilidades de la comunidad y brigadas.',
    styleVariant: 'default',
    dark: {
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
    light: {
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
  },
  {
    slug: 'plan-escolar-pegir',
    topicNumber: 'Escuela 02',
    topicLabel: 'Plan de Riesgos (PEGIR)',
    badge: 'Planificación',
    image: '/assets/a_group_of_students_in_white_shirts_and_navy_blue.jpg',
    darkHref: '/plan-escolar-pegir-dark',
    lightHref: '/plan-escolar-pegir-light',
    dashboardSummary: 'Elaboración del Plan Escolar de Gestión Integral del Riesgo (PEGIR) y mapa de recursos.',
    styleVariant: 'rounded-glass',
    dark: {
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
    light: {
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
  },
  {
    slug: 'evacuacion-simulacros',
    topicNumber: 'Escuela 03',
    topicLabel: 'Evacuación y Simulacros',
    badge: 'Ejecución y Práctica',
    image: '/assets/title_children_under_a_table_description_two_children_sitting_under.jpg',
    darkHref: '/evacuacion-simulacros-dark',
    lightHref: '/evacuacion-simulacros-light',
    dashboardSummary: 'Sistema de evacuación escolar, fases de desalojo y entrenamiento práctico.',
    styleVariant: 'timeline-step',
    dark: {
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
    light: {
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
  },
  {
    slug: 'senales-seguridad',
    topicNumber: 'Escuela 04',
    topicLabel: 'Señales de Seguridad',
    badge: 'Prevención',
    image: '/assets/senales-seguridad.jpg',
    darkHref: '/senales-seguridad-default-dark',
    lightHref: '/senales-seguridad-default-light',
    dashboardSummary: 'Simbología universal, colores de seguridad y letreros informativos para evacuación escolar.',
    styleVariant: 'default',
    dark: {
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
    light: {
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
  },
];

export const brochureBySlug = Object.fromEntries(
  brochures.map((brochure) => [brochure.slug, brochure]),
) as Record<Brochure['slug'], Brochure>;
