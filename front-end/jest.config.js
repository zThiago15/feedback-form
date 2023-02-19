/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  '^.+\\.(svg|png|jpg|jpeg|gif|webp)$': '<rootDir>/test/imageTransformer.js',
};