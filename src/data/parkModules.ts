export type ParkModuleItem = {
  title: string;
  body: string;
};

export type ParkModule = {
  id: string;
  /** Clave de icono; el componente la traduce a un icono de lucide-react. */
  icon: 'compass' | 'users' | 'flame';
  title: string;
  /** Texto de la tarjeta en el menú. */
  summary: string;
  /** Entradilla del modal. */
  intro: string;
  items: ParkModuleItem[];
};

/**
 * Módulos de acceso rápido del menú de parques.
 * El alcance son parques y plazas urbanas y, además, pequeñas reservas
 * públicas: áreas naturales abiertas al visitante, con senderos y fauna,
 * donde la señal telefónica y el personal de apoyo pueden faltar.
 */
export const parkModules: ParkModule[] = [
  {
    id: 'antes-de-salir',
    icon: 'compass',
    title: 'Antes de salir',
    summary: 'Qué revisar y qué llevar antes de ir al parque o a la reserva.',
    intro:
      'La mayoría de las emergencias en parques y reservas se evitan en casa, media hora antes de salir:',
    items: [
      {
        title: 'Revisa el pronóstico',
        body: 'Si se anuncia tormenta eléctrica, cambia la hora o el plan. En reserva, la lluvia también crece las quebradas.'
      },
      {
        title: 'Lleva agua suficiente',
        body: 'Calcula 1,5 litros por persona para media jornada, y más si vas a caminar bajo sol abierto.'
      },
      {
        title: 'Protección solar y repelente',
        body: 'Gorra, protector solar y repelente. En senderos de reserva, camisa de manga larga y calzado cerrado.'
      },
      {
        title: 'Teléfono cargado y mapa descargado',
        body: 'En reservas pequeñas la señal se pierde con facilidad: descarga el mapa del área antes de entrar.'
      },
      {
        title: 'Avisa a dónde vas',
        body: 'Deja dicho a qué parque o reserva vas, por cuál entrada y a qué hora piensas volver.'
      }
    ]
  },
  {
    id: 'si-alguien-se-extravia',
    icon: 'users',
    title: 'Si alguien se extravía',
    summary: 'Punto de encuentro, primeros minutos y a quién avisar.',
    intro:
      'Los primeros quince minutos deciden casi todo. Acuerda esto con tu grupo al llegar, no después:',
    items: [
      {
        title: 'Fija un punto de encuentro al entrar',
        body: 'Elige algo visible desde lejos —la entrada principal, un quiosco, la cancha— y que todos lo sepan nombrar.'
      },
      {
        title: 'Toma una foto del grupo al llegar',
        body: 'Sirve para describir con exactitud la ropa que lleva puesta cada quien si hay que pedir ayuda.'
      },
      {
        title: 'Quien se pierde, se queda quieto',
        body: 'Enséñale a niñas y niños a detenerse donde están, hacer ruido y esperar. Moverse alarga la búsqueda.'
      },
      {
        title: 'Avisa de inmediato',
        body: 'Informa al personal del parque o de la reserva y llama al 911. No esperes «un rato más» por prudencia.'
      },
      {
        title: 'En reserva, no busques en solitario',
        body: 'Internarse fuera del sendero convierte a quien busca en una segunda persona extraviada.'
      }
    ]
  },
  {
    id: 'fauna-flora-y-fuego',
    icon: 'flame',
    title: 'Fauna, flora y fuego',
    summary: 'Convivir con el área natural sin provocar una emergencia.',
    intro:
      'En una reserva pequeña el visitante es el principal factor de riesgo para el área, y el área para el visitante:',
    items: [
      {
        title: 'No alimentes ni toques la fauna',
        body: 'Alimentar acerca a los animales a los senderos y cambia su conducta. Observa a distancia.'
      },
      {
        title: 'Nada de fogatas ni colillas',
        body: 'En vegetación seca el fuego avanza más rápido de lo que se camina. No enciendas fuego fuera de las áreas autorizadas.'
      },
      {
        title: 'Reconoce las plantas urticantes de la zona',
        body: 'Pregunta al personal cuáles son antes de entrar al sendero y no apartes la vegetación con las manos desnudas.'
      },
      {
        title: 'Ante picadura o mordedura',
        body: 'No succiones, no cortes y no apliques torniquete. Mantén la zona por debajo del corazón, inmoviliza y llama al 911.'
      },
      {
        title: 'Llévate tu basura',
        body: 'Los restos de comida atraen fauna a las zonas de paso y son el origen de buena parte de los encuentros.'
      }
    ]
  }
];
