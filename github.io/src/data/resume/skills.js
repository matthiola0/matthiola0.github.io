const skills = [
  // LANGUAGES
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python', 'ML Engineering', 'Data Science'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Go',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'JavaScript',
    competency: 3,
    category: ['Languages', 'Web Development', 'Javascript'],
  },
  {
    title: 'TypeScript',
    competency: 3,
    category: ['Languages', 'Web Development', 'Javascript'],
  },
  {
    title: 'HTML + CSS',
    competency: 3,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'MySQL',
    competency: 2,
    category: ['Languages', 'Databases'],
  },
  {
    title: 'Shell Script',
    competency: 1,
    category: ['Languages', 'Tools'],
  },
  {
    title: 'R',
    competency: 3,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'MATLAB',
    competency: 1,
    category: ['Languages'],
  },
  // MACHINE LEARNING & DATA SCIENCE
  {
    title: 'PyTorch',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'TensorFlow + Keras',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 3,
    category: ['ML Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Science', 'ML Engineering', 'Python'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'ML Engineering', 'Python'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Data Science', 'ML Engineering'],
  },
  // WEB DEVELOPMENT
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  // TOOLS
  {
    title: 'Docker',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
