import { Connection, PublicKey } from "@solana/web3.js";

// connection
const connection = new Connection("https://api.devnet.solana.com");

//7에서 생성한 token account
const tokenAccount1Pubkey = new PublicKey("");

// const tokenAccount2Pubkey = new PublicKey(
//   ""
// );

(async () => {
  let tokenAccountBalance = await connection.getTokenAccountBalance(
    tokenAccount1Pubkey
  );
  let tokenVal = tokenAccountBalance.value.amount;
  console.log(
    `decimals: ${tokenAccountBalance.value.decimals}, amount: ${tokenVal}`
  );
})();
