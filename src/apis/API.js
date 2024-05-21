import instance from './core'

const API = {
  postLogin: async (id, password) => {
    instance.post({
      method: 'POST',
      url: '/mobile/auth/login',
      data: {
        id,
        password,
        token,
      },
    })
  },
  getHistory: async () => {
    instance.get({
      method: 'GET',
      url: '/mobile/auth/request-history',
    })
  },
  postAuthOTP: async () => {
    instance.post({
      method: 'POST',
      url: '/mobile/auth/otp',
      data: {
        otp,
      },
    })
  },
  postAuthBiometric: async () => {
    instance.post({
      method: 'POST',
      utl: '/mobile/auth/request-history',
      data: {
        ok,
      },
    })
  },
}

export default API
