import { TOGETHER_TOKEN } from './constants'

export const POST_METHOD = 'POST'

export const headers = (): HeadersInit => {
  const token = window.localStorage.getItem(TOGETHER_TOKEN)

  if (token) {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

export const isFetchingSuccess = (response: Response): boolean => {
  return response.status >= 200 && response.status < 300
}
