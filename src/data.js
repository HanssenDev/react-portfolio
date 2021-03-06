import {
  faReact,
  faJsSquare,
  faHtml5,
  faBootstrap,
  faCss3,
  faNodeJs,
  faGit,
  faSass
} from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "Portfolio website to showcase my projects and skills.",
    thumbnail: "/img/portfolio.jpg",
    technologies: ["React", "CSS", "React Bootstrap"],
    githubURL: "https://github.com/HanssenDev/react-portfolio",
    demoURL: "http://hanssendev.io/",
  },
  {
    id: 2,
    title: "Navi website",
    description: "Mobile-first landing page for a travel start-up",
    thumbnail: "/img/navi-website.jpg",
    technologies: ["HTML", "CSS", "Bootstrap"],
    githubURL: "https://github.com/HanssenDev/navi-website",
    demoURL: "https://hanssendev.github.io/navi-website/",
  },
  {
    id: 3,
    title: "Note it",
    description: "Note-taking app created using React with Hooks.",
    thumbnail: "/img/note-it.jpg",
    technologies: ["React", "CSS", "JavaScript"],
    githubURL: "https://github.com/HanssenDev/note-it",
    demoURL: "https://hanssendev.github.io/note-it/",
  },
  {
    id: 4,
    title: "Simon Game",
    description: "Simon game app that I created to practice DOM Manipulation.",
    thumbnail: "/img/simon-game.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubURL: "https://github.com/HanssenDev/simon-game2",
    demoURL: "https://hanssendev.github.io/simon-game2/",
  },
];

const skills = [
  {
    icon: faReact,
    title: "React.js",
  },
  {
    icon: faJsSquare,
    title: "JavaScript",
  },
  {
    icon: faHtml5,
    title: "HTML5",
  },
  {
    icon: faCss3,
    title: "CSS3",
  },
  {
    icon: faBootstrap,
    title: "Bootstrap",
  },
  {
    icon: faNodeJs,
    title: "Node.js",
  },
  {
    icon: faGit,
    title: "Git",
  },
  {
    icon: faSass,
    title: "Sass"
  }
];

export default projects;
export { skills };
