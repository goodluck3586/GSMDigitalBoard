const crypto = require('crypto')

data = 'lmg'

function encrypto(data){
    console.log(crypto.createHash('sha512').update(data).digest('base64'));
}

encrypto(data)