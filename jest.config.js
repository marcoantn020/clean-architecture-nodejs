module.exports = {
    roots: ['<rootDir>/test'],
    collectCoverageFrom: [
      '<rootDir>/test/**/*.ts',
      // '!<rootDir>/src/main/**'
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    transform: {
      '.+\\.ts$': 'ts-jest'
    }
  }