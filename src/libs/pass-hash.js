const bcrypt = require("bcrypt")

async function encryptPass(pass) {
    let hash  = await bcrypt.hash(pass,10)
    return hash
}


async function decryptPass(pass,hash) {
    let isMatch  = await bcrypt.compare(pass,hash)
    return isMatch
}

module.exports = {encryptPass, decryptPass}