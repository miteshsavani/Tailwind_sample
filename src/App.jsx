import { app } from '../firebase-config';
import Routers from './routes';
import LoginWrapper from './screens/login-wrapper';
import { AUTH_TOKEN } from './constants';

function App() {
	return sessionStorage.getItem(AUTH_TOKEN) ? <Routers /> : <LoginWrapper />;
}

export default App;
