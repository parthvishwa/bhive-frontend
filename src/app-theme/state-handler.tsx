import { THEME_OPTIONS } from '../constants/theme-constant';
import { AppStateType, appThemeValueType } from './types/app-state-types';

const initialState: AppStateType = {
  appTheme: 'light',
};

export const getDefaultState = (): AppStateType => {
  return initialState;
};

export const getThemeOptions = (themeColor: appThemeValueType = 'light') => {
  let themeOptions = JSON.parse(JSON.stringify(THEME_OPTIONS));
  return {
    ...themeOptions,
    palette: { ...themeOptions.palette, mode: themeColor },
  };
};
