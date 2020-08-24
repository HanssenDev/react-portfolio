import {
  faReact,
  faJsSquare,
  faHtml5,
  faBootstrap,
  faCss3,
  faNodeJs,
  faGit,
} from "@fortawesome/free-brands-svg-icons";


const projects = [
  {
    id: 1,
    title: "Simon Game",
    description: "Simon game app that I created to practice DOM Manipulation.",
    thumbnail: "/img/simon-game.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubURL: "https://github.com/HanssenDev/simon-game2",
    demoURL: "https://hanssendev.github.io/simon-game2/",
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
    technologies: ["React", "JavaScript"],
    githubURL: "https://github.com/HanssenDev/note-it",
    demoURL: "https://hanssendev.github.io/note-it/",
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
];

export default projects;
export { skills };
