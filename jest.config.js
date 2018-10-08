module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.js?$': 'babel-jest',
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
  ],
  modulePaths: [
    '<rootDir>/node_modules/',
    '<rootDir>/node_modules/jest-meteor-stubs/lib/',
  ],
  roots: [
    '<rootDir>/imports/',
    '<rootDir>/tests/',
  ],
  moduleNameMapper: {
    '^imports/(.*)': '<rootDir>/imports/',
    '^(.*):(.*)$': '$1_$2',
  },
  unmockedModulePathPatterns: [
    '/^imports\\/.*\\.jsx?$/',
    '/^client\\/.*\\.jsx?$/',
    '/^server\\/.*\\.jsx?$/',
    '/^node_modules/',
  ],
};
