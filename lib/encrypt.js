const crypto = require('crypto')

// 평문 => 암호화 함수
module.exports = (text)=>crypto.createHash('sha512').update(text).digest('base64');