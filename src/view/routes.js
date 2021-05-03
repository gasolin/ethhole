import {Main} from './Main'
import {Project} from './Project'
// import {Connext} from './Connext'

export const routes = {
  '/': () => <Main />,
  '/l2': () => <Main layer2 />,
  '/layer2': () => <Main layer2 />,
  // '/project/connext': () => <Connext/>,
  '/project/:proj': ({proj}) => <Project proj={proj.replaceAll('%20', ' ')} />,
}
