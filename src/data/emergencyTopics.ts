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
    id: 'sismos-tsunamis-terremotos',
    title: 'Sismos, Tsunamis y Terremotos',
    emoji: '🫨',
    image: '/assets/earthquake_illustration_1774892678686.png',
    ribbon: 'Prioridad: agacharse, cubrirse, sujetarse y evacuar la costa si el mar se retira',
    summary:
      'La clave es proteger la cabeza, ordenar la evacuacion y reconocer la senal de tsunami: sismo fuerte, retiro brusco del mar y alerta inmediata.',
    phases: [
      {
        label: 'Antes',
        lead: 'Prepara la casa y la ruta de salida.',
        points: [
          'Fija muebles, lamparas y objetos pesados que puedan caer.',
          'Define zonas seguras, rutas libres y un punto de reunion familiar.',
          'Ten a mano kit, pito, linterna, radio y contactos de emergencia.',
        ],
      },
      {
        label: 'Durante',
        lead: 'Protegete del golpe de objetos y mantente en calma.',
        points: [
          'Agachate, cubrete y agarrate debajo de una mesa o junto a una pared interior.',
          'Alejate de vidrios, escaleras, ascensores, postes y cables.',
          'Si estas en la costa y sientes un sismo fuerte o ves que el mar se recoge, sube de inmediato a una zona alta.',
        ],
      },
      {
        label: 'Después',
        lead: 'Corta riesgos y sigue la informacion oficial.',
        points: [
          'Cierra gas, agua y electricidad si hay fugas o danos.',
          'Escucha radio o avisos oficiales y no regreses hasta el all clear.',
          'Alejate del mar hasta que se cancele la alerta; las olas del tsunami llegan en serie.',
        ],
      },
    ],
    mapTitle: 'Coordinación',
    mapNodes: [
      { label: 'Proteccion', detail: 'Cabeza y cuello cubiertos, refugio interior estable.' },
      { label: 'Ruta', detail: 'Salida despejada y punto de reunion definido.' },
      { label: 'Costa', detail: 'Sube a terreno alto si el mar se retira o ruge.' },
      { label: 'Informacion', detail: 'Radio a baterias y canales oficiales primero.' },
    ],
    infographicTitle: 'Checklist',
    infographicItems: [
      { label: 'Señal de tsunami', detail: 'Sismo fuerte + mar se recoge + alerta inmediata.' },
      { label: 'Zonas seguras', detail: 'Bajo mesa resistente, pared interior o terreno alto.' },
      { label: 'Nunca hagas', detail: 'Ir a la playa a mirar la ola o usar ascensores.' },
    ],
    footer:
      'Mantente atento a replicas, revisa danos estructurales y protege a personas con movilidad reducida primero.',
  },
  {
    id: 'lluvias-inundaciones-deslizamientos',
    title: 'Lluvias, Inundaciones y Deslizamientos',
    emoji: '🌧️',
    image: '/assets/floods_illustration_1774910201216.png',
    ribbon: 'Mantente fuera del agua en movimiento y sube a zonas altas antes de que el nivel crezca',
    summary:
      'Las lluvias intensas exigen vigilar drenajes, laderas y rutas de evacuacion; el objetivo es no quedar atrapado por agua, barro o cables caidos.',
    phases: [
      {
        label: 'Antes',
        lead: 'Reduce la exposicion al agua y a las pendientes.',
        points: [
          'Limpia canales, bajantes y desagues; identifica zonas altas cercanas.',
          'Evita estacionar o caminar por quebradas, cunetas y vias de escurrimiento.',
          'Prepara documentos, radio, agua y una ruta de evacuacion familiar.',
        ],
      },
      {
        label: 'Durante',
        lead: 'Sube, no cruces y corta la energia si entra agua.',
        points: [
          'Muévete a terreno alto y no intentes cruzar corrientes, calles inundadas ni puentes fragiles.',
          'Si el agua entra en la vivienda, corta la electricidad desde el punto seguro.',
          'Si hay grietas, ruidos o movimiento en una ladera, aléjate de inmediato por posible deslizamiento.',
        ],
      },
      {
        label: 'Después',
        lead: 'Regresa despacio y desinfecta todo lo afectado.',
        points: [
          'No regreses hasta que autoridades indiquen que es seguro.',
          'Revisa paredes, cables y tuberias antes de reactivar servicios.',
          'Limpia y desinfecta superficies, ropa y agua almacenada que haya tocado la inundacion.',
        ],
      },
    ],
    mapTitle: 'Riesgos',
    mapNodes: [
      { label: 'Agua', detail: 'Si corre, no se cruza; si sube, se evacua.' },
      { label: 'Electricidad', detail: 'Corta el servicio si el agua alcanza la instalacion.' },
      { label: 'Pendiente', detail: 'Grietas o ruidos = alejarse de la ladera.' },
      { label: 'Salud', detail: 'Desinfectar y vigilar sintomas tras la exposicion.' },
    ],
    infographicTitle: 'Checklist',
    infographicItems: [
      { label: 'Regla 1', detail: 'No caminar ni conducir por agua en movimiento.' },
      { label: 'Regla 2', detail: 'Subir a zonas altas antes de quedar aislado.' },
      { label: 'Regla 3', detail: 'No tocar cables caidos ni barro inestable.' },
    ],
    footer:
      'Una ladera mojada puede fallar horas despues; mantente lejos de taludes, barrancos y cauces.',
  },
  {
    id: 'prevencion-sustancias-quimicas',
    title: 'Prevención con Sustancias Químicas',
    emoji: '🧪',
    image: '/assets/fire_safety_illustration_1774910229007.png',
    ribbon: 'Aisla el area, evita mezclar productos y evita cualquier fuente de calor o chispa',
    summary:
      'Ante derrames o vapores, la prioridad es identificar el producto, ventilar si es seguro, alejar personas y notificar sin tocar el material.',
    phases: [
      {
        label: 'Antes',
        lead: 'Ordena, etiqueta y separa los productos.',
        points: [
          'Guarda sustancias en envases originales, cerrados y etiquetados.',
          'No mezcles cloro con amoniaco, acidos ni otros limpiadores.',
          'Ten guantes, lentes, mascarilla y la ruta para reportar incidentes.',
        ],
      },
      {
        label: 'Durante',
        lead: 'Aisla el area y reduce la exposicion.',
        points: [
          'Evacua si hay humo, olor fuerte o salpicadura desconocida.',
          'No enciendas luces, motores ni interruptores si sospechas vapores inflamables.',
          'Si es seguro, ventila el area y aleja a todos del derrame por la ruta de salida.',
        ],
      },
      {
        label: 'Después',
        lead: 'Descontamina y reporta cualquier sintoma.',
        points: [
          'Espera la autorizacion oficial antes de reingresar.',
          'Lava piel y ropa expuesta con abundante agua; busca atencion si hubo contacto.',
          'Reporta el incidente y conserva el envase o nombre del producto para los equipos de respuesta.',
        ],
      },
    ],
    mapTitle: 'Control',
    mapNodes: [
      { label: 'Identifica', detail: 'Nombre del producto, simbolos y peligros.' },
      { label: 'Aisla', detail: 'Cierra accesos y separa a las personas.' },
      { label: 'Ventila', detail: 'Solo si no hay riesgo de explosion o incendio.' },
      { label: 'Reporta', detail: 'Notifica a emergencias y sigue instrucciones.' },
    ],
    infographicTitle: 'Checklist',
    infographicItems: [
      { label: 'Nunca mezcles', detail: 'Cloro + amoniaco = gases toxicos.' },
      { label: 'Evita chispas', detail: 'Cualquier fuente de ignicion puede empeorar el incidente.' },
      { label: 'Si hubo contacto', detail: 'Agua abundante y ayuda medica inmediata.' },
    ],
    footer:
      'Si el derrame huele fuerte, arde la garganta o irrita los ojos, sal del area y pide apoyo especializado.',
  },
  {
    id: 'incendios',
    title: 'Incendios',
    emoji: '🔥',
    image: '/assets/the_image_captures_a_dramatic_scene_of_a_forest_fire_the.jpg',
    ribbon: 'La salida ordenada y el cierre de puertas frenan humo, calor y propagacion',
    summary:
      'En incendios la meta es evacuar rapido, no inhalar humo y evitar reingresar hasta que bomberos o proteccion civil den la autorizacion.',
    phases: [
      {
        label: 'Antes',
        lead: 'Reduce las causas mas comunes de fuego.',
        points: [
          'Revisa cables, enchufes, gas y sobrecarga electrica con frecuencia.',
          'Ten extintor, detectores de humo y un plan de evacuacion practicado.',
          'Mantén salidas despejadas y materiales combustibles lejos de calor.',
        ],
      },
      {
        label: 'Durante',
        lead: 'Evacua, baja el humo y usa ayuda inmediata.',
        points: [
          'Sal de inmediato; si hay humo, agachate y avanza por debajo de la capa mas densa.',
          'Cierra puertas al salir si puedes hacerlo sin retrasarte.',
          'Si tu ropa se enciende, detente, tirate al suelo y rueda.',
        ],
      },
      {
        label: 'Después',
        lead: 'No regreses hasta que el area sea segura.',
        points: [
          'No entres a estructuras con brasas, cables o olor a gas.',
          'Busca atencion si inhalaste humo o sufriste quemaduras.',
          'Reporta puntos calientes y confirma que todos esten ubicados.',
        ],
      },
    ],
    mapTitle: 'Mapa de accion inmediata',
    mapNodes: [
      { label: 'Alarma', detail: 'Activa aviso y llama a emergencias.' },
      { label: 'Ruta', detail: 'Sal por la via mas corta y despejada.' },
      { label: 'Humo', detail: 'Agachate y cubre nariz y boca.' },
      { label: 'Punto de encuentro', detail: 'Cuenta personas y espera instrucciones.' },
    ],
    infographicTitle: 'Checklist',
    infographicItems: [
      { label: 'Regla 1', detail: 'No usar ascensor ni volver por objetos.' },
      { label: 'Regla 2', detail: 'Cerrar puertas ayuda a frenar el fuego.' },
      { label: 'Regla 3', detail: 'Si la ropa arde: detenerse, tirarse y rodar.' },
    ],
    footer:
      'La mayor amenaza en un incendio es el humo; evacua temprano y protege a ninos, mayores y personas con discapacidad primero.',
  },
];

export const emergencyTopicById = Object.fromEntries(
  emergencyTopics.map((topic) => [topic.id, topic]),
) as Record<EmergencyTopic['id'], EmergencyTopic>;
