import { http } from 'viem';
import abi from './ABI.json'
import { sepolia } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

const sepoliaContract = '0x69906eA072aF618a12c24aED93005393AE5Cd7C6'

const projectId = import.meta.env.VITE_PROJECT_ID

const config = getDefaultConfig({
  appName: 'Gravity MultiSender',
  projectId: projectId,
  chains: [sepolia],
  transports: {
    [sepolia.id]: http()
  }
})

export {
  config,
  abi,
  sepoliaContract
}