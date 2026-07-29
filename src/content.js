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
          "After creating Wacki, my 12lb combat robot with RoboJackets, I wanted to create a smaller, more personal robot that I could design and build on my own. Mochi is the result of that effort, featuring a custom anti-gyro flywheel and a compact design that prioritizes speed and maneuverability. The project allowed me to explore new design concepts and experiment with different materials and manufacturing techniques, ultimately resulting in the cutest combat robot I've ever built. Mochi is named after the Japanese rice cake, which is small, round, and surprisingly resilient - much like the robot itself.",
      },
      {
        heading: "Background",
        body: [
          "Mochi features an unique feature: a custom anti-gyro flywheel. This design allows the robot to maintain stability and control during high-speed maneuvers, creating opportunities for aggressive attacks. The flywheel is designed to counteract the effects of gyroscopic forces caused by the spinning weapon disk, allowing Mochi to turn and pivot quickly without losing control. The flywheel does this by spinning in the opposite direction of the weapon disk, creating a counteracting force that stabilizes the robot. Made out of brass, the flywheel is precision-milled out of brass as it is one of the few materials that is both dense and machinable, allowing for a compact design that doesn't sacrifice ease of manufacturing.",
        ],
      },
      {
        heading: "Iteration 1: mochi",
        body: [
          "The first iteration of mochi performed well in its debut competition, but suffered from durability issues. The 3D printed TPU armor was not printed hot enough, causing it to be prone to shredding during impacts. The drive system was also tuned to be too quick, causing the robot to be difficult to control. This combined with the loss of dampening fron the gyroscopic forces of the weapon meant that mochi was hard to control. Regardless, the robot perfomed well and with additional tuning and improvements, could be a highly competitive robot.",
          "Battery: RDQ Series 6S 720mAh LiHV",
          "ESC: TBS Lucid 8S 4in1 ESC",
          "Drive Motors: Just 'Cuz Robotics Blitz Lite 1604",
          "Weapon Motor: BadAss 2315-2300Kv",
          "Receiver: ELRS ER3C-i",
        ],
        images: [
          { src: "projects/mochi/mochi-april26.jpg", caption: "Mochi (left) at April NHRL XP 2026", alt: "Mochi at April NHRL XP 2026"},
          { src: "projects/mochi/mochi-assembly.jpg", caption: "Spare frames being prepared for competition", alt: "Spare frames being prepared for competition"},
        ],
      },
    ],
    tags: ["Autodesk Inventor", "3D Printing", "2-Axis Mill", "Lathe", "CNC Router", "Waterjet", "Soldering"],
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
          "Wacki is my first 12lb combat robot, a significant step up from my previous 3lb robot, Freaki. ",
      },
      {
        heading: "Background",
        body:
          "More info coming soon!",
        images: [
          { src: "projects/wacki/wacki.JPG", alt: "Wacki at April 2026 NHRL", caption: "Wacki at April 2026 NHRL" },
        ],
      },
      {
        heading: "Background",
        body:
          "More info coming soon!",
        images: [
          { src: "projects/wacki/wacki-bomb.JPG", alt: "Wacki's titanium arm twists under load", caption: "Wacki's titanium arm twists under load" },
        ],
      },
    ],
    tags: ["Autodesk Inventor", "3D Printing", "2-Axis Mill", "Lathe", "CNC Router", "Waterjet", "Soldering"],
  },
  {
    slug: "bevy",
    label: "Web Development",
    title: "Bevy",
    date: "September 2025",
    coverImage: "projects/bevy/bevy.png",
    coverAlt: "bevy cover image",
    body:
      "A social web app for discovering and sharing drinks, with an AI assistant that recommends new favorites based on personal taste.",
    sections: [
      {
        heading: "Overview",
        body:
          "Bevy was created as a fun, community-driven way to explore drinks beyond just nearby locations. The app helps users discover beverages they’ll actually enjoy, whether that’s a coffee, boba, or a creative twist on a classic.",
      },
      {
        heading: "What it does",
        body:
          "Users can browse and save drinks, swipe through recommendations, and interact with an AI-powered agent that suggests options based on their profile and preferences. The app is built around the idea that drink discovery should feel as personal and intuitive as finding a new favorite song, rather than just searching by location or generic category.",
      },
      {
        heading: "How we built it",
        body:
          "The project started with Figma mockups and moved into a full-stack build using React, Tailwind, and Vite on the frontend. Supabase handled the backend and database, Vercel hosted the app, and OpenAI powered the conversational recommendation agent. We also explored CedarOS and Mastra before settling on a more reliable integration path, and the team split work across UI, data modeling, and AI features to move quickly under a tight deadline.",
      },
      {
        heading: "Challenges",
        body:
          "The biggest challenge was balancing ambition with time. With only 36 hours, we had to narrow the feature set, avoid scope creep, and pivot when the initial chatbot stack proved difficult to integrate smoothly. We also had to make quick product decisions while keeping the experience polished enough for a first demo.",
      },
      {
        heading: "Accomplishments",
        body:
          "We shipped a working full-stack app within the hackathon timeline and built an AI-powered discovery experience that felt genuinely useful. The swipe-based exploration flow, saved favorites, and polished end-to-end experience were especially rewarding because they turned a concept into something interactive and presentable in a very short span of time.",
      },
      {
        heading: "What’s next",
        body:
          "Bevy is still version 1, and we plan to improve the recommendation engine, expand social features like recipe rankings and collaborative challenges, and continue refining the AI experience into a true community hub for drink lovers.",
      },
    ],
    tags: ["JavaScript", "React", "TypeScript", "Tailwind", "Supabase", "Vercel", "SQL"],
    href: "https://devpost.com/software/bevy-bswu3n",
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
        heading: "Iteration 3: Freakiii",
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
    tags: ["Autodesk Inventor", "3D Printing", "2-Axis Mill", "Lathe", "CNC Router", "Waterjet", "Soldering"],
  },
  {
    slug: "openturner",
    label: "Embedded Systems",
    title: "OpenTurner",
    date: "July 2025",
    coverImage: "projects/openturner/openturner.png",
    coverAlt: "OpenTurner cover image",
    body:
      "A wireless, hands-free digital page-turner designed for musicians using tablet-based sheet music.",
     sections: [
      {
        heading: "Overview",
        body:
          "This project implements a wireless, hands-free digital page-turner designed primarily for musicians using tablet-based sheet music applications. The device allows users to flip pages or scroll through content using foot pedals, eliminating the need for manual page interaction while performing. It achieves this through a low-power ESP32-C3 microcontroller, Bluetooth HID keyboard emulation, a multi-page OLED user interface, and a web-based configuration portal.",
      },
      {
        heading: "Microcontroller",
        body: [
          "At the core of this embedded system is the Seeed Studio XIAO ESP32C3, which provides:", 
          "- BLE HID capability for sending key events.",
          "- Wi-Fi AP mode for hosting a built-in web configuration page.",
          "- Light-sleep power management with GPIO wake.",
          "- NVS flash storage for persistent settings.",
          "- Integrated power management for Li-Ion batteries."
        ],
        images: [
          { src: "projects/openturner/xiao-esp32c3.png", alt: "Seeed Studio XIAO ESP32C3 Pinout", caption: "Seeed Studio XIAO ESP32C3 Pinout." },
        ],
      },
      {
        heading: "Foot Pedals",
        body: [
          "Two foot-operated momentary switches serve as left and right pedals, with each pedal mapping to a user-selectable action: PageUp, PageDown, Arrow Keys, Space, Enter, and Macro (custom sequence of up to 16 keycodes). These actions are sent to the host device via BLE HID.", 
        ],
      },
      {
        heading: "Display",
        body: [
          "The 128×64px SSD1306 display presents a multi-page user interface:",
          "- Home screen with device name, battery percentage, BLE status, and pedal mappings",
          "- Pedal Function menus",
          "- Profile information",
          "- Battery diagnostics",
          "- Settings (Wi-Fi toggle, timeout controls)"
        ],
      },
      {
        heading: "Battery",
        body: [
          "A single cell Li-Po battery is used to power the device. To measure battery level, A voltage divider feeds the battery voltage into the ESP32-C3’s ADC. Two equivalent resistors with a large resistance value of 200k Ohms each are used to minimize power draw (~8.25μΩ). The ADC readings are converted to real-time battery voltage and estimated percentage, which appears on both the OLED UI and the web interface.",
        ],
      },
    ],
    tags: ["Robotics"],
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
          "More info coming soon!",
      },
      {
        heading: "Design",
        body:
          "More details will be posted here soon.",
      },
    ],
    tags: ["Robotics", "SOLIDWORKS"],
  },
  {
    slug: "pidcar",
    label: "Analog Electronics",
    title: "Analog PID Car",
    date: "May 2024",
    coverImage: "projects/pidcar/pidcar.png",
    coverAlt: "Analog PID Car cover image",
    body:
      "A motor-driven car with a potentiometer-tuned analog PID controller that converts ultrasonic distance feedback into PWM motor control and stops within about 2 cm of a wall.",
     sections: [
      {
        heading: "Background",
        body: [
          "PIDCar was built for the James Scholar Honors Lab as a hardware-first control systems project with Sid Rau and XP Liu. The objective was to make a small motor-driven vehicle brake to a near-zero distance from a barrier using analog signal processing instead of a software PID loop.",
          "The project treated distance to the wall as the process variable and the desired stopping distance as the setpoint. An ultrasonic sensor measured the car's position, the control circuit computed the distance error, and the resulting analog voltage commanded the motor drive stage so the car could reduce speed as it approached the target.",
        ],
      },
      {
        heading: "Objective",
        body: [
          "The target behavior was consistent braking from different initial distances and speeds, with the car stopping as close as possible to the wall while avoiding overshoot. The final prototype stopped within roughly 2 cm of the target wall, and early low-friction tests without front wheels reached about 1 cm accuracy.",
          "A second requirement was tunability. The PID terms were designed around potentiometer-adjustable gains so the controller could be tuned by hand while observing the vehicle response, overshoot, and sensitivity to the floor and wheel traction.",
        ],
      },
      {
        heading: "System Design",
        body: [
          "The control path started with an HC-SR04 ultrasonic sensor. An Arduino emitted the trigger pulse, measured the echo timing, calculated distance, and linearly converted that reading into an analog voltage for the external PID circuitry. The Arduino was intentionally kept as an input/output translation layer rather than the controller itself.",
          "The analog controller was organized as a setpoint, buffer, subtractor, proportional term, integral term, derivative term, bias term, and summing stage. In total, the signal chain used eight op-amps and five potentiometers. The subtractor generated the position error, the individual PID branches shaped that error, and the adder combined the terms with a bias voltage before the motor-control conversion stage.",
          "The final controller output fed the control voltage of a 555 timer, which converted the analog control signal into PWM. That PWM signal then drove an H-bridge motor driver, allowing the motor speed to vary continuously with distance error while keeping the high-current motor path separate from the op-amp signal path.",
        ],
        images: [
          { src: "projects/pidcar/circuit-diagram.png", alt: "PID control circuit diagram", caption: "Analog control circuit schematic" },
        ],
      },
      {
        heading: "PID Circuit",
        body: [
          "The proportional term used an inverting op-amp and resistor network to scale instantaneous error. This branch provided the dominant response: large distance errors produced higher motor command voltages, while small errors near the setpoint reduced the PWM duty cycle.",
          "The integral term used an op-amp integrator with a resistor-capacitor timing network. Its purpose was to accumulate residual error and force convergence to the setpoint, since a pure proportional controller can settle with steady-state offset. In practice, the integrator was difficult to commission because analog integration depends on time history and required manual zeroing to clear accumulated charge between runs.",
          "The derivative term used an op-amp differentiator with an RC network to react to the rate of error change. This term became important after wheel installation changed the mechanical resistance profile: with less drag, the car became more prone to over- and undershoot, so damping based on error slope was needed to improve stopping accuracy.",
        ],
      },
      {
        heading: "Power and Motor Control",
        body: [
          "The op-amp stages required positive and negative supply rails, so the PID circuit was powered from two 9 V batteries for an 18 V differential supply. The motor-control side was constrained by the H-bridge's 5 V maximum input, so the 555 timer and motor-driver interface were kept on a 5 V domain.",
          "Output protection was a major design constraint because the controller needed a positive-only motor command and the Arduino/H-bridge interface could not tolerate overvoltage. We experimented with limiting approaches including zener diodes and regulators before using diode protection, accepting some voltage drop as a tradeoff for protecting the downstream electronics.",
          "The motor driver translated the PWM command into motor speed and direction control. The design did not include an active braking system, so deceleration came primarily from friction and reduced drive power. A future version could reverse motor power through a commutator or stronger H-bridge strategy to add active braking authority.",
        ],
      },
      {
        heading: "Mechanical Build",
        body: [
          "The chassis was modeled in SOLIDWORKS using open-source part dimensions from datasheets and GrabCAD references, then manufactured with 3D-printed parts. The design used M3 bolts, heat-set inserts, and panel-mount connectors so the electronics could be attached cleanly and the Arduino I/O could be accessed without loose wiring.",
          "The mechanical layout was revised during manufacturing after early prints exposed fit issues in the bearing slots and ultrasonic sensor mount. Testing also revealed that the printed axle could shear under collision loads, which made material choice and spare parts part of the practical reliability plan.",
        ],
        images: [
          { src: "projects/pidcar/pidcar-assembled.jpg", alt: "Assembled PID car", caption: "Assembled analog PID car" },
        ],
      },
      {
        heading: "Testing and Tuning",
        body: [
          "Verification started at the circuit level. The subtractor was checked with a DC bench supply and multimeter to confirm that the measured error voltage matched the difference between the distance input voltage and the setpoint voltage. The P-term was first simulated in Falstad, then built and tested before full vehicle integration.",
          "Full-system tuning exposed the coupling between controller gains and physical dynamics. Without front wheels, the car reliably stopped very close to the wall because the chassis had more drag. After the wheels were installed, rolling resistance dropped and the same controller settings produced significant over- and undershoot, making derivative tuning much more important.",
          "The final integrated car successfully modulated speed as a function of wall distance and stopped within about 2 cm of the target. The result validated the core analog feedback loop while also showing that floor traction, wheel friction, component tolerances, and RC timing values materially affect controller performance.",
        ],
        images: [
          { src: "projects/pidcar/pidcar-testing.jpg", alt: "PID car during testing", caption: "Testing the braking response" },
        ],
      },
      {
        heading: "Future Improvements",
        body: [
          "The main control improvement would be a more precise braking mechanism. Because the current prototype slows mostly through friction, different surfaces change the response. Reversing motor power for active braking would give the controller direct deceleration authority instead of relying on passive drag.",
          "The circuit could also be refined by calculating and fixing more of the RC and resistor values instead of relying so heavily on broad potentiometer ranges. One proposed improvement was to fix one side of the tuning resistance and adjust the other side to halve the sensitivity, giving finer gain control during tuning.",
          "After the analog design is stabilized, the breadboarded circuit could be moved into a PCB to reduce wiring complexity, shrink the electronics footprint, and make the car cleaner and more reliable.",
        ],
      },
    ],
    tags: ["Analog Electronics", "PID Control", "C/C++", "Oscilloscope", "Microcontroller", "PWM", "3D Printing"],
  },
  {
    slug: "healthwise",
    label: "Web Development",
    title: "HealthWise",
    date: "February 2025",
    coverImage: "projects/healthwise/HealthWise.jpg",
    coverAlt: "HealthWise cover image",
    body:
      "A mobile-first web app that predicts influenza-like illness (ILI) prevalence across the United States using machine learning and public health data.",
    sections: [
      {
        heading: "Overview",
        body:
          "HealthWise helps communities stay ahead of seasonal flu outbreaks by forecasting future ILI rates with high accuracy. The project combines historical CDC flu data with census-based socioeconomic information to reveal which regions are most at risk.",
      },
      {
        heading: "What it does",
        body:
          "The app uses XGBoost to generate state-level disease predictions and visualizes them on an interactive heat map. Users can quickly identify high-risk areas, and features like geolocation, auto-complete search, and a mobile-first layout make the experience more intuitive and actionable for everyday decision-making.",
      },
      {
        heading: "How we built it",
        body:
          "HealthWise was built with a Next.js and React frontend, a Flask backend, and D3.js-powered visualizations. The prediction engine relies on historical influenza trends, population demographics, and median income data, with Pandas handling data processing and L1/L2 regularization plus feature importance ranking used to improve model performance and interpretability.",
      },
      {
        heading: "Built with",
        body:
          "The project was developed for Hacklytics 2025 and brought together Kevin Niu, David Kan, and Jasmine Nguyen. Its core stack included Next.js, React, Flask, Pandas, XGBoost, and D3.js, with the app designed to make complex public health forecasting feel accessible and useful.",
      },
      {
        heading: "Challenges",
        body:
          "The biggest hurdles were data gathering and preprocessing. Privacy restrictions limited access to some public health datasets, and inconsistent formats, missing values, and the need to align historical flu data with census features required substantial cleaning and standardization.",
      },
      {
        heading: "Accomplishments",
        body:
          "Our team created a highly accurate forecasting model with an R² score of 0.9575, built a polished mobile-first experience, and integrated practical features like geolocation and dynamic search to make the platform useful in real-world scenarios.",
      },
      {
        heading: "What’s next",
        body:
          "We plan to expand HealthWise beyond influenza by adding weather, mobility, vaccination, and behavioral health data to improve forecasting for other infectious diseases and public health events.",
      },
    ],
    tags: ["Python", "JavaScript", "React", "Next.js", "Flask", "XGBoost", "D3.js"],
    href: "https://devpost.com/software/healthwise-bvs4rz",
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
        meta: "Languages/Frameworks",
        role: " Java, Python, C/C++, MATLAB, JavaScript, React, Next.js, SQL",
      },
      {
        meta: "Electrical",
        role: "PCB Design, Soldering, Oscilloscope, Microcontroller",
      },
      {
        meta: "Computing Hardware",
        role: "FPGA, VHDL, Verilog, Altera Quartus, Cadence Virtuoso, LTSpice",
      },
           {
        meta: "CAD",
        role: "SOLIDWORKS, Autodesk Inventor",
        description: "Certified SOLIDWORKS Professional ID: C-S3KRQVUF4Y",
      },
      {
        meta: "Mechanical",
        role: "3D Printing, 2-Axis Mill, Lathe, CNC Router, Waterjet",
      },
    ],
  },
];
