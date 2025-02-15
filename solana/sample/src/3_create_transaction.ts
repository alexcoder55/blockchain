import {Connection, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction} from "@solana/web3.js";
import {getKeypairFromEnvironment} from "@solana-developers/helpers";
import "dotenv/config";

// транзакция перевода монет с одного адреса на другой
async function test() {
    const connection = new Connection("https://api.devnet.solana.com", "confirmed");

    const senderKeypair = getKeypairFromEnvironment("PRIVATE_KEY");
    const toPubkey = new PublicKey("Ev6Dze9p3nRsgPGLjEQP1b47puoS4ZZ9YRiTSmXLNPtd");

    const transaction = new Transaction();

    const LAMPORTS_TO_SEND = 5000;

    const sendSolInstruction = SystemProgram.transfer({
        fromPubkey: senderKeypair.publicKey,
        toPubkey,
        lamports: LAMPORTS_TO_SEND,
    });

    transaction.add(sendSolInstruction);

    const signature = await sendAndConfirmTransaction(connection, transaction, [
        senderKeypair,
    ]);

    console.log(`💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `,);
    console.log(`Transaction signature is ${signature}!`);

}


test()