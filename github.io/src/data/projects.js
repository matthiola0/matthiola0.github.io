// TODO Add a couple lines about each project
const data = [
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
  // {
  //   title: 'Nearest Dollar',
  //   subtitle: '2015 BVP Hackathon',
  //   image: '/images/projects/nearestdollar.jpg',
  //   date: '2015-11-20',
  //   desc:
  //     'Built for a social impact hackathon. '
  //     + 'NearestDollar connected to your bank accounts, credit cards, '
  //     + 'or debit cards and rounded up your purchases to donate the balance to '
  //     + 'the charity of your choice.',
  // },
  // {
  //   title: 'Harvest',
  //   subtitle: 'Won 3rd. place in 2015 Techcrunch Disrupt SF Hackathon',
  //   link: 'https://devpost.com/software/harvest',
  //   image: '/images/projects/harvest.jpg',
  //   date: '2015-09-20',
  //   desc:
  //     'Won ~ $7000 in prizes for an advanced, low cost monitoring solution '
  //     + 'for crops. Harvest was designed to catch irrigation leaks, overwatering, '
  //     + 'and nutrient deficiencies at an affordable price for the developing world.',
  // },
  // {
  //   title: 'Space Potato',
  //   subtitle: 'A kickstarter funded potato powered weather balloon.',
  //   link: 'http://www.spacepotato.org',
  //   image: '/images/projects/spacepotato.jpg',
  //   date: '2015-06-28',
  //   desc:
  //     'Launched a potato battery powered weather balloon with two cameras '
  //     + 'and gps transponder. Resulting photos were published in a coffee table book. '
  //     + 'You can email me for a copy.',
  // },
  // {
  //   title: 'Cat Detector',
  //   subtitle: 'A convolutional neural network to classify cats! (and dogs)',
  //   image: '/images/projects/catdetector.jpg',
  //   date: '2015-05-15',
  //   desc:
  //     'Trained a convolutional neural network to classify between ~ 80 cats breeds. '
  //     + 'Over 60,000 cats were classified before server bills made the project too expensive '
  //     + 'to continue hosting.',
  // },
];

export default data;
