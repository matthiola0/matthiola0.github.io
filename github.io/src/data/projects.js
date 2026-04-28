const data = [
  {
    title: 'BTC Microstructure',
    subtitle: 'Order-book imbalance study on Bybit linear futures.',
    link: 'https://github.com/matthiola0/btc-microstructure',
    image: '/images/projects/btc-microstructure.jpg',
    date: '2026-04-25',
    desc:
      'Studied BTC order-book imbalance with a C++20 ingest pipeline feeding Python notebooks for analysis. '
      + 'Cost-aware backtests including spread, slippage, and fees — a deliberate reality check '
      + 'on naive signal claims.',
  },
  {
    title: 'Alt-Data Sentiment',
    subtitle: 'Reddit retail-forum sentiment as an alt-data factor on the S&P 500.',
    link: 'https://github.com/matthiola0/alt-data-sentiment',
    image: '/images/projects/alt-data-sentiment.jpg',
    date: '2026-04-25',
    desc:
      'FinBERT scoring across subreddits, cross-subreddit IC analysis, incremental regression '
      + 'against classic factors, and a 2021 GME/AMC event study to isolate marginal alpha '
      + 'beyond price-based signals.',
  },
  {
    title: 'Agent for Truth: AI Risk-Control Platform',
    subtitle: 'Full-stack AI risk-control dashboard for crypto transaction monitoring.',
    link: 'https://github.com/matthiola0/Bitopro_Hackathon_web',
    image: '/images/projects/bitoguard.jpg',
    date: '2026-03-01',
    desc:
      'Built during the Agent for Truth hackathon finals. I designed the full-stack architecture: '
      + 'FastAPI backend wrapping a LightGBM model with SHAP explainability and Amazon Bedrock Claude risk summaries, '
      + 'React + D3.js interactive transaction graph dashboard, and AWS (CloudFront + S3 / ALB + ECS Fargate) deployment.',
  },
  {
    title: 'GTO Poker',
    subtitle: 'GTO-inspired strategy toolkit for 8-max poker.',
    link: 'https://github.com/matthiola0/GTO_Poker',
    image: '/images/projects/gto_poker.jpg',
    date: '2025-10-11',
    desc:
      'A solver-output-driven toolkit translating GTO ranges into actionable preflop and postflop '
      + 'heuristics for 8-max cash games.',
  },
  {
    title: 'Cosmos VoteSystem',
    subtitle: 'Blockchain voting PoC built with Cosmos SDK and Ignite CLI.',
    link: 'https://github.com/matthiola0/cosmos_votesystem',
    image: '/images/projects/cosmos_votesystem.jpg',
    date: '2025-06-11',
    desc:
      'A blockchain voting PoC built with Cosmos SDK and Ignite CLI for a course final project. '
      + 'Custom modules for voter identity verification, vote-token issuance via the bank module, '
      + 'and a voting core that prevents double-voting. Configurable PoA consensus and multi-node '
      + 'network setup, with performance testing across the full lifecycle from registration to tally.',
  },
  {
    title: 'Course Recommendation System for NTHU CS Students',
    subtitle: 'A smart course recommendation system for NTHU CS students.',
    link: 'https://nthu-course-selecting-system.streamlit.app/',
    image: '/images/projects/course_recommendation.jpg',
    date: '2024-01-31',
    desc:
      'Built with Python and Streamlit, this smart course recommendation system helps computer science students plan their path to graduation. '
      + 'It provides highly personalized and flexible course plans by deeply integrating complex graduation requirements and prioritizing individual student preferences.',
  },
  {
    title: 'Soul Warrior',
    subtitle: 'A 2D action-platformer game for the Software Studio 2023 Spring course.',
    link: 'https://fianl-project-23419.web.app/',
    image: '/images/projects/soulwarrior.jpg',
    date: '2023-06-01',
    desc:
      'Developed with Cocos Creator as part of a four-person team, this game features an email-based account system '
      + 'and Firebase for cloud saves. I was responsible for player movement, combat mechanics (melee/ranged with object-pooling), '
      + 'and damage-feedback effects like invincibility frames and screen shake.',
  },
  {
    title: 'Bomberman',
    subtitle: 'My first complete project — a 2D arena game built from scratch.',
    link: 'https://github.com/matthiola0/Bomberman',
    image: '/images/projects/bomberman.jpg',
    date: '2023-01-01',
    desc:
      'A Bomberman-style arena game developed solo using C++ and Allegro 5. Features local 2-player mode, '
      + 'BFS-based NPC AI that dynamically switches between pursuit, evasion, and patrol, '
      + 'AABB collision detection, and Object-Oriented architecture with manual memory management.',
  },
];

export default data;
