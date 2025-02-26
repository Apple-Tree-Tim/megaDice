import { polygon, polygonAmoy } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
export const config = getDefaultConfig({
  appName: 'AR Plus',
  projectId: '7e9ac68e0bc07dcc288064bb6df1110c',
  chains: [polygon],
  ssr: true, // If your dApp uses server side rendering (SSR)
});