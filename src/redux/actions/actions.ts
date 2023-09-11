import { SET_THEME } from './action-types'

export const setTheme = (theme: string) => ({
  type: SET_THEME,
  payload: theme,
})
