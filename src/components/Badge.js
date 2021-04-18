export const Badge = ({text}) => (
  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
      <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
      </span>
      <span className="relative">
        {text}
      </span>
  </span>
)
