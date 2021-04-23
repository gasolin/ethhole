import {Main} from './Main'

export const routes = {
  '/': () => ({price, showEth}) => <Main price={price} showEth={showEth} />,
}
