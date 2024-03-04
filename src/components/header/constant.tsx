export type NavItem = {
  title: string;
  path: string;
};

export type ExtLink = {
  title: string;
  image: HTMLImageElement | null;
  link: string;
};

export const NavItems: NavItem[] = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Experience",
    path: "/experience",
  },
];

export const ExtLinks: ExtLink[] = [
  {
    title: "Github",
    link: "https://github.com/piyush-jaiswal-projects",
    image: null,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/piyushjaiswal1610/",
    image: null,
  },
  {
    title: "X",
    link: "https://twitter.com/PiyushJ17317768",
    image: null,
  },
];
