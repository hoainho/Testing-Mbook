import requestAPI, { REQUEST_METHOD } from './index'


// const path = "/auth"
const path = "/account"

export const accountApi = {
  get: () => {
    return requestAPI(`${path}/get`,REQUEST_METHOD.GET ) 
  },
  adminLogin: (data) => {
    return requestAPI(`${path}/dashboard/signin`,REQUEST_METHOD.POST, data )
  }
}