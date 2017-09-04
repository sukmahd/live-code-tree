import { combineReducers } from 'redux'

import pohonReducer from './pohonReducer'

const rootReducer = combineReducers({
  pohonStore: pohonReducer
})

export default rootReducer