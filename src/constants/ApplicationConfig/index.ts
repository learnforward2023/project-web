import config from './index.config'

let applicationConfig = config.localhost

if (process.env.ENV === 'production') {
  applicationConfig = config.production
} else if (process.env.ENV === 'development') {
  applicationConfig = config.development
}

export { applicationConfig }
