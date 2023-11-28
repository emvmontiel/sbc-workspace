import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('5DoZYJvdTD9QGTfyFLCLZuEa8NMNogD2Rnv7w6yMkbdPgXT7fJDmpoVMoaTMpsgAtKcWF3ze8NzsBw4BRGn5VgP6')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('BDndH9BStW5BMBHXzMzBT5cM8TnFpHf7B2x8h64xzw56');
    const publicKeyTo = new Web3.PublicKey('12FePbtBpX21tQyaEpM3BnwCBPatacyc23ypqMau9xTL');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();
