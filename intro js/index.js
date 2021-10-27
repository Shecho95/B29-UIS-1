// const user = {name: "Hernan"};

// if(true){
//     const name = "David";
// }

// user.lastname = "David";

// console.log(user);

/* Desestructuración de objetos */

// const usr = {
//     id: 1,
//     name: "cecilia",
//     lastname: "Apellido",
//     cc: 123456789,
//     brithday: '12-9-1980',

//     getFullName(){
//         return `${ this.name } ${ this.lastname }`
//     }
// }

// const { name, lastname, cc, ...data } = usr;

// console.log(name, lastname, cc, usr.getFullName());

// const formatterUsr = ({ cc, brithday }) => {
//     return `La cedula ${ cc } cumple el: ${ brithday }`;
// }

// console.log(formatterUsr(usr));

// const arrayData = [ 6, 7, 8, 9 ];

// const [ q1, q2, q3, q4 ] = arrayData;

// console.log(q4);

/* Arrow function */

// function sum1(a, b){
//     return a * b;
// }

// const sum = (a, b) => a * b;

// console.log('Total: ', sum(2, 5));

/* Callbacks */
// const usrs = [ 
//     {
//         id: 1,
//         name: "cecilia",
//         lastname: "Apellido",
//         cc: 123456789,
//         brithday: '12-9-1980',

//         getFullName(){
//             return `${ this.name } ${ this.lastname }`
//         }
//     }
// ]

// const getUserById = (id, callback) => {
//     const usr = usrs[0];

//     setTimeout(() => {
//         callback(usr);
//     }, 2000)
// }

// console.log("Inicio");

// function callback(user){
//     console.log("Nombre: ", user.name);
//     console.log("cc: ", user.cc);
// }

// getUserById(1, callback);

/* Promesas */

const usrs = [ 
    {
        id: 1,
        name: "cecilia",
        lastname: "Apellido",
        cc: 123456789,
        brithday: '12-9-1980',

        getFullName(){
            return `${ this.name } ${ this.lastname }`
        }
    },
    {
        id: 2,
        name: "Lupe",
        lastname: "Apellido",
        cc: 987654321,
        brithday: '12-9-1905',

        getFullName(){
            return `${ this.name } ${ this.lastname }`
        }
    }
]

const wishlists = [
    {
        userId: 1,
        wishlist: [1, 9, 17]
    }
]

const getUserById = (userId) => {
    return new Promise((resolve, reject) => {
        const usr = usrs.find(user => user.id == userId);

        (usr) ? resolve(usr) : reject(`User not found: ${ userId }`);
    });
}

const getWishlistByUSerId = (userId) => {
    return new Promise((resolve, reject) => {
        const wishlist = wishlists.find(wishlist => wishlist.userId == userId);

        (wishlist) ? resolve(wishlist) : reject(`Wishlist not found: ${ userId }`);
    })
}

// Server <<------->> Cliente

const id = 1;

const getFullProfile = async (userId) =>{
    const profile = await getUserById(userId);
    const wishlistResponse = await getWishlistByUSerId(userId);

    profile.wishlist = wishlistResponse.wishlist;

    console.log(profile);
}

getFullProfile(id);

// let profile = {};

// getUserById(id).then(response => {
//     profile = response;
//     return getWishlistByUSerId(id)
// }).then( response => {
//     profile.wishlist = response.wishlist;
// }).then(() => {
//     console.log(profile);
// }).catch(err => console.log(`Error: ${ err }`) );