import Router from './router/router.js';
import { HomePage, SignUpPage } from './pages/index.js';

const App = () => {
	const router = Router({
		'/': HomePage(),
		'/signup': SignUpPage(),
	});

	return (target) => {
		const $app = router(target);
		return $app;
	};
};

export default App;
