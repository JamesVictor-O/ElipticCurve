const ElipticCurve = require("elliptic").ec;
const crypto = require("crypto")



const EC = require('elliptic').ec;
const ec = new EC('secp256k1');



function GenerateAddress(){
const keyPair = ec.genKeyPair();
const privateKey = keyPair.getPrivate("hex")

// const sha256Hash = crypto.createHash("sha256").update(publicKey, "hex").digest();
// let keyPair = ec.keyFromPrivate(sha256Hash);

const publicKey = keyPair.getPublic("hex")

 console.log(publicKey)
};

GenerateAddress()