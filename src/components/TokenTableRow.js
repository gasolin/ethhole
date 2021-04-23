import human from 'millify'

export const TokenTableRow = ({token, sum}) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
              <div className="ml-3">
                {token}
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
