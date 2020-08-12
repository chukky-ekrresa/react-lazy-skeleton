import '@testing-library/jest-dom/extend-expect';

jest.mock('linaria', () => ({
	css: jest.fn(() => '')
}));
