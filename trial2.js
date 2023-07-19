import { ConstantFlowAgreementV1 } from "@superfluid-finance/sdk-core";

const config = {
  hostAddress: "0x3E14dC1b13c488a8d5D310918780c983bD5982E7",
  cfaV1Address: "0x6EeE6060f715257b970700bc2656De21dEdF074C",
  idaV1Address: "0xB0aABBA4B2783A72C52956CDEF62d438ecA2d7a1"
};

const cfaV1 = new ConstantFlowAgreementV1({ options: config });
//super tokens can be loaded directly as well 
const daix = await sf.loadSuperToken("ETHx");

