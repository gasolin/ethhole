import human from 'human-format'
import { ETH_BRIDGE_CONTRACTS, getTypeMap } from '../data/bridge_contracts.js'

export const TableRow = ({name, data, ethUsdPrice, showEth}) => {
  const project = data[name]
  const projMeta = ETH_BRIDGE_CONTRACTS[name]
  return (
    <tr>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div class="flex items-center">
              {projMeta.color && (<div class="flex-shrink-0">
                  <a href={projMeta.website} target="_blank" class="block relative" style={{color: projMeta.color}} rel="noreferrer">
                      {/* <img alt="profil" src={projMeta.logoUrl} class="mx-auto object-cover rounded-full h-10 w-10 "/> */}
                      ●
                  </a>
              </div>)}
              <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                      {name}
                  </p>
              </div>
          </div>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">
              ${showEth ? `♦${human(project.tvl)}` : human(project.tvl * ethUsdPrice)}
          </p>
      </td>
      {/* <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">
              Share
          </p>
      </td> */}
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
              <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
              </span>
              <span class="relative">
                  {getTypeMap(projMeta.type)}
              </span>
          </span>
      </td>
    </tr>
  )
}
