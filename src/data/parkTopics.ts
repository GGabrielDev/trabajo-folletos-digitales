/**
 * Temas de riesgo del menú de parques.
 *
 * A diferencia de `emergencyTopics`, que es el temario general del sitio, este
 * archivo recoge los riesgos que se materializan específicamente durante una
 * visita a un parque, una plaza o una pequeña reserva pública.
 *
 * Toda cifra o recomendación de este archivo procede de una fuente citada en
 * `sources`. No se añade aquí ningún dato que no pueda atribuirse a un
 * organismo identificable. El registro de la investigación, con las citas
 * textuales completas, está en `docs/research/parks-topics-sources.md`.
 */

export type ParkTopicPhase = {
  label: 'Antes' | 'Durante' | 'Después';
  lead: string;
  points: string[];
};

export type ParkTopicNode = {
  label: string;
  detail: string;
};

export type ParkTopicFigure = {
  /** Cifra tal como la publica la fuente, con su unidad. */
  value: string;
  label: string;
  detail: string;
};

export type ParkTopicSource = {
  /** Organismo o publicación responsable del dato. */
  publisher: string;
  /** Título del documento o de la página citada. */
  title: string;
  /** Año de publicación o de consulta del dato. */
  year: string;
  url: string;
};

export type ParkTopic = {
  id: string;
  title: string;
  emoji: string;
  image: string;
  ribbon: string;
  summary: string;
  /** Variante visual documentada del sistema de diseño. */
  styleVariant: 'default' | 'rounded-glass' | 'timeline-step';
  phases: ParkTopicPhase[];
  figuresTitle: string;
  figures: ParkTopicFigure[];
  mapTitle: string;
  mapNodes: ParkTopicNode[];
  footer: string;
  sources: ParkTopicSource[];
};

