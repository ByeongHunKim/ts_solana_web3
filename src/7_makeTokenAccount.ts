import {
  Keypair,
  Transaction,
  SystemProgram,
  Connection,
  PublicKey,
} from "@solana/web3.js";

import {
  ACCOUNT_SIZE,
  createAssociatedTokenAccountInstruction,
  createInitializeAccountInstruction,
  getAssociatedTokenAddress,
  getMinimumBalanceForRentExemptAccount,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";

import * as bs58 from "bs58";

// connection
const connection = new Connection("https://api.devnet.solana.com");

// input priv key
const feePayer = Keypair.fromSecretKey(bs58.decode(""));

// input priv key
const alice = Keypair.fromSecretKey(bs58.decode(""));

// 5에서 생성한 mint 주소
const mintPubkey = new PublicKey("");

// Token Account 만들기

// Solana에서 토큰을 수신하려면 해당 토큰을 생성하고 초기화해야 합니다.
// 다시 말해 USDC를 받으려면 USDC를 받을 어카운트를 준비해야 하고, 레이를 받으려면 마찬가지다.
// 이 몇 개의 토큰을 받는 어카운트는 솔라나에서 주소가 다를 수 있습니다 (다른 어카운트입니다)

// Token Account를 만드는 방법은 두 가지입니다.

// 1. 무작위
// 이 방법의 개념은 아무 주소나 찾아서 Token Account를 초기화하는 것입니다.
// 현재 이러한 방법은 권장되지 않습니다. 여러 다른 Account를 기록하기 때문에 Token Account를 관리하는 데 번거로움이 생길 수 있습니다.
// 어카운트를 두 번째로 만들어보는 걸 추천합니다
// 2. Associated Token Address (ATA)
// 이 방식은 유저의 SOL 주소를 근거로 토큰 어카운트 주소를 산출
// 그래서 매번 산출되는 건 똑같고, 관리상 SOL 주소만 알면 유저의 토큰 주소를 알 수 있습니다.

// (async () => {
//   // 1. Random
//   {
//     let tokenAccount = Keypair.generate();
//     console.log(`ramdom token address: ${tokenAccount.publicKey.toBase58()}`);

//     let tx = new Transaction();
//     tx.add(
//       // create account
//       SystemProgram.createAccount({
//         fromPubkey: feePayer.publicKey,
//         newAccountPubkey: tokenAccount.publicKey,
//         space: ACCOUNT_SIZE,
//         lamports: await getMinimumBalanceForRentExemptAccount(connection),
//         programId: TOKEN_PROGRAM_ID,
//       }),
//       // init token account
//       createInitializeAccountInstruction(
//         tokenAccount.publicKey,
//         mintPubkey,
//         alice.publicKey
//       )
//     );

//     console.log(
//       `create random token account txhash: ${await connection.sendTransaction(
//         tx,
//         [feePayer, tokenAccount]
//       )}`
//     );
//   }

// 2. ATA
(async () => {
  {
    let ata = await getAssociatedTokenAddress(
      mintPubkey, // mint
      feePayer.publicKey, // owner
      false // allow owner off curve
    );
    console.log(`ata: ${ata.toBase58()}`);

    let tx = new Transaction();
    tx.add(
      createAssociatedTokenAccountInstruction(
        feePayer.publicKey, // payer
        ata, // ata
        feePayer.publicKey, // owner
        mintPubkey // mint
      )
    );

    console.log(
      `create ata txhash: ${await connection.sendTransaction(tx, [feePayer])}`
    );
  }
})();

// example
// ata: LarSVMB2UGLkgmHkkjM8jyKeKCRPdJCvvotJtyKMDSp
// create ata txhash: hSJYKH9iyayddqt3MGF6cU68G93VXAXjwqjzTAh9kwAY4kmsS2JCpxGPGpDaEF49XtMZdaTYGukTqYZs2j4Xytz
