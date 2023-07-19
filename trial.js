import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";

const provider = new ethers.providers.InfuraProvider(
  "sepolia",
  "3ab346650e7a4d89a904961de6f455b0"
);

const sf = await Framework.create({
  chainId: 11155111,
  provider
});

const daix = await sf.loadSuperToken("ETHx");

// Read example
const flowInfo = await daix.getFlow({
  sender: "0x2Ae018789D7f82FedfbfE221C1A8eD58E99511E8",
  receiver: "0x6eba7Bd536557de0D0038905d7C0a4E0dCdd7ab1",
  providerOrSigner: provider
});
console.log("flowInfo", flowInfo);

//load the token you'd like to use like this 
//note that tokens may be loaded by symbol or by address

//load the token you'd like to use like this 
//note that tokens may be loaded by symbol or by address


// Write operation example
const signer = sf.createSigner({ privateKey: "ee6b0ecbc9bf2bed093081ce29815fe91138ba7a995e1f6a9fee05ea86cfdab9", provider });

//load the token you'd like to use like this 
//note that tokens may be loaded by symbol or by address
// let flowOp = daix.createFlow({
//   sender: "0x2Ae018789D7f82FedfbfE221C1A8eD58E99511E8",
//   receiver: "0x6eba7Bd536557de0D0038905d7C0a4E0dCdd7ab1",
//   flowRate: "1000000000"
// });

// await flowOp.exec(signer); // should have same address as `sender`

//load the token you'd like to use like this 
//note that tokens may be loaded by symbol or by address
// let flowOp = daix.updateFlow({
//   sender: "0x2Ae018789D7f82FedfbfE221C1A8eD58E99511E8",
//   receiver: "0x6eba7Bd536557de0D0038905d7C0a4E0dCdd7ab1",
//   flowRate: "999999",
// });

// await flowOp.exec(signer); // should have same address as `sender`

// const createFlowOperation = daix.createFlow({
//   sender: "0x2Ae018789D7f82FedfbfE221C1A8eD58E99511E8",
//   receiver: "0x6eba7Bd536557de0D0038905d7C0a4E0dCdd7ab1",
//   flowRate: "1000000000"
// });
// const txnResponse = await createFlowOperation.exec(signer);
// const txnReceipt = await txnResponse.wait();
// Transaction Complete when code reaches here

// let flowOp = daix.deleteFlow({
//     sender: "0x2Ae018789D7f82FedfbfE221C1A8eD58E99511E8",
//     receiver: "0x6eba7Bd536557de0D0038905d7C0a4E0dCdd7ab1"
//   });
  
//   await flowOp.exec(signer); // should have same address as sender