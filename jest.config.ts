import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // Adjusts path resolution if needed
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest', // Use ts-jest for transforming TypeScript files
    },
};

export default config;