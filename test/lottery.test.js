const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const OPTIONS = {
      defaultBlock: "latest",
      transactionConfirmationBlocks: 1,
      transactionBlockTimeout: 5
    };
const web3 = new Web3(provider, null, OPTIONS);
const {interface, bytecode} = require('../compile');
let account;
let inbox;
beforeEach(async function()
{
	account = await	web3.eth.getAccounts()
	lottery = await new web3.eth.Contract(JSON.parse(interface))
	.deploy({data: bytecode})
	.send({from: account[0],gas: '1000000'})

});
describe('Lottery',function()
{
	it('deploys a contract',function()
		{
			assert.ok(lottery.options.address);
		});
});