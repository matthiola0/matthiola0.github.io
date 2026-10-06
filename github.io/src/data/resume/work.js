/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the organization, event, or project
 * @property {string} position - Role or scope
 * @property {string} url - Related website
 * @property {string|undefined} startDate - Start date in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date in YYYY-MM-DD format.
 * If both startDate and endDate are undefined, dateLabel is shown instead.
 * If only endDate is undefined, the position is still active.
 * @property {string|undefined} dateLabel - Free-form date text, used when the
 * exact months are not known
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'CIAL, National Cheng Kung University',
    position: 'AMPS research (ongoing)',
    url: '',
    startDate: '2025-09-01',
    summary: 'Improving AMPS (Adaptive Multi-Classifier Packet System), a packet classification framework from a senior lab member that selects classifiers with a model-based scheme and reinforcement learning. Advised by Prof. Yeim-Kuan Chang.',
    highlights: [
      'Third author on "An Efficient Packet Classification Framework Using Model-Based Selection Scheme and Reinforcement Learning", submitted to INNOV.',
    ],
  },
  {
    name: '2026 Hsinchu x Meichu Hackathon',
    position: 'Rules and data, First Aid Copilot',
    url: 'https://github.com/matthiola0/mchackathon',
    dateLabel: 'September 2026',
    summary: 'Third place in the Google track (Hacker division) with a five-person team. The challenge was announced when the event started, and in about 30 hours we built First Aid Copilot, a first-aid coordination prototype built with Google ADK and Gemini.',
    highlights: [
      'Built versioned first-aid rule schemas and a Python rule engine with validation tests. First-aid steps come from fixed instructions chosen by the rule engine; the model never generates them.',
      'Implemented ingestion of the Ministry of Health and Welfare AED open data, AED search, route estimates, and automatic AED reassignment.',
      'Built the backend data layer: incident event storage, PostgreSQL data services, and authorized read models.',
      'Implemented Gemini Live coordination tools, live speech transcription through Gemini Flash, and single-frame scene analysis.',
    ],
  },
  {
    name: 'sysprog21/codetrial',
    position: 'Open-source contributor',
    url: 'https://github.com/sysprog21/codetrial/pull/86',
    dateLabel: 'September 2026',
    summary: 'Merged pull request in codetrial, a live technical-interview simulator written in Rust.',
    highlights: [
      'Added an ordered list of Gemini API keys. When a key is rejected or runs out of quota, the interview switches to the next key and stays in its original LiveKit room.',
      'Added cooldowns shared across interviews, a wait when every key is out of quota, and bounded retries, with new unit and integration tests.',
    ],
  },
  {
    name: 'AIWave: Taiwan Generative AI Applications Hackathon',
    position: 'Multi-agent war room and pull request review, MAXi',
    url: 'https://github.com/demo-or-die/maxi',
    dateLabel: 'August 2026',
    summary: 'Finalist with a five-person team, no ranked placement. MAXi is a generative AI trading platform for the MAX exchange, and the team deployed it on AWS. Development used coding agents.',
    highlights: [
      'The war room streams analysis results over session-scoped Server-Sent Events, runs six agents concurrently on Amazon Bedrock, and enforces a spend gate.',
      'Implemented order preview with MAX exchange execution limits, so an order is sent only after the user confirms it, and enabled real trading on AWS.',
      'Built the daily market report. The six-agent debate now runs once per market per day, and regular chat uses a single model call that cites the day\'s report, which cut chat cost.',
      'Implemented durable behavior memory, which stores trading-behavior diagnoses apart from chat history and keeps them across re-login and service restarts.',
      'Adjusted the CloudFormation template and deploy permissions (ECS task settings, ECR read access, GitHub Actions OIDC) so the war room and real trading run on AWS.',
    ],
  },
  {
    name: 'Agent for Truth: Disinformation Defense Hackathon',
    position: 'Full-Stack Developer & AWS Architect, BitoGuard',
    url: 'https://github.com/demo-or-die/Bitopro_Hackathon_web',
    dateLabel: 'March 2026',
    summary: 'Finalist with a four-person team, no ranked placement. BitoGuard is an AI risk-control product for a virtual-asset trading platform, built around a LightGBM model developed by teammates.',
    highlights: [
      'Developed a FastAPI backend with SHAP explanations and Amazon Bedrock risk summaries.',
      'Developed a React and TypeScript risk dashboard with an interactive D3.js transaction graph and real-time WebSocket risk alerts.',
      'Designed the AWS deployment, with CloudFront and S3 for the frontend and ALB and ECS Fargate for the backend.',
    ],
  },
  {
    name: 'Department of Computer Science and Information Engineering, NCKU',
    position: 'Paid course assistance, Program Design (I)',
    url: '',
    dateLabel: 'Fall 2025',
    highlights: [
      'Helped undergraduate students in Prof. Yeim-Kuan Chang\'s C programming course.',
      'Graded programming assignments and exam papers.',
    ],
  },
  {
    name: '2022 APAC HPC-AI Competition',
    position: 'Team member, co-author of the Part 1 report',
    url: 'https://nci.org.au/news-events/events/apac-hpc-ai-competition-2022-2023',
    dateLabel: '2022',
    summary: 'Second place with the National Tsing Hua University team.',
    highlights: [
      'Co-wrote the Part 1 report with Yan-Jun Huang on tuning a Quantum ESPRESSO CeO2 total-energy calculation on the Gadi supercomputer within a 32-node limit.',
      'The report covers single-node and multi-node experiments with -np, -npool, -ndiag, and OMP_NUM_THREADS. Its best multi-node run took 10.14 seconds on 25 nodes and 1,200 CPUs.',
    ],
  },
];

export default work;
