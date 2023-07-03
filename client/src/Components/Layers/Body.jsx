import React from 'react';
import CustomizedSnackbars from '../UI/Snackbars/CustomizedSnackbars';

const Body = ({ children }) => {
	return (
		<section className="body">
			<div className="container">
				<CustomizedSnackbars>{children}</CustomizedSnackbars>
			</div>
		</section>
	);
};

export default Body;
