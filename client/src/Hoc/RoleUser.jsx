import React from 'react';
import { useSelector } from 'react-redux';

const RoleUser = ({ forRole, children }) => {
	const userAuth = useSelector(state => state.checkAuth.value.user);
	if (!forRole.includes(userAuth?.role)) return;

	return <>{children}</>;
};

export default RoleUser;
