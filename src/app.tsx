import React from 'react';
import { css } from 'linaria';

export const Component: React.FC = () => {
	return (
		<div className={container}>
			<div>jmarceli-react-ts-library</div>
			<div>sample component</div>
		</div>
	);
};

const container = css`
	width: 100%;
	max-width: 1200px;
	margin: auto;
`;
