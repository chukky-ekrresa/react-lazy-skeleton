module.exports = {
	roots: ['<rootDir>/tests'],
	setupFilesAfterEnv: ['./setupTests.ts'],
	testMatch: ['/**/tests/**/*.test.(ts|tsx|js)'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},
	moduleNameMapper: {
		'\\.(css|less)$': '<rootDir>/tests/__mocks__/styleMock.js'
	}
};
