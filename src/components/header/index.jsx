import { AUTH_TOKEN } from '../../constants';
import { useCallback } from 'react';
import Button from '../../blocks/button';

const Header = () => {
	const handleLogout = useCallback(() => {
		sessionStorage.removeItem(AUTH_TOKEN);
		window.location.reload();
	}, []);

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
