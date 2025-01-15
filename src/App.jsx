import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
const config = getDefaultConfig({
  appName: 'AR Plus',
  projectId: '7e9ac68e0bc07dcc288064bb6df1110c',
  // chains: [mainnet, polygon, optimism, arbitrum, base],
  chains: [polygon],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/">
                  <Route index element={<Landing />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}

export default App
