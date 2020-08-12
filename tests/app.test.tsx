import React from 'react';
import { render, screen } from '@testing-library/react';

import { Parent } from '../src/index';

describe('A test', () => {
	test('should render component', async () => {
		render(<Parent src="" />);
		const parent = await screen.findByTestId('parent');
		expect(parent).toBeInTheDocument();
	});
});
