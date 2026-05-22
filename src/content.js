export const site = {
  name: "Kevin Niu",
  initials: "KN",
  avatar: "pfp.jpg",
  email: "niukevins@gmail.com",
  github: "https://github.com/kevinsniu",
  linkedin: "https://www.linkedin.com/in/kevinsniu/",
  timezone: "America/New_York",
  timezoneLabel: "Atlanta, GA",
  tagline:
    "Currently studying Computer Engineering and building robots at Georgia Tech.",
};

export const about = [
  "Hi, I'm Kevin Niu, a computer engineering student based in Atlanta, Georgia.",
  "I'm especially drawn to the processess of transforming ideas into real things. Whether that means laying down thousands of lines of code or spending hours in the machine shop, I'm facinated by the ability of the human brain to create.",
  "In my off time, you'll find me at the pickleball courts, skating around campus, or traveling the world.",
];

export const entries = [
  {
    slug: "mochi",
    label: "Combat Robotics",
    title: "Mochi",
    date: "May 2026",
    coverImage: "projects/mochi/mochi.png",
    coverAlt: "Mochi cover image",
    body:
      "A 3lb combat robot with a custom anti-gyro flywheel.",
    sections: [
      {
        heading: "Overview",
        body:
          "Mochi is the my first personal combat robot.",
      },
      {
        heading: "Design",
        body:
          "Add design notes here. Put images in public/projects/mochi/ and reference them in the images array.",
        image: "",
        imageAlt: "Mochi design image",
        images: [
          { src: "", alt: "Mochi CAD" },
          { src: "", alt: "Mochi assembly" },
        ],
      },
    ],
    tags: ["Robotics"],
    href: "https://github.com/niukevins",
  },
  {
    slug: "wacki",
    label: "Combat Robotics",
    title: "Wacki",
    date: "May 2026",
    coverImage: "projects/wacki/Wacki.png",
    coverAlt: "Cover image description",
    body:
      "A 12lb combat robot with a spring-driven hammersaw.",
     sections: [
      {
        heading: "Overview",
        body:
          "Overview here",
      },
      {
        heading: "Design",
        body:
          "Notes here",
        images: [
          { src: "", alt: "Picture", caption: "Caption." },
        ],
      },
    ],
    tags: ["Robotics"],
    href: "https://github.com/niukevins",
  },
  {
    slug: "bevy",
    label: "Web Development",
    title: "Bevy",
    date: "September 2025",
    coverImage: "projects/bevy/",
    coverAlt: "bevy cover image",
    body:
      "Bevy makes it easy to share what you’re sipping and discover fresh ideas from a community of enthusiasts.",
    sections: [
      {
        heading: "Overview",
        body:
          "Overview here",
      },
      {
        heading: "Design",
        body:
          "Notes here",
        images: [
          { src: "", alt: "Picture", caption: "Caption." },
        ],
      },
    ],
    tags: ["Robotics"],
    href: "https://github.com/niukevins",
  },
  {
    slug: "freaki",
    label: "Combat Robotics",
    title: "Freaki",
    date: "May 2025",
    coverImage: "projects/freaki/freakiii-cad.png",
    coverAlt: "Freaki cover image",
    body:
      "A 3lb combat robot with a unique hub-motor design.",
    sections: [
      {
        heading: "Overview",
        body:
          "Freaki is my first 3lb combat robot, built during my first year with the Georgia Tech RoboJackets. Currently on its third iteration, it serves as a representation of my growth in the field of robotics as well as my capabilities as an engineer.",
      },
      {
        heading: "Background",
        body: [
          "Here at RoboJackets, every new member designs, manufactures, and competes a 3lb combat robot with a multidisciplinary team of their peers. Usually, these robots are a student's first ever robotics project outside the classroom. However, me and my team had previous experience with robotics before, so we decided to tackle a unique engineering challenge: creating our own custom hub motor.",
        ],
        images: [
          { src: "projects/freaki/freaki-team.jpeg",  caption: "Freaki team at UGA Spring Smash 3.0", alt: "Freaki at UGA" },
        ],
      },
      {
        heading: "Iteration 1: Freaki",
        body: [
          "Freaki made heavy use of aluminum due to availabity and ease of machining. It performed extremely well in its debut competition, placing third as a rookie team. On larger hits, the hub motor magnets would shatter, causing the weapon to become inoperable.",
          "Battery: Tattu R-Line 4S 850mAh 4S 150C",
          "ESC: DYS 65A 2-8S AM32 4-in-1 ESC",
          "Drive Motors: Repeat Robotics Max Brushless 2006",
          "Weapon Motor: FLASH HOBBY 2826 1400kV",
          "Receiver: FrSky FS2A",
        ],
        images: [
          { src: "projects/freaki/freaki.png", caption: "Freaki at RJ Spring In-House 2025", alt: "Freaki at UGA Spring Smash 3.0" },
        ],
      },
      {
        heading: "Iteration 2: Freakii",
        body:
          "Freakii kept the same parts as Freaki, but with a lighter weapon and carbon fiber top and bottom plates to save weight for a wedge. The new weapons were designed to be lighter and manufactured with higher precision to combat the issue of magnets shattering. ",
        images: [
          { src: "projects/freaki/freakii.png", caption: "Freakii at June 2025 NHRL", alt: "Freakii at June 2025 NHRL" },
        ],
      },
      {
        heading: "Iteration 2: Freakiii",
        body: [
          "Freakiii features a completely redesigned hub motor with complete shock isolation and a more robust housing design. The updated design addresses the durability and reliability issues experienced with previous iterations while delivering improved performance.",
          "[UPDATED] Drive Motors: Just 'Cuz Robotics Blitz Pro 2306",
          "[UPDATED] Weapon Motor: Tempest 2814 1400Kv",
          "[UPDATED] Receiver: RadioMaster ER3Ci",
        ],
        images: [
          { src: "projects/freaki/freakiii.png", caption: "Freakiii at November 2025 NHRL",alt: "Freakiii at November 2025 NHRL" },
        ],
      },
    ],
    tags: ["Robotics"],
    href: "https://github.com/niukevins",
  },
  {
    slug: "openturner",
    label: "Embedded Systems",
    title: "OpenTurner",
    date: "July 2025",
    coverImage: "projects/openturner/openturner.png",
    coverAlt: "OpenTurner cover image",
    body:
      "A wireless, hands-free digital page-turner designed primarily for musicians using tablet-based sheet music.",
     sections: [
      {
        heading: "Overview",
        body:
          "Overview here",
      },
      {
        heading: "Design",
        body:
          "Notes here",
        images: [
          { src: "", alt: "Picture", caption: "Caption." },
        ],
      },
    ],
    tags: ["Robotics"],
    href: "https://github.com/niukevins",
  },
  {
    slug: "turret",
    label: "Robotics",
    title: "Target Tracking Turret",
    date: "January 2025",
    coverImage: "",
    coverAlt: "Target Tracking Turret cover image",
    body:
      "A target tracking turret that scans for and locks onto targets.",
     sections: [
      {
        heading: "Overview",
        body:
          "Overview here",
      },
      {
        heading: "Design",
        body:
          "Notes here",
        images: [
          { src: "", alt: "Picture", caption: "Caption." },
        ],
      },
    ],
    tags: ["Robotics"],
    href: "https://github.com/niukevins",
  },
  {
    slug: "pidcar",
    label: "Analog Electronics",
    title: "Analog PID Car",
    date: "May 2024",
    coverImage: "",
    coverAlt: "Analog PID Car cover image",
    body:
      "A robot car that uses analog PID control to perform zero-distance braking.",
     sections: [
      {
        heading: "Overview",
        body:
          "Overview here",
      },
      {
        heading: "Design",
        body:
          "Notes here",
        images: [
          { src: "", alt: "Picture", caption: "Caption." },
        ],
      },
    ],
    tags: ["Robotics"],
    href: "https://github.com/niukevins",
  },
  {
    slug: "healthwise",
    label: "Web Development",
    title: "HealthWise",
    date: "February 2025",
    coverImage: "",
    coverAlt: "HealthWise cover image",
    body:
      "A web application that empowers communities by predicting disease prevalence across the United States.",
    sections: [
      {
        heading: "Overview",
        body:
          "Overview here",
      },
      {
        heading: "Design",
        body:
          "Notes here",
        images: [
          { src: "", alt: "Picture", caption: "Caption." },
        ],
      },
    ],
    tags: ["Robotics"],
    href: "https://github.com/niukevins",
  },
];

