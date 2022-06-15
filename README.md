# requirements

- npm install @solana/web3.js

- npm install @solana/spl-token

- npm install bs58

- npm -v 6.14.17
- node -v v14.19.3
- nvm -v 0.39.1

- npm 8.7.0 , node v16.14.2 버전에서도 에러. node 17버전 이상에서 테스트 해봐야할 듯 하다

## error

### 실행 할 때 발생하는 error bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)

### Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release.

## 1. 지갑생성 - 1_createWallet.ts

## 2. 테스트 SOL 에어드랍 - 2_airdropSol.ts

## 3. 계정 별 SOL 잔액 조회 - 3_getBalance.ts

## 4. SOL 전송 - 4_transferSol2User.ts

## 5. spl-token 생성 - 5_mintToken.ts

## 6. spl-token 정보 조회 - 6_queryTokenInfo.ts

## 7. spl-token account 생성 - 7_makeTokenAccount.ts

## 8. spl-token account 조회 - 8_queryTokenAccountInfo.ts

## 9. spl-token 추가로 생성하기 - 9_extraTokenMint.ts

## 10. spl-token 잔액 조회 - 10_tokenGetBalance.ts

## 11. spl-token 전송 - 11_transferSplToken.ts
