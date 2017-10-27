const express = require("express");
const Web3 = require("web3");
const bodyParser = require('body-parser')

const contract = require("./contract");

const app = express();
const web3 = new Web3();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


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


const { eth } = web3;

web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

const helloContract = eth.contract(contract.ABI).at(contract.address);

app.post("/", function(req, res) {
  console.log("################################################################################################################")
  const { personal } = web3;
  personal.unlockAccount(req.body.account, req.body.password, 1000);
  console.log(req.body.message);
  console
  res.send(helloContract.setData.sendTransaction(req.body.message, { from: req.body.account }));
});

app.listen(8000, function() {
  console.log("Our server on 8000 port");
});
