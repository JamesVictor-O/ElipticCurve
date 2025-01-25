const keccak256 = require("keccak256");
const ElipticCurve = require("elliptic").ec;
const crypto = require("crypto")


const ec = new ElipticCurve('secp256k1');



function GenerateAddress(){
const keyPair = ec.genKeyPair();

// getting my private key
const privateKey = keyPair.getPrivate("hex")

// Get the public key (in uncompressed hexadecimal format)
const publicKey = keyPair.getPublic("hex");



// getting my public key
const publicKeyBytes = Buffer.from(publicKey.slice(2), "hex");
const publicKeyHash = keccak256(publicKeyBytes).toString("hex");


const address = "0x" + publicKeyHash.slice(-40)
console.log(address)
};

GenerateAddress()