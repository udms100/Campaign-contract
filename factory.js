import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x855a853F0110958D2a76B56141f090fA218B7c05'
);

export default instance;
