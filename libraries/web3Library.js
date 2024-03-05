// libraries/web3Library.js
import Web3 from 'web3';

async function getEthBalance(walletAddress) {
  try {
    const web3 = new Web3('YOUR_INFURA_URL');  // Gantilah dengan URL Infura atau penyedia Web3 lainnya
    const balanceWei = await web3.eth.getBalance(walletAddress);
    const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
    return balanceEth;
  } catch (error) {
    console.error('Terjadi kesalahan pada web3Library:', error.message);
    return null;
  }
}

export default getEthBalance;