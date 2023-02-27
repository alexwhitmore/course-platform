import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Courses', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Teach', href: '#' },
  { name: 'About', href: '#' },
];

const Navbar = () => {
  return (
    <Popover as='header' className='relative'>
      <div className='pt-6 bg-gray-900'>
        <nav
          className='relative flex items-center justify-between px-6 mx-auto max-w-7xl'
          aria-label='Global'>
          <div className='flex items-center flex-1'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <Link href='#'>
                <span className='sr-only'>Your Company</span>
                <img
                  className='w-auto h-8 sm:h-10'
                  src='https://tailwindui.com/img/logos/mark.svg?from-color=teal&from-shade=200&to-color=green&to-shade=400&toShade=400'
                  alt=''
                />
              </Link>
              <div className='flex items-center -mr-2 md:hidden'>
                <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md focus-ring-inset hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  <Bars3Icon className='w-6 h-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='hidden space-x-8 md:ml-10 md:flex'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-base font-medium text-white hover:text-gray-300'>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className='hidden md:flex md:items-center md:space-x-6'>
            <Link
              href='#'
              className='text-base font-medium text-white hover:text-gray-300'>
              Log in
            </Link>
            <Link
              href='#'
              className='inline-flex items-center px-4 py-2 text-base font-medium text-white bg-gray-600 border border-transparent rounded-md hover:bg-gray-700'>
              Sign up
            </Link>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'>
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 p-2 transition origin-top transform md:hidden'>
          <div className='overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5'>
            <div className='flex items-center justify-between px-5 pt-4'>
              <div>
                <img
                  className='w-auto h-8'
                  src='https://tailwindui.com/img/logos/mark.svg?from-color=teal&from-shade=500&to-color=green&to-shade=600&toShade=600'
                  alt=''
                />
              </div>
              <div className='-mr-2'>
                <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500/80'>
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='w-6 h-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='pt-5 pb-6'>
              <div className='px-2 space-y-1'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100'>
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='px-5 mt-6'>
                <Link
                  href='#'
                  className='block w-full px-4 py-3 font-medium text-center text-white bg-green-500 rounded-md shadow hover:bg-green-600'>
                  Sign up
                </Link>
              </div>
              <div className='px-5 mt-6'>
                <p className='text-base font-medium text-center text-gray-500'>
                  Existing customer?{' '}
                  <Link href='#' className='text-gray-900 hover:underline'>
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
