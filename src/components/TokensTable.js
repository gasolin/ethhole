export const TokensTable = ({children}) => (
  <table className="min-w-full leading-normal">
      <thead>
          <tr>
              <th scope="col" className="px-5 py-3 bg-white  border-t border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                  Token
              </th>
              {/* <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                  Balance
              </th> */}
              <th scope="col" className="px-5 py-3 bg-white  border-t border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                  Value
              </th>
              <th scope="col" className="px-5 py-3 bg-white  border-t border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                  Type
              </th>
          </tr>
      </thead>
      <tbody>
          {children}
      </tbody>
  </table>
)
