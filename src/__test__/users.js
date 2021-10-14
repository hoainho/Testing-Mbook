import {authApi} from '../api/loginApi'

export const handleLogin = async (acc) => {
    if (!acc || !acc.username || !acc.password) {
        return "Username or Password INVALID"
    } 
    // requestAPI('/account/signin', 'POST', acc)
    return authApi.userLogin(acc).then(res=> 'Login successfully').catch(err => 'Username or Password INVALID')
    
    
}



// export default class Users {
//     signin(acc) {
//         if (acc) {
//             if (acc?.username.trim().length < 1) {
//                 return 'Username or Password INVALID';
//             } else if (acc?.password.trim().length < 1) {
//                 return 'Username or Password INVALID';
//             } else {
//                 return 'Login successfully';
//             }
//         } else {
//             return 'Username or Password INVALID';
//         }
//     }
// }