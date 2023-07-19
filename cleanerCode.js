// Importing Modules
import { Framework } from "@superfluid-finance/sdk-core";
import { Signer, ethers } from "ethers";

// Connecting to a Node Provider
// *** Later try it with Alchemy ***
const provider = new ethers.providers.InfuraProvider(
  "sepolia",
  "<Enter your API Key>" // This is the API key from Infura - Secret
);

// Creating a new instance of chain 
const sf = await Framework.create({
  chainId: 11155111,
  provider
});

// Loading the Super Token you want to use, you can use Daix, Fdaix, anything, just make sure you enter the right addresses or will get errors
const daix = await sf.loadSuperToken("ETHx");

// ### READ OPERATIONS ###

// Read flow information
const flowInfo = await daix.getFlow({
  sender: "0x2Ae018789D7f82FedfbfE221C1A8eD58E99511E8",
  receiver: "0x6eba7Bd536557de0D0038905d7C0a4E0dCdd7ab1",
  providerOrSigner: provider
});
console.log("flowInfo", flowInfo);

// Read Net Flow Information
// *Learn what this is?*
// Answer: Gives netflow: Money coming - money leaving
let res = await daix.getNetFlow({
  account: "0x6eba7Bd536557de0D0038905d7C0a4E0dCdd7ab1",
  providerOrSigner: provider
});
console.log("Net Flow: ", res);

// Get Account Flow Info 
// Returns an object
// *What is the difference between get flow and get accoutn flow info?* 
// Answer: this is more detailed i.e contains owedDeposit
// Learn more about this and make good notes!
let accountFlowInfo = await daix.getAccountFlowInfo({
  account: "0x6eba7Bd536557de0D0038905d7C0a4E0dCdd7ab1",
  providerOrSigner: provider
});
console.log("Account Flow info: ", accountFlowInfo);

// ### WRITE OPERATIONS ###
// MOST IMPORTANT - Create Signer First 
const signer = sf.createSigner({ privateKey: "<Enter Your Private Key>", provider });



// Create Flow
// 1) Instantiate operation to create a 100,000 wei/second stream
let createFlowOp = daix.createFlow({
  sender: "0x2Ae018789D7f82FedfbfE221C1A8eD58E99511E8",
  receiver: "0x6eba7Bd536557de0D0038905d7C0a4E0dCdd7ab1",
  flowRate: "100000",
});

// 2) Execute operation on aliceSigner
await createFlowOp.exec(signer);

// 3) USe the same operation object to create 100,000 wei/second stream again
// await createFlowOp.exec(aliceSigner); (***Commenting for now)

// Updating Stream
//load the token you'd like to use like this 
//note that tokens may be loaded by symbol or by address
let flowOp = daix.updateFlow({
  sender: "0x2Ae018789D7f82FedfbfE221C1A8eD58E99511E8",
  receiver: "0x6eba7Bd536557de0D0038905d7C0a4E0dCdd7ab1",
  flowRate: "1000",
});

await flowOp.exec(signer); // should have same address as `sender`


// Deleting Stream
//load the token you'd like to use like this 
//note that tokens may be loaded by symbol or by address
let delFlo = daix.deleteFlow({
  sender: "0x2Ae018789D7f82FedfbfE221C1A8eD58E99511E8",
  receiver: "0x6eba7Bd536557de0D0038905d7C0a4E0dCdd7ab1",
});

await delFlo.exec(signer); // should have same address as sender
