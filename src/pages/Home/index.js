import React, { useEffect, useState } from 'react';
import { Message } from 'rsuite';
import Loader from '../../components/Loader';
import Header from '../../components/Header';

import { ContainerVh100 } from '../../styles/containers';

export default function Home() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	}, []);

	if(loading){
		return <Loader />;
	}
	return (
		<Header />

	);
}
