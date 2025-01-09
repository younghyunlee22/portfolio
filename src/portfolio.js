/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import * as icons from "./assets/images/icons";
import awsbadge from "./assets/images/aws_badge.png";
import madhacks from "./assets/images/madhacks.png";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Claire",
  title: "Hello, I'm Claire Younghyun Lee",
  subTitle: emoji(
    "A passionate full-stack developer with hands-on experience in developing web applications using React, Redux, TypeScript, Node.js, and AWS. Strong problem solver with a commitment to learning and growing in a collaborative environment."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1PfqgKhxqjcZLjNd-JhwMDJvWJ7o6FMSp", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/younghyunlee22",
  linkedin: "https://www.linkedin.com/in/younghyun-lee-yhl/",
  gmail: "younghyunlee22@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  languages: [
    {
      skillName: "HTML",
      iconPath: icons.html
    },
    {
      skillName: "CSS",
      iconPath: icons.css
    },
    {
      skillName: "JavaScript",
      iconPath: icons.javascript
    },
    {
      skillName: "TypeScript",
      iconPath: icons.typescript
    },
    {
      skillName: "Python",
      iconPath: icons.python
    },
    {
      skillName: "C++",
      iconPath: icons.cpp
    }
  ],

  frameworks: [
    {
      skillName: "React.js",
      iconPath: icons.react
    },
    {
      skillName: "Redux",
      iconPath: icons.redux
    },
    {
      skillName: "Next.js",
      iconPath: icons.nextjs
    },
    {
      skillName: "Node.js",
      iconPath: icons.nodejs
    },
    {
      skillName: "Express.js",
      iconPath: icons.express
    },

    {
      skillName: "Bootstrap",
      iconPath: icons.bootstrap
    },
    {
      skillName: "Sass",
      iconPath: icons.sass
    }
  ],
  others: [
    {
      skillName: "MongoDB",
      iconPath: icons.mongodb
    },
    {
      skillName: "PostgreSQL",
      iconPath: icons.postgresql
    },
    {
      skillName: "Jest",
      iconPath: icons.jest
    },
    {
      skillName: "Git",
      iconPath: icons.git
    },
    {
      skillName: "GitHub",
      iconPath: icons.github
    },
    {
      skillName: "GitHub Actions",
      iconPath: icons.githubActions
    },
    {
      skillName: "Postman",
      iconPath: icons.postman
    },
    {
      skillName: "Linux",
      iconPath: icons.linux
    },
    {
      skillName: "AWS",
      iconPath: icons.aws
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Purdue University Northwest",
      // logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Science - BS, Computer Science",
      duration: "Expected: May 2027",
      desc: "Dual admission",
      descBullets: [
        // "Clubs: Coding Ninjas, Cyber Gladiators, Women in Cybersecurity",
        // "Participated in NCL Fall 2024 Team Game - Rank: 247 / 4894 which is 74th percentile overall",
        // "Got awarded a scholarship to attend Women in CyberSecurity (WiCyS) 2025 Conference"
      ]
    },
    {
      schoolName: "Ivy Tech Community College",
      // logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Associate of Science in Computer Science",
      duration: "7/2023 - Present",
      desc: "GPA: 4.0/4.0",
      descBullets: [
        "Clubs: Coding Ninjas, Cyber Gladiators, Women in Cybersecurity",
        "Achieved 74th percentile (Rank: 247/4894) in NCL Fall 2024 Team Game.",
        "Awarded a scholarship to attend the Women in CyberSecurity (WiCyS) 2025 Conference."
      ]
    },
    {
      schoolName: "Per Scholas",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Software Engineering Bootcamp",
      duration: "10/2023 - 02/2024",
      desc: "Graduated as the valedictorian from the full-time Software Engineering immersion program",
      descBullets: [
        "Core Concepts: Version control & Agile methodologies, HTML, CSS, and JavaScript, Node, and REST API with Express, React, Redux, TypeScript, MongoDB, Mongoose, CI/CD"
      ]
    },
    {
      schoolName: "CodePath",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Intro to Software Engineering",
      duration: "6/2023 - 8/2023",
      desc: "Completed SE101 course covering foundational topics such as conditionals, loops, big O notation, hashmaps, strings, arrays, and recursion.",
      descBullets: ["taught in Python Programming Language"]
    },
    {
      schoolName: "Hankuk University of Foreign Studies",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader:
        "Bachelor of Arts in French Studes, minor in Business Administration",
      duration: "",
      desc: "",
      descBullets: []
    }
  ],
  experience: [
    {
      schoolName: "Software Engineer",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: (
        <a
          href="https://youngleehankorean.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youngleehan Korean Language School
        </a>
      ),
      duration: "5/2023 - Present",
      desc: "",
      descBullets: [
        "Managed an agile team of engineers across various locations to ensure efficient and timely project delivery.",
        "Developed and deployed backend systems for accounts, checkout, and product management features, ensuring seamless user experiences and robust functionality.",
        "Integrated a payment system and implemented the delivery of digital products.",
        "Tech Stack: AWS S3, AWS IAM, Braintree, MongoDB, Node.js, Express, React, Vercel"
      ]
    },
    {
      schoolName: "Business Owner",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Youngleehan Korean Language School",
      duration: "7/2019 - Present",
      desc: "",
      descBullets: [
        "Recruited and managed 7 teachers, and communicated with 37 students from various time zones.",
        "Developed curriculum and teaching materials that enhanced student engagement"
      ]
    },
    {
      schoolName: "Korean Language Tutor",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "HANA Center - Chicago",
      duration: "7/2019 - 12/2023",
      desc: "",
      descBullets: [
        "Developed curriculum and teaching materials, such as handouts, study materials, or quizzes",
        "Provided feedback to students, using positive reinforcement techniques to encourage, motivate, or build confidence in students",
        "Expanded from 2 classes to 4, taught 200+ students"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Awards and Certifications"),
  subtitle: "",

  achievementsCards: [
    {
      title: "Hackathon 3rd Place Winner",
      subtitle:
        "Participated in a 24-hour in-person hackathon hosted by MadHacks at the University of Wisconsin-Madison, with 55 projects submitted by 260 hackers. Developed an AI-powered skin cancer screening app and secured 3rd place as a team of 2.",
      image: madhacks,
      imageAlt: "MadHacks Logo",
      footerLink: [
        {
          name: "Submission",
          url: "https://devpost.com/software/detective-mole"
        }
      ]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects. - AWS",
      image: awsbadge,
      imageAlt: "AWS CCP Badge",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.credly.com/badges/10fcfe31-e01e-465b-8191-81498ef4cf1a/linked_in_profile"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let's get connected! I am just a message away.",
  email_address: "younghyunlee22@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  // techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  // podcastSection,
  contactInfo,
  isHireable,
  resumeSection
};
