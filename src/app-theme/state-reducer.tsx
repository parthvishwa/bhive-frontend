import { AppStateType, appThemeValueType } from './types/app-state-types';

export const initialState = { appTheme: 'light' as appThemeValueType };

export const updateAppState = (
  state: AppStateType = initialState,
  action: { type: string }
): AppStateType => {
  switch (action.type) {
    case 'toggleTheme': 
      return {...state, appTheme: state.appTheme === 'light' ? 'dark' : 'light'};
    default:
      return state;
  }
};
