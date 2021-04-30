import {Main} from './Main'
import {Project} from './Project'
import {Connext} from './Connext'

export const routes = {
  '/': () => <Main />,
  '/project/connext': () => <Connext/>,
  '/project/:proj': ({proj}) => <Project proj={proj.replaceAll('%20', ' ')} />,
}
