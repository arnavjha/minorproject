
//send button..................................................................................
document.getElementById("send").addEventListener("click" ,function(){
    document.querySelector("#popsend").style.display = "flex"
})

document.querySelector(".closeS").addEventListener("click",function()
{
    document.querySelector("#popsend").style.display = "none"
})

//deposite button..........................................................................
document.getElementById("deposite").addEventListener("click" ,function(){
    document.querySelector("#popdeposite").style.display = "flex"
})

document.querySelector(".closeD").addEventListener("click",function()
{
    document.querySelector("#popdeposite").style.display = "none"
})

//balance type list.............................................................
var a=1;
function showHide(){
    if(a==1){
        document.getElementById('typelist').style.display = "flex";
        return a=0;
    }
    else{
        document.getElementById('typelist').style.display = "none";
        return a=1;
    }
}

/*...................backend..............................backend ko connect krne k liye dummy function h .....
......................................... ..............issme tu apna variable aur id paste kr dena  ..................... 
........backend..........*/


/*


var contract;
$(document).ready(function(){
    // suppose tum web3 use kr rhe ho

    web3 = new web3(web3.currentProvider);//web3.currentProvider  ye testnet rinkeby se.....
    
    var address = "yaha per address dalna h remix me  jo diya  ya jo v backend me h "
    abi = [ yaha per abi paste kr do];
     
    contract = new web3.eth.Contract(abi.address)

    contract.method.getBalance().call.then(function(bal){     // getBalance function h backend me
        $('#showBalance').html(bal)
    })

})

//send amount.........................
$('#sendact').click(function(){
    var amount = 0;
    amount = parseInt($('#sendAmount').val())
    web3.eth.getAccount().then(function(accounts){                 // getAccount function h backend me
        var acc = accounts[0];
        return contract.method.deposite(amount).send({from:acc});   //deposite function in backend
    }).then(function(txt){
        console.log(txt);
    }).catch(function(txt){
        console.log(txt);
    }) 
})

//deposite amount..................
$('#depositeAamount').click(function(){
    var amount = 0;
    amount = parseInt($('#depositeAmount').val())
    web3.eth.getAccount().then(function(accounts){                  // getAccount function h backend me
        var acc = accounts[0];
        return contract.method.withdraw(amount).send({from:acc});  // withdraw function in backend
    }).then(function(txt){
        console.log(txt);
    }).catch(function(txt){
        console.log(txt);
    }) 
})


*/