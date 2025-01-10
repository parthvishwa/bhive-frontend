
import React, { useReducer } from 'react';
import { AppThemeContext } from './app-state-context';
import { AppStateType } from '../types/app-state-types';

export const AppStateProvider: React.FC<{
  children: React.ReactNode[] | React.ReactNode;
  reducer: React.Reducer<AppStateType, {type: string}>;
  initialState: AppStateType;
}> = (props: { children: React.ReactNode[] | React.ReactNode, reducer: React.Reducer<
  AppStateType, {type: string}>, initialState: AppStateType }) => {
  
  const { children, reducer, initialState } = props;
  const appStateReducer = useReducer(reducer, initialState);

  return (
    <AppThemeContext.Provider value={appStateReducer}>
      {children}
    </AppThemeContext.Provider>
  );
};
