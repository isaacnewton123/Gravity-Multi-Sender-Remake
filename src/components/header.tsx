import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
    return (
        <div className="w-screen h-20 bg-pink-600 flex justify-between flex-row items-center">
            <div className="w-30 flex justify-end items-center">
                <img src="logo.webp" className="w-10 h-10 cursor-pointer" />
            </div>
            <div className="w-65 flex justify-start items-center" >
                <ConnectButton />
            </div>
        </div>
    )
}

export default Header