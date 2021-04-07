import RouteEnum from '@constants/RouteEnum'
import { push } from 'connected-react-router'
import { useDispatch, useSelector } from 'react-redux'

import * as ClickSelectors from '@selectors/click/click-selector'
import * as ClickActions from '@redux/click/click-action'

import environment from '@environment'

const App = () => {
  const dispatch = useDispatch()
  const clickCount = useSelector(ClickSelectors.clickQuantity)

  const goToPage2 = () => {
    dispatch(push(RouteEnum.Page2))
  }

  const incrementClickQuantity = () => dispatch(ClickActions.incrementClick())

  return (
    <div className="App">
      <p id="click-display">
        {environment.myNameIs} you clicked {clickCount} times
      </p>
      <button onClick={incrementClickQuantity}>Click to increment</button>
      <br />
      <button onClick={goToPage2}>Go to page 2</button>
    </div>
  )
}

export default App
