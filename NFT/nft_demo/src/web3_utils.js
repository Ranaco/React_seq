import Web3 from 'web3';
import Color from './truffle_build/Color.json';

let contract;
let account;

const loadWeb3 = async () => {
    
        if(window.ethereum){
            window.web3 = new Web3(window.ethereum);
           try{
            await window.ethereum.enable();
           }catch(err) {
               console.log(err);
               window.alert(err);
           }

        } else if(window.web3){
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
  
}

const loadBlockChainData = async (
    setAccount,
    setContract,
    setExisitingColors,
    setTotalSupply,
) => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    account = accounts[0];
    const networkId = await web3.eth.net.getId();
    console.log(networkId);
    const networkData = Color.networks[networkId];
    console.log(networkData);
    if(networkData){
        const abi =  Color.abi;
        const address = networkData.address;
         contract = new web3.eth.Contract(abi, address);
        const totalSupply = await contract.methods.totalSupply().call();//.call() is used to get the data from the blockchain//.send() is used to send the data to the blockchain//To use the methods of the contract, you need to call the /*methods*/ of the contract.
        let response = [];
         for(var i = 0; i < totalSupply; i++){
             const color = await contract.methods.colors(i).call();  
             response.push(color);
         }
     setTotalSupply(totalSupply);//setTotalSupply is a function that is passed to the NavBar component
    setContract(contract);
    // console.log(response);
     setExisitingColors(response);
    }else {
            console.log('Contract not deployed to detected network.');
        }
        setAccount(account);

}


export {
    loadWeb3,
    loadBlockChainData,
}
