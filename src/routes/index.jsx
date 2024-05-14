import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../screens/dashboard';
import Header from '../components/header';
import { Fragment } from 'react';
import LoginWrapper from '../screens/login-wrapper';

const Routers = () => {
	return (
		<Fragment>
			<Router>
				<div className="flex flex-col h-[100vh]">
					<Header />
					<div className="flex-1 overflow-auto">
						<Routes>
							<Route path="/" element={<LoginWrapper />}></Route>
							<Route path="/dashboard" element={<Dashboard />}></Route>
						</Routes>
					</div>
				</div>
			</Router>
		</Fragment>
	);
};

export default Routers;
