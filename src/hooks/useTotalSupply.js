import { ERC20Interface, useContractCall } from '@usedapp/core'
// import { Interface } from '@ethersproject/abi'

// import ERC20 from './ERC20.json'
// const ERC20Interface = new Interface(ERC20.abi)

export function useTotalSupply(tokenAddress) {
  const [totalSupply] =
    useContractCall(
      tokenAddress && {
        abi: ERC20Interface, // ABI interface of the called contract
        address: tokenAddress, // On-chain address of the deployed contract
        method: 'totalSupply', // Method to be called
      }
    ) ?? []
  return totalSupply
}

export function useDecimals(tokenAddress) {
  const [decimals] =
    useContractCall(
      tokenAddress && {
        abi: ERC20Interface, // ABI interface of the called contract
        address: tokenAddress, // On-chain address of the deployed contract
        method: 'decimals', // Method to be called
      }
    ) ?? []
  return decimals
}
