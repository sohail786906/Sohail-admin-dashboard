import zemranLogo from '../images/logo.png'; // Adjust the path if necessary
import { Search } from 'lucide-react'; // Import the search icon

const Header = ({ title }) => {
	return (
		<header className='bg-#D2E9E9-200 bg-opacity-65 backdrop-blur-md shadow-lg border-b border-white-500'>
			<div className='max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8'>
				{/* Title */}
				<h1 className='text-xl font-semibold text-white-100'>{title}</h1>

				{/* Centered Search Bar and Icon */}
				<div className='flex flex-1 items-center justify-center mx-4 space-x-2'>
					<input
						type='text'
						placeholder='Search...'
						className='w-48 px-2 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs'
					/>
					<Search size={18} className='text-gray-500' />
				</div>

				{/* Logo */}
				<img src={zemranLogo} alt="Zemran Logo" className='h-8 w-auto' />
			</div>
		</header>
	);
};

export default Header;
