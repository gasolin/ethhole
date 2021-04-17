export const Badge = ({text}) => (
  <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
      <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
      </span>
      <span class="relative">
        {text}
      </span>
  </span>
)
