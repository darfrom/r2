const mainAddress="0xEBd7D67ceFc87F510C615Dee62e88F70660028dd";
const acc="0x92a1489273471247bbc3424D230C433BaBc4a04b";
const pwd="88005553535";	

const ABI=[ { "constant": false, "inputs": [ { "name": "name", "type": "string" }, { "name": "count", "type": "uint256" }, { "name": "price", "type": "uint256" }, { "name": "timestamp", "type": "uint256" } ], "name": "createOrder", "outputs": [ { "name": "adr", "type": "address" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "orders", "outputs": [ { "name": "", "type": "address", "value": "0x" } ], "payable": false, "stateMutability": "view", "type": "function" } ];
module.exports = {
	mainAddress,
	ABI,
	acc,
	pwd
};
