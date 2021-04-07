import RouteEnum from '@constants/RouteEnum'
import { push } from 'connected-react-router'
import { useDispatch, useSelector } from 'react-redux'

import * as ClickSelectors from '@selectors/click/click-selector'
import * as ClickActions from '@redux/click/click-action'

const App = () => {
  const dispatch = useDispatch()
  const clickCount = useSelector(ClickSelectors.clickQuantity)

  const goToPage2 = () => {
    dispatch(push(RouteEnum.Page2))
  }

  const incrementClickQuantity = () => dispatch(ClickActions.incrementClick())

  return (
    <div className="App">
      <p id="click-display">Quantidade de clicks: {clickCount}</p>
      <button onClick={incrementClickQuantity}>Click aqui para incrementar</button>
      <br />
      <button onClick={goToPage2}>Ir para página 2</button>
    </div>
  )
}

export default App
