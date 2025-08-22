import { useAccount } from "wagmi"
import Step2 from "./step-2"
import Step1 from "./step-1"

const MultiSend = () => {

    const {isConnected} = useAccount()


    return (
        <div className="bg-pink-400 flex flex-col items-center justify-center gap-4 max-w-7xl p-4 rounded-xl shadow-lg w-2/4 ">
            {
                isConnected === true ? <Step2/> : <Step1/>
            }
        </div>
    )
}

export default MultiSend