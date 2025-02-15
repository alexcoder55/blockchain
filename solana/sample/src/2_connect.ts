import {Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL} from "@solana/web3.js";
import {airdropIfRequired, getKeypairFromEnvironment} from "@solana-developers/helpers";
import "dotenv/config";

// подключение и просмотр баланса
async function test1() {
    const keypair = getKeypairFromEnvironment("PRIVATE_KEY");

    const connection = new Connection(clusterApiUrl("devnet"));
    const balance = await connection.getBalance(keypair.publicKey);
    const balance2 = balance / LAMPORTS_PER_SOL;

    console.log(`The balance of the account at ${keypair.publicKey} is ${balance} lamports`);
    console.log(`The balance of the account at ${keypair.publicKey} is ${balance2} SOL`);
    console.log(`✅ Finished!`);
}

// получить тестовые монеты
async function test2() {
    const connection = new Connection("https://api.devnet.solana.com", "confirmed");

    await airdropIfRequired(
        connection,
        new PublicKey("Ev6Dze9p3nRsgPGLjEQP1b47puoS4ZZ9YRiTSmXLNPtd"),
        1 * LAMPORTS_PER_SOL,
        0.5 * LAMPORTS_PER_SOL,
    );
}

test1()
// test2()
