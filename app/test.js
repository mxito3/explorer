var Web3 = require('web3');
// begin AltSheets changes
var web3 = new Web3();
rpc_addr="http://47.75.243.164:9001"
console.log(rpc_addr)
web3.setProvider(new web3.providers.HttpProvider(rpc_addr));

if(!web3.isConnected()) {
    console.log("1")
    $('#connectwarning').modal({keyboard:false,backdrop:'static'})
    $('#connectwarning').modal('show')
}
else{
    console.log("2")
}