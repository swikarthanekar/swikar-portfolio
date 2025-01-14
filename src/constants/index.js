import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  arm,
  machinelearning,
  modelling,
  css,
  openCV,
  anaconda,
  codingninjas,
  ros,
  rtab,
  coppeliaSim,
  tensorflow,
  blender,
  arduino,
  python,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  rviz,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  petbot,
  kinect,
  coverhunt,
  gazebo,
  dcc,
  kelhel,
  microverse,
  rapidrasoi,
  microros,
  cyborg,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Robotics',
    icon: arm,
  },
  {
    title: 'Machine Learning',
    icon: machinelearning,
  },
  {
    title: '3D Modeling',
    icon: modelling,
  },
];

const technologies = [
 
  
  {
    name: 'gazebo',
    icon: gazebo,
  },
  {
    name: 'microros',
    icon: microros,
  },
  {
    name: 'openCV',
    icon: openCV,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'ros',
    icon: ros,
  },
  {
    name: 'rtab',
    icon: rtab,
  },
  {
    name: 'rviz',
    icon: rviz,
  },
  {
    name: 'coppeliaSim',
    icon: coppeliaSim,
  },
  {
    name: 'tensorflow',
    icon: tensorflow,
  },
  {
    name: 'blender',
    icon: blender,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'arduino',
    icon: arduino,
  },
  {
    name: 'anaconda',
    icon: anaconda,
  },
];

const experiences = [
  {
    title: 'Robotics Member',
    company_name: 'Cyborg-Robotics and Automation Club of NIT Rourkela',
    icon: cyborg,
    iconBg: '#333333',
    date: 'May 2024 - Present',
  },
  {
    title: 'Campus Ambassador',
    company_name: 'Coding Ninjas',
    icon: codingninjas,
    iconBg: '#333333',
    date: 'Aug 2024 - Present',
  },
  {
    title: 'Campus Head',
    company_name: 'Rapid Rasoi',
    icon: rapidrasoi,
    iconBg: '#333333',
    date: 'Sep 2024 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Kinect V2',
    description: 'A detailed 3D visualization of the environment using Kinect V2 and RTAB-Map .',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: kinect,
    
    demo: 'https://youtu.be/Jd6Ce7Gk9ig',
  },
  {
    id: 'project-2',
    name: 'Pet-Bot',
    description: 'A quadruped robot powered by micro-ROS, capable of performing a wide range of motions with precision and versatility.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: petbot,
    repo: '',
    demo: '',
  },
];

export { services, technologies, experiences, projects };
