import RouteEnum from '@constants/RouteEnum'
import { push } from 'connected-react-router'
import { useDispatch, useSelector } from 'react-redux'

import * as ClickSelectors from '@selectors/click/click-selector'
import * as ClickActions from '@redux/click/click-action'

import environment from '@environment'
import { Paragraph } from './home-style'

const App = () => {
  const dispatch = useDispatch()
  const clickCount = useSelector(ClickSelectors.clickQuantity)

  const handleGoToPage2 = () => {
    dispatch(push(RouteEnum.Page2))
  }

  const handleIncrementClickQuantity = () => dispatch(ClickActions.incrementClick())

  return (
    <div className="App">
      <Paragraph>
        {environment.myNameIs} you clicked {clickCount} times
      </Paragraph>
      <button onClick={handleIncrementClickQuantity}>Click to increment</button>
      <br />
      <button onClick={handleGoToPage2}>Go to page 2</button>
    </div>
  )
}

export default App
