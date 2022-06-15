import {
  Keypair,
  Transaction,
  SystemProgram,
  Connection,
  PublicKey,
} from "@solana/web3.js";

import { getMint } from "@solana/spl-token";

// connection
const connection = new Connection("https://api.devnet.solana.com");

// 5_에서 생성한 민트주소 사용
const mintPubkey = new PublicKey("");

// 민트정보를 가지고

// mint의 주소를 통해서 상세한 정보를 찾을 수 있다. -> 5에서 생성된 민트주소 사용

(async () => {
  let mint = await getMint(connection, mintPubkey);
  console.log(mint);

  // name, symbol, image가 결코 돌아오는 정보에 있지 않다
  // 관련 정보를 캐치할 필요가 있다면 아래 사이트 참고
  // https://github.com/solana-labs/token-list
})();
