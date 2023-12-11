import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../../components/login';
import { AUTH_TOKEN } from '../../constants';

const User = () => {

	const navigate = useNavigate();

	useEffect(() => {
		if (sessionStorage.getItem(AUTH_TOKEN)) {
			navigate('/home');
		}
	}, [navigate]);

	return (
		<div className="flex justify-end items-end h-screen pb-[150px] mr-[200px]">
			<Login />
		</div>
	);
};

export default User;
