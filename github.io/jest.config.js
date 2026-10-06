// Match the base URL injected by react-scripts when building the site.
process.env.PUBLIC_URL = process.env.PUBLIC_URL || '';

const config = {
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '^.+\\.md$': 'markdown-to-jsx',
  },
};

module.exports = config;
