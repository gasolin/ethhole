export const TokenTableRow = ({token, sum, logo_url}) => {
  console.log('logo ', token, ': ', logo_url)
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
              <div className="ml-3 flex flex-row">
                <img src={logo_url} width="16" height="12"/>
                <span className="pl-2">{token}</span>
              </div>
          </div>
      </td>
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {balance}
          </p>
      </td> */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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
