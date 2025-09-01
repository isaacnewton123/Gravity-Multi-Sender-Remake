import { createContext, useContext } from "react";
import type { DataContextType } from "./types";

export const DataContext =createContext<DataContextType | undefined>(undefined)

export const useDataContext = () => {
    const context = useContext(DataContext)
    if (!context) {
        throw new Error ('DataContext must be used within an DataProvider')
    }
    return context
}