export const parkTopics: ParkTopic[] = [
  {
    id: 'sismos-en-parques',
    title: 'Sismos en Parques',
    emoji: '🌎',
    image: '/assets/a_pile_of_rubble_with_various_objects_scattered_throughout.jpg',
    ribbon: 'Amenaza sísmica',
    summary:
      'Venezuela es un país sísmico y el parque es, casi siempre, el lugar más seguro donde puede sorprenderte un temblor. Saber por qué cambia lo que haces en los primeros segundos.',
    styleVariant: 'default',
    phases: [
      {
        label: 'Antes',
        lead: 'Al llegar al parque, ubica en menos de un minuto lo que te servirá si tiembla:',
        points: [
          'Identifica la zona despejada más cercana: una cancha, un campo abierto o una explanada sin árboles ni postes encima.',
          'Fíjate en qué hay que evitar: muros perimetrales, bardas, postes de luz, cables eléctricos y árboles grandes.',
          'Acuerda con tu grupo el punto de reunión, el mismo que usarías si alguien se extravía.',
          'Ten el teléfono cargado: tras un sismo la red se satura y solo entran mensajes cortos.'
        ]
      },
      {
        label: 'Durante',
        lead:
          'La guía oficial venezolana para quien está a la intemperie es explícita: alejarse y despejar.',
        points: [
          'Si estás al aire libre, quédate al aire libre. No entres a un quiosco, baño o edificación a «refugiarte».',
          'Aléjate de edificios, postes de luz y cables eléctricos, y dirígete a un área despejada (MPPRIJP).',
          'Ya en zona despejada, agáchate, cúbrete la cabeza y el cuello y sujétate hasta que pare el movimiento.',
          'Si vas en vehículo dentro del parque, reduce, detente lejos de puentes y estructuras y permanece dentro.',
          'No corras. La mayoría de las lesiones en exteriores las causan las caídas y los objetos que se desprenden.'
        ]
      },
      {
        label: 'Después',
        lead: 'El movimiento para, pero el riesgo no termina ahí:',
        points: [
          'Cuenta a tu grupo en el punto de reunión antes de moverte a ningún sitio.',
          'Espera réplicas y mantente lejos de muros agrietados, ramas partidas y postes inclinados.',
          'No regreses a ninguna edificación del parque hasta que el personal lo autorice.',
          'Usa el teléfono solo para emergencias reales y llama al 911 si hay personas lesionadas.'
        ]
      }
    ],
    figuresTitle: 'Por qué Venezuela es un país sísmico',
    figures: [
      {
        value: '80 %',
        label: 'de la población en zonas de alta amenaza',
        detail:
          'Estimación de FUNVISIS (2018) sobre la proporción de habitantes del país que vive en zonas de alta amenaza por terremotos.'
      },
      {
        value: '2 cm',
        label: 'al año de desplazamiento entre placas',
        detail:
          'Ritmo al que la placa del Caribe se desplaza hacia el este respecto de la placa suramericana, lo que deforma el norte del país.'
      },
      {
        value: '3',
        label: 'sistemas de fallas principales',
        detail:
          'Boconó (unos 500 km), San Sebastián y El Pilar (unos 700 km) concentran la mayor actividad en la franja norte.'
      }
    ],
    mapTitle: 'Dónde ponerte y qué evitar',
    mapNodes: [
      {
        label: 'Zona despejada',
        detail: 'Campo abierto, cancha o explanada, sin nada que pueda caerte encima. Es tu destino.'
      },
      {
        label: 'Árboles grandes',
        detail: 'Las ramas se desprenden con el movimiento. Aléjate del área que cubre la copa.'
      },
      {
        label: 'Postes y cables',
        detail: 'Un cable caído sigue siendo peligroso aunque no se vea chispa. No te acerques ni lo toques.'
      },
      {
        label: 'Muros y bardas',
        detail: 'Los muros de cerramiento sin refuerzo vuelcan con facilidad. Es el peligro más común en un parque.'
      }
    ],
    footer:
      'Si hay personas lesionadas o estructuras comprometidas dentro del parque, llama al 911 e informa la entrada por la que ingresaste.',
    sources: [
      {
        publisher: 'Ministerio del Poder Popular para Relaciones Interiores, Justicia y Paz (MPPRIJP)',
        title: 'Guía de tres fases sobre qué hacer antes, durante y después de un sismo',
        year: '2025',
        url: 'https://www.mpprijp.gob.ve/prensa/reporte/conozca-la-guia-de-tres-fases-sobre-que-hacer-antes-durante-y-despues-de-un-sismo'
      },
      {
        publisher: 'U.S. Geological Survey (USGS)',
        title: 'What should I do during an earthquake?',
        year: '2024',
        url: 'https://www.usgs.gov/faqs/what-should-i-do-during-earthquake'
      },
      {
        publisher: 'FUNVISIS, citada por France 24',
        title: 'Venezuela, un país con historia sísmica donde el 80 % de la población vive en zonas de riesgo',
        year: '2018 (dato) / 2026 (publicación)',
        url: 'https://www.france24.com/es/am%C3%A9rica-latina/20260625-venezuela-un-pa%C3%ADs-con-historia-s%C3%ADsmica-donde-el-80-de-la-poblaci%C3%B3n-vive-en-zonas-de-riesgo'
      }
    ]
  },
  {
    id: 'incendios-de-vegetacion',
    title: 'Incendios de Vegetación',
    emoji: '🔥',
    image: '/assets/the_image_captures_a_dramatic_scene_of_a_wildfire_raging.jpg',
    ribbon: 'Temporada seca',
    summary:
      'En Venezuela casi ningún incendio de vegetación empieza solo. Eso significa que casi todos se pueden evitar, y que el visitante es la variable que más pesa.',
    styleVariant: 'rounded-glass',
    phases: [
      {
        label: 'Antes',
        lead: 'La prevención se decide antes de entrar, en lo que llevas y en la fecha que eliges:',
        points: [
          'Entre enero y abril la vegetación está seca: es cuando se concentra la mayor parte de los incendios del país.',
          'No ingreses cigarrillos, fósforos, yesqueros, velas ni sustancias acelerantes: INPARQUES los prohíbe expresamente.',
          'Consulta si el área tiene restricciones vigentes por sequía antes de planificar la visita.',
          'Lleva tu comida preparada: así no necesitas encender nada dentro del parque.'
        ]
      },
      {
        label: 'Durante',
        lead: 'Si detectas humo o fuego, la prioridad es salir y avisar, no apagarlo:',
        points: [
          'No enciendas fuego fuera de las áreas expresamente autorizadas, ni siquiera para cocinar.',
          'Si ves humo, ubica por dónde sopla el viento y desplázate en sentido contrario al avance del fuego.',
          'Baja hacia zonas despejadas o caminos anchos. El fuego sube por las laderas más rápido de lo que tú subes.',
          'Avisa de inmediato al personal del parque y llama al 911: indica el sector y la entrada más cercana.',
          'No intentes apagar un incendio de vegetación por tu cuenta ni regreses por objetos.'
        ]
      },
      {
        label: 'Después',
        lead: 'El área quemada sigue siendo peligrosa durante días:',
        points: [
          'No transites por terreno recién quemado: quedan brasas bajo la ceniza y raíces ardiendo.',
          'Evita las laderas quemadas si llueve: sin vegetación, el suelo se desprende con facilidad.',
          'Reporta al personal cualquier foco humeante que veas al salir, por pequeño que parezca.'
        ]
      }
    ],
    figuresTitle: 'La dimensión del problema',
    figures: [
      {
        value: '+76 %',
        label: 'de los incendios, entre enero y abril',
        detail:
          'Proporción de los incendios forestales del país que se concentra en ese periodo, según datos del INAMEH.'
      },
      {
        value: 'Casi todos',
        label: 'son de origen humano',
        detail:
          'ACFIMAN señala que la inmensa mayoría de los incendios en territorio venezolano son de origen antropogénico, intencional o accidental.'
      },
      {
        value: 'Muy baja',
        label: 'capacidad de recuperación en La Gran Sabana',
        detail:
          'Sus suelos, someros y pobres en nutrientes, se recuperan con mucha dificultad tras el paso del fuego.'
      }
    ],
    mapTitle: 'Cómo se comporta el fuego en el parque',
    mapNodes: [
      {
        label: 'Sabana y pastizal',
        detail: 'Las gramíneas crecen rápido y son muy inflamables: el frente avanza a gran velocidad.'
      },
      {
        label: 'Ladera arriba',
        detail: 'El fuego se acelera cuesta arriba. Nunca huyas hacia la parte alta de una pendiente.'
      },
      {
        label: 'Camino ancho',
        detail: 'Un cortafuegos natural. Los caminos y las zonas peladas frenan el avance.'
      },
      {
        label: 'Colilla o vidrio',
        detail: 'Dos de los orígenes evitables más frecuentes. Llévate todo residuo contigo.'
      }
    ],
    footer:
      'Reportar un foco pequeño a tiempo es la diferencia entre una brigada y una temporada perdida. Llama al 911.',
    sources: [
      {
        publisher: 'Academia de Ciencias Físicas, Matemáticas y Naturales (ACFIMAN), vía Noticiencias UCV',
        title: 'Incendios forestales en Venezuela: mitos y realidades',
        year: '2024',
        url: 'https://noticiencias.ucv.ve/nota_incendios_forestales_mitos_y_realidades/'
      },
      {
        publisher: 'INAMEH, citado por Mongabay Latam',
        title: 'Incendios forestales afectan Parques Nacionales Canaima y Henri Pittier',
        year: '2023',
        url: 'https://es.mongabay.com/2023/04/incendios-forestales-afectan-parques-nacionales-venezuela/'
      },
      {
        publisher: 'Instituto Nacional de Parques (INPARQUES)',
        title: 'Normas de uso para visitantes de parques nacionales',
        year: '2024',
        url: 'https://www.inparques.gob.ve/'
      }
    ]
  },
  {
    id: 'tormentas-electricas',
    title: 'Tormentas Eléctricas',
    emoji: '⛈️',
    image: '/assets/1_rain_falling_from_sky_2_tree.jpg',
    ribbon: 'Rayos',
    summary:
      'Venezuela tiene el punto con más rayos del planeta. En un parque no existe ningún lugar seguro a la intemperie: la única respuesta correcta es salir.',
    styleVariant: 'timeline-step',
    phases: [
      {
        label: 'Antes',
        lead: 'La tormenta se planifica en casa, porque en el parque ya no hay buenas opciones:',
        points: [
          'Revisa el pronóstico. Si se anuncia actividad eléctrica, cambia la hora o el día de la visita.',
          'Ubica al llegar dónde está la edificación cerrada más cercana y cuánto tardas en llegar a ella.',
          'Recuerda la regla: si escuchas el trueno, ya estás dentro del alcance de la tormenta.'
        ]
      },
      {
        label: 'Durante',
        lead:
          'El Servicio Meteorológico Nacional de EE. UU. lo resume sin matices: no hay lugar seguro afuera.',
        points: [
          'Al primer trueno, suspende la actividad y dirígete a una edificación cerrada o a un vehículo con techo metálico y ventanas subidas.',
          'Un quiosco, una pérgola, un techito de descanso o una parada no protegen: están abiertos por los lados.',
          'Evita los campos abiertos, las cimas y las crestas: no seas el punto más alto del entorno.',
          'Aléjate de los árboles altos aislados, de las torres de iluminación y de las cercas metálicas largas.',
          'Sal del agua de inmediato: lagunas, piscinas y quebradas conducen la corriente a gran distancia.',
          'Si el grupo quedó atrapado sin refugio, sepárense entre sí para que la corriente no pase de uno a otro.'
        ]
      },
      {
        label: 'Después',
        lead: 'El final de la lluvia no es el final del peligro:',
        points: [
          'Espera 30 minutos desde el último trueno antes de retomar la actividad.',
          'No vuelvas solo porque dejó de llover: los rayos caen antes y después del núcleo de lluvia.',
          'Una persona alcanzada por un rayo no queda cargada: se le puede auxiliar de inmediato. Llama al 911 y aplica RCP si no respira.'
        ]
      }
    ],
    figuresTitle: 'El país con más rayos del mundo',
    figures: [
      {
        value: '233',
        label: 'descargas por km² al año',
        detail:
          'Promedio medido sobre el lago de Maracaibo, el mayor foco de actividad eléctrica del planeta según la NASA.'
      },
      {
        value: '~300',
        label: 'noches de tormenta al año',
        detail:
          'Frecuencia del fenómeno conocido como Relámpago del Catatumbo, con su máximo en septiembre.'
      },
      {
        value: '30 min',
        label: 'de espera tras el último trueno',
        detail:
          'Tiempo que el Servicio Meteorológico Nacional recomienda esperar antes de volver a la actividad al aire libre.'
      }
    ],
    mapTitle: 'Refugio real y refugio falso',
    mapNodes: [
      {
        label: 'Edificación cerrada',
        detail: 'Con paredes, techo e instalaciones. Es el único refugio verdaderamente seguro.'
      },
      {
        label: 'Vehículo cerrado',
        detail: 'Techo metálico y ventanas subidas. Válido; no te apoyes en las partes metálicas.'
      },
      {
        label: 'Quiosco o pérgola',
        detail: 'Refugio falso. Protege de la lluvia y no del rayo. No te quedes ahí.'
      },
      {
        label: 'Árbol alto aislado',
        detail: 'El peor sitio del parque. Es justo donde tiende a caer la descarga.'
      }
    ],
    footer:
      'Si escuchas el trueno, ya no hay margen para terminar el partido ni el almuerzo. Suspende y resguárdate.',
    sources: [
      {
        publisher: 'National Weather Service (NOAA)',
        title: 'Lightning Safety — «When Thunder Roars, Go Indoors»',
        year: '2024',
        url: 'https://www.weather.gov/safety/lightning'
      },
      {
        publisher: 'National Weather Service (NOAA)',
        title: 'Outdoor Lightning Safety',
        year: '2024',
        url: 'https://www.weather.gov/safety/lightning-outdoors'
      },
      {
        publisher: 'NASA, citada por Phys.org',
        title: 'Lake Maracaibo, lightning capital of the world',
        year: '2021',
        url: 'https://phys.org/news/2021-09-lake-maracaibo-lightning-capital-world.html'
      }
    ]
  },
  {
    id: 'golpe-de-calor',
    title: 'Golpe de Calor',
    emoji: '🌡️',
    image: '/assets/the_image_captures_a_dynamic_scene_of_a_group_of_people_running_on.jpg',
    ribbon: 'Exposición al sol',
    summary:
      'El riesgo más frecuente de una jornada de parque no es espectacular: es el calor. Y la diferencia entre un agotamiento y un golpe de calor se mide en minutos.',
    styleVariant: 'default',
    phases: [
      {
        label: 'Antes',
        lead: 'Casi todo se resuelve con la hora de salida y con lo que metes en el bolso:',
        points: [
          'Evita la franja de mayor radiación. La recomendación sanitaria es no exponerse entre las 10:00 y las 17:00.',
          'Calcula el agua: al menos dos litros diarios para una persona adulta, y más si vas a caminar al sol.',
          'Usa ropa ligera y de colores claros, gorra y protector solar.',
          'Si vas con niñas, niños o personas mayores, recuerda que son población de mayor riesgo.'
        ]
      },
      {
        label: 'Durante',
        lead: 'Beber cuando ya tienes sed es beber tarde:',
        points: [
          'Bebe sorbos continuos a lo largo del día; la sed ya es un síntoma de deshidratación.',
          'Haz pausas a la sombra con regularidad, aunque nadie del grupo las pida.',
          'Evita el esfuerzo físico intenso en las horas de más calor: deja el partido para el final de la tarde.',
          'Refréscate la cabeza, la cara y el cuello con agua o con paños húmedos.',
          'Vigila al grupo: el primer signo suele ser irritabilidad o dolor de cabeza, no un desmayo.'
        ]
      },
      {
        label: 'Después',
        lead: 'Distinguir los dos cuadros define qué hacer:',
        points: [
          'Agotamiento por calor: sudoración abundante, piel fría y pálida, náuseas, debilidad. Lleva a la persona a la sombra, afloja la ropa, refresca y da de beber a sorbos.',
          'Golpe de calor: confusión, habla arrastrada, convulsiones o pérdida de consciencia, temperatura por encima de 39 °C. Es una emergencia médica.',
          'Ante un golpe de calor, llama al 911 y enfría a la persona de inmediato mientras llega la ayuda. No esperes a que «se le pase».',
          'A una persona con alteración de la consciencia no se le da de beber.'
        ]
      }
    ],
    figuresTitle: 'Las cifras que conviene recordar',
    figures: [
      {
        value: '2 litros',
        label: 'de agua al día como mínimo',
        detail:
          'Consumo mínimo recomendado por la OPS/OMS para una persona adulta, bebido en sorbos continuos y sin esperar a tener sed.'
      },
      {
        value: '10:00–17:00',
        label: 'la franja a evitar',
        detail:
          'Horario de radiación solar más intensa; se recomienda buscar sombra y reducir la actividad física en ese periodo.'
      },
      {
        value: '39 °C',
        label: 'temperatura corporal de alarma',
        detail:
          'Por encima de ese valor, junto a confusión o alteración de la consciencia, se considera golpe de calor.'
      }
    ],
    mapTitle: 'Señales que no debes dejar pasar',
    mapNodes: [
      {
        label: 'Dolor de cabeza y mareo',
        detail: 'Primer aviso. Sombra, agua y reposo ahora, no en veinte minutos.'
      },
      {
        label: 'Piel fría y pegajosa',
        detail: 'Compatible con agotamiento por calor. Refresca y rehidrata a sorbos.'
      },
      {
        label: 'Confusión o habla rara',
        detail: 'Señal de alarma: el cerebro ya está afectado. Es golpe de calor, llama al 911.'
      },
      {
        label: 'Deja de sudar',
        detail: 'Piel caliente y seca en pleno esfuerzo. Emergencia médica, enfría de inmediato.'
      }
    ],
    footer:
      'Ante confusión, convulsiones o pérdida de consciencia por calor, llama al 911 y enfría sin esperar.',
    sources: [
      {
        publisher: 'Organización Panamericana de la Salud (OPS/OMS)',
        title: 'Tercera ola de calor y cómo prevenir sus efectos en la salud',
        year: '2024',
        url: 'https://www.paho.org/es/noticias/22-5-2024-tercera-ola-calor-como-prevenir-sus-efectos-salud'
      },
      {
        publisher: 'CDC / NIOSH',
        title: 'Heat-Related Illnesses',
        year: '2024',
        url: 'https://www.cdc.gov/niosh/heat-stress/about/illnesses.html'
      }
    ]
  },
  {
    id: 'crecidas-subitas',
    title: 'Crecidas Súbitas',
    emoji: '🌊',
    image: '/assets/the_image_captures_a_scene_of_a_city_submerged_in_flo.jpg',
    ribbon: 'Quebradas y vados',
    summary:
      'Una quebrada puede crecer sin que haya llovido donde tú estás. Basta con que haya llovido aguas arriba, y el agua llega antes que el aviso.',
    styleVariant: 'rounded-glass',
    phases: [
      {
        label: 'Antes',
        lead: 'La crecida se anticipa leyendo el terreno y el cielo, no solo el suelo que pisas:',
        points: [
          'Consulta el pronóstico de toda la cuenca, no solo del parque: lo que llueve en la montaña baja por la quebrada.',
          'Identifica los vados y los pasos de agua de tu recorrido y piensa por dónde saldrías si crecen.',
          'No acampes ni te instales en el lecho seco de una quebrada, por cómodo y plano que parezca.',
          'Acuerda un punto alto de reunión con tu grupo antes de empezar a caminar.'
        ]
      },
      {
        label: 'Durante',
        lead:
          'La regla internacional es de una sola frase: da la vuelta, no te ahogues.',
        points: [
          'No cruces a pie ni en vehículo una corriente de agua, aunque parezca baja: 15 cm de agua en movimiento derriban a un adulto.',
          '30 cm de agua en movimiento arrastran la mayoría de los automóviles; 60 cm arrastran camionetas y vehículos grandes.',
          'Nunca rodees una barrera que cierre un paso inundado: la vía puede haberse socavado por debajo.',
          'Busca terreno alto de inmediato y aléjate del cauce; no intentes recuperar objetos.',
          'De noche es imposible calcular la profundidad. Si no ves el fondo, no se cruza.'
        ]
      },
      {
        label: 'Después',
        lead: 'El cauce cambia después de una crecida:',
        points: [
          'Espera a que el personal del parque confirme que los pasos son transitables.',
          'Desconfía de las orillas socavadas y de los troncos atravesados: ceden sin aviso.',
          'Da parte de cualquier persona que falte de inmediato; no organices búsquedas por el cauce.'
        ]
      }
    ],
    figuresTitle: 'Cuánta agua hace falta',
    figures: [
      {
        value: '15 cm',
        label: 'derriban a un adulto',
        detail:
          'Seis pulgadas de agua en movimiento bastan para tumbar a una persona adulta de pie.'
      },
      {
        value: '30 cm',
        label: 'arrastran un automóvil',
        detail:
          'Doce pulgadas de agua corriente se llevan la mayoría de los turismos y las camionetas pequeñas.'
      },
      {
        value: '60 cm',
        label: 'arrastran una camioneta',
        detail:
          'Dos pies de agua en movimiento arrastran vehículos grandes, incluidas camionetas y todoterrenos.'
      }
    ],
    mapTitle: 'Leer la quebrada',
    mapNodes: [
      {
        label: 'Lecho seco',
        detail: 'Plano y cómodo, y por eso peligroso. Es el cauce: no se acampa ahí.'
      },
      {
        label: 'Vado o paso de agua',
        detail: 'El punto donde el sendero cruza la corriente. Revísalo al ir, para saber cómo estaba.'
      },
      {
        label: 'Agua turbia y con ramas',
        detail: 'Señal de crecida aguas arriba. Sal del cauce aunque el nivel aún sea bajo.'
      },
      {
        label: 'Terreno alto',
        detail: 'Tu destino. Aléjate del cauce en perpendicular y sube, no corras cauce abajo.'
      }
    ],
    footer:
      'Más de la mitad de los ahogamientos por inundación ocurren dentro de un vehículo. Nunca se cruza.',
    sources: [
      {
        publisher: 'National Weather Service (NOAA)',
        title: 'Turn Around Don’t Drown®',
        year: '2024',
        url: 'https://www.weather.gov/safety/flood-turn-around-dont-drown'
      }
    ]
  }
];

export const parkTopicById = Object.fromEntries(
  parkTopics.map((topic) => [topic.id, topic])
) as Record<string, ParkTopic>;
