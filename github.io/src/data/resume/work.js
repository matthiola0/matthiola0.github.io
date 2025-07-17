/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Course Personal Project: Scaling Democracy on the Blockchain',
    position: 'Researcher & Developer',
    url: 'https://github.com/matthiola0/cosmos_votesystem',
    startDate: '2025-02-01',
    endDate: '2025-06-30',
    summary: 'As a personal course project, I designed and prototyped a high-throughput blockchain e-voting system to solve scalability issues in national-scale elections.'
      + ' The system uses the Cosmos SDK to build an application-specific blockchain with a Proof-of-Authority (PoA) consensus mechanism, demonstrating a practical path toward secure and scalable electronic voting.',
    highlights: [
      'Achieved a simulated throughput exceeding 10,000 Transactions Per Second (TPS) with sub-second latency in a single-zone PoA setup.',
      'Architected and developed three custom modules in Go (x/identity, x/votecoin, x/voting) to manage voter registration, create non-transferable \'VoteCoin\' tokens, and enforce a one-vote-per-voter rule.',
      'Designed for horizontal scaling by partitioning an election across multiple Cosmos Zones, demonstrating the setup of two independent PoA chains.',
      'Implemented a robust voting protocol with rapid finality (1-2 seconds per block) using the Tendermint BFT consensus engine.',
      'Utilized the standard \'cometbft-load-test\' tool to conduct high-throughput load testing and empirically validate system performance.',
    ],
  },
  {
    name: 'AWS Generative AI Application Hackathon',
    position: 'Team Member (AI Agent Developer)',
    url: 'https://www.digitimes.com.tw/seminar/generativeai_hackathon/',
    startDate: '2025-04-26',
    endDate: '2025-04-27',
    summary: 'Participated in a high-intensity, 2-day hackathon focused on practical applications of Generative AI.'
      + ' As a team member, I was specifically responsible for developing the core AI agent, learning to rapidly build and integrate emerging technologies into a functional prototype.',
    highlights: [
      'Developed a functional AI agent as the core of the team\'s project',
      'Applied modern Generative AI techniques to build a practical solution under a tight deadline',
      'Collaborated effectively with teammates to brainstorm, develop, and prototype a complete application',
    ],
  },
  {
    name: 'Meichu Hackathon',
    position: 'Team Lead',
    url: 'https://2024.meichuhackathon.org/',
    startDate: '2024-10-19',
    endDate: '2024-10-20',
    summary: 'Led a team in the 2024 Meichu Hackathon, a 2-day intensive programming competition. This experience honed my ability'
      + ' to guide a team through rapid ideation, quick learning, and collaborative development to build a solution prototype from the ground up under extreme time pressure.',
    highlights: [
      'Led and coordinated a team to develop a project prototype within a 36-hour timeframe',
      'Facilitated brainstorming sessions and defined the technical direction for the project',
      'Successfully managed team dynamics and task allocation in a high-pressure environment',
    ],
  },
    {
    name: 'Course Project: Course Recommendation System for NTHU CS Students',
    position: 'Creator & Developer',
    url: 'https://nthu-course-selecting-system.streamlit.app/',
    startDate: '2023-09-01',
    endDate: '2024-01-31',
    summary: 'Designed and developed a smart course recommendation system for computer science students The system provides highly personalized and flexible course plans by deeply integrating complex graduation requirements and prioritizing individual student preferences, ensuring a clear and efficient path to graduation.',
    highlights: [
      'Engineered a highly personalized recommendation engine catering to students at any year of study, accommodating their existing academic progress.',
      'Implemented logic to handle complex and flexible graduation requirements, such as course substitutions for English and core science credits.',
      'Developed a preference-driven algorithm that prioritizes user-specified courses while ensuring all graduation requirements are met first.',
    ],
  },
  {
    name: 'Undergraduate Thesis',
    position: 'Undergraduate Researcher',
    url: '',
    startDate: '2023-12-01',
    endDate: '2024-10-01',
    summary: 'For my undergraduate thesis, I conducted a research project titled \'Detecting Network Attacks by Comparing GA and KNN with Boosting and Decision Tree Algorithms.\''
      + ' My primary responsibilities included data processing and the implementation of machine learning models. The project focused on evaluating'
      + ' and contrasting the performance of Genetic Algorithms (GA) and K-Nearest Neighbors (KNN) against classic models like Boosting and Decision Trees for identifying malicious network traffic.',
    highlights: [
      'Responsible for the entire data preprocessing pipeline to prepare data for model training',
      'Implemented and tuned Genetic Algorithm (GA) and K-Nearest Neighbors (KNN) models from scratch',
      'Conducted a comparative analysis of model performance against Boosting and Decision Tree algorithms',
      'Gained experience in making data-driven technical decisions based on model evaluation metrics',
    ],
  },
  {
    name: 'Course Project: Soul Warrior',
    position: 'Co-Developer & Game Programmer',
    url: 'https://fianl-project-23419.web.app/',
    startDate: '2023-02-01',
    endDate: '2023-06-30',
    summary: 'As a key member of a three-person team for a course project, I co-developed "Soul Warrior," a feature-rich 2D action-platformer using Cocos Creator. '
      + 'Our team collaborated on all aspects of the project, from initial design to final implementation, successfully creating a complete game with backend services, advanced mechanics, and a local multiplayer mode.',
    highlights: [
      'Developed a 2D action game using the Cocos Creator engine, handling physics, animation, and particle effects.',
      'Implemented core player mechanics including movement, combat (melee/ranged), and a double-jump system.',
      'Integrated Firebase for a complete backend solution, featuring email authentication and cloud-based save/load functionality.',
      'Designed and built a local Player vs. Player (PVP) multiplayer mode.',
      'Programmed advanced gameplay features such as intelligent BOSS AI, an in-game shop for skill unlocks, and custom rendering effects.',
    ],
  },
  {
    name: 'Course Project: Bomberman',
    position: 'Co-Developer & Game Programmer',
    url: 'https://github.com/matthiola0/Bomberman',
    startDate: '2022-09-01',
    endDate: '2023-01-31',
    summary: 'As part of a two-person team for a course final project, we co-developed a Bomberman-style arena game using C and the Allegro 5 library. '
      + 'The game supports local multiplayer (1 vs 3 AI or 2 vs 4 AI) and features a custom-built AI with a dual-logic system for challenging gameplay.',
    highlights: [
      'Co-developed a Bomberman-clone from scratch in C with the Allegro 5 game programming library.',
      'Implemented local multiplayer modes, supporting one or two human players against multiple computer-controlled opponents.',
      'Contributed to the design and programming of a two-tiered AI system with distinct defensive and offensive logic.',
    ],
  },
  {
    name: 'The 5th APAC HPC-AI Competition (Runner-up)',
    position: 'Team Member',
    url: 'https://nci.org.au/news-events/events/apac-hpc-ai-competition-2022-2023',
    startDate: '2022-06-01',
    endDate: '2022-11-30',
    summary: 'Participated as a team member in the 5th APAC HPC-AI Competition. Our team achieved the runner-up award.'
      + ' This long-term competition honed our skills in performance optimization and compatibility tuning on High-Performance Computing (HPC) infrastructure, with a focus on maximizing GPU utilization on fixed hardware.',
    highlights: [
      'Collaborated with a team to win the Runner-up prize in a major international competition.',
      'Solved complex challenges focused on maximizing GPU utilization and performance on a fixed hardware environment.',
      'Gained hands-on experience with performance tuning and ensuring software compatibility on supercomputing infrastructure.',
      'Enhanced skills in long-term project management and team collaboration.',
    ],
  },
];

export default work;
