import { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'

import { ConnectedRouter } from 'connected-react-router/immutable'
import { Route, Switch } from 'react-router-dom'

import RouteEnum from '../constants/RouteEnum'

const Page1 = lazy(() => import('./home/home'))
const Page2 = lazy(() => import('./page-2/page-2'))

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Suspense fallback={() => <h1>carregando</h1>}>
        <Switch>
          <Route exact path={RouteEnum.Home} component={Page1} />
          <Route path={RouteEnum.Page2} component={Page2} />
          <Route component={() => <h1>Página não encontrada</h1>} />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object.isRequired,
}

export default App
