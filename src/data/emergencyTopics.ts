export type EmergencyPhase = {
  label: 'Antes' | 'Durante' | 'Después';
  lead: string;
  points: string[];
};

export type EmergencyMapNode = {
  label: string;
  detail: string;
};

export type EmergencyInfographicItem = {
  label: string;
  detail: string;
};

export type EmergencyTopic = {
  id: string;
  title: string;
  emoji: string;
  image: string;
  ribbon: string;
  summary: string;
  phases: EmergencyPhase[];
  mapTitle: string;
  mapNodes: EmergencyMapNode[];
  infographicTitle: string;
  infographicItems: EmergencyInfographicItem[];
  footer: string;
};

export const emergencyTopics: EmergencyTopic[] = [
  {
    id: 'sismos',
    title: 'Sismos',
    emoji: '🏚️',
    image: '/assets/a_pile_of_rubble_with_various_objects_scattered_throughout.jpg',
    ribbon: 'ALERTA | Conserve la calma, protéjase de objetos que caigan y use escaleras',
    summary:
      'Guía oficial de autoprotección sísmica basada en FUNVISIS. Prepare un plan de contingencia familiar, escolar o empresarial, identifique zonas seguras y aprenda medidas específicas para personas con discapacidad.',
    phases: [
      {
        label: 'Antes',
        lead: 'Organice su plan de contingencia y kit de emergencias.',
        points: [
          'Elabore un plan de contingencia en caso de desastres (familiar, escolar o empresarial) y practíquelo regularmente.',
          'Ubique el lugar más seguro y accesible; disponga de un botiquín de primeros auxilios, agua, comida, linterna, baterías, extintor y un pito.',
          'Asegure o reubique objetos pesados que puedan caer: lámparas, bibliotecas, tableros o calentadores.',
          'Identifique herramientas para cerrar gas/agua y asigne un lugar fijo a las llaves.',
          'Personas con discapacidad: elabore una ficha personal de salud y lleve siempre consigo un pito y teléfono móvil.'
        ]
      },
      {
        label: 'Durante',
        lead: 'Proteja su vida manteniéndose calmado y a resguardo.',
        points: [
          'Mantenga la calma, reaccione con serenidad y ponga en marcha su plan. ¡No corra!',
          'Ubíquese debajo de mesas, escritorios, camas o resguárdese al lado de una viga o columna de la edificación.',
          'Aléjese de ventanas, espejos, puertas de vidrio, balcones y pendientes cercanas.',
          'Use sólo las escaleras para evacuar; nunca use los ascensores ya que podría quedar atrapado.',
          'Sillas de ruedas: coloque frenos en zonas seguras, cubra la cabeza con los brazos o inclínese hacia adelante.'
        ]
      },
      {
        label: 'Después',
        lead: 'Corte riesgos inmediatos y proceda con precaución.',
        points: [
          'Interrumpa los servicios de gas, agua y electricidad. No encienda fósforos ni velas si sospecha de fugas.',
          'Encienda la radio a baterías para escuchar las recomendaciones de las autoridades.',
          'Luego de desalojar, no se devuelva por ningún motivo y evite caminar descalzo entre escombros.',
          'Aléjese de construcciones que se puedan derrumbar y de la costa, ya que pueden ocurrir réplicas o marejadas.',
          'Si queda atrapado, mantenga la calma y pida auxilio usando un pito o generando ruidos con objetos.'
        ]
      }
    ],
    mapTitle: 'Puntos clave',
    mapNodes: [
      { label: 'Plan Familiar', detail: 'Precise la conducta y acciones de cada miembro y ensaye las rutas de escape.' },
      { label: 'Zonas Seguras', detail: 'Bajo mesas resistentes, marcos estructurales o áreas libres exteriores.' },
      { label: 'Inclusión', detail: 'Evite estanterías cerca de personas con movilidad reducida y dote de silbatos.' },
      { label: 'Cierre de Servicios', detail: 'Corte el suministro de gas y agua para evitar incendios o inundaciones secundarias.' }
    ],
    infographicTitle: 'Acciones clave',
    infographicItems: [
      { label: 'No corra', detail: 'El pánico y las caídas causan la mayoría de las lesiones durante el movimiento.' },
      { label: 'Sin ascensores', detail: 'Una falla eléctrica común tras el sismo lo dejará atrapado indefinidamente.' },
      { label: 'Desarrolle conciencia', detail: 'Estudie minuciosamente teatros, estadios y cines al ingresar para ubicar salidas.' }
    ],
    footer: 'Aula Sísmica "Madeleilis Guzmán" - FUNVISIS. Emergencias: 0800-TEMBLOR (0800-8362567)'
  },
  {
    id: 'tsunamis',
    title: 'Tsunamis',
    emoji: '🌊',
    image: '/assets/the_image_captures_a_dramatic_scene_of_a_wave_crashing_against.jpg',
    ribbon: 'EVACUACIÓN | Si siente un sismo en la costa o el mar se retira, corra a zona alta',
    summary:
      'Protocolo oficial de autoprotección ante maremotos y tsunamis. Aprenda a reconocer las alertas naturales, las señales de ruta de evacuación y los requisitos de altura para un resguardo efectivo.',
    phases: [
      {
        label: 'Antes',
        lead: 'Conozca su zona y ubique rutas de escape.',
        points: [
          'Identifique si su zona de vivienda, trabajo o estudio es inundable por tsunami.',
          'Ubique y siga las señales oficiales de "Ruta de Evacuación" hacia terrenos elevados.',
          'Aprenda a reconocer las señales naturales: un sismo fuerte o el retiro brusco del agua de la playa.',
          'Mantenga preparado el bolso de emergencia con agua potable, radio y documentos protegidos.'
        ]
      },
      {
        label: 'Durante',
        lead: 'Evacue de inmediato sin esperar alertas oficiales.',
        points: [
          'Si siente un sismo fuerte en la costa o ve que el mar se recoge, evacue de inmediato a pie.',
          'Diríjase rápidamente a una zona alta, a por lo menos 30 metros sobre el nivel del mar.',
          'Si no puede llegar a terreno alto, suba a los pisos superiores (3er piso o más) de un edificio de concreto reforzado.',
          'Nunca vaya a la playa a observar o tomar fotografías del tsunami; cuando la ola sea visible estará demasiado cerca.'
        ]
      },
      {
        label: 'Después',
        lead: 'Permanezca en terreno seguro hasta la cancelación oficial.',
        points: [
          'Manténgase alejado de la costa hasta que las autoridades de Protección Civil cancelen formalmente la alerta.',
          'Recuerde que el tsunami es una serie de olas sucesivas; la primera ola no suele ser la más grande.',
          'Use mensajes de texto para comunicarse para no saturar las redes telefónicas de emergencia.',
          'Esté atento a las recomendaciones oficiales transmitidas por la radio de baterías.'
        ]
      }
    ],
    mapTitle: 'Puntos clave',
    mapNodes: [
      { label: 'Señal Natural', detail: 'Sismo fuerte + mar que se recoge o ruge con fuerza en la playa.' },
      { label: 'Zona Elevada', detail: 'Busque colinas o elevaciones de al menos 30 metros de altura.' },
      { label: 'Refugio Vertical', detail: 'Pisos 3 o superiores en estructuras sólidas de concreto armado.' },
      { label: 'Olas Sucesivas', detail: 'La amenaza puede durar horas; las olas llegan con intervalos de tiempo.' }
    ],
    infographicTitle: 'Acciones clave',
    infographicItems: [
      { label: 'No use vehículos', detail: 'Evacue a pie. Los autos causan embotellamientos y atrapan a las personas.' },
      { label: 'Evite la costa', detail: 'No baje a curiosear; la velocidad de la ola de tsunami es insuperable.' },
      { label: 'Mensajes de texto', detail: 'Conserve las líneas libres para coordinaciones de rescate médico.' }
    ],
    footer: 'Sistema Nacional de Gestión de Riesgo. Reporte emergencias al 911.'
  },
  {
    id: 'inundaciones',
    title: 'Inundaciones',
    emoji: '🌧️',
    image: '/assets/the_image_captures_a_scene_of_a_city_submerged_in_flo.jpg',
    ribbon: 'PREVENCIÓN | Evite cruzar corrientes de agua y trasládese a zonas elevadas',
    summary:
      'Plan de actuación ante inundaciones, crecidas de ríos y lluvias intensas. Aprenda a evaluar la vulnerabilidad de su vivienda, limpiar drenajes y desinfectar su hogar tras la emergencia.',
    phases: [
      {
        label: 'Antes',
        lead: 'Prepare su vivienda y reduzca riesgos locales.',
        points: [
          'Conozca la vulnerabilidad de su sector; evite construir en márgenes o cauces de cursos de agua.',
          'No arroje desechos sólidos al cauce de ríos o desagües para impedir represamientos o inundaciones.',
          'Elabore y ejecute planes de emergencia en casa, escuela y trabajo; identifique zonas altas y rutas de escape.',
          'Mantenga reservas de agua potable, alimentos, linterna, radio a pilas y botiquín a la mano.'
        ]
      },
      {
        label: 'Durante',
        lead: 'Evacue a zonas altas y no se arriesgue.',
        points: [
          'Diríjase con su familia a una zona alta y segura. No intente cruzar corrientes de agua bajo ninguna circunstancia.',
          'Si está en un vehículo, no cruce puentes. Si se apaga en zona anegada, abandónelo y camine a zona segura.',
          'Corte la electricidad general de la vivienda si nota que el nivel del agua empieza a subir.',
          'Aléjese de postes de luz y tendidos eléctricos caídos.'
        ]
      },
      {
        label: 'Después',
        lead: 'Regrese de forma segura y desinfecte el hogar.',
        points: [
          'No regrese a su vivienda inundada antes de que sea inspeccionada por Protección Civil o Bomberos.',
          'Dé salida a las aguas represadas para evitar criaderos de plagas, contaminación y epidemias.',
          'Limpie y desinfecte minuciosamente su vivienda (especialmente con cloro) antes de habitarla de nuevo.',
          'Evite salir a recorrer zonas afectadas y use el teléfono solo para emergencias reales.'
        ]
      }
    ],
    mapTitle: 'Puntos clave',
    mapNodes: [
      { label: 'Fuerza del Agua', detail: 'Pocos centímetros de corriente bastan para arrastrar a una persona o vehículo.' },
      { label: 'Basura cero', detail: 'Mantenga desagües limpios para evitar inundaciones repentinas por obstrucción.' },
      { label: 'Higiene Post-Inundación', detail: 'Desinfecte cisternas y agua para consumo para prevenir brotes infecciosos.' }
    ],
    infographicTitle: 'Acciones clave',
    infographicItems: [
      { label: 'Terreno alto', detail: 'Suba inmediatamente si nota un aumento rápido del caudal del río.' },
      { label: 'Vehículos apagados', detail: 'El agua en movimiento puede flotar y arrastrar vehículos rápidamente.' },
      { label: 'Electricidad', detail: 'Corte el disyuntor principal para evitar descargas letales por conducción de agua.' }
    ],
    footer: 'Plan de autoprotección escolar y comunitario ante lluvias e inundaciones. Alerta temprana: INAMEH.'
  },
  {
    id: 'incendios',
    title: 'Incendios',
    emoji: '🔥',
    image: '/assets/the_image_captures_a_dramatic_scene_of_a_forest_fire_the.jpg',
    ribbon: 'SEGURIDAD | Use el extintor correcto y agáchese para evitar el humo denso',
    summary:
      'Uso adecuado de extintores y autoprotección ante incendios. Conozca las clases de fuego, cómo accionar un extintor portátil y las pautas para evacuar un recinto con presencia de humo.',
    phases: [
      {
        label: 'Antes',
        lead: 'Prevenga cortocircuitos y equipe extintores.',
        points: [
          'Revise periódicamente instalaciones eléctricas, cables, enchufes y conexiones de gas doméstico.',
          'Disponga de extintores portátiles según las clases de fuego: Polvo Químico Seco (P.Q.S.) o Dióxido de Carbono (CO2).',
          'Evite almacenar líquidos inflamables y corrosivos en áreas de tránsito o cerca del calor.',
          'Mantenga rutas de evacuación libres de obstáculos y defina un punto de reunión exterior claro.'
        ]
      },
      {
        label: 'Durante',
        lead: 'Evacue ordenadamente y controle focos pequeños.',
        points: [
          'Si el fuego es incipiente y cuenta con extintor, úselo retirando el pasador, apuntando a la base y presionando.',
          'Si hay presencia de humo, agáchese y avance a gatas a ras del suelo para evitar respirar gases tóxicos.',
          'Cierre las puertas al salir sin echar llave para contener el fuego y restringir el flujo de oxígeno.',
          'Si su ropa se enciende: deténgase, tírese al suelo y ruede para sofocar las llamas. ¡No corra!',
          'Llamar de inmediato a los bomberos (911) y activar el sistema de alarmas.'
        ]
      },
      {
        label: 'Después',
        lead: 'Espere la aprobación de bomberos para reingresar.',
        points: [
          'No ingrese a la edificación afectada hasta recibir el visto bueno formal de bomberos y Protección Civil.',
          'Preste atención a cables sueltos, estructuras calientes y fugas residuales de gas.',
          'Busque atención médica inmediata si inhaló gases calientes o sufrió quemaduras.',
          'Confirme que todo el personal o miembros del hogar estén localizados en el punto de encuentro.'
        ]
      }
    ],
    mapTitle: 'Puntos clave',
    mapNodes: [
      { label: 'Clase A', detail: 'Fuegos originados en sólidos comunes (madera, papel, textiles, desperdicios).' },
      { label: 'Clase B / C', detail: 'Clase B (líquidos inflamables/grasas) y Clase C (equipos eléctricos energizados).' },
      { label: 'CO2', detail: 'Extintor de Dióxido de Carbono: preferible para fuegos eléctricos ya que no es conductor.' },
      { label: 'P.Q.S.', detail: 'Polvo Químico Seco: apto para fuegos A, B y C. Excelente extintor multipropósito.' }
    ],
    infographicTitle: 'Acciones clave',
    infographicItems: [
      { label: 'Línea de Aire', detail: 'El aire más respirable se encuentra a ras del suelo; muévase agachado.' },
      { label: 'Sin ascensores', detail: 'Pueden fallar repentinamente por el incendio dejándolo atrapado por el humo.' },
      { label: 'Ruede en el suelo', detail: 'Correr aviva el fuego de su ropa; rodar detiene la entrada de oxígeno.' }
    ],
    footer: 'El humo y los gases tóxicos representan la principal amenaza para la vida en un incendio.'
  },
  {
    id: 'deslizamientos',
    title: 'Deslizamientos',
    emoji: '⛰️',
    image: '/assets/the_image_captures_a_serene_scene_of_a_rocky_cliff.jpg',
    ribbon: 'ALERTA | Observe grietas en el suelo, inclinación de árboles y flujo de lodo',
    summary:
      'Guía de prevención y respuesta ante deslizamientos de tierra y flujos de lodo. Aprenda a reconocer señales de inestabilidad en pendientes y cómo evacuar de forma segura.',
    phases: [
      {
        label: 'Antes',
        lead: 'Prepare su terreno y identifique señales.',
        points: [
          'Evite construir en laderas empinadas o áreas con antecedentes de deslizamientos de tierra.',
          'Observe si hay grietas nuevas en las laderas, cercas inclinadas o deformaciones en la base de taludes.',
          'Siembre plantas de raíces profundas que ayuden a compactar el suelo y prevenir la erosión.',
          'Canalice el agua de lluvia mediante cunetas y drenajes para evitar la saturación del terreno.'
        ]
      },
      {
        label: 'Durante',
        lead: 'Evacue lateralmente de inmediato.',
        points: [
          'Si escucha un estruendo o ve movimiento de tierra, evacue lateralmente y busque terreno firme.',
          'Aléjese de la trayectoria del deslizamiento; no intente cruzar zonas de flujo de lodo o escombros.',
          'Si no puede evacuar, resguárdese debajo de un mueble resistente y proteja su cabeza.',
          'Manténgase atento a ruidos inusuales como árboles crujiendo o piedras chocando.'
        ]
      },
      {
        label: 'Después',
        lead: 'Evite el área afectada por inestabilidad.',
        points: [
          'No regrese al área del deslizamiento; el terreno puede seguir inestable y generar nuevos derrumbes.',
          'Revise si hay personas atrapadas o heridas sin entrar directamente al área de peligro.',
          'Informe a Protección Civil sobre daños en vías públicas, postes caídos o represamientos de ríos.',
          'Manténgase informado y siga las indicaciones de los equipos de rescate.'
        ]
      }
    ],
    mapTitle: 'Puntos clave',
    mapNodes: [
      { label: 'Talud Saturado', detail: 'Las lluvias prolongadas saturan la tierra, reduciendo su resistencia y provocando fallas.' },
      { label: 'Evacuación Lateral', detail: 'Desplácese hacia los lados de la trayectoria del alud, nunca en su misma dirección.' },
      { label: 'Señal de Alerta', detail: 'La inclinación de árboles, postes o cercas indica un movimiento lento pero activo.' },
      { label: 'Zonas de Riesgo', detail: 'Identifique si su comunidad está ubicada al pie de laderas o en valles estrechos.' }
    ],
    infographicTitle: 'Acciones clave',
    infographicItems: [
      { label: 'Monitoreo', detail: 'Preste atención a las grietas en paredes o pisos de su vivienda durante la época de lluvias.' },
      { label: 'Estruendo', detail: 'Un ruido sordo o crujidos intensos son señales de un deslizamiento inminente.' },
      { label: 'Líneas de servicio', detail: 'Reporte fugas de agua en taludes, ya que la infiltración acelera el colapso del terreno.' }
    ],
    footer: 'Plan de prevención y mitigación ante deslizamientos de tierra. Protección Civil.'
  },
  {
    id: 'prevencion-sustancias-quimicas',
    title: 'Prevención y Mapa de Riesgos',
    emoji: '🧪',
    image: '/assets/fire_safety_illustration_1774910229007.png',
    ribbon: 'ORGANIZACIÓN | Identifique amenazas comunales mediante colores de riesgo',
    summary:
      'Guía para la elaboración de mapas de riesgos comunitarios y prevención química. Aprenda a clasificar peligros con colores normalizados, hacer inventarios de recursos y responder ante incidentes químicos.',
    phases: [
      {
        label: 'Antes',
        lead: 'Organice a su comunidad y elabore el mapa.',
        points: [
          'Identifique amenazas locales y recursos humanos/materiales reuniéndose con líderes y profesionales de la salud.',
          'Dibuje el croquis o mapa colectivamente utilizando los colores normalizados: Rojo (alto), Amarillo (medio), Verde (bajo).',
          'Almacene sustancias químicas en envases originales cerrados, debidamente etiquetados y alejados de fuentes de calor.',
          'Evite mezclar productos de limpieza peligrosos, como cloro con amoníaco o ácidos fuertes.'
        ]
      },
      {
        label: 'Durante',
        lead: 'Actúe de forma coordinada según los puntos de riesgo.',
        points: [
          'Frente a incidentes químicos, aísle el área de inmediato, ventile si es seguro y evacue a favor del viento.',
          'No encienda fósforos, interruptores ni motores si sospecha la presencia de vapores inflamables.',
          'Consulte el mapa de riesgos de la edificación o comunidad para identificar las salidas y zonas seguras.',
          'Use equipo de protección personal (mascarilla, lentes) si maneja sustancias irritantes.'
        ]
      },
      {
        label: 'Después',
        lead: 'Descontamine y evalúe las lecciones aprendidas.',
        points: [
          'Lave exhaustivamente con abundante agua la piel y la ropa expuesta a cualquier sustancia nociva.',
          'Espere el cese de la emergencia y el visto bueno de las autoridades antes de retornar al área afectada.',
          'Actualice el mapa de riesgos comunitario registrando los eventos recientes y reevalúe las vulnerabilidades.',
          'Identifique fallas en la respuesta comunitaria y aplique correcciones inmediatas.'
        ]
      }
    ],
    mapTitle: 'Puntos clave',
    mapNodes: [
      { label: 'Color Rojo', detail: 'Identifica zonas de alto riesgo de desastres o colapsos estructurales.' },
      { label: 'Color Amarillo', detail: 'Señala áreas de mediano riesgo o zonas que requieren precaución.' },
      { label: 'Color Verde', detail: 'Indica zonas seguras, puntos de encuentro y áreas de bajo riesgo.' },
      { label: 'Inventario de Recursos', detail: 'Registre herramientas, vehículos y personal de salud/rescate disponible.' }
    ],
    infographicTitle: 'Acciones clave',
    infographicItems: [
      { label: 'Comité de PC', detail: 'Organice comités y brigadas locales para guiar a la comunidad.' },
      { label: 'Sin mezclas', detail: 'Cloro + amoníaco produce vapores de cloramina altamente tóxicos.' },
      { label: 'Monitoreo', detail: 'Recorra la comunidad periódicamente para identificar nuevas amenazas.' }
    ],
    footer: 'La organización comunitaria es el primer recurso de respuesta en las primeras 72 horas.'
  }
];

export const emergencyTopicById = Object.fromEntries(
  emergencyTopics.map((topic) => [topic.id, topic]),
) as Record<EmergencyTopic['id'], EmergencyTopic>;
