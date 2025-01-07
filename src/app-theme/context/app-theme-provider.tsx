
import React, { useReducer } from 'react';
import { initialTheme, ThemeStateMap } from '../theme-reducer';
import { AppThemeContext } from './app-theme-context';

export const AppThemeProvider: React.FC<{
  children: React.ReactNode;
}> = (props: { children?: React.ReactNode }) => {
  const appThemeReducer = useReducer(ThemeStateMap, initialTheme);
  const { children } = props;

  return (
    <AppThemeContext.Provider value={appThemeReducer}>
      {children}
    </AppThemeContext.Provider>
  );
};
