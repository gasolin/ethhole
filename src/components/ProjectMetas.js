import { ETH_BRIDGE_CONTRACTS, LIQUIDITY_PROJECTS } from '../data/bridge_contracts'

const wildcards = Object.keys(LIQUIDITY_PROJECTS)
export const ProjectMetas = ({proj}) => {
  const projMeta = wildcards.includes(proj)
    ? LIQUIDITY_PROJECTS[proj]
    : ETH_BRIDGE_CONTRACTS[proj]
  const meta = [
    ['Website', projMeta.website],
    ['Explorer', projMeta.explorer],
    ['Github', projMeta.github],
    ['Twitter', projMeta.twitter],
  ];
  return (
    <div className="bg-white overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 flex flex-row">
            {projMeta.color && (<span>
              <a href={projMeta.website} target="_blank" className="block relative pr-2" style={{color: projMeta.color}} rel="noreferrer">
                  ●
              </a>
            </span>)} {proj}
          </h3>
          {/* <p class="mt-1 max-w-2xl text-sm text-gray-500">
              Details and informations about user.
          </p> */}
      </div>
      <div className="border-t border-gray-200">
          <dl>
            {meta.filter(item => item[1]).map((item, idx) => (
              <div key={item[0]} className={`${idx%2 ? 'bg-white' : 'bg-gray-50'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                <dt className="text-sm font-medium text-gray-500">
                  {item[0]}:
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <a href={item[1]} target="_blank" rel="noreferrer" className="text-blue-500 underline whitespace-no-wrap">{item[1]}</a>
                </dd>
              </div>
            ))}
          </dl>
      </div>
    </div>
  )
}
