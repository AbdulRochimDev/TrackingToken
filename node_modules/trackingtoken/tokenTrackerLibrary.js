// tokenTrackerLibrary.js
import axiosLibrary from './libraries/axiosLibrary';
import web3Library from './libraries/web3Library';
import _ from './libraries/lodashLibrary';

async function trackTokenBalance(walletAddress) {
  try {
    // Gantilah dengan alamat kontrak token Ethereum yang ingin Anda pantau
    const tokenAddress = '0x123abc...';

    const tokenBalance = await web3Library.getEthBalance(tokenAddress);
    if (tokenBalance !== null) {
      console.log(`Saldo Token ETH pada alamat ${walletAddress}: ${tokenBalance} ETH`);
    }

    // Optional: Lakukan permintaan HTTP untuk mendapatkan informasi tambahan tentang token
    const tokenInfoUrl = 'https://api.coingecko.com/api/v3/coins/ethereum';  // Contoh menggunakan CoinGecko API
    const tokenInfo = await axiosLibrary(tokenInfoUrl);

    if (tokenInfo !== null) {
      console.log(`Informasi Token ETH: ${_.getProperty(tokenInfo, 'name', '')} (${_.getProperty(tokenInfo, 'symbol', '')})`);
    }

    return tokenBalance;
  } catch (error) {
    console.error('Terjadi kesalahan pada tokenTrackerLibrary:', error.message);
    return null;
  }
}

export default trackTokenBalance;