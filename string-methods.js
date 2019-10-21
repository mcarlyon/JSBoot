let name = 'Bob Dole'

//console.log(name.length);
//console.log(name.toUpperCase())

let password = 'abc123ksks'

//console.log(password.includes('password'))

let isValidPassword = function(password){
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword(password))