import React from 'react';
import { css } from 'linaria';

export function Loader() {
	return (
		<div className={skeletonCss}>
			<span className={loaderCss} />
		</div>
	);
}

const skeletonCss = css`
	background: rgba(245, 245, 245, 0.34);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 100;
`;

const loaderCss = css`
	background-image: linear-gradient(to right, #e6e6e6, #ffffff, #e6e6e6);
	width: 100%;
	height: 100%;
	display: inline-block;
	background-size: 200%;
	animation: shimmer 1s linear 0s infinite reverse forwards;
	backface-visibility: hidden;
	perspective: 1000;

	@keyframes shimmer {
		from {
			background-position: 0%, 0;
		}
		to {
			background-position: 170%, 0;
		}
	}
`;
