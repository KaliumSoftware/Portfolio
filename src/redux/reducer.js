import { SET_THEME } from './actions/action-types'

const initialState = {
  theme: 'dark',
}

const reducer = (state = initialState, { type, payload }) => {
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
