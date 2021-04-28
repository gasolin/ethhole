export const TokenTableRow = ({bridge, idx, tokenData, sum}) => {
  const {contract_ticker_symbol, logo_url, contract_address} = tokenData
  return (
    <tr>
      <td className={`${idx%2 ? 'bg-white' : 'bg-gray-50'} px-5 py-5 border-b border-gray-200 bg-white text-sm`}>
          <div className="flex flex-row items-center">
              <img src={logo_url} width="14" height="14"/>
              <div className="ml-3">
                <a href={`https://etherscan.io/token/${contract_address}?a=${bridge}`} target="_blank" rel="noreferrer" className="text-blue-500 underline whitespace-no-wrap pl-2">{contract_ticker_symbol}</a>
              </div>
          </div>
      </td>
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {balance}
          </p>
      </td> */}
      <td className={`${idx%2 ? 'bg-white' : 'bg-gray-50'} px-5 py-5 border-b border-gray-200 bg-white text-sm`}>
          <p className="text-gray-900 whitespace-no-wrap">
              {sum}
          </p>
      </td>
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
              <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
              </span>
              <span className="relative">
                  {getTypeMap(projMeta.type)}
              </span>
          </span>
      </td> */}
    </tr>
  )
}
