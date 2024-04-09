const login = (username, password) => {
  // Simulating login function here, it will be taken 5s
  // Always return successful state
  return new Promise(resolve => {
    setTimeout(() => {
      const fakeLoginResult = {
        username: 'username',
        token: 'fakeToken'
      }
      resolve(fakeLoginResult)
    }, 5000);
  })
}

const authService = {
  login: login
}


export default authService
