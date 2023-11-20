//Synchronous 
console.log(1);
console.log(1);
console.log(1);
setTimeout(() => {
    console.log(45);
}, 5000)
console.log(1);
console.log(1);
//Asynchronous and challback in promise 
console.log("start");
function userInfo(name, challback){
    setTimeout( ()=> {
        console.log("** User info recived **");
        challback(name)
    }, 3000)
}
let userName = userInfo('Taaif', name => {
    console.log("your name is " + name);
})
console.log("end");
//promise and dealing with resolve and catch
console.log("start");

const newUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        const userInf = {
            name: 'taaif',
            age: 11
        }
        resolve(userInf)
    }, 3000)
})

const addNewUser = userInf => {
    let userAge = userInf.age
    let adultAge;
    if ( userAge >= 18 ){
        adultAge = userInf.name + " is an adult"
        return Promise.resolve(adultAge)
    }else{
        adultAge = userInf.name + " is NOT an adult"
        return Promise.reject(new Error(adultAge))
    }
    return Promise.resolve(adultAge)
}

newUser
.then(addNewUser)
    .then(res => {
    console.log("info recived");
    console.log(res);
})
    .catch(err => {
        console.log(err.message)
    })
console.log("end");

