
let API_DOMAIN = 'http://localhost:8080/api/v1'

if (process.env.API_DOMAIN) {
  API_DOMAIN = process.env.API_DOMAIN
}

const API = {
  SAY_HELLO: `${API_DOMAIN}/say-hello`,
  SIGN_IN_WITH_NORMAL_ACCOUNT: `${API_DOMAIN}/users/login`
}

export { API }
