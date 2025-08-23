import { ConnectButton } from "@rainbow-me/rainbowkit"

const Step1 = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 max-w-7xl p-4" >
            <h2 className="text-pink-300 text-2xl jockey-one-regular">
                connect wallet to continue
            </h2>
            <ConnectButton />
        </div>
    )
}

export default Step1