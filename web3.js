import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // we are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on the SERVER OR ATHE USER IS NOT RUNNING metamask
    const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/zbUNEm2P7LVtsSzvFlk7'
  );
  web3 = new Web3(provider);
}

export default web3;
