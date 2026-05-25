export type NewInformationItem = {
  id: string;
  title: string;
  summary: string;
  image: string;
};

export const newInformationItems: NewInformationItem[] = [
  {
    id: 'submenu-01',
    title: 'Submenú 01: Diagnóstico y contexto',
    summary: 'Levantamiento de amenazas, actores y capacidades para planificar acciones de prevención.',
    image: '/assets/1_plan_comunidad_de_nios_2.jpg',
  },
  {
    id: 'submenu-02',
    title: 'Submenú 02: Organización y roles',
    summary: 'Distribución de responsabilidades operativas para respuesta, comunicación y coordinación.',
    image: '/assets/1_classroom_2_students_3_teacher_4.jpg',
  },
  {
    id: 'submenu-03',
    title: 'Submenú 03: Procedimientos y ejercicios',
    summary: 'Protocolos de actuación y práctica periódica para mejorar la preparación institucional.',
    image: '/assets/in_the_image_a_group_of_people_are_gathered_in_a_courty.jpg',
  },
  {
    id: 'submenu-04',
    title: 'Submenú 04: Seguimiento y mejora',
    summary: 'Registro de resultados, retroalimentación y actualización continua del plan de seguridad.',
    image: '/assets/the_group_of_people_are_gathered_around_a_large_map.jpg',
  },
];
