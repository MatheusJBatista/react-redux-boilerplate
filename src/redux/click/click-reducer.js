import { produce } from 'immer'
import baseReducer from '@utilities/base-reducer'
import * as Actions from './click-action'

const initialState = {
  quantity: 0,
}

const clickReducer = baseReducer(initialState, {
  [Actions.INCREMENT_CLICK](state) {
    return produce(state, draftState => {
      draftState.quantity = draftState.quantity + 1
    })
  },
  [Actions.CLEAR_CLICK](state) {
    return produce(state, draftState => {
      draftState.quantity = initialState.quantity
    })
  },
})

export default clickReducer
