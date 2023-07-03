import React from 'react';
import { Outlet } from 'react-router-dom';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import ModalProvider from './ModalProvider';

const Page = () => {
	return (
		<>
			<Header />
			<Body>
				<ModalProvider />
				<Outlet />
			</Body>
			<Footer />
		</>
	);
};

export default Page;
