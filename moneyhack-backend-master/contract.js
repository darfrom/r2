const ABI = [ { "constant": true, "inputs": [], "name": "getData", "outputs": [ { "name": "", "type": "string", "value": "рп" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "helloString", "type": "string" } ], "name": "setData", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0x841a38f5a0c459c68866da1676d75a1dca15e8fc" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" } ];
const address = "0xbcC67b9b8F0B936660c287823890983F55d4894e"

module.exports = {
	ABI,
	address
};