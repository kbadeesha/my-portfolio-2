import type { IGalleryData } from '../../shared/Interfaces/interfaces';
import img_1 from '../../../public/Assets/Img/project_imgs/Img1.jpg';
import img_2 from '../../../public/Assets/Img/project_imgs/Img2.jpg';
import img_3 from '../../../public/Assets/Img/project_imgs/Img3.jpg';
import img_4 from '../../../public/Assets/Img/project_imgs/Img4.jpg';
import img_5 from '../../../public/Assets/Img/project_imgs/Img5.jpg';
import img_6 from '../../../public/Assets/Img/project_imgs/Img6.jpg';

import './Gallery.css';
export const GalleryData: IGalleryData[] = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    imageUrl: img_1,
    projectUrl: 'https://example.com/project-one',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    imageUrl: img_2,
    projectUrl: 'https://exam   ple.com/project-two',
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    imageUrl: img_3,
    projectUrl: 'https://example.com/project-three',
  },
  {
    title: 'Project Four',
    description: 'A brief description of Project Four.',
    imageUrl: img_4,
    projectUrl: 'https://example.com/project-four',
  },
  {
    title: 'Project Five',
    description: 'A brief description of Project Five.',
    imageUrl: img_5,
    projectUrl: 'https://example.com/project-five',
  },
  {
    title: 'Project Six',
    description: 'A brief description of Project Six.',
    imageUrl: img_6,
    projectUrl: 'https://example.com/project-six',
  },
];
