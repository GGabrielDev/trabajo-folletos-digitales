import type { EmergencyTopic } from './emergencyTopics';

export const schoolEmergencyTopics: EmergencyTopic[] = [
  {
    id: 'sismos',
    title: 'Sismos',
    emoji: '🏚️',
    image: '/assets/a_pile_of_rubble_with_various_objects_scattered_throughout.jpg',
    ribbon: 'ALERTA | Conserve la calma, protéjase bajo el pupitre o mesa y siga las rutas de escape',
    summary:
      'Puede suceder de un momento a otro. Incluso podría pasar mientras estamos en el colegio; por ello, te invitamos a prepararte y saber cómo actuar si esto sucede. Descubre qué hacer en caso de sismo en la escuela: antes, durante, después.',
    phases: [
      {
        label: 'Antes',
        lead: 'Elabore el Plan de Emergencia y fije estanterías',
        points: [
          'Elabore un Plan de Emergencia Escolar y un croquis de riesgo con rutas de evacuación a zonas seguras.',
          'Tenga un Kit de supervivencia (agua, alimentos, linterna, baterías, radio portátil) y primeros auxilios.',
          'Realice simulacros para controlar el pánico y fortalecer conducta de autoprotección. Tenga un silbato.',
          'Fije a la pared muebles altos, bibliotecas, estantes, proyectores. No obstaculice la ruta de escape.',
          'Identifique los lugares más seguros y las áreas más peligrosas que puedan generar daño.',
          'Conforme una brigada escolar de gestión de riesgo y atención de emergencia.'
        ]
      },
      {
        label: 'Durante',
        lead: 'Agáchate, cúbrete y sujétate',
        points: [
          'Agáchese, cubra su cabeza debajo del pupitre o mesa de trabajo y sujétese.',
          'Mantenga la calma, no grite y actúe con serenidad. Siga instrucciones de los brigadistas según el Plan.',
          'Aléjese de ventanas, lámparas, ventiladores colgantes o muebles que puedan volcarse y hacer daño.',
          'Aléjese de edificaciones, muros perimetrales, árboles, postes y tendido eléctrico.',
          'Siga instrucciones de los brigadistas y el Plan de Emergencia Escolar ante Terremotos.'
        ]
      },
      {
        label: 'Después',
        lead: 'Evacue organizadamente e interrumpa servicios',
        points: [
          'Evacúe organizadamente hacia las zonas de seguridad, en fila, sin correr, empujar o regresar.',
          'Si queda atrapado, mantenga la calma, no grite, haga ruido con un objeto o silbato.',
          'Verifique si hay heridos y pase la lista para asegurar que estén todos.',
          'No encienda fuego (fósforos, encendedores o velas) por posibles fugas de gas.',
          'Si se produce un incendio, apáguelo según protocolo y práctica previa si no pone en peligro su vida.',
          'Interrumpa los servicios de gas, agua y electricidad.',
          'Encienda la radio de baterías para escuchar las recomendaciones de las autoridades.',
          'Siga instrucciones de los brigadistas y el Plan de Emergencia Escolar ante Terremotos.'
        ]
      }
    ],
    mapTitle: 'Puntos clave',
    mapNodes: [
      { label: 'Plan Escolar', detail: 'Defina la conducta de cada brigadista y estudie el croquis de escape.' },
      { label: 'Zonas Seguras', detail: 'Bajo pupitres resistentes, marcos estructurales o áreas libres exteriores.' },
      { label: 'Silbato', detail: 'Dote a los brigadistas y personas vulnerables con silbatos para pedir ayuda.' },
      { label: 'Cierre de Servicios', detail: 'Interrumpa gas, electricidad y agua al finalizar el movimiento para prevenir desastres secundarios.' }
    ],
    infographicTitle: 'Infografía Oficial',
    infographicItems: [
      { label: 'No corra ni empuje', detail: 'Mantenga la fila de evacuación ordenada para evitar caídas y lesiones.' },
      { label: 'Sin fuego', detail: 'El encendido de llamas tras un sismo representa peligro crítico por posibles fugas de gas.' },
      { label: 'Organización', detail: 'El conteo final y control de asistencia aseguran la localización de todo el personal.' }
    ],
    infographicImage: '/assets/sismos_infografia_agachate_cubrete.png',
    visualSteps: [
      {
        step: '01',
        title: 'Plan Escolar',
        detail: 'Elabore el plan and defina croquis con rutas de escape claras.',
        image: '/assets/sismos_kit_emergencias.png'
      },
      {
        step: '02',
        title: 'Fijar Muebles',
        detail: 'Asegure estantes, proyectores y armarios para evitar colapsos.',
        image: '/assets/sismos_fijar_estanteria.png'
      },
      {
        step: '03',
        title: 'Simulacros',
        detail: 'Haga simulacros escolares y dote a brigadistas con silbatos.',
        image: '/assets/sismos_llaves.png'
      },
      {
        step: '04',
        title: 'Protegerse',
        detail: 'En las aulas: ¡Agáchate, cúbrete debajo del pupitre y sujétate!',
        image: '/assets/cropped_graphics/char_cubrete.png'
      },
      {
        step: '05',
        title: 'Evacuación',
        detail: 'Salga ordenadamente sin empujar ni correr a zonas seguras.',
        image: '/assets/sismos_ruta_evacuacion.png'
      },
      {
        step: '06',
        title: 'Control Final',
        detail: 'Pase lista en el patio y mantenga la calma en el punto de encuentro.',
        image: '/assets/sismos_zona_segura_ninos.png'
      }
    ],
    footer: 'Aula Sísmica "Madeleilis Guzmán" - FUNVISIS. Emergencias: 0800-TEMBLOR (0800-8362567)'
  },
  {
    id: 'tsunamis',
    title: 'Tsunamis',
    emoji: '🌊',
    image: '/assets/the_image_captures_a_dramatic_scene_of_a_wave_crashing_against.jpg',
    ribbon: 'EVACUACIÓN | Evacúe a pie de inmediato a zonas altas ante alarma oficial o sismo fuerte',
    summary:
      'Protocolo escolar de autoprotección ante maremotos y tsunamis. Aprenda a reconocer las alertas naturales, coordinarse con los brigadistas y evacuar de forma segura a zonas altas.',
    phases: [
      {
        label: 'Antes',
        lead: 'Conozca su zona y practique evacuación a pie',
        points: [
          'Conozca si la institución escolar está en zona de riesgo de afectación por tsunamis.',
          'Tome en cuenta que el tsunami puede afectar el normal comportamiento de ríos y esteros.',
          'Elabore un Plan de Emergencia Escolar y croquis de rutas de evacuación a pie hacia zonas altas.',
          'Conozca si las autoridades tienen sistema de alarma ante amenaza de tsunami.',
          'Realice simulacros escolares para medir tiempo de respuesta de desplazamiento a pie a zonas altas.',
          'Tenga un Kit de supervivencia (agua, alimentos, linterna, baterías, radio portátil) y primeros auxilios.',
          'Conforme una brigada escolar de gestión de riesgo y atención de emergencia.'
        ]
      },
      {
        label: 'Durante',
        lead: 'Evacúe con rapidez y orden a zonas altas',
        points: [
          'En caso de terremoto/maremoto protéjase y luego evacúe a zona alta tierra adentro.',
          'Si escucha alarma de tsunami por parte de las autoridades, evacúe a zona alta de inmediato.',
          'Evite el pánico. Realice un desplazamiento rápido, pero ordenado. Evite caer y generar lesiones.',
          'Siga instrucciones de los brigadistas y el Plan de Emergencia Escolar ante Tsunami.'
        ]
      },
      {
        label: 'Después',
        lead: 'Permanezca a salvo y use la radio portátil',
        points: [
          'Mantenga la calma. Permanezca en zona segura. No regrese a la zona afectada y áreas inundadas.',
          'Encienda la radio y regrese únicamente cuando las autoridades indiquen que el peligro ha pasado.',
          'Prepárese para ayudar a personas atrapadas o lesionadas.',
          'Cuídese de escombros, cables eléctricos caídos, sistemas de gas dañado y zonas contaminadas.',
          'Siga instrucciones de los brigadistas y el Plan de Emergencia Escolar ante Tsunami.'
        ]
      }
    ],
    mapTitle: 'Puntos clave',
    mapNodes: [
      { label: 'Esteros y Ríos', detail: 'Tenga en cuenta que el tsunami altera caudales tierra adentro.' },
      { label: 'Alarma Oficial', detail: 'Siga el sistema de sirenas u órdenes oficiales para evacuar.' },
      { label: 'Marcha a Pie', detail: 'Los vehículos saturan las vías. Evacúe a pie ágilmente.' },
      { label: 'Zona Segura', detail: 'Terrenos elevados o edificios estructuralmente aptos autorizados.' }
    ],
    infographicTitle: 'Acciones clave',
    infographicItems: [
      { label: 'Desplazamiento a pie', detail: 'Los simulacros deben evaluar el tiempo exacto de caminata hacia zonas seguras.' },
      { label: 'No retorne', detail: 'Las olas de tsunami continúan llegando en intervalos. Espere confirmación.' },
      { label: 'Peligros secundarios', detail: 'Evite el contacto con escombros, cables sueltos o aguas contaminadas.' }
    ],
    footer: 'Sistema Nacional de Gestión de Riesgo. Reporte emergencias al VEN-911.'
  },
  {
    id: 'inundaciones',
    title: 'Inundaciones',
    emoji: '🌧️',
    image: '/assets/the_image_captures_a_scene_of_a_city_submerged_in_flo.jpg',
    ribbon: 'PREVENCIÓN | Limpie desagües, proteja tóxicos del agua y no cruce corrientes',
    summary:
      'Guía escolar de actuación ante lluvias intensas e inundaciones. Aprenda a proteger suministros, mantener limpios los bajantes y evacuar de forma segura.',
    phases: [
      {
        label: 'Antes',
        lead: 'Limpie bajantes e identifique áreas de refugio',
        points: [
          'Conozca si la institución escolar está en zona de riesgo de afectación por inundación.',
          'Elabore un Plan de Emergencia Escolar y un croquis de riesgo con rutas de evacuación a zonas seguras.',
          'Tenga un Kit de supervivencia (agua, alimentos, linterna, baterías, radio portátil) y primeros auxilios.',
          'Realice simulacros para controlar el pánico y fortalecer conducta de autoprotección.',
          'Limpie periódicamente los bajantes, techos, desagües and alcantarillas. Evite que el agua se acumule.',
          'Para evitar las contaminaciones debes colocar los productos tóxicos donde no les alcance el agua.',
          'Identifique áreas seguras que puedan servir de refugio.',
          'Conforme una brigada escolar de gestión de riesgo y atención de emergencia.'
        ]
      },
      {
        label: 'Durante',
        lead: 'Active el plan de emergencia y corte servicios',
        points: [
          'Mantenga la calma y actúe con precaución. Active el Plan de Emergencia Escolar.',
          'Si escucha alarma de inundación por parte de las autoridades, evacúe a zona segura de inmediato.',
          'Interrumpa la energía eléctrica, sistema de gas y agua.',
          'Nunca intentes caminar, nadar, ni cruzar calles inundadas o corrientes de agua.',
          'No te refugies bajo árboles, torres, alambradas o cualquier estructura metálica. Sigue el plan.',
          'Encienda la radio portátil para recibir instrucciones oficiales y actualizaciones del estado del tiempo.',
          'Siga instrucciones de los brigadistas. Manténgase a salvo.'
        ]
      },
      {
        label: 'Después',
        lead: 'Evite aguas contaminadas y use protección al limpiar',
        points: [
          'Siga instrucciones de los brigadistas. Ten precaución al regresar y evaluar los daños.',
          'No permitas que los niños(a) jueguen en aguas de inundación, ya que suelen estar contaminadas.',
          'No conecte la electricidad hasta que un técnico o profesional determine que es seguro.',
          'Desecha los alimentos o agua embotellada que haya estado en contacto con agua contaminada.',
          'Al limpiar el lodo o remover escombros, utiliza guantes y botas.',
          'Tenga encendido el radio portátil para mantenerse informado por las autoridades.'
        ]
      }
    ],
    mapTitle: 'Puntos clave',
    mapNodes: [
      { label: 'Limpieza Drenajes', detail: 'Mantener canalizaciones y rejillas escolares libres de sedimentos.' },
      { label: 'Manejo de Tóxicos', detail: 'Sustancias y reactivos de laboratorio deben guardarse a altura segura.' },
      { label: 'Riesgo Eléctrico', detail: 'Desconecte fuentes eléctricas generales ante inundación.' },
      { label: 'Higiene de Equipos', detail: 'Utilice botas y guantes para la limpieza post-inundación.' }
    ],
    infographicTitle: 'Acciones clave',
    infographicItems: [
      { label: 'Cierre de llaves', detail: 'Corte el agua, gas y electricidad general en el plantel al evacuar.' },
      { label: 'Aguas estancadas', detail: 'Las aguas de inundación conducen bacterias y parásitos peligrosos.' },
      { label: 'Técnico Autorizado', detail: 'Un especialista debe inspeccionar la red eléctrica escolar antes del encendido.' }
    ],
    footer: 'Plan de autoprotección escolar y comunitario ante lluvias e inundaciones. Alerta temprana: INAMEH.'
  },
  {
    id: 'incendios',
    title: 'Incendios',
    emoji: '🔥',
    image: '/assets/the_image_captures_a_dramatic_scene_of_a_forest_fire_the.jpg',
    ribbon: 'SEGURIDAD | Evacúe a gatas bajo el humo, cierre puertas y reporte al VEN-911',
    summary:
      'Guía integral escolar ante incendios estructurales y forestales. Medidas de prevención en instalaciones eléctricas y de gas, desalojo agachado y zonas de seguridad.',
    phases: [
      {
        label: 'Antes',
        lead: 'Prevenga cortocircuitos, acumulación de basura y vigile zonas verdes',
        points: [
          'Conozca los riesgos de incendio estructural y forestal en la institución escolar.',
          'Elabore un Plan de Emergencia Escolar y croquis con rutas de evacuación a zonas seguras.',
          'Tenga un Kit de supervivencia (agua, alimentos, linterna, baterías, radio portátil) y primeros auxilios.',
          'Realice simulacros periódicos para controlar el pánico y fortalecer la autoprotección.',
          'Revise periódicamente instalaciones eléctricas y de gas para detectar fallas o malas conexiones.',
          'No acumule basura ni materiales inflamables, y evite sobrecargar los enchufes.',
          'Tome mayor precaución en temporada seca, evitando fogatas en cultivos o áreas verdes cercanas.',
          'Mantenga un espacio de cultivo escolar libre como cortafuegos o zona de seguridad.',
          'Conforme la brigada escolar de gestión de riesgo y coordine herramientas de apoyo.'
        ]
      },
      {
        label: 'Durante',
        lead: 'Evacúe agachándose, proteja sus vías respiratorias y aléjese contra el viento',
        points: [
          'Mantenga la calma y evacúe de inmediato agachándose o gateando para evitar gases tóxicos.',
          'Cubre nariz y boca con un paño húmedo para filtrar partículas nocivas.',
          'Interrumpa la energía eléctrica y sistemas de gas de forma inmediata.',
          'No abra puertas calientes (verifique antes con el dorso de la mano) y cierre puertas al salir.',
          'Si se trata de un incendio forestal, evacúe en contra de la dirección del viento hacia una zona segura.',
          'Llama de inmediato al VEN-911 y sigue las instrucciones de la brigada y los bomberos.',
          'Si no puede salir: cierre puertas y ventanas, selle rendijas con paños húmedos y manténgase bajo.'
        ]
      },
      {
        label: 'Después',
        lead: 'Evalúe daños estructurales, reforeste y mantenga libres zonas cortafuegos',
        points: [
          'Manténgase en un lugar seguro (en contra del viento si es forestal) y siga instrucciones de la brigada.',
          'Ayude a personas afectadas por inhalación de humo o lesiones y descarte alimentos expuestos.',
          'Consulte a los bomberos antes de reingresar; no conecte la electricidad ni el gas de inmediato.',
          'Use mascarilla al limpiar residuos y evite que los niños entren en contacto con cenizas.',
          'Fomente la reforestación escolar con especies nativas y concientice sobre incendios forestales.'
        ]
      }
    ],
    mapTitle: 'Puntos clave',
    mapNodes: [
      { label: 'Revisión Eléctrica', detail: 'Evite la sobrecarga de enchufes y repare cableado escolar dañado.' },
      { label: 'Cierre de Puertas', detail: 'Durante el desalojo, cierre las puertas tras de sí para limitar el avance de las llamas.' },
      { label: 'Sello de Rendijas', detail: 'Si queda atrapado, bloquee la entrada de humo con toallas o paños húmedos.' },
      { label: 'Reforestación', detail: 'Participe en la siembra escolar de árboles autóctonos tras un siniestro forestal.' }
    ],
    infographicTitle: 'Acciones clave',
    infographicItems: [
      { label: 'Línea de humo', detail: 'Gatee. El aire libre de tóxicos se desplaza hacia la parte inferior del recinto.' },
      { label: 'Comprobación', detail: 'Vigile la temperatura de las puertas con la parte trasera de su mano antes de abrirlas.' },
      { label: 'VEN-911', detail: 'Reporte de inmediato cualquier foco forestal o de estructura al número unificado.' }
    ],
    footer: 'El humo y las emisiones gaseosas son el riesgo principal en siniestros de fuego.'
  },
  {
    id: 'deslizamientos',
    title: 'Deslizamientos',
    emoji: '⛰️',
    image: '/assets/the_image_captures_a_serene_scene_of_a_rocky_cliff.jpg',
    ribbon: 'ALERTA | Observe el talud, evite la deforestación y evacúe lateralmente',
    summary:
      'Protocolo de autoprotección escolar ante movimientos en masa y derrumbes. Reconozca la trayectoria del alud, evite la deforestación y evacue a zonas de seguridad.',
    phases: [
      {
        label: 'Antes',
        lead: 'Vigile laderas, reforeste y arme su kit',
        points: [
          'Conozca si la institución escolar está en zona de riesgo de afectación por derrumbes o deslizamientos.',
          'Elabore un Plan de Emergencia Escolar y un croquis de riesgo con rutas de evacuación a zonas seguras.',
          'Identifique trayectoria de un movimiento en masa en valles, cauces de ríos y quebradas.',
          'Tenga un Kit de supervivencia (agua, alimentos, linterna, baterías, radio portátil) y primeros auxilios.',
          'Realice simulacros para controlar el pánico y fortalecer conducta de autoprotección.',
          'Evite la tala de árboles en las laderas de las pendientes. Realice actividades de reforestación.',
          'Conforme una brigada escolar de gestión de riesgo y atención de emergencia.'
        ]
      },
      {
        label: 'Durante',
        lead: 'Aléjese del deslizamiento y corte servicios',
        points: [
          'Mantenga la calma y aléjese de la posible trayectoria del Movimiento en Masa.',
          'Active el Plan de Emergencia. No olvide su kit de supervivencia.',
          'Siga instrucciones de la Brigada de Gestión de Riesgo y Emergencia Escolar.',
          'No intente cruzar calles, vías, cauces. Un derrumbe suele ser repentino.',
          'Interrumpa la electricidad, sistema de gas y agua.',
          'Vaya a un lugar seguro y espere instrucciones Brigada de Gestión de Riesgo y Emergencia Escolar.'
        ]
      },
      {
        label: 'Después',
        lead: 'Vigile cauces de agua y estabilice el terreno',
        points: [
          'Mantenga la calma en el punto de encuentro establecido por en el Plan de Emergencia Escolar.',
          'Manténgase alejado del Movimiento en Masa. Las autoridades indicaran cuando es seguro acercarse.',
          'No conecte la electricidad, gas y agua hasta que sea autorizado por un técnico o profesional.',
          'Sintonice la radio, le permitirá mantenerse informado y conocer la magnitud del evento.',
          'Vigile posibles desbordamientos de caudal que pueden ocurrir posterior a un Movimiento en Masa.',
          'Brinde ayuda a personas lesionadas o atrapadas, pero sin poner en peligro su vida.',
          'Prepare las instalaciones de la institución escolar como posible lugar de refugio.',
          'Solicite evaluar si el terreno requiere de intervenciones para lograr una estabilidad del mismo.'
        ]
      }
    ],
    mapTitle: 'Puntos clave',
    mapNodes: [
      { label: 'Estudio de Taludes', detail: 'Identifique si la escuela está en zonas bajas de laderas inestables.' },
      { label: 'Actitud Silvícola', detail: 'La vegetación amarra la tierra. Fomente la siembra forestal de laderas.' },
      { label: 'Caudal del Río', detail: 'Observe y reporte obstrucciones en los ríos tras el movimiento de lodo.' },
      { label: 'Estabilidad de Suelos', detail: 'Consulte a ingenieros sobre obras civiles de contención de tierra en el plantel.' }
    ],
    infographicTitle: 'Acciones clave',
    infographicItems: [
      { label: 'Aluvión repentino', detail: 'No intente caminar sobre depósitos de lodo recientes. Son muy inestables.' },
      { label: 'Monitoreo de agua', detail: 'El desbordamiento de arroyos y quebradas es común después de un alud.' },
      { label: 'Instalaciones', detail: 'Coordine el acondicionamiento del centro escolar como albergue si es requerido.' }
    ],
    footer: 'Plan de autoprotección ante movimientos de tierra. Alerta temprana: Protección Civil.'
  },
  {
    id: 'prevencion-sustancias-quimicas',
    title: 'Riesgos Químicos',
    emoji: '🧪',
    image: '/assets/fire_safety_illustration_1774910229007.png',
    ribbon: 'ALERTA | Almacene de forma segura, no mezcle reactivos y evacúe contra el viento',
    summary:
      'Protocolo escolar de prevención ante derrames de sustancias químicas y manejo seguro de reactivos. Aprenda a almacenar adecuadamente, ventilar recintos y reportar incidentes.',
    phases: [
      {
        label: 'Antes',
        lead: 'Normas de almacenamiento y no mezcle sustancias',
        points: [
          'Conozca si la institución escolar está en zona de riesgo de incidente con sustancias peligrosas.',
          'Elabore un Plan de Emergencia Escolar y un croquis de riesgo con rutas de evacuación a zonas seguras.',
          'Tenga un Kit de supervivencia (agua, alimentos, linterna, baterías, radio portátil) y primeros auxilios.',
          'Realice simulacros para controlar el pánico y fortalecer conducta de autoprotección.',
          'Guarde envases de productos químicos en áreas que cumplan normas de seguridad y almacenamiento.',
          'Revise la temperatura, si supera el rango indicado en el envase, comuníquese al 911.',
          'No mezcle productos químicos, pueden reaccionar y generar gases tóxicos, incendiarse o explotar.',
          'No utilice productos químicos cerca de una llama abierta.',
          'Conforme una brigada escolar de gestión de riesgo y atención de emergencia.'
        ]
      },
      {
        label: 'Durante',
        lead: 'Evacúe contra el viento y reporte al VEN-911',
        points: [
          'Active el Plan de Emergencia Escolar y evacúe a zona segura en contra del viento. Llame al VEN-911.',
          'Evite comer o beber cualquier cosa que pueda haber estado expuesta al producto químico.',
          'No intente contener el derrame, ni ponga su vida en peligro.',
          'Desde la zona segura, llame al VEN-911 y comunique la ubicación exacta del incidente.',
          'Si presenta síntomas de exposición no tome nada, a menos que lo indique un médico.',
          'No abandone una zona segura hasta que los especialistas indiquen que es seguro hacerlo.'
        ]
      },
      {
        label: 'Después',
        lead: 'Lave zonas expuestas, ventile y deseche ropa expuesta',
        points: [
          'En caso de exposición a una sustancia química, lave la zona afectada durante 15 minutos.',
          'Si logró ingerir accidentalmente una sustancia peligrosamente tóxica, llame al VEN-911.',
          'Si se expuso a una sustancia química, deseche la ropa que pueda estar contaminada.',
          'Debe estar atento, algunos productos químicos no se eliminan por completo con el lavado.',
          'Abra las ventanas, las puertas y las rejillas de ventilación, encienda los ventiladores para ventilar.',
          'Ayude a personas afectadas por exposición ante una sustancia química.',
          'Siga instrucciones de los especialistas en el sitio para mayor mitigación de daños.'
        ]
      }
    ],
    mapTitle: 'Puntos clave',
    mapNodes: [
      { label: 'Temperatura', detail: 'Monitoree el sobrecalentamiento en las zonas de reactivos del laboratorio.' },
      { label: 'Cero Mezclas', detail: 'No combine cloro, amoníaco u ácidos. Desprende humos altamente letales.' },
      { label: 'Lavado Urgente', detail: 'Enjuague la piel contaminada con abundante agua limpia corriente por 15 minutos.' },
      { label: 'Aireación', detail: 'Abra puertas y use extractores mecánicos para evacuar acumulaciones gaseosas.' }
    ],
    infographicTitle: 'Acciones clave',
    infographicItems: [
      { label: 'No contenga', detail: 'Los derrames industriales o químicos solo los atiende personal bomberil preparado.' },
      { label: 'Desecho de ropa', detail: 'Las prendas contaminadas con químicos continúan irritando y liberando vapores.' },
      { label: 'VEN-911', detail: 'Indique los símbolos de peligro (NFPA u otros) del envase afectado en su reporte.' }
    ],
    footer: 'La prevención del riesgo reactivo protege al alumnado en talleres y laboratorios.'
  }
];

export const schoolEmergencyTopicById = Object.fromEntries(
  schoolEmergencyTopics.map((topic) => [topic.id, topic]),
) as Record<EmergencyTopic['id'], EmergencyTopic>;
