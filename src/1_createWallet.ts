import { Keypair } from "@solana/web3.js";
import * as bs58 from "bs58";

(async () => {
  // 1. create a random
  //   {
  //     const keypair = Keypair.generate();
  //     console.log(`public key: ${keypair.publicKey.toBase58()}`);
  //     console.log(`private key(raw): ${keypair.secretKey}`);
  //     console.log(`private key(bs58): ${bs58.encode(keypair.secretKey)}`);
  //   }

  // 2. from bs58 string
  {
    const keypair = Keypair.fromSecretKey(
      bs58.decode(
        "237Vv8DrGKK8GqyBmSMdhuBtqFi4nUgGMYjYad5NYQiAE5rPYkqVzqDYPcu26Ts9NdJ6SYHWSD52BcukQMZBoKAf"
      )
    );
  }

  // 3. from bytes
  {
    const keypair = Keypair.fromSecretKey(
      Uint8Array.from([
        51, 214, 157, 198, 31, 76, 192, 4, 113, 10, 235, 118, 67, 7, 162, 52,
        240, 121, 201, 80, 168, 238, 138, 47, 208, 209, 78, 239, 230, 126, 24,
        113, 218, 249, 197, 33, 108, 228, 89, 172, 26, 206, 143, 214, 199, 127,
        69, 154, 223, 140, 123, 194, 196, 243, 64, 118, 122, 230, 0, 195, 17,
        130, 134, 8,
      ])
    );
    console.log(`${keypair.publicKey.toBase58()}`); // Fjnn1URmdWwrCqeWVWZKsSYiJCKBj8ZVdKsPLMcDaxv3
  }
})();
