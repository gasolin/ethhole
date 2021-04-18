export const Table = ({children}) => (
  <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
    <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Name
                            </th>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Value Locked
                            </th>
                            {/* <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Market Share
                            </th> */}
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Type
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {children}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </div>
)
