import { Panel } from '../components/Panel'

export const Banner = () => (
  <Panel>
    <div class="text-center w-full mx-auto py-4 px-4 z-20">
      <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
        <span class="block">
          Support Public Goods like us
        </span>
        <span class="block text-indigo-400">
          in Gitcoin Grant 11
        </span>
      </h2>
      <div class="lg:mt-0 lg:flex-shrink-0">
        <div class="mt-12 inline-flex rounded-md shadow">
          <a className="py-4 px-6  bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg" href="https://gitcoin.co/grants/2758/ethholelink" target="_blank" rel="noreferrer">Join</a>
        </div>
      </div>
    </div>
  </Panel>
)
