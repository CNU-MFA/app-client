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
  postVerifyOTPAuthentication: async (id, password, inputOtp) => {
    instance.post({
      method: 'POST',
      url: '/verify-otp-authentication',
      data: {
        id,
        password,
        inputOtp,
      },
    })
  },
}

export default API
