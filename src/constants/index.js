import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },

];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Web Development Intern",
    company_name: " Neuro Nexus Innovation",
    icon: eduskill,
    iconBg: "#161329",
    date: "NOv 2023 - JAN 2024",
    points: [
      "Developed and maintained four real-world educational platforms using React, Node.js, and MongoDB.",
      "Project 1: Quiz Making Platform – Designed an interactive platform for teachers to create quizzes, and students to take them.",
      "ncorporated real - time feedback and scoring using React for dynamic user interfaces.",
      "oject 2: Project Submission System – Built a portal where students could upload projects and teachers could assign",
      "grades. Added an AI-powered job matching feature to connect students with internship opportunities based on their project",
      " performance and skills.",
      " Collaborated across teams, delivering responsive and user-friendly applications, ensuring high scalability and performance",
      "optimization.",
    ],
  },
  {
    title: "Data Analytics Consulting Virtual Intern",
    company_name: "KPMG",
    icon: mathwork,
    iconBg: "#161329",
    date: "OCT 2022 - NOV 2022",
    points: [
      " Conducted a data quality assessment, identifying key insights to drive informed business decisions.",
      "Developed comprehensive data presentations and recommendations for clients, enhancing the accuracy of decision- making.",
      "Acquired hands - on experience in data analytics, machine learning, and effective client communication, contributing to",
      "successful project outcomes.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "CAPABLE",
    icon: edunet,
    iconBg: "#161329",
    date: "JULY 2023 - AUG 2023",
    points: [
      "Developed a predictive model using scikit-learn to forecast Uber driver availability, significantly improving user experience and service efficiency.",
      "Analyzed large datasets to optimize the performance of machine learning models, resulting in improved accuracy for predictions.",
      "Used data visualization and statistical techniques to present insights to the team, contributing to real- time data - driven decision - making.",
      "Participated in weekly team meetings to discuss progress, address challenges, and integrate feedback for continuous improvement.",
    ],
  },
];

export const projects = [
  {
    name: "Flipkart Grid 6.0: AI-Powered Grocery Management System",
    description:
      "Developed an AI solution for grocery inventory management with features like fruit freshness detection, expiry date extraction, and real-time product recognition. Achieved 98% and 97% accuracy for detection using InceptionV3 and EfficientNet models.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/njangid22/Grid_2.0",
  },
  {
    name: "PoeticVerse: Full-Stack Social Media Platform for Poets",
    description:
      "Created a MERN stack-based social media platform for poetry sharing, incorporating features like posting, liking, and a content ownership system for buying/selling rights. Implemented user authentication and anti-theft measures to protect original works.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/njangid22/Poeticverse",
  },
  {
    name: "Neuro Nexus: Educational Platforms",
    description:
      "Developed and maintained educational platforms. Projects include a quiz-making platform for teachers and a project submission system for students with an AI-powered job matching feature.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/njangid22/projecto-NeuroNexus-",
  },
  {
    name: "SIH ByteCode: AI-Powered Farmer Assistance Platform",
    description:
      "Developing a web platform to assist farmers in predicting crop prices based on market trends and weather data. Focused on building an intuitive interface and leveraging AI models for enhanced accessibility and accuracy.",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/njangid22/movie_tickets",
  },
  {
    name: "Healthy Fruit Lead App",
    description:
      "A Flask web app integrated with a deep convolutional neural network (CNN) to classify fruits (Apples, Bananas, Oranges) as Fresh or Rotten. Developed with a focus on real-world applications such as fruit quality detection for industries producing fruit juices, sauces, and pickles. The app predicts the quality of fruits using real-world images with significant accuracy.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/njangid22/fruit",
  },
  {
    name: "Movie Ticket Booking System",
    description:
      "Designed a C-based application for efficient movie ticket bookings, featuring seat selection, payment processing, and real-time availability updates, delivering a seamless user experience.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/njangid22/movie_tickets",
  },
];
