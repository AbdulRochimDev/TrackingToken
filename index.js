// index.js
import trackTokenBalance from './tokenTrackerLibrary';

async function main() {
  const walletAddress = '0xabc123...';  // Gantilah dengan alamat dompet Ethereum yang ingin Anda lacak
  await trackTokenBalance(walletAddress);
}

main();