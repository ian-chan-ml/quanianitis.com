import type { Project } from '@/types/data';

const projectsData: Project[] = [
  {
    type: 'work',
    title: 'EcomHeat - Manage Market Share, Monitor Sales Performance, Optimize Store Operation',
    description:
      'The pioneering E-commerce data intelligence platform in Vietnam for brands with the most granular data information.',
    imgSrc: '/static/images/projects/ecom-heat.png',
    url: 'https://youneteci.com/en/eci-ecomheat/?ref=karhdo.dev',
    builtWith: ['React', 'Bootstrap', 'FeathersJS', 'MySQL', 'RabbitMQ'],
  },
  {
    type: 'self',
    title: 'Simulate Basic Geometry',
    description: 'Explore the World of Basic 3D Modeling Simulations on Our Website.',
    imgSrc: '/static/images/projects/simulate-geometry.png',
    repo: 'geometry-simulation',
    builtWith: ['Javascript', 'Jquery', 'ThreeJS'],
  },
];

export default projectsData;
