export const METADATA = {
  title: "Portfolio | Deepak Gandhi",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = ".singh.xda@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/deepak-gandhi-694122249/",
  instagram: "https://www.instagram.com/mr_sine274/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Dxb Abayas",
    image: "/projects/dXB.PNG",
    blurImage: "/projects/dXB.PNG",
    description: "E-commerce Website nn Laravel",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://dxbabayas.com/",
    tech: ["Laravel", "Html", "Css", "javascript"],
  },
  {
    name: "Spectrum Bharat",
    image: "/projects/spectrum.png",
    blurImage: "/projects/spectrum.png",
    description:
      "Bussiness Portfollio webiste with CMS for UPVC Windows & Doors",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "http://www.purshotamgroup.com/",
    tech: ["Laravel", "Html", "Css", "javascript"],
  },
  {
    name: "PurshotamGroup",
    image: "/projects/purshotam.png",
    blurImage: "/projects/purshotam.png",
    description: "Bussiness Portfollio webiste For Solar Panel",
    gradient: ["#245B57", "#004741"],
    url: "https://www.dltlabs.com/",
    tech: ["php", "Html", "Css", "javascript"],
  },

  {
    name: "kanushiindustries",
    image: "/projects/kansuhi.png",
    blurImage: "/projects/kansuhi.png",
    description: "E-commerce Website For Home Decor",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://www.kanushiindustries.com/",
    tech: ["codeigniter", "Html", "Css", "javascript"],
  },
  {
    name: "BsHolidayHomes",
    image: "/projects/bsholidays.png",
    blurImage: "/projects/bsholidaysy.png",
    description: "Dubai Based Hotel Booking System",
    gradient: ["#003052", "#167187"],
    url: "https://bsholidayhomes.com/",
    tech: ["Laravel", "Html", "Css", "javascript"],
  },
  {
    name: "viftraining",
    image: "/projects/vims.png",
    blurImage: "/projects/vims.png",
    description: "Cms System And scheduling certificate on mail for institude",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://viftraining.com/",
    tech: ["Laravel", "Html", "Css", "javascript"],
  },

  {
    name: "Naadgoonj",
    image: "/projects/naadgoonj.png",
    blurImage: "/projectsnaadgoonj.png",
    description: "LMS For music classes with Zoom Call integration",
    gradient: ["#172839", "#334659"],
    url: "https://www.naadgoonj.com/naadgoonj_new/",
    tech: ["Laravel", "Html", "Css", "javascript"],
  },
  {
    name: "CRM",
    image: "/projects/CRM.png",
    blurImage: "/projects/CRM.png",
    description: "Crm system for Dubai Based Real estate Company",
    gradient: ["#142D46", "#2E4964"],
    url: "http://216.10.242.11:8080/",
    tech: ["next", "tailwind"],
  },
];

export const SKILLS = {
  frontend: [
    "html",
    "css",
    "javascript",
    "bootstrap",
    "jquery",
    "Laravel",
    "php",
    "codeigniter",
    "mysql",
    "next",
    "mongodb",
  ],
  other: ["git"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "April 2022- Jul 2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Doors Stuido",
    size: ItemSize.SMALL,
    subtitle:
      "Worked there as a full stack developer on php , laravel and codeigniter ",
    image: "/timeline/doors.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Jul 2023- Dec 2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "3SITSERVICES",
    size: ItemSize.SMALL,
    subtitle: "Laravel Developer",
    image: "/timeline/3s.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dec 2023- Currently Working",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Milestone Homes Real Estate",
    size: ItemSize.SMALL,
    subtitle:
      "Working Here as a full stack devloper skills laravel next js mongodb mysql etc",
    image: "/timeline/milestone.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
