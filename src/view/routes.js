import {Main} from './Main'
import {Project} from './Project'

export const routes = {
  '/': () => <Main />,
  '/project/:proj': ({proj}) => <Project proj={proj} />,
}
