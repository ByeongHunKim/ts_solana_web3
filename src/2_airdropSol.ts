import { Connection, Keypair } from "@solana/web3.js";
import * as bs58 from "bs58";

// connection
const connection = new Connection("https://api.devnet.solana.com");

// Fjnn1URmdWwrCqeWVWZKsSYiJCKBj8ZVdKsPLMcDaxv3
const feePayer = Keypair.fromSecretKey(
  bs58.decode(
    "237Vv8DrGKK8GqyBmSMdhuBtqFi4nUgGMYjYad5NYQiAE5rPYkqVzqDYPcu26Ts9NdJ6SYHWSD52BcukQMZBoKAf"
  )
);

(async () => {
  // 1e9 lamports = 10^9 lamports = 1 SOL
  let txhash = await connection.requestAirdrop(feePayer.publicKey, 1e9);
  console.log(`txhash: ${txhash}`);
})();

// txHash = ES4Q5DDcjhezYqmhmohCaWV1sxYKQ3S19SJtKFnjifPXgEphzhAWn42QNJjHhmAsFBXxebpY5LUemVWdh2KQU4y
