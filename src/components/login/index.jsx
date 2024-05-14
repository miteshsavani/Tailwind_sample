import { useCallback, useRef, useEffect, useState } from 'react';
import Button from '../../blocks/button';
import InputWithLabel from '../../blocks/input-with-label';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AUTH_TOKEN } from '../../constants';

const Login = () => {
	const [userDetails, setUserDetails] = useState({
		username: '',
		password: '',
	});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const userNameInputRef = useRef();

	const resetLoginContainer = useCallback(() => {
		userNameInputRef.current?.focus();
		setUserDetails({ username: '', password: '' });
		setLoading(false);
	}, []);

	useEffect(() => {
		resetLoginContainer();
	}, [resetLoginContainer]);

	const onUserNameChange = useCallback((e) => {
		setError(false);
		setUserDetails((prevState) => {
			return {
				...prevState,
				username: e.target.value,
			};
		});
	}, []);

	const onPassChange = useCallback((e) => {
		setError(false);
		setUserDetails((prevState) => {
			return {
				...prevState,
				password: e.target.value,
			};
		});
	}, []);

	const handleSubmit = useCallback(() => {
		const { username, password } = userDetails;
		const authentication = getAuth();

		setLoading(true);

		signInWithEmailAndPassword(authentication, username, password)
			.then((response) => {
				console.log('AuthToken', response._tokenResponse.refreshToken);
				sessionStorage.setItem(
					AUTH_TOKEN,
					response._tokenResponse.refreshToken
				);
				window.location.reload();
			})
			.catch(() => {
				setError(true);
			})
			.finally(() => {
				resetLoginContainer();
			});
	}, [resetLoginContainer, userDetails]);

	return (
		<div className="w-[500px]">
			<div>
				<h1 className="text-lime-900 text-8xl text-end">BONEYARD</h1>
			</div>

			<div className="flex flex-col">
				<div className="text-end text-2xl">
					"Your credit is good but we need cash"
				</div>
				<div className="text-end">-Panchito</div>
			</div>

			<div className="flex flex-col items-end justify-end">
				<div className="flex justify-center items-center w-[100%] text-red-600 h-6">
					{error && <span> Wrong username or password</span>}
				</div>
				<div className="w-[300px]">
					<InputWithLabel
						labelClass="ml-4"
						label="Username:"
						id="username"
						onChange={onUserNameChange}
						type="text"
						value={userDetails.username}
						ref={userNameInputRef}
					/>
					<InputWithLabel
						labelClass="ml-4"
						label="Password:"
						id="password"
						type="password"
						onChange={onPassChange}
						value={userDetails.password}
					/>
					<div className="mt-7">
						<Button onClick={handleSubmit} class="w-full">
							{loading ? 'Loading...' : 'Sign In'}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
