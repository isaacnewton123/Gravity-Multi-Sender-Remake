import Header from './components/header'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { gravityAlphaMainnet } from './config/network';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http } from 'viem'
import TextHeader from './components/textHeader';
import StepBar from './components/step-bar';
import MultiSend from './components/multi-send';
import { StepProvider } from './context/stepContext';

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
          <StepProvider>
          <Header />
          <div className='max-w-4xl mx-auto space-y-4 py-12'>
            <TextHeader />
            <div className='flex flex-col justify-end items-center'>
              <StepBar />
            </div>
            <div className='w-full h-80 overflow-hidden flex justify-center'>
              <MultiSend />
            </div>
          </div>
          </StepProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>

  )
}

export default App
