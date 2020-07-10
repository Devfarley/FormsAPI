const user = [
    {
        name: 'Josh',
        email: 'joshemail'
    },
    {
        name: 'Kirsten',
        email: 'kirstenemail'
    }
]

const loginRequest = 'Josh'

// const authentication = () => {

//     user.forEach(obj => {
//         for (prop in obj){
//             if (obj[prop] === loginRequest){
//                 console.log("login success");
//             }
//                 console.log("login failed");
//         };

//     });
// };

// console.log(user[0])

// authentication();


const nameAuth = name => {
    name === user[0].name ? console.log("success") : console.log("failed")
}
nameAuth(loginRequest)