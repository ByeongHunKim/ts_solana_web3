import { Keypair, Transaction, Connection, PublicKey } from "@solana/web3.js";
import { createTransferCheckedInstruction } from "@solana/spl-token";
import * as bs58 from "bs58";

// connection
const connection = new Connection("https://api.devnet.solana.com");

// input privkey
const feePayer = Keypair.fromSecretKey(bs58.decode(""));

// input privkey
const alice = Keypair.fromSecretKey(bs58.decode(""));

// 5에서 생성한 민트주소
const mintPubkey = new PublicKey("");

//7에서 생성한 유저별 토큰 account 주소1
const tokenAccount1Pubkey = new PublicKey("");

//7에서 생성한 유저별 토큰 account 주소2
const tokenAccount2Pubkey = new PublicKey("");

// mint token

(async () => {
  let tx = new Transaction();
  tx.add(
    createTransferCheckedInstruction(
      tokenAccount1Pubkey, // from
      mintPubkey, // mint
      tokenAccount2Pubkey, // to
      alice.publicKey, // from's owner
      100000000000, // amount 100개
      9 // decimals
    )
  );
  console.log(
    `txhash: ${await connection.sendTransaction(tx, [feePayer, alice])}`
  );
})();
