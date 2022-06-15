import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import * as bs58 from "bs58";

// connection
const connection = new Connection("https://api.devnet.solana.com");

// input privKey
const feePayer = Keypair.fromSecretKey(bs58.decode(""));

(async () => {
  let balance = await connection.getBalance(feePayer.publicKey);
  console.log(`${balance / LAMPORTS_PER_SOL} SOL`);
})();
