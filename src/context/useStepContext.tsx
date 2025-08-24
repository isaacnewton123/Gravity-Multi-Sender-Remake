import { createContext, useContext } from "react";
import type { StepContextType } from "./tpes";

export const StepContext =createContext<StepContextType | undefined>(undefined)

export const useStepContext = () => {
    const context = useContext(StepContext)
    if (!context) {
        throw new Error ('StepContext must be used within an AuthProvider')
    }
    return context
}