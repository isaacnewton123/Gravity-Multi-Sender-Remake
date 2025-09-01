import { useEffect, useState, type ReactNode } from "react"
import { StepContext } from "./useStepContext"

export const StepProvider = ({children} : {children: ReactNode}) => {
    const [step, setStep] = useState<number>(1)
    
    useEffect(() => {
        console.log(step)
    },[step])
    
   const value = {
        step,
        setStep
    }

    return <StepContext value={value}>{children}</StepContext>
}
