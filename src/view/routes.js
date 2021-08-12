import {Main} from './Main'
import {Project} from './Project'
import {Liquidity} from './Liquidity'
import {Flow} from './Flow'

export const routes = {
  '/': () => <Main />,
  '/l2': () => <Main layer2 />,
  '/layer2': () => <Main layer2 />,
  '/liquidity/:proj': ({proj}) => <Liquidity proj={proj.replaceAll('%20', ' ')}/>,
  '/project/:proj': ({proj}) => <Project proj={proj.replaceAll('%20', ' ')} />,
  '/flow': () => <Flow />
}
