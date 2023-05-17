var express = require('express');
var router = express.Router();
var ether=require('ether')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/connectwallet', async function(req, res, next) {
  try {
    const {ethereum}=window
    if(!ethereum)
    {
      console.log("Metamask not found");
      return
    }
    let chainId=await ethereum.request({method:'eth_chainId'})
    console.log('Connected to chain',chainId);
    const sepoliaChainId=11155111
    if(chainId != sepoliaChainId)
    { 
      alert('not connected to sepolia...network')
      setcorrectNetwork(false)
      return
    }else{
      setcorrectNetwork(true)
    }
    const accounts=await ethereum.request({method:'eth_requestAccounts'})
    console.log('found accounts',accounts);
    setisUserLoggedIn(true)
    setcurrentAccount(accounts[0])
    console.log(currentAccount);
    
  } catch (error){
    console.log(error);
    
  }

  res.render('index', { title: 'Express' });
});

router.get('/addbill', function(req, res, next) {
  let bill ={
  billlText:input,
   
  }

  try {
    const {ethereum}=window
    if(ethereum)
    {
      const provider=new ethers.providers.Web3Provider(ethereum)
      const signer=provider.getSigner()
      const TaskContract=new ethers.Contract(
        BillContractAdress,
        BillAbi.abi,
        signer
      )
      BillContract.AddBill(bill).then(res=>{
        setbills([...tasks,task])
      

      })
    }else{
      console.log("Ethereum obj not exist");
    }
    
  } catch (error) {
    console.log(error);
    
  }
  setinput('')

  res.render('index', { title: 'Express' });
});




module.exports = router;
