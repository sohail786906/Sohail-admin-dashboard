import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
	return (
		<div className='flex h-screen bg-white-900 text-black-100 overflow-hidden'>
			{/* BG */}
			<div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-white-900 via-black-800 to-white-900 opacity-50' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>

			<Sidebar />
			<Routes>
				<Route path='/' element={<OverviewPage />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/users' element={<UsersPage />} />
				<Route path='/sales' element={<SalesPage />} />
				<Route path='/orders' element={<OrdersPage />} />
				<Route path='/analytics' element={<AnalyticsPage />} />
				<Route path='/settings' element={<SettingsPage />} />
			</Routes>
		</div>
	);
}

export default App;
