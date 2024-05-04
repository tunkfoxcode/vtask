// const login = (username, password) => {
//   // Simulating login function here, it will be taken 5s
//   // Always return successful state
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const fakeLoginResult = {
//         username: 'tunk',
//         token: 'fakeToken'
//       }
//       // reject('Ohhh! Something went wrong!!!!')
//       resolve(fakeLoginResult)
//     }, 3000);
//   })
// }

import axiosClient from "./axiosClient";

const BASE_PATH = "/api/v1/auth"

const login = (username, password) => {
  return axiosClient.post(
      `${BASE_PATH}/login`,
      {
        username,
        password
      }
  )
}

const authService = {
  login: login
}


export default authService
