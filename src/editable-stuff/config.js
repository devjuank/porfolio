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
  message: "Software Engineer, SRE, DevOps, Cloud Engineer, Backend Developer.",
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
//      i.e: profilePictureLink: require("../editable-stuff/juank.jpeg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/juank.jpeg"),
  imageSize: 390,
  message: "Hello! My name is Juan Carlos, I have 7 years of experience working in IT, I started working as a Full Stack Developer, then I specialized in Backend, and currently i am working as a SRE/DevOps. You can see more details in my resume.",
  messageSecond: "algo",
  resume: "https://drive.google.com/file/d/1ocdMRc4j16vZNveSwWNR2FGIW_bakZ_5/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
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
      img: require("../editable-stuff/juank.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/juank.jpeg"), 
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
    { name: "AWS", value: 90 },
    { name: "GCP", value: 75 },
    { name: "Golang", value: 90 },
    { name: "Python", value: 65 },
    { name: "PHP", value: 90 },
    { name: "Bash", value: 80 },
    { name: "Terraform", value: 90 },
    { name: "Ansible", value: 55 },
    { name: "Linux", value: 80 },
    { name: "Datadog", value: 80 },
    { name: "CloudWatch", value: 80 },
    { name: "Graphana", value: 80 },
    { name: "Kivana", value: 80 },
    { name: "SQL", value: 90 },
    { name: "Mysql", value: 90 },
    { name: "Postgres", value: 90 },
    { name: "Javascript", value: 90 },
    { name: "React", value: 50 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
    { name: "Comunication", value: 90 },
  ],
};

// Contact SECTION
const getInTouch = {
  show: true,
  heading: "Contact me",
  message:
    "If you want to contact me, please send me a message and I will reply as soon as possible.",
  email: "juanki.ijcog@gmail.com",
};

const experiences = {
  show: true,
  heading: "Challenging Projects",
  data: [
    {
      name: 'Watchdog Systems',
      companylogo: require('../assets/img/watchdog.png'),
      description: 'Watchdog Service for conducting checks on HTTP, TCP, and ICMP at Mercado Libre. To complete this objective, I used GoLang to build the Backend and the Agents. For deployment, I utilized Docker, ECS, and ECR. To ensure data transfer and security, I employed AWS IoT, MQTT, and SQS. Additionally, for displaying Watchdog Metrics, I utilized Datadog.',
      company: 'Mercado Libre',
    },
    {
      name: 'ETL Pipeline',
      companylogo: require('../assets/img/etl-pipeline.png'),
      description: 'Creation of ETL Pipeline for Ensuring Personal Data Privacy at Mercado Libre, to achieve this objective I used Golang mainly to build Extractor, Transformer, Analyzer, and Loader Modules. Additionally I connected this service with other to identify and locate all instances of Personally Identifiable Information (PII) stored across various data storages within Mercado Libre. ',
      company: 'Mercado Libre',
    },
    {
      name: 'Code restructuring and Architecture Migration',
      companylogo: require('../assets/img/migration-to-microservice.jpg'),
      description: "Development of a Driver's License System for the Buenos Aires City Government. Using Laravel, PHP, JavaScript, Bootstrap, and HTML, I developed the Theoretical Test. Additionally, I initiated the process of migrating from a Monolithic Architecture to a Microservices Architecture using Docker and decoupling some modules.",
      company: 'Goverment of the city of Buenos Aires',
    },
    {
      name: 'AWS architectue',
      description: 'Infrastructure migration from DigitalOcean to AWS. I migrated all the infrastructure to AWS using EC2, S3, Route53, ECR, and IAM with Terraform and Bash Scripts for provisioning. Additionally, I used Terraform to create alerts and dashboards in CloudWatch for monitoring the infrastructure. Moreover, for container monitoring, I utilized Grafana.',
      companylogo: require('../assets/img/ecs-architecture.png'),
      company: 'Bittrap',
    },
    {
      name: 'Autoscaling Kubernetes',// Here Add Company Name
      description: 'Autoscaling Services in Kubernetes and the Setup of OpenSearch in GCP. To implement autoscaling, I used Python to read a config file and generate the necessary Kubernetes files. Moreover, I modified the GitLab pipelines to apply these changes to the Kubernetes Cluster.',
      companylogo: require('../assets/img/kubernetes-hpa.png'),
      company: 'Pangea',
    },
    /*{
      name: 'Kubernetes deployed in GCP and AWS',// Here Add Company Name
      description: 'Kubernetes is an open-source container-orchestration system for automating computer application deployment, scaling, and management.',
      companylogo: require('../assets/img/multicloud.png'),
      company: 'Pangea',
    },*/
  ]
}

const certifications = {
  show: true,
  heading: "Certifications",
  data: [{
      name: 'AWS Certified Cloud Practitioner',
      image: require('../assets/img/aws-certified-cloud-practitioner.png'),
      certificationID: '9B5EY84C7N44QXSY',
      link: 'https://www.credly.com/badges/e53c3029-13c2-4966-9a69-2a05dff84a51/public_url',
    },
    {
      name: 'Google Cloud Plarform',
      image: require('../assets/img/diploma-fundamentos-google-2018.jpg'),
      certificationID: '7408f3f9-dd48-4fa8-98bf-68d63cb49860',
      link: 'https://platzi.com/@juanki1989',
    },
    {
      name: 'Terraform',
      image: require('../assets/img/diploma-devops-terraform.jpg'),
      certificationID: '74c150af-4ea1-4a96-bf92-d8222c6d7a22',
      link: 'https://platzi.com/@juanki1989',
    },
    /*{
      name: 'Golang',
      image: require('../assets/img/diploma-go-basico.jpg'),
      certificationID: 'cOf77665-025d-484a-93ba-4368401fea5',
      link: 'https://platzi.com/@juanki1989',
    },
    {
      name: 'Python',
      image: require('../assets/img/diploma-python-basico.jpg'),
      certificationID: 'cOf77665-025d-484a-93ba-4368401fea5',
      link: 'https://platzi.com/@juanki1989',
    },
    {
      name: 'Gitlab',
      image: require('../assets/img/diploma-gitlab.jpg'),
      certificationID: 'cOf77665-025d-484a-93ba-4368401fea5',
      link: 'https://platzi.com/@juanki1989',
    },
    {
      name: 'Github Actions',
      image: require('../assets/img/diploma-github-actions.jpg'),
      certificationID: 'cOf77665-025d-484a-93ba-4368401fea5',
      link: 'https://platzi.com/@juanki1989',
    },*/
  ] 
}
// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, certifications };
