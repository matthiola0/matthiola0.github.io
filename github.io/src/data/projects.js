// Fields: title, category, subtitle, link, image (optional), date (YYYY-MM-DD) or dateLabel, desc.
// Use dateLabel when the exact month is not known.
// Keep entries grouped in the order of `categories`; the Projects page renders them in this order.
const categories = ['Hackathons', 'Personal Projects', 'Course Projects'];

const data = [
  {
    title: 'First Aid Copilot',
    category: 'Hackathons',
    subtitle: 'Third place, Google track, 2026 Hsinchu x Meichu Hackathon.',
    link: 'https://github.com/matthiola0/mchackathon',
    date: '2026-09-20',
    desc:
      'A first-aid coordination prototype built by a five-person team with Google ADK and Gemini. '
      + 'I worked on the rules and data side: a Python rule engine that chooses the first-aid steps, '
      + 'AED open-data ingestion with route estimates and automatic reassignment, and the PostgreSQL data layer.',
  },
  {
    title: 'MAXi',
    category: 'Hackathons',
    subtitle: 'Generative AI trading platform, finalist at the AIWave hackathon.',
    link: 'https://github.com/demo-or-die/maxi',
    date: '2026-08-02',
    desc:
      'I built the multi-agent war room, which runs six agents concurrently on Amazon Bedrock and streams results '
      + 'over Server-Sent Events, plus order preview with MAX exchange limits, the daily market report, '
      + 'and durable behavior memory. The five-person team deployed MAXi on AWS.',
  },
  {
    title: 'BitoGuard',
    category: 'Hackathons',
    subtitle: 'AI risk-control dashboard, finalist at Agent for Truth.',
    link: 'https://github.com/demo-or-die/Bitopro_Hackathon_web',
    image: '/images/projects/bitoguard.jpg',
    date: '2026-03-27',
    desc:
      'I built the full-stack product around my teammates\' LightGBM model: a FastAPI backend with SHAP explanations '
      + 'and Amazon Bedrock risk summaries, a React and D3.js transaction-graph dashboard, '
      + 'and an AWS design with CloudFront, S3, ALB, and ECS Fargate.',
  },
  {
    title: 'Poker Hand Review',
    category: 'Personal Projects',
    subtitle: 'Offline review of Natural8 and GGPoker tournament hand histories.',
    link: 'https://github.com/matthiola0/poker-hand-review',
    dateLabel: 'June to September 2026',
    desc:
      'A Python tool that grades each decision from the Hero\'s perspective, using GTO range charts preflop '
      + 'and equity and EV heuristics postflop, with an optional external solver. '
      + 'Results come as CLI reports, JSON export, and a local web UI.',
  },
  {
    title: 'Daybook',
    category: 'Personal Projects',
    subtitle: 'An AI-assisted calendar for turning long-term goals into daily tasks.',
    link: 'https://matthiola.dev/daybook/',
    image: '/daybook/images/ai-planner-demo.png',
    date: '2026-08-30',
    desc:
      'Breaks goals into phases and daily tasks, with recurring schedules, habit settings, and reflection notes. '
      + 'The AI planner returns a structured proposal that the server validates and the user confirms before anything is written. '
      + 'Built with Next.js, Drizzle ORM, Cloudflare Workers and D1, and the Groq API.',
  },
  {
    title: 'daily-news-digest',
    category: 'Personal Projects',
    subtitle: 'A daily Traditional Chinese news digest.',
    link: 'https://news.matthiola.dev',
    dateLabel: 'April 2026',
    desc:
      'Collects AI, developer, quant, crypto, and world news from RSS feeds and GitHub Trending, filters duplicates, '
      + 'and summarizes it in Traditional Chinese through an OpenAI-compatible API. '
      + 'GitHub Actions runs it every morning and archives each digest to GitHub Pages.',
  },
  {
    title: 'Voting DApp',
    category: 'Course Projects',
    subtitle: 'Blockchain Technologies and Applications homework.',
    link: 'https://github.com/matthiola0/voting_dapp',
    dateLabel: 'Spring 2025',
    desc:
      'A Solidity voting contract built with Hardhat and deployed to the Sepolia testnet, with an Ethers.js frontend for voting through MetaMask.',
  },
  {
    title: 'Merkle Patricia Trie',
    category: 'Course Projects',
    subtitle: 'Blockchain Technologies and Applications homework.',
    link: 'https://github.com/matthiola0/merkle_patricia_trie',
    dateLabel: 'Spring 2025',
    desc:
      'A Python implementation of Ethereum\'s Merkle Patricia Trie with insert, delete, update, lookup, and root-hash computation.',
  },
  {
    title: 'NachOS CPU Scheduling',
    category: 'Course Projects',
    subtitle: 'Operating Systems final project.',
    link: 'https://github.com/matthiola0/nachos',
    dateLabel: 'June 2024',
    desc:
      'A three-person team built a three-level multilevel feedback queue scheduler with aging in NachOS. '
      + 'I built the ready queues and the preemptive shortest-remaining-time-next logic for the top level.',
  },
  {
    title: 'Soul Warrior',
    category: 'Course Projects',
    subtitle: 'Software Studio final project, a 2D action platformer.',
    link: 'https://fianl-project-23419.web.app/',
    image: '/images/projects/soulwarrior.jpg',
    dateLabel: 'Spring 2023',
    desc:
      'Built with Cocos Creator by a four-person team. I built character movement and controls, '
      + 'including the double jump, gravity, and collision handling, and the Firebase email accounts with Cloud Firestore saves.',
  },
  {
    title: 'Mario',
    category: 'Course Projects',
    subtitle: 'Software Studio homework, a Mario-style platformer.',
    link: 'https://github.com/matthiola0/mario',
    dateLabel: 'Spring 2023',
    desc:
      'Two stages, three enemy types, question blocks, animations, and sound effects, written in TypeScript, '
      + 'with Firebase sign-in, saved progress, and a leaderboard.',
  },
  {
    title: 'Bomberman: Bocchi the Rock Edition',
    category: 'Course Projects',
    subtitle: 'Introduction to Programming II course project.',
    link: 'https://github.com/matthiola0/Bomberman',
    image: '/images/projects/bomberman.jpg',
    dateLabel: 'Fall 2022',
    desc:
      'A two-person Bomberman-style game in C++ and Allegro 5 where players claim tiles with explosions. '
      + 'I wrote most of it, including a stronger AI that uses BFS to chase the player and clear blocking stones.',
  },
];

export { categories };
export default data;
