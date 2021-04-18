import useDimensions from "react-cool-dimensions"
import _throttle from 'lodash/throttle'

export const Panel = ({children}) => {
  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: _throttle(({ observe, unobserve, width, height, entry }) => {
      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    }, 500),
  });
  const adaptWidth = width > 600
    ? 600
    : width < 450
      ? 400
      : width
  // console.log(width, adaptWidth)
  return (
    <div ref={observe} className="container mx-auto px-4 sm:px-8 max-w-3xl">
      <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                {children}
              </div>
          </div>
      </div>
    </div>
  )
}
