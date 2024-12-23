const os = require("os")
 

// // custom modules
console.log(os);
 console.log(os.homedir());//C:\Users\alish
 console.log(os.hostname());// Alisha
 console.log(os.platform());//win32
 console.log(os.release());//10.0.26100
 console.log(os.userInfo());//[Object: null prototype] {
//     uid: -1,
//     gid: -1,
//     username:'alish' ,
//     homedir: 'C:\\Users\\alish',
//     shell: null
//   }
 
console.log(os.userInfo().username);//alish
console.log(os.totalmem());//8245329920
console.log(os.freemem());//1099165696





