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
    name: 'Agent for Truth: Disinformation Defense Hackathon',
    position: 'Full-Stack Developer & AWS Architect',
    url: '',
    startDate: '2026-03-01',
    endDate: '2026-03-31',
    summary: 'Reached the finals of the 2026 Agent for Truth hackathon hosted by BitoEX, working with real crypto transaction data to build an AI-powered risk-control system for detecting money laundering and fraud. '
      + 'Adopted a Vibe Coding workflow — wrote a complete SDD specification first, then co-developed with an LLM to maximize delivery speed.',
    highlights: [
      'Built the full-stack product around teammates\' LightGBM model: FastAPI backend with SHAP explainability and Amazon Bedrock Claude for Chinese risk summaries',
      'Developed a React + TypeScript risk-control dashboard with a D3.js interactive transaction graph (drag, zoom, click-to-navigate)',
      'Designed the AWS architecture: CloudFront + S3 for frontend, ALB + ECS Fargate for backend containers, with Docker for deployment consistency',
      'Integrated WebSocket for real-time risk alert push notifications',
    ],
  },
  {
    name: 'Meichu Hackathon',
    position: 'Firmware Developer',
    url: 'https://2024.meichuhackathon.org/',
    startDate: '2024-10-19',
    endDate: '2024-10-20',
    summary: 'Participated in the 2024 Meichu Hackathon as a 3-person team, building an air-quality monitoring IoT prototype on an NXP i.MX RT1060 embedded board. '
      + 'Responsible for the firmware side — touchscreen display logic and touch-coordinate interaction programming.',
    highlights: [
      'Developed touchscreen UI and interaction logic using the vendor\'s drawing API, with touch-coordinate detection for region switching',
      'Team pivoted to a CSV static-data strategy when embedded API integration (Wi-Fi driver + lwIP + HTTP client) proved infeasible within 2 days',
      'Delivered a stable demo with working touchscreen display and region-switching interaction',
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
    summary: 'For my undergraduate thesis, I built the end-to-end data pipeline for a research project titled \'Detecting Network Attacks by Comparing GA and KNN with Boosting and Decision Tree Algorithms.\' '
      + 'Using the CICIoT2023 dataset (46 features, 8 attack classes), I handled feature standardization, SMOTE for class imbalance, and a unified train/val/test split framework to ensure fair model comparison.',
    highlights: [
      'Built the end-to-end data pipeline: feature standardization, SMOTE for class imbalance, and rigorous train/val/test split to prevent data leakage',
      'Established a unified evaluation framework (accuracy, precision, recall, F1, confusion matrix, timing) ensuring fair comparison across all methods',
      'Team compared GA+KNN vs. Boosting (LightGBM achieved 93.44% accuracy); clean data and rigorous evaluation proved more impactful than model complexity',
    ],
  },
  {
    name: 'Course Project: Soul Warrior',
    position: 'Co-Developer & Game Programmer',
    url: 'https://fianl-project-23419.web.app/',
    startDate: '2023-02-01',
    endDate: '2023-06-30',
    summary: 'As a member of a four-person team for a Software Studio course project, I co-developed "Soul Warrior," a feature-rich 2D action-platformer using Cocos Creator. '
      + 'I was primarily responsible for player character control, combat mechanics, and gameplay visual effects, and also participated in Firebase backend integration.',
    highlights: [
      'Implemented player movement, combat mechanics (melee hit-detection synced with animations, ranged attacks with object-pooling), and a double-jump system.',
      'Built damage-feedback effects including invincibility frames, character flashing animation, and screen shake for enhanced game feel.',
      'Participated in Firebase integration for email authentication and cloud save/load with async data handling.',
    ],
  },
  {
    name: 'Personal Project: Bomberman',
    position: 'Solo Developer',
    url: 'https://github.com/matthiola0/Bomberman',
    startDate: '2022-09-01',
    endDate: '2023-01-31',
    summary: 'My first complete project built from scratch — a Bomberman-style arena game using C++ and the Allegro 5 library. '
      + 'The game supports local 2-player mode and features BFS-based NPC behavior with dynamic switching between pursuit, evasion, and patrol.',
    highlights: [
      'Developed the entire game from scratch in C++ with Allegro 5, implementing an Object-Oriented architecture.',
      'Designed a BFS-based NPC AI that dynamically switches between pursuit, evasion, and patrol based on distance to player and danger zones.',
      'Handled complex collision detection (AABB) across multiple object pairs and managed game state transitions.',
      'Manually optimized C++ memory management to ensure stability during intensive local multiplayer matches.',
    ],
  },
  {
    name: 'The 5th APAC HPC-AI Competition (Runner-up)',
    position: 'Team Member',
    url: 'https://nci.org.au/news-events/events/apac-hpc-ai-competition-2022-2023',
    startDate: '2022-06-01',
    endDate: '2022-11-30',
    summary: 'Participated as a team member in the 5th APAC HPC-AI Competition on the Gadi supercomputer. Our team achieved the runner-up award. '
      + 'I was responsible for optimizing Quantum Espresso (CeO2 energy calculation) performance across single-node and multi-node configurations using MPI parallelization.',
    highlights: [
      'Collaborated with a team to win the Runner-up prize in a major international HPC competition.',
      'Analyzed program output to determine optimal parallelization strategy based on the workload\'s 20 sub-problem structure.',
      'Systematically tuned MPI parameters (npool, ndiag, OMP_NUM_THREADS) across single-node and multi-node configs; best multi-node result: ~10s with 25 nodes / 1200 cores.',
      'Identified the communication-overhead inflection point where adding more nodes degraded performance.',
    ],
  },
];

export default work;
