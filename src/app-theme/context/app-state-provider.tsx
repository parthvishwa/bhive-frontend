
import React, { useReducer } from 'react';
import { AppStateContext } from './app-state-context';
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
    <AppStateContext.Provider value={appStateReducer}>
      {children}
    </AppStateContext.Provider>
  );
};
