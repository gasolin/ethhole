import human from 'millify'
import {A} from 'hookrouter'

import { ETH_BRIDGE_CONTRACTS, getTypeMap } from '../data/bridge_contracts.js'

export const TableRow = ({name, data, price}) => {
  const project = data[name]
  const projMeta = ETH_BRIDGE_CONTRACTS[name]
  const tvl = price === 1 ? `Ξ ${human(project.tvl)}` : `$ ${human(project.tvl * price)}`
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
              {projMeta.color && (<div className="flex-shrink-0">
                  <a href={projMeta.website} target="_blank" className="block relative" style={{color: projMeta.color}} rel="noreferrer">
                      {/* <img alt="profil" src={projMeta.logoUrl} class="mx-auto object-cover rounded-full h-10 w-10 "/> */}
                      ●
                  </a>
              </div>)}
              <div className="ml-3">
                <A href={`/project/${name}`} className="text-blue-500 underline whitespace-no-wrap">{name}</A>
              </div>
          </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
              {tvl}
          </p>
      </td>
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
              Share
          </p>
      </td> */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
              <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
              </span>
              <span className="relative">
                  {getTypeMap(projMeta.type)}
              </span>
          </span>
      </td>
    </tr>
  )
}
