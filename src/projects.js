// Array of projects to be rendered on portfolio page
import nosqlimg from "./images/NOSQL-Social-Network-API.png";
import tblog from "./images/TechBlog.png"
import etracker from "./images/employeeTracker.png"
import nTaker from "./images/NoteTaker.png"
import Weather from "./images/WeatherDashboard (2).png"
import rps from "./images/rockpaperscissorspng.png"
import pWord from "./images/Password-Generator.png"

export const projects = [
  {
    projectTitle: "NoSQL-Social-Network-API",
    description:
      "A social network API using a NOSQL database, so the website can handle large amount of unstructured data",
    imageLink: nosqlimg,
    liveLink: "Code Editor of your choice NPM install npm start",
    gitHub: "https://github.com/Tocopro/NOSQLSocialNetworkAPI#Project-Links",
  },
  {
    projectTitle: "The Tech Blog",
    description:
      "An app that users/develoopers can post and see other users posts.",
    imageLink: tblog,
    liveLink: "https://mvcapplication-8d6b5f3a3222.herokuapp.com/",
    gitHub: "https://github.com/Tocopro/mvcBlog",
  },
  {
    projectTitle: "Employee tracker",
    description:
      "This project is an employee tracker, CRUD application, using Nodejs. Questions are prompted in the CLI and the user's answers will modify the database.",
    imageLink:
      etracker,
    liveLink:
      "code editor of your choice run npm install then enter mysql -u root -p to run the program node index.js",
    gitHub:
      "https://github.com/Tocopro/modeule12employeetracker/blob/main/module12_employeeTracker.png",
  },
  {
    projectTitle: "Note Taker",
    description:
      "An application to write and save note with Express.js back end and will save and retrieve note data from JSON file.",
    imageLink: nTaker,
    liveLink: "https://notetakerproject23-ff75b9911d1e.herokuapp.com/",
    gitHub: "https://github.com/Tocopro/Project11Deploy",
  },
  {
    projectTitle: "Weather Dashboard",
    description:
      "Using third-party and server-side apis to bring clients live weather updates and future forecasts from anywhere in the world.",
    imageLink:
      Weather,
    liveLink: "https://tocopro.github.io/Weather_App_Project/",
    gitHub: "https://github.com/Tocopro/Weather_App_Project",
  },
  {
    projectTitle: "Rock-Paper-Scissors",
    description: "Creating a website for the Rock Paper Scissors Game",
    imageLink:
      rps,
    liveLink: "https://tocopro.github.io/RPS_game/",
    gitHub:
      "https://github.com/Tocopro/RPS_game/blob/main/rockpaperscissorspng.png",
  },
  {
    projectTitle: "Password-Generator",
    description:
      "An App created for the user to generate user password that fulfill all the requirements, uppercase, lowercase, special charracters, digits",
    imageLink:
      pWord,
    liveLink: "https://tocopro.github.io/password-generation/",
    gitHub: "https://github.com/Tocopro/password-generation",
  },
];
