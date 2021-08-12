import human from 'millify'
import { useCoingeckoTokenPrice } from '@usedapp/coingecko'

import { useTotalSupply, useDecimals } from '../hooks/useTotalSupply'

const countDecimals = function(value) {
  if (value && Math.floor(value) !== value) {
    const dec = value.toString().split(".")[1]
    return (dec && dec.length) || 0;
  }
  return 0;
}

export const TotalSupply = ({name, tokenAddress}) => {
  // console.warn('tokenAddress', tokenAddress)
  const tokenSupply = useTotalSupply(tokenAddress)
  const decimals = useDecimals(tokenAddress)
  const tokenPrice = useCoingeckoTokenPrice(tokenAddress, 'usd')
  console.warn('price ', tokenPrice)
  const priceDecimals = countDecimals(tokenPrice)
  console.warn('decimals ', priceDecimals, decimals)

  if (tokenPrice && tokenSupply && decimals) {
    // ethers.utils.formatUnits(value, 8)
    const value = priceDecimals
      ? tokenSupply.mul(tokenPrice * 10**priceDecimals)
      : tokenSupply.mul(tokenPrice)
    const val = value.div(10** (decimals + priceDecimals))
    // console.warn('>> ', val.toString())
    return <p>{name}: {tokenSupply && human(val.toString())}</p>
  }
  return <p/>
}
