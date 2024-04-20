const login = (username, password) => {
  // Simulating login function here, it will be taken 5s
  // Always return successful state
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fakeLoginResult = {
        username: 'username',
        token: 'fakeToken'
      }
      // reject('Ohhh! Something went wrong!!!!')
      resolve(fakeLoginResult)
    }, 3000);
  })
}

const authService = {
  login: login
}


export default authService
