import { Bell, User, LogOut } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredItems, setFilteredItems] = useState([]);

	const menuItems = [
		{ name: 'Overview', path: '/' },
		{ name: 'Products', path: '/products' },
		{ name: 'Users', path: '/users' },
		{ name: 'Sales', path: '/sales' },
		{ name: 'Orders', path: '/orders' },
		{ name: 'Analytics', path: '/analytics' },
		{ name: 'Settings', path: '/settings' },
		{ name: 'Profile', path: '/profile' },
		{ name: 'Notifications', path: '/notifications' },
	];

	const handleSearchChange = (event) => {
		const query = event.target.value;
		setSearchQuery(query);
		if (query) {
			const filtered = menuItems.filter(item =>
				item.name.toLowerCase().includes(query.toLowerCase())
			);
			setFilteredItems(filtered);
		} else {
			setFilteredItems([]);
		}
	};

	const handleMenuItemClick = (path) => {
		navigate(path);
		setSearchQuery(''); // Clear search input
		setFilteredItems([]); // Clear filtered items
	};

	const pageTitles = {
		'/': 'Overview',
		'/products': 'Products',
		'/users': 'Users',
		'/sales': 'Sales',
		'/orders': 'Orders',
		'/analytics': 'Analytics',
		'/settings': 'Settings',
		'/profile': 'Profile',
		'/notifications': 'Notifications',
	};

	const currentPage = pageTitles[location.pathname] || 'Dashboard';

	return (
		<header className='bg-#D2E9E9-200 bg-opacity-65 backdrop-blur-md shadow-lg border-b border-white-500'>
			<div className='max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8'>
				<h1 className='text-xl font-semibold text-white-100'>{currentPage}</h1>

				{/* Centered Search Bar */}
				<div className='relative flex-grow mx-4 flex justify-center'>
					<input
						type='text'
						placeholder='Search...'
						value={searchQuery}
						onChange={handleSearchChange}
						className='w-80 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm'
					/>

					{/* Suggestions Dropdown */}
					{filteredItems.length > 0 && (
						<ul className='absolute z-10 w-40 bg-white border border-gray-300 rounded-md shadow-lg mt-1'>
							{filteredItems.map(item => (
								<li key={item.path} className='p-1 text-sm cursor-pointer hover:bg-gray-100' onClick={() => handleMenuItemClick(item.path)}>
									{item.name}
								</li>
							))}
						</ul>
					)}
				</div>

				{/* Notification, Profile, and Logout Icons */}
				<div className='flex items-center space-x-4'>
					<Bell size={20} className='text-red-500 cursor-pointer' onClick={() => navigate('/notifications')} />
					<User size={20} className='text-blue-500 cursor-pointer' onClick={() => navigate('/profile')} />
					<LogOut size={20} className='text-red-600 cursor-pointer' onClick={() => {
						// Add logout logic here
						console.log("Logging out...");
						navigate('/login'); // Redirect to login or homepage after logout
					}} />
				</div>
			</div>
		</header>
	);
};

export default Header;
