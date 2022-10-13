import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<Provider store={setupStore()}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
