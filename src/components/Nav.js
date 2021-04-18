import { getTodayTag } from '../helpers/formatDate'
import { Badge } from './Badge'

export const Nav = ({ethUsdPrice}) => {
  return (
  <nav className="flex bg-white flex-wrap items-center justify-between p-4">
    <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
        <a className="text-xl text-gray-800 font-semibold font-heading" href="#">
            ETH Hole
        </a>
    </div>
    <div className="block lg:hidden">
        <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>
                    Menu
                </title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                </path>
            </svg>
        </button>
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
        <Badge text={`${getTodayTag()} ♦ = ${ethUsdPrice}`} />
    </div>
    <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
        {/* <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
            Content
        </a>
        <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
            FAQ
        </a> */}
        <a className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600" target="_blank" href="https://github.com/gasolin/ethhole" rel="noreferrer">
          <svg width="20" fill="currentColor" height="20" className="text-gray-800" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
            </path>
          </svg>
        </a>
        {/* <button type="button" className="flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">

        </button> */}
    </div>
  </nav>
  );
};
