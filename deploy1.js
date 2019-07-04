const Hd =require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile1');
const provider = new Hd('glue spirit wink peace hint smile miracle model snake spice symptom anchor','https://rinkeby.infura.io/v3/83efcea1b0a24e929a3827f90391d777');
const web3 = new Web3(provider);
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
 
    console.log('Attemting to deploy from contract', accounts[0]);
 
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode, arguments:['Hi there!']})
    .send({ gas: '1000000', from: accounts[0]});
 
    console.log('Contact deployed to :', result.options.address);
};
deploy();
