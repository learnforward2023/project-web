import APIConfig from './index.config'

let config = APIConfig.localhost

if (process.env.ENV === 'production') {
  config = APIConfig.production
} else if (process.env.ENV === 'development') {
  config = APIConfig.development
}

const API = {
  SAY_HELLO: `${config.API_DOMAIN}/say-hello`
}

export { API }
