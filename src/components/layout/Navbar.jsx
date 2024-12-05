// Import necessary dependencies from React and React Router
import { Link } from 'react-router-dom';
// Import Headless UI component for mobile menu functionality
import { Disclosure } from '@headlessui/react';
// Import Heroicons for menu icons
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// Import company logo
import syllabusLogo from '../../assets/images/logo.syllabus.png';

// Define navigation links array for main menu items
const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Programmes', href: '/programs' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    // Main navigation container with white background and shadow
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          {/* Main content wrapper with max width and padding */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Flex container for logo, navigation, and auth buttons */}
            <div className="flex items-center h-20">
              {/* Logo section */}
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                  <img
                    src={syllabusLogo}
                    alt="Syllabus Logo"
                    className="h-16 w-auto"
                  />
                </Link>
              </div>

              {/* Desktop navigation menu - centered */}
              <div className="hidden sm:flex flex-1 justify-end pr-24">
                <div className="flex space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Authentication buttons - desktop */}
              <div className="hidden sm:flex sm:items-center sm:space-x-2">
                <Link
                  to="/login"
                  className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Se connecter
                </Link>
                <Link
                  to="/register"
                  className="ml-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                >
                  S'inscrire
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="sm:hidden flex flex-1 justify-end">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <span className="sr-only">Open main menu</span>
                  {/* Toggle between menu and close icons based on menu state */}
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile navigation links */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile auth buttons */}
              <Link
                to="/login"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Se connecter
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                S'inscrire
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}