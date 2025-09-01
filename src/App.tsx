import Header from './components/header'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
// import { gravityAlphaMainnet } from './config/network';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TextHeader from './components/textHeader';
import StepBar from './components/step-bar';
import MultiSend from './components/multi-send';
import { StepProvider } from './context/step/stepContext';
import { config } from './config/network';
import { DataProvider } from './context/data/dataContext';
import { ToastContainer } from 'react-toastify';


const queryClient = new QueryClient()


function App() {

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <ToastContainer/>
          <StepProvider>
            <DataProvider>
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
          </DataProvider>
          </StepProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>

  )
}

export default App
