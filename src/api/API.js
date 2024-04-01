import instance from './core'

const API = {
  postLogin: async (id, password) => {
    instance.post({
      method: 'POST',
      url: '/login',
      data: {
        id,
        password,
      },
    })
  },
  postSetOTP: async (id, password, otp) => {
    instance.post({
      method: 'POST',
      url: '/set-device-otp',
      data: {
        id,
        password,
        otp,
      },
    })
  },
  postVerifyDeviceStatus: async (id, password) => {
    instance.post({
      method: 'POST',
      url: '/verify-device-status',
      data: {
        id,
        password,
      },
    })
  },
}

export default API
