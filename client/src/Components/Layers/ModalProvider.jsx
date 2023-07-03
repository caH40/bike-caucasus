import React from 'react';
import { useSelector } from 'react-redux';
import ActivateAccount from '../Authorization/ActivateAccount';
import ActivateResetPassword from '../Authorization/ActivateResetPassword';
import Authorization from '../Authorization/Authorization';
import CreateNewPassword from '../Authorization/CreateNewPassword';
import Registration from '../Authorization/Registration';
import ResetPassword from '../Authorization/ResetPassword';

const ModalProvider = () => {
	const modal = useSelector(state => state.modal.value);

	return (
		<>
			{modal.component === 'Authentication' ? <Authorization /> : undefined}
			{modal.component === 'Registration' ? <Registration /> : undefined}
			{modal.component === 'Registered' ? <ActivateAccount email={modal.email} /> : undefined}
			{modal.component === 'ResetPassword' ? <ResetPassword /> : undefined}
			{modal.component === 'ResetPasswordAnswer' ? (
				<ActivateResetPassword email={modal.email} />
			) : undefined}
			{modal.component === 'AddNewPassword' ? (
				<CreateNewPassword userId={modal.userId} />
			) : undefined}
		</>
	);
};

export default ModalProvider;
