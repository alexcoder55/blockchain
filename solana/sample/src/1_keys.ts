import { Keypair } from "@solana/web3.js";
import {getKeypairFromEnvironment} from "@solana-developers/helpers";

// сгенерировать ключи
function test1() {
    const keypair = Keypair.generate();

    console.log(`The public key is: `, keypair.publicKey.toBase58());
    console.log(`The secret key is: `, keypair.secretKey);
    console.log(`✅ Finished!`);
}

// чтения ключей из массива байт приватного ключа из файла .env
function test2() {
    const keypair = getKeypairFromEnvironment("PRIVATE_KEY");

    console.log(`The public key is: `, keypair.publicKey.toBase58());
    console.log(`The secret key is: `, keypair.secretKey);
    console.log(`✅ Finished!`);

    const keypair2 = getKeypairFromEnvironment("PRIVATE_KEY2");

    console.log(`The public key is: `, keypair2.publicKey.toBase58());
    console.log(`The secret key is: `, keypair2.secretKey);
    console.log(`✅ Finished!`);
}


test1()
test2()