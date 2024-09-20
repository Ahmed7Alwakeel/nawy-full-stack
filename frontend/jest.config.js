module.exports = {
    preset: 'ts-jest',
  testEnvironment: 'node',
    moduleNameMapper: {
      '^fetchData$': '<rootDir>/__mocks__/FetchData.ts'
    }
  };
  