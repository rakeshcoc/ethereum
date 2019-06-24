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
/*
class Car
{
	park()
	{
		return 'stopped';
	}
    drive()
    {
     return 'vroom';
 	}
}
let car;
beforeEach(function()
{
	car = new Car();
});

describe('Car',function() {
it('can park',function()
{
	
	assert.equal(car.park(), 'stopped');
})
it('can drive',function()
{
	assert.equal(car.drive(), 'vroom');
});
});
*/
const {interface, bytecode} = require('../compile');
let account;
let inbox;
beforeEach(async function()
{
	account = await	web3.eth.getAccounts()
	inbox = await new web3.eth.Contract(JSON.parse(interface))
	.deploy({data: bytecode, arguments: ['Hi Hello!']})
	.send({from: account[0],gas: '1000000'})

});
describe('Inbox',function()
{
	it('deploys a contract',function()
		{
			assert.ok(inbox.options.address);
		});
});