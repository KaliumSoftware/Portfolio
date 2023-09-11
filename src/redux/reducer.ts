//types
import { AppState, Action } from '../utils/Types'
//actions-types
import { SET_THEME } from './actions/action-types'

const initialState: AppState = {
  theme: 'dark',
}

const reducer = (state = initialState, action: Action) => {
  const { type, payload } = action
  switch (type) {
    case SET_THEME:
      return {
        ...state,
        theme: payload,
      }
    default:
      return state
  }
}

export default reducer
