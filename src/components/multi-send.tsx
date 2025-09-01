import { useAccount } from "wagmi"
import Step2 from "./step-2"
import Step1 from "./step-1"
import { useEffect } from "react"
import { useStepContext } from "../context/step/useStepContext"
import Step3 from "./step-3"

const MultiSend = () => {

    const {step, setStep} = useStepContext()
    const {isConnected} = useAccount()

    useEffect(() => {
        if (isConnected) {
            setStep(2)
        } else {
            setStep(1)
        }
    },[isConnected, setStep])


    return (
        <div className="bg-pink-400 flex flex-col items-center justify-center gap-4 max-w-7xl p-4 rounded-xl shadow-lg w-2/4 ">
            {
                step === 1 ? <Step1 /> : step === 2 ? <Step2 /> : <Step3 />            
            }
        </div>
    )
}

export default MultiSend