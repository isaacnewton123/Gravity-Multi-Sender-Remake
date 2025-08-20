import Header from './components/header'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { gravityAlphaMainnet } from './config/network';
import { http, WagmiProvider } from 'wagmi';
import { QueryClient , QueryClientProvider } from '@tanstack/react-query';


const config = getDefaultConfig({
  appName: 'Gravity MultiSender',
  projectId: 'abd69daf0c462c572fc2c5237e05430d',
  chains: [gravityAlphaMainnet],
  transports: {
    [gravityAlphaMainnet.id]: http()
  }
})

const queryClient = new QueryClient()

function App() {

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
        <div className='bg-gray-100 w-screen h-screen flex justify-between flex-col'>
          <Header />
        </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>

  )
}

export default App
