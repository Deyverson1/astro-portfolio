import Github from '../components/Github.astro';
import ArduinoIcon from '../components/icons/ArduinoIcon.astro';
import AstroIcon from '../components/icons/AstroIcon.astro';
import Bootstrap from '../components/icons/Bootstrap.astro';
import BrandVercel from '../components/icons/BrandVercel.astro';
import CodeIcon from '../components/icons/CodeIcon.astro';
import Cplusplus from '../components/icons/Cplusplus.astro';
import Css from '../components/icons/Css.astro';
import Database from '../components/icons/Database.astro';
import DeviceIcon from '../components/icons/DeviceIcon.astro';
import Git from '../components/icons/Git.astro';
import GithubIcon from '../components/icons/GithubIcon.astro';
import Html from '../components/icons/Html.astro';
import IndustrialIcon from '../components/icons/IndustrialIcon.astro';
import Linux from '../components/icons/Linux.astro';
import MaterialUI from '../components/icons/MaterialUI.astro';
import MySQL from '../components/icons/MySQL.astro';
import Next from '../components/icons/Next.astro';
import Node from '../components/icons/Node.astro';
import OnshapeIcon from '../components/icons/OnshapeIcon.astro';
import Php from '../components/icons/Php.astro';
import ProcessingIcon from '../components/icons/ProcessingIcon.astro';
import React from '../components/icons/React.astro';
import Supabase from '../components/icons/SupabaseIcon.astro';
import Svelte from '../components/icons/Svelte.astro';
import Tailwind from '../components/icons/Tailwind.astro';
import ToolIcon from '../components/icons/ToolIcon.astro';
import TypeScript from '../components/icons/TypeScript.astro';
import Windows from '../components/icons/Windows.astro';
import JavaScript from '../components/icons/javaScript.astro';

export const SkillData = [
  {
    title: 'Frontend',
    highlight: true,
    icon: CodeIcon,
    items: [
      { name: 'ReactJS', icon: React },
      { name: 'JavaScript', icon: JavaScript },
      { name: 'TypeScript', icon: TypeScript },
      { name: 'Astro', icon: AstroIcon },
      { name: 'HTML', icon: Html },
      { name: 'CSS', icon: Css },
      { name: 'Tailwind CSS', icon: Tailwind },
      { name: 'Material UI', icon: MaterialUI },
    ],
  },
  {
    title: 'Industrial',
    highlight: false,
    icon: IndustrialIcon,
    items: [
      { name: 'MaintaX CMMS', icon: DeviceIcon },
      { name: 'Modelado 3D', icon: OnshapeIcon },
      { name: 'Arduino', icon: ArduinoIcon },
      { name: 'C++', icon: Cplusplus },
      { name: 'Processing', icon: ProcessingIcon },
    ],
  },
  {
    title: 'Datos y backend',
    highlight: false,
    icon: Database,
    items: [
      { name: 'Supabase', icon: Supabase },
      { name: 'Node.js', icon: Node },
    ],
  },
  {
    title: 'Herramientas',
    highlight: false,
    icon: ToolIcon,
    items: [
      { name: 'Git', icon: Git },
      { name: 'GitHub', icon: GithubIcon },
      { name: 'Vercel', icon: BrandVercel },
      { name: 'Windows', icon: Windows },
      { name: 'Linux', icon: Linux },
    ],
  },
];
