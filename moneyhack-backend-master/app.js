const express = require("express");
const Web3 = require("web3");
const bodyParser = require('body-parser')

const { ABI, acc, pwd, mainAddress } = require("./contract");
const app = express();
const web3 = new Web3();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

/*
app.use(function (req, res, next) {
    var origins = [
        'http://localhost:3000',
    ];

    for(var i = 0; i < origins.length; i++){
        var origin = origins[i];
        console.log(req.headers)
        if(req.headers.origin.indexOf(origin) > -1){
            res.header('Access-Control-Allow-Origin', req.headers.origin);
        }
    }
    
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
*/

const { eth } = web3;

web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
const main = eth.contract([ { "constant": false, "inputs": [ { "name": "name", "type": "string" } ], "name": "sets", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "s", "outputs": [ { "name": "", "type": "string", "value": "asdasd" } ], "payable": false, "stateMutability": "view", "type": "function" } ]).at("0xd57DecEE90fca333AB0588F313325259f1e318e2");
const cABI = [{"inputs":[{"name":"st","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
console.log(eth.contract(cABI));



/*const getOrders = (()=>{
  var address;
  var tmp=[];
  for(var i = 0;(address = main.orders(i)) != "0x";i++)
    tmp.push(eth.contract(ABI.order).at(address));
  return tmp;
});*/
// console.log(main)
web3.personal.unlockAccount(acc, pwd);
main.sets('asdsadsa',{from:acc})
// console.log(main);
// const xx = main.createOrder("abc",5,2,3,{ from:acc, value: 0, gas: 70000, gasPrice: 21000000000 })
// console.log(eth.getTransaction("0xa5896c97bc36e76122878b1751a42f7b5565624ad8f5c916e1a45e41e871e9eb"));
// console.log(main.sets("rrr",{from:acc}));

// for(var i in getOrders)
  // console.log(getOrders[i].article());
// const o = getOrders[0]
// web3.personal.unlockAccount(acc, pwd, 1000);
// const f = o.addTender.sendTransaction(0,0,{from:acc});
// app.get("/", function(req, res) {
//   const { personal } = web3;
//   //personal.unlockAccount(req.body.account, req.body.password, 1000);
//   // res.send(main.setData.sendTransaction(req.body.message, { from: req.body.account }));
  
// });

// app.listen(8000, function() {
//   console.log("Our server on 8000 port");
// });
