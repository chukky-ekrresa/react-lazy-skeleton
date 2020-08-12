import React from 'react';
import { css } from 'linaria';

import { Loader } from './loader';

interface Props extends React.PropsWithChildren<unknown> {
	src: string;
	alt: string;
}

type ImageLoadStatus = 'idle' | 'loaded' | 'error';

export function Parent(props: Props) {
	const [imageLoaded, setImageLoaded] = React.useState<ImageLoadStatus>('idle');
	const imageRef = React.useRef<HTMLImageElement>(null);

	const imageListener = () => {
		setTimeout(() => {
			setImageLoaded('loaded');
		}, 3000);
	};

	const imageErrorListener = () => {
		imageRef.current!.alt = props.alt;
		setImageLoaded('error');
	};

	React.useLayoutEffect(() => {
		const img = imageRef.current as HTMLImageElement;
		img.src = props.src;
	}, []);

	return (
		<div className={parentCss} data-testid="parent">
			{imageLoaded === 'idle' && <Loader />}
			<img
				ref={imageRef}
				style={{ opacity: imageLoaded === 'loaded' ? 1 : 0 }}
				onLoad={imageListener}
				onError={imageErrorListener}
				className={imgCss}
				data-src={props.src}
			/>
		</div>
	);
}

const imgCss = css`
	position: absolute;
	width: 100%;
	object-fit: cover;
	height: 100%;
	opacity: 0;
	z-index: 100;
	transition: opacity 1s ease-out;
	backface-visibility: hidden;
	perspective: 1000;
`;

const parentCss = css`
	position: relative;
	width: 100%;
	height: 100%;
	margin: auto;
`;

Parent.defaultProps = {
	alt: 'loading failed'
};
