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
  slug: 'sismos' | 'inundaciones' | 'orden-publico' | 'otros-riesgos';
  topicNumber: string;
  topicLabel: string;
  badge: string;
  image: string;
  darkHref: string;
  lightHref: string;
  dashboardSummary: string;
  dark: BrochureVariant;
  light: BrochureVariant;
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
];

export const brochureBySlug = Object.fromEntries(
  brochures.map((brochure) => [brochure.slug, brochure]),
) as Record<Brochure['slug'], Brochure>;
