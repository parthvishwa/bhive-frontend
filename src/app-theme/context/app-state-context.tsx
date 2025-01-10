import { createContext, Dispatch } from "react";
import { AppStateType } from "../types/app-state-types";

export const AppThemeContext = createContext<[AppStateType, Dispatch<{ type: string; }>]>(null as unknown as [AppStateType, Dispatch<{ type: string; }>]);