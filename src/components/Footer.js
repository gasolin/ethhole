import { GitHub, Twitter } from 'react-feather'

export const Footer = () => (
  <footer className="px-3 py-8 bg-white dark:bg-gray-800 text-2 text-gray-500 dark:text-gray-200 transition-colors duration-200">
      <div className="flex flex-col">
          <div className="md:hidden mt-7 mx-auto w-11 h-px rounded-full">
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
              <nav className="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5">
                  <a aria-current="page" href="http://gasolin.idv.tw/eth-milestone" className="hover:text-gray-700 dark:hover:text-white" target="_blank" rel="noreferrer">
                      Ethereum Milestone
                  </a>
                  <a aria-current="page" href="https://github.com/gasolin/ethhole/tree/main/src/data" className="hover:text-gray-700 dark:hover:text-white" target="_blank" rel="noreferrer">
                      Raw Data
                  </a>
                  <a aria-current="page" href="https://github.com/gasolin/ethhole/blob/main/src/data/bridge_contracts.js" className="hover:text-gray-700 dark:hover:text-white" target="_blank" rel="noreferrer">
                      List Your Project
                  </a>
              </nav>
              <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full">
              </div>
              <div className="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100">
                  <a className="hover:text-primary-gray-20" href="https://github.com/gasolin/ethhole" target="_blank" rel="noreferrer">
                      <span className="sr-only">
                          View on GitHub
                      </span>
                      <GitHub />
                  </a>
                  <a className="ml-4 hover:text-primary-gray-20" href="https://twitter.com/stakerwatch" target="_blank" rel="noreferrer">
                      <span className="sr-only">
                          Twitter
                      </span>
                      <Twitter />
                  </a>
              </div>
              <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full ">
              </div>
              <div className="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
                  <span className="">
                      © 2021
                  </span>
                  <span className="mt-7 md:mt-1">
                      Created by{' '}
                      <a className="underline hover:text-primary-gray-20" href="https://twitter.com/stakerwatch" target="_blank" rel="noreferrer">
                        @stakerwatch
                      </a>
                  </span>
                  <span>
                  <a className="underline hover:text-primary-gray-20" href="https://www.flaticon.com/free-icon/hole_595435?term=hole&related_id=595435" target="_blank" rel="noreferrer">
                    Logo credit freepik
                  </a>
                  </span>
              </div>
          </div>
      </div>
  </footer>
)
