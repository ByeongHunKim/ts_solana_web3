import { Connection, PublicKey } from "@solana/web3.js";
import { getAccount } from "@solana/spl-token";

// connection
const connection = new Connection("https://api.devnet.solana.com");

// ts-node 7_makeTokenAccount.ts 로 생성된 account들
const tokenAccount1Pubkey = new PublicKey("");

const tokenAccount2Pubkey = new PublicKey("");

// get token account info

(async () => {
  let tokenAccount = await getAccount(connection, tokenAccount1Pubkey);
  console.log(tokenAccount);
})();
