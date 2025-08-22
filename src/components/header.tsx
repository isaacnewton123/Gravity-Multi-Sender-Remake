import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
    return (
        <div className="bg-pink-600 py-4">
            <div className='max-w-4xl mx-auto flex justify-between flex-row items-center'>
                <div className="flex justify-end items-center">
                    <img src="logo.webp" className="w-10 h-10 cursor-pointer" />
                </div>
                <div className="w-65 flex justify-start items-center" >
                    <ConnectButton />
                </div>
            </div>

        </div>
    )
}

export default Header