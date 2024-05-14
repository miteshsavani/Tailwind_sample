import { AUTH_TOKEN } from '../../constants';
import { useCallback, useEffect } from 'react';
import Button from '../../blocks/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (!sessionStorage.getItem(AUTH_TOKEN)) {
			navigate('/');
		} else {
			navigate('/dashboard');
		}
	}, [navigate]);

	const handleLogout = useCallback(() => {
		sessionStorage.removeItem(AUTH_TOKEN);
		navigate('/', { replace: true });
	}, [navigate]);

	if (!sessionStorage.getItem(AUTH_TOKEN)) {
		return null;
	}

	return (
		<div className="flex justify-center items-center p-4 sticky top-0">
			<div className="flex-1 flex text-2xl justify-center">Welcome !!!</div>
			<Button class="absolute top-3 right-3 py-2 px-4" onClick={handleLogout}>
				Log out
			</Button>
		</div>
	);
};

export default Header;
