import instance from './core'

const API = {
  postLogin: async (id, password, token) => {
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
  // getHistory: async () => {
  //   instance.get({
  //     method: 'GET',
  //     url: '/mobile/auth/request-history',
  //   })
  // },
  postAuthOTP: async (id, password, otp) => {
    instance.post({
      method: 'POST',
      url: '/mobile/auth/otp',
      data: {
        id,
        password,
        otp,
      },
    })
  },
  postAuthBiometric: async (id, password, success) => {
    instance.post({
      method: 'POST',
      utl: '/mobile/auth/biometric',
      data: {
        id,
        password,
        success,
      },
    })
  },
}

export default API
