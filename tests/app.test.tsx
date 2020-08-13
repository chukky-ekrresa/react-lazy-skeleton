import React from 'react';
import { render, screen } from '@testing-library/react';

import { Parent } from '../src/index';

describe('A test', () => {
	beforeEach(() => {
		// IntersectionObserver isn't available in test environment
		const mockIntersectionObserver = jest.fn();
		mockIntersectionObserver.mockReturnValue({
			observe: () => null,
			unobserve: () => null,
			disconnect: () => null
		});
		window.IntersectionObserver = mockIntersectionObserver;
	});

	test('should render component', async () => {
		render(<Parent src="" />);
		const parent = await screen.findByTestId('parent');
		expect(parent).toBeInTheDocument();
	});
});
