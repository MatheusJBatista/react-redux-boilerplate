import { connectRouter } from 'connected-react-router/immutable'
import { combineReducers } from 'redux'

import click from './click/click-reducer'

const RootReducer = history => {
  const reducerMap = {
    click,
    router: connectRouter(history),
  }

  return combineReducers(reducerMap)
}

export default RootReducer
