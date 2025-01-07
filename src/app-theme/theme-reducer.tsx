import { ThemeStateType } from "./types/theme-types"

export const initialTheme = {appTheme: {}} 

export const ThemeStateMap = (state: ThemeStateType = initialTheme, action: {type: string}) => {
  switch (action.type) {
    case 'toggle':
      return state
    default:
      return state
  }
}
