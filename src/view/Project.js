import human from 'millify'

import chainData from '../data/data'
import { ETH_BRIDGE_CONTRACTS } from '../data/bridge_contracts.js'
// import { TokensTree } from '../components/TokensTree'
// import { TotalValueLocked } from '../components/TotalValueLocked'
import { Panel } from '../components/Panel'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { TokensTable } from '../components/TokensTable'
import { TokenTableRow } from '../components/TokenTableRow'
import { TokensTree } from '../components/TokensTree'

const FILLTER = 1000 // USD

export const Project = ({proj}) => {
  const projMeta = ETH_BRIDGE_CONTRACTS[proj]
  // const tvl = price === 1 ? `Ξ ${human(project.tvl)}` : `$ ${human(project.tvl * price)}`
  const price =  chainData.ethereum.usd
  const threshold = FILLTER / price
  const symbol = '$' //price !== 1 ? 'Ξ' : '$'
  return (
    <>
      <Nav ethUsdPrice={price}/>
      <Panel>
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
                  {projMeta.website && (
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Website:
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <a href={projMeta.website} target="_blank" rel="noreferrer" className="text-blue-500 underline whitespace-no-wrap">{projMeta.website}</a>
                      </dd>
                    </div>
                  )}
                  {projMeta.explorer && (
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                      Explorer:
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <a href={projMeta.explorer} target="_blank" rel="noreferrer" className="text-blue-500 underline whitespace-no-wrap">{projMeta.explorer}</a>
                      </dd>
                    </div>
                  )}
                </dl>
            </div>
        </div>
      </Panel>
      <Panel>
        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800">
              <div className="flex items-center">
                  <span className="rounded-xl relative p-4 bg-purple-200">
                      <svg width="40" fill="currentColor" height="40" className="text-purple-500 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z">
                          </path>
                      </svg>
                  </span>
                  <p className="text-md text-black dark:text-white ml-2">
                      Total Value Tracked
                  </p>
              </div>
              <div className="flex flex-col justify-start">
                  <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
                  {symbol} {human(chainData[proj].tvl * price)}
                  </p>
                  <div className="flex items-center text-green-500 text-sm">
                      {/* <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z">
                          </path>
                      </svg> */}
                      {/* <span>
                          5.5%
                      </span> */}
                  </div>
              </div>
            </div>
      </Panel>
      {chainData[proj].bridges.map((bridge, idx) => {
        // console.log('%O', bridge)
        const bridgesMeta = ETH_BRIDGE_CONTRACTS[proj].bridges
        const tokens = bridge.items.filter(item => item.quote > threshold)
        return (
          <Panel key={idx}>
            <div className="shadow-lg p-4 bg-white dark:bg-gray-800">
              <div className="flex items-center">
                <p className="text-md text-black dark:text-white ml-2">
                <a href={`https://etherscan.io/address/${bridge.address}`} target="_blank" rel="noreferrer">🔎</a> {bridgesMeta[idx].name || `Bridge ${idx + 1}`}
                </p>
              </div>
            </div>
            <TokensTree project={proj} tokens={tokens} price={price} />
            <TokensTable>
            {tokens.map(item => {
              // console.log('%O', item)
              const symbol = item.contract_ticker_symbol
              return (
                <TokenTableRow key={symbol} tokenData={item} bridge={bridge.address} sum={`${symbol} $${human(item.quote * price)}`} />
              )
            })}
            </TokensTable>
          </Panel>
        )
      })}
      <Footer/>
    </>
  )
}
