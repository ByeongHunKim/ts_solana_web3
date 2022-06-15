import {
  Connection,
  Keypair,
  Transaction,
  SystemProgram,
  PublicKey,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import * as bs58 from "bs58";

// connection
const connection = new Connection("https://api.devnet.solana.com");

// input privKey
const feePayer = Keypair.fromSecretKey(bs58.decode(""));

// input privKey
const alice = Keypair.fromSecretKey(bs58.decode(""));

(async () => {
  let tx = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: feePayer.publicKey,
      toPubkey: alice.publicKey,
      lamports: 0.5 * LAMPORTS_PER_SOL,
    })
  );
  tx.feePayer = feePayer.publicKey;

  let txhash = await connection.sendTransaction(tx, [feePayer, alice]);
  console.log(`txhash: ${txhash}`);
})();
