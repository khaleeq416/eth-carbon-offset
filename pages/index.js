// 1️⃣ index.js (Main Page)
import Head from 'next/head';
import WalletConnect from '../components/WalletConnect';
import CarbonCalculator from '../components/CarbonCalculator';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ETH Carbon Offset</title>
      </Head>
      <h1>Offset Your Ethereum Carbon Footprint</h1>
      <WalletConnect />
      <CarbonCalculator />
    </div>
  );
}
