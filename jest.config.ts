const config = {
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['json-summary', 'text'],
  coverageThreshold: { global: { lines: 90 } },
  modulePathIgnorePatterns: ['<rootDir>/src/types'],
  moduleNameMapper: {
    '^.+\\.css$': 'identity-obj-proxy',
    '^(d3-[a-z]+-?[a-z]+)$': '<rootDir>/node_modules/$1/dist/$1',
  },
  resetModules: true,
  setupFiles: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  verbose: true,
}

export default config
