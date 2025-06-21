/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pooja Jeeva",
  title: "Glad you're here, I'm Pooja",
  subTitle: emoji(
    "I'm a marketing strategist who connects the dots between product, sales, and customers. I turn real-world insights into clear, useful stories and make sure teams are actually set up to win. Data helps, collaboration is key, and yes, I proudly rep 'woman of processes'! If any of this resonates, let’s connect!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1nKD4pCS2woAlT2YGKJjWu2aUXuSVvSMM/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/PoojaJeeva",
  linkedin: "https://www.linkedin.com/in/poojajeeva/",
  gmail: "poojajeevaa@gmail.com",
  instagram: "https://www.instagram.com/bhujaaa/",
  facebook: "https://www.facebook.com/poojajeevs",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Growth-Generating , Data-Lovin' marketer who wants to work by blending analytics with creativity to create Magic",
  skills: [
    emoji(
      "⚡ Digital Marketing & Content Creation - Employ paid and organic tactics to boost visibility of compelling materials across platforms"
    ),
    emoji(
      "⚡ Sales-Enablement - Equip cross-functional teams to execute strategies"
    ),
    emoji(
      "⚡ Storytelling - Weave empathy, information and inspiration to captivate"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "Google Analytics",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Salesforce Marketing Cloud",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "Trello",
      fontAwesomeClassname: "fab fa-trello"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "PowerPoint",
      fontAwesomeClassname: "fas fa-file-powerpoint"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "JIRA",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "Smartsheet",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Asana",
      fontAwesomeClassname: "fas fa-tasks"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Suffolk University - Sawyer Business School",
      logo: require("./assets/images/Suffolk.jpg"),
      subHeader: "Dual Master of Science, Marketing & Business Analytics",
      duration: "September 2021 - May 2023",
      descBullets: [
        "President of the Association of Indian Sub-Continent (AISC ) at Suffolk 2021-2023"
      ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Multi-channel Campaigns", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Messaging & Positioning",
      progressPercentage: "80%"
    },
    {
      Stack: "Digital Marketing",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Product Marketing Consultant",
      company: "Crowd Doing",
      companylogo: require("./assets/images/crowddoing.jpg"),
      date: "August 2023 – Present",
      desc: "Drove $125K fundraising results through virtual events and cultivated 30% donor pipeline growth via targeted nurturing and alignment of 20+ sponsors with high-impact initiatives."
    },
    {
      role: "Marketing and Strategy Associate",
      company: "Nth Venture.Inc",
      companylogo: require("./assets/images/nth.jpg"),
      date: "February 2023 – May 2023",
      desc: "Shortened sales cycle 40% with tailored nurture and content, cutting lead leakage 15%. Grew VC portfolio awareness 15% via emails and advertising. Executed 5 co-sponsored AI events engaging 300+ pre-IPO founders and C-levels."
    },
    {
      role: "Marketing Research Associate",
      company: "Suffolk University",
      companylogo: require("./assets/images/suffolk2.jpg"),
      date: "September 2021 – February 2023",
      desc: "Uncovered $2M in cross-sell opportunities through buyer journey analytics. Boosted rep productivity 20% via SF CRM insights. Increased student conversion 18% using targeted SFMC outreach."
    },
    {
      role: "Product Marketing Coordinator- Consumer Insight  ",
      company: "YMCA",
      companylogo: require("./assets/images/ymca.jpg"),
      date: "September 2022 – December 2022",
      desc: "Drove 25% mobile booking growth through 2K+ insights enhancing UX personalization. Lifted LTV 7% in 4 months via aligned Journey Builder promotions. Organized 15+ events with sales teams, boosting leads and conveying YMCA mission."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: " Big Projects",
  subtitle:
    "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE STRATEGIES AND ANALYSIS",
  projects: [
    {
      image: require("./assets/images/liberty.jpg"),
      projectName: "LIBERTY MUTUAL",
      projectDesc: "Gen Z insurance study",
      footerLink: [
        {
          name: "click here",
          url: "https://drive.google.com/file/d/1NkNxmz1gzfeU77gjqjbBU1JrN2kJFuPl/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/fema.jpg"),
      projectName: "FEMA",
      projectDesc:
        "Climate research creating educational exhibit for 200+ attendees",
      footerLink: [
        {
          name: "Click here",
          url: "https://drive.google.com/drive/folders/15X_HfvUm-kAoOdy0kabB8jAYbSGukNp1?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/cmb.jpg"),
      projectName: " CHADWICK MARTIN BAILEY",
      projectDesc: " Gen Z and Online data Privacy",
      footerLink: [
        {
          name: "Click here",
          url: "https://drive.google.com/file/d/1t4YgGrMj6CDI45fr48Dbcz-UH4WtG9oO/view?usp=sharing "
        }
      ]
    },
    {
      image: require("./assets/images/sbr.jpg"),
      projectName: "SBR2TH ",
      projectDesc: "Social Media templates       ",
      footerLink: [
        {
          name: "Click here",
          url: ": https://drive.google.com/drive/folders/1I-mxxgCap61Qn9N9ua8X7F_iATig883c?usp=sharing "
        }
      ]
    },
    {
      image: require("./assets/images/ymca.jpg"),
      projectName: "YMCA        ",
      projectDesc: " Insights from NPS survey",
      footerLink: [
        {
          name: "Click here",
          url: "https://drive.google.com/file/d/13tFxRsmbT75tsVOI21YXLi3x0D_cxmzg/view?usp=sharing  "
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: " Hubspot Academy - Content Marketing      ",
      image: require("./assets/images/hubspot.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://app.hubspot.com/academy/achievements/hlzvj9l7/en/1/pooja-jeeva/content-marketing "
        }
      ]
    },
    {
      title: "Google Analytics Individual Qualification      ",
      image: require("./assets/images/googleanalytics.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: " https://skillshop.exceedlms.com/student/award/H5yiaMEFYasEZETbXwEiUAzR"
        }
      ]
    },

    {
      title: "Hubspot -Social Media Marketing      ",
      image: require("./assets/images/hubspot.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://app.hubspot.com/academy/achievements/fxmgkrln/en/1/pooja-jeeva/social-media-marketing "
        }
      ]
    },
    {
      title: "SAS - Academic Specialization in Business Analytics",
      image: require("./assets/images/sas.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/aab65a8e-007d-4a0c-92db-10456b00974a/linked_in_profile "
        }
      ]
    },
    {
      title: "Pendo - Product Analytics Certified      ",
      image: require("./assets/images/pendo.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/e98df918-083e-4150-9ab6-608efb9bf874/public_url "
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

const contactInfo = {
  title: emoji("Connect With Me ☎️"),
  subtitle:
    "I love connecting and collaborating with new people and chatting about marketing, tech, running (2 Boston marathons!), fashion, and all things fun.",
  //number: "0000000",
  email_address: "poojajeevaa@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
