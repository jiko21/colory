module.exports = {
  preset: 'jest-playwright-preset',
  roots: ['<rootDir>/e2e/'],
  testMatch: ['**/e2e/**/*.spec.ts'],
  transform: {
    '^.+\\.(ts|js)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  testEnvironmentOptions: {
    'jest-playwright': {
      contextOptions: {
        permissions: ['clipboard-read', 'clipboard-write'],
      },
    },
  },
};
