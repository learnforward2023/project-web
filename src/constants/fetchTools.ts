import { TOGETHER_TOKEN } from './constants'

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

export const POST_METHOD = 'POST'
