import { Fragment, useEffect } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import UserData from '../../components/userData';
import TodoData from '../../components/todoData';
import { AUTH_TOKEN } from '../../constants';
import Button from '../../blocks/button';

const Home = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (!sessionStorage.getItem(AUTH_TOKEN)) {
			navigate('/');
		}
	}, [navigate]);

	const handleLogout = useCallback(() => {
		sessionStorage.removeItem(AUTH_TOKEN);
		navigate('/', { replace: true });
	}, [navigate]);

	return (
		<Fragment>
			<div className="flex relative justify-center items-center p-4">
				<div className="flex-1 flex text-2xl justify-center">Welcome !!!</div>
				<Button
					class="absolute top-3 right-3 py-2 px-4"
					onClick={handleLogout}
				>
					Log out
				</Button>
			</div>
			<div className='flex justify-center'>
				<TodoData />
			</div>
		</Fragment>
	);
};

export default Home;
