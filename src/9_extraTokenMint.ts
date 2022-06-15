import { Keypair, Transaction, Connection, PublicKey } from "@solana/web3.js";
import { createMintToCheckedInstruction } from "@solana/spl-token";
import * as bs58 from "bs58";

// connection
const connection = new Connection("https://api.devnet.solana.com");

// input privkey
const feePayer = Keypair.fromSecretKey(bs58.decode(""));

// input priv key
const alice = Keypair.fromSecretKey(bs58.decode(""));

// 5에서 만든 mint 주소
const mintPubkey = new PublicKey("");

// 7에서 만든 token account 주소
const tokenAccount1Pubkey = new PublicKey("");

// const tokenAccount2Pubkey = new PublicKey(
//   ""
// );

// mint token

(async () => {
  let tx = new Transaction();
  tx.add(
    createMintToCheckedInstruction(
      mintPubkey,
      tokenAccount1Pubkey,
      alice.publicKey, // mint auth
      1000000000000, // <- 1000개  amount 1000000000 = 1
      9 // decimals
    )
  );
  console.log(
    `txhash: ${await connection.sendTransaction(tx, [feePayer, alice])}`
  );
})();
