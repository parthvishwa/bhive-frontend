import { createContext } from "react"
import { initialTheme } from "../theme-reducer";

export const AppThemeContext = createContext(initialTheme);