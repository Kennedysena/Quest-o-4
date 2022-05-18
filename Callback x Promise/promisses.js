
const myPromise = new Promise((resolve, reject)=> {

    const nome = "Kennedy"

    if (nome === "Kennedy"){
 resolve('O Usuário Kennedy encontrado!')
    }else{
        reject('O usuário Kennedy não foi encontrado!')
    }
})

myPromise.then((data)=>{
    console.log(data)
})


