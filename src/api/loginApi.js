import requestAPI, { REQUEST_METHOD } from './index'


// const path = "/auth"
const path = "/account"

export const authApi = {
  userLogin: (data) => {
    return requestAPI(`${path}/signin`,REQUEST_METHOD.POST, data ) 
  },
  adminLogin: (data) => {
    return requestAPI(`${path}/dashboard/signin`,REQUEST_METHOD.POST, data ) 
  }
}