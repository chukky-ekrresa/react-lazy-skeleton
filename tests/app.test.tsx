import React from 'react';
import { render, screen } from '@testing-library/react';

import { Component } from '../src/app';

describe('A test', () => {
	test('should render component', () => {
		render(<Component />);
		expect(screen.getByText('sample component')).toBeDefined();
	});
});
