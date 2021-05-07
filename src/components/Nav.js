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
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
              <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
              </path>
          </svg>
        </a>
        {/* <button type="button" className="flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">

        </button> */}
    </div>
  </nav>
  );
};
