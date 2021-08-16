import human from 'millify'
import { useCoingeckoTokenPrice } from '@usedapp/coingecko'
import { formatUnits } from '@ethersproject/units'

import { useTotalSupply, useDecimals } from '../hooks/useTotalSupply'

const countDecimals = function(value) {
  if (value && Math.floor(value) !== value) {
    const dec = value.toString().split(".")[1]
    return (dec && dec.length) || 0;
  }
  return 0;
}

export const TotalSupplyRow = ({name, tokenAddress, type}) => {
  // console.warn('tokenAddress', tokenAddress)
  const tokenSupply = useTotalSupply(tokenAddress)
  const decimals = useDecimals(tokenAddress)
  const tokenPrice = useCoingeckoTokenPrice(tokenAddress, 'usd')
  // console.warn('price ', tokenPrice)
  const priceDecimals = countDecimals(tokenPrice)
  // console.warn('decimals ', priceDecimals, decimals)

  if (tokenPrice && tokenSupply && decimals) {
    const value = tokenSupply.mul(tokenPrice * (priceDecimals ? 10**priceDecimals : 1))
    // console.warn(`>> ${name} value `, value.toString())
    const val = formatUnits(value, decimals + priceDecimals)
    // console.warn(`>> ${name} val `, val)
    return (
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center ml-3">
            {name}
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
          {tokenSupply && human(val)}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
            </span>
            <span className="relative">
              {type}
            </span>
          </span>
        </td>
      </tr>
    )
  }
  return <p/>
}
