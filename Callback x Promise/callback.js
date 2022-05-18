function myCallback(callback){
    const nome = 'Kennedy'

    if (nome === 'Kennedy'){
        callback('O usario Kennedy encontrado!')
    }
    else{
        callback (null, 'O usuário Kennedy não encontrado!')
    }
}

function callback(msg, err){
    if (err){
        throw new Error(err)
    }
    console.log(msg)
}
myCallback(callback)