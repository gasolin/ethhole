import { GitHub } from 'react-feather'

import { Badge } from './Badge'
import hole from './hole.svg'

import { getTimeTag } from '../helpers/formatDate'

export const Nav = ({ethUsdPrice, timestamp}) => {
  const price = ethUsdPrice === 1 ? '' : `Ξ = $${ethUsdPrice}`
  const todayInfo = timestamp && `${getTimeTag('today', timestamp)} ${price}`
  return (
  <nav className="flex bg-white flex-wrap items-center justify-between p-4">
    <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
        <img className="absolute hidden md:block md:mt-1 lg:ml-6" src={hole} width={24} height={24} alt="ethhole.link" />
        <a className="md:ml-6 lg:ml-2 text-xl text-gray-800 font-semibold font-heading pl-2" href="/">
        ETH Hole
        </a>
    </div>
    <div className="block lg:hidden">
        {/* <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>
                    Menu
                </title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                </path>
            </svg>
        </button> */}
        <Badge text={todayInfo} />
    </div>
    <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
        {/* <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
            Home
        </a>
        <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
            Team
        </a>
        <a className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600" href="#">

        </a> */}
        <Badge text={todayInfo} />
    </div>
    <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
        {/* <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
            Content
        </a>
        <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
            FAQ
        </a> */}
        <a className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600" target="_blank" href="https://github.com/gasolin/ethhole" rel="noreferrer">
          <GitHub />
        </a>
        {/* <button type="button" className="flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">

        </button> */}
    </div>
  </nav>
  );
};
