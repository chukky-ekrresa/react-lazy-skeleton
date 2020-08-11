import React from 'react';

import { Loader } from './loader';
import './styles/image.css';

interface Props extends React.PropsWithChildren<unknown> {
	src: string;
}

export function Parent(props: Props) {
	// const [loader, setLoader] = React.useState(true);

	const imageListener = () => {
		console.log('image loaded');
	};

	return (
		<div className="parent">
			<Loader />
			<img onLoad={imageListener} className="img" src={props.src} />
		</div>
	);
}
