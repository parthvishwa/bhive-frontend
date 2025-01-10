import { createContext, Dispatch } from "react";
import { AppStateType } from "../types/app-state-types";

export const AppStateContext = createContext<[AppStateType, Dispatch<{ type: string; }>]>(null as unknown as [AppStateType, Dispatch<{ type: string; }>]);