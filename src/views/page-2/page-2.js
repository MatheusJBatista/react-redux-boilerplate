import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import * as ClickActions from '@redux/click/click-action'

const Page2 = ({ history }) => {
  const dispatch = useDispatch()
  const clearQuantity = () => dispatch(ClickActions.clearClicks())

  return (
    <>
      <button onClick={clearQuantity}>Limpar quantidade</button>
      <br />
      <button onClick={history.goBack}>Voltar para página anterior</button>
    </>
  )
}

Page2.propTypes = {
  history: PropTypes.object.isRequired,
}

export default Page2
