module.exports = {
	roots: ['<rootDir>/tests'],
	testMatch: ['/**/tests/**/*.test.(ts|tsx|js)'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},
	moduleNameMapper: {
		'\\.(css|less)$': '<rootDir>/tests/__mocks__/styleMock.js'
	}
};
