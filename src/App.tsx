import './scss/app.scss';

import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { SearchService } from './shared/services/search.service';

export default function App() {
	const search = new SearchService();

	return (
		<div className='wrapper'>
			<Header search={search} />
			<div className='content'>
				<Routes>
					<Route path='/' element={<Home search={search} />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}
