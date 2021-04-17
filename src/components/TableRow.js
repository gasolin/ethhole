import human from 'human-format'

export const TableRow = ({name, project, ethUsdPrice, showEth}) => (
  <tr>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
            {/* <div class="flex-shrink-0">
                <a href="#" class="block relative">
                    <img alt="profil" src="/images/person/8.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                </a>
            </div> */}
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
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
            </span>
            <span class="relative">
                ZK rollup
            </span>
        </span>
    </td> */}
  </tr>
)
