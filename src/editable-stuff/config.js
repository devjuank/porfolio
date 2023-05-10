// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Juan Carlos",
  middleName: "",
  lastName: "Ojeda Gomez",
  message: " Passionate about tecnology.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/devjuank",
    },
    {
      image: "fa-github",
      url: "https://github.com/devjuank",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/juank-dev/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/juank.png"),
  imageSize: 390,
  message:
    "My name is Juan Carlos. hello! my name is juan carlos, I have 7 years of experience working in IT, I started working as a full stack developer, then I specialized in backend, and finally working as SRE/Devops.",
  resume: "https://drive.google.com/file/d/1yugTrbis5nP5bMakYSVuiXtjY4nMMR8j/view?usp=share_link",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "devjuank", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "hashirshoaeb@gmail.com",
};

const experiences = {
  show: true,
  heading: "Challenges & Experiences",
  data: [
    {
      name: 'Watchdog Systems',// Here Add Company Name
      companylogo: require('../assets/img/watchdog.png'),
      description: 'Watchdog Systems is a company that provides solutions for the management of the supply chain, through the use of technology and the development of software solutions.',
      company: 'Mercado Libre',
    },
    {
      name: 'ETL Pipeline',
      companylogo: require('../assets/img/etl-pipeline.png'),
      description: 'The ETL pipeline is a process that extracts data from a source, transforms it into a usable format, and loads it into a data warehouse. The ETL pipeline is a fundamental part of the data warehouse architecture.',
      company: 'Mercado Libre',
    },
    {
      name: 'Migratation to microservice architectue',// Here Add Company Name
      companylogo: require('../assets/img/watchdog.png'),
      description: 'The microservice architecture is a design pattern that structures an application as a collection of loosely coupled services, which implement business capabilities. The microservice architecture enables the continuous delivery/deployment of large, complex applications.',
      company: 'Goverment of the city of Buenos Aires',
    },
    {
      name: 'AWS architectue',
      description: 'Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.',
      companylogo: require('../assets/img/watchdog.png'),
      company: 'Bittrap',
    },
    {
      name: 'Autoscaling Kubernetes',// Here Add Company Name
      description: 'Kubernetes is an open-source container-orchestration system for automating computer application deployment, scaling, and management.',
      companylogo: require('../assets/img/watchdog.png'),
      company: 'Pangea',
    },
    {
      name: 'Kubernetes deployed in GCP and AWS',// Here Add Company Name
      description: 'Kubernetes deployed in GCP and AWS',
      companylogo: require('../assets/img/watchdog.png'),
      company: 'Pangea',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
