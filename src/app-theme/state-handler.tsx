import {
  PALETTE_OPTIONS_DARK,
  THEME_OPTIONS,
} from '../constants/theme-constant';
import { AppStateType, appThemeValueType } from './types/app-state-types';

const initialState: AppStateType = {
  appTheme: 'light',
};

export const getDefaultState = (): AppStateType => {
  return initialState;
};

export const getThemeOptions = (themeColor: appThemeValueType = 'light') => {
  const themeOptions = JSON.parse(JSON.stringify(THEME_OPTIONS));
  return {
    ...themeOptions,
    palette: getPaletteOptions(themeColor), //,
  };
};

function getPaletteOptions(theme: appThemeValueType) {
  return theme === 'light'
    ? { ...THEME_OPTIONS.palette }
    : { ...PALETTE_OPTIONS_DARK };
}
