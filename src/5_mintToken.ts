import {
  Keypair,
  Transaction,
  SystemProgram,
  Connection,
} from "@solana/web3.js";

import {
  createInitializeMintInstruction,
  getMinimumBalanceForRentExemptMint,
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";

import * as bs58 from "bs58";

// connection
const connection = new Connection("https://api.devnet.solana.com");

// input privkey
const feePayer = Keypair.fromSecretKey(bs58.decode(""));

// input privkey
const alice = Keypair.fromSecretKey(bs58.decode(""));

(async () => {
  // create a mint account
  let mint = Keypair.generate();
  console.log(`mint: ${mint.publicKey.toBase58()}`);

  let tx = new Transaction();
  tx.add(
    // create account
    SystemProgram.createAccount({
      fromPubkey: feePayer.publicKey,
      newAccountPubkey: mint.publicKey,
      space: MINT_SIZE,
      lamports: await getMinimumBalanceForRentExemptMint(connection),
      programId: TOKEN_PROGRAM_ID,
    }),
    // init mint
    createInitializeMintInstruction(
      mint.publicKey, // 화폐의주소
      9, // decimals
      alice.publicKey, // 화폐발행권한 = mintAuthority
      null // freeze = null
    )
  );

  console.log(
    `txhash: ${await connection.sendTransaction(tx, [feePayer, mint])}`
  );
})();

// example result
// mint: JS3FiJxtv5CYURf7oC9eMPzq21uz1PpsvW9MFfzZDsi
// txhash: 4fY3ocKdYKcrJxN66VXxyYX48T2KTgZnmk4D38GZg8yayShMRmY6GiXSjCuH1bpkyjTTKaY5nY4K4h5PZTgEb9bq