export const cvItems = [
  {
    heading: "Experience",
    items: [
      {
        meta: "May 2024 – Present",
        role: "Combat Robotics Finance Chair, 12lb Chassis Lead, 3lb Team Captain",
        organization: "RoboJackets",
        href: "https://robojackets.org/",
      },
      {
        meta: "August 2023 – May 2024",
        role: "Circuit Design",
        organization: "Illini Electric Motorsports",
        href: "https://www.illinielectricmotorsports.com/",
      },
      {
        meta: "August 2023 – May 2024",
        role: "Combat Robotics Electrical Lead, RoboBrawl Committee Member",
        organization: "iRobotics",
        href: "https://irobotics.illinois.edu/",
      },
    ],
  },
  {
    heading: "Education",
    items: [
      {
        meta: "May 2024 - May 2027 (Expected)",
        role: "B.S. Computer Engineering",
        organization: "Georgia Institute of Technology",
        description: "Concentration in Computing Hardware & Emerging Architectures and Robotics & Autonomous Systems",
        href: "https://www.gatech.edu/",
      },
      {
        meta: "August 2023 - May 2024",
        role: "Computer Engineering",
        organization: "University of Illinois Urbana-Champaign",
        description: "Transfer with 53 Credits",
        href: "https://illinois.edu/",
      },
      {
        meta: "August 2019 - May 2023",
        role: "High School Diploma",
        organization: "Johns Creek High School",
        description: "Gladiator Robotics FRC5109, Varsity Debate, Technology Student Association",
        href: "https://johnscreek.fultonschools.org/",
      },
    ],
  },
  {
    heading: "Skills",
    items: [
      {
        meta: "Programming",
        role: " Java, Python, C/C++, JavaScript, Node.js, SQL",
        organization: "",
        href: "",
      },
      {
        meta: "Embedded Systems",
        role: "STM32, ESP32, Arduino, Raspberry Pi, FreeRTOS, CAN bus, I²C, SPI, UART, PWM",
        organization: "",
        href: "",
      },
      {
        meta: "Hardware",
        role: "VHDL, Verilog, FPGA, Altium Designer, Altera Quartus",
        organization: "",
        href: "",
      },
      {
        meta: "Mechanical",
        role: "SOLIDWORKS (CSWP), Fusion360 CAM, Inventor, 3D Printing, 2-Axis Mill, Lathe, CNC Router, Waterjet",
        organization: "",
        href: "",
      },
    ],
  },
];
