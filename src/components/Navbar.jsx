import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/api':
        return 'JSONPlaceholder';
      case '/':
      default:
        return 'PLP Task Manager';
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        {/* Dynamic Page Title */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          {getTitle()}
        </h1>

        {/* Navigation Links & Theme Toggle */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:underline text-sm">
            Tasks
          </Link>
          <Link to="/api" className="hover:underline text-sm">
            API
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 transition-transform duration-300 hover:scale-110"
            title="Toggle Theme"
          >
            {darkMode ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
