import instance from './core'

const API = {
  postLogin: async (id, password) => {
    instance.post({
      method: 'POST',
      url: '/login',
      data: {
        id,
        password,
        token,
      },
    })
  },
  // postSetOTP: async (id, password, otp) => {
  //   instance.post({
  //     method: 'POST',
  //     url: '/set-device-otp',
  //     data: {
  //       id,
  //       password,
  //       otp,
  //     },
  //   })
  // },
  // postSetExpoPushToken: async (id, password, expoPushToken) => {
  //   instance.post({
  //     method: 'POST',
  //     url: '/set-expo-push-token',
  //     data: {
  //       id,
  //       password,
  //       expoPushToken,
  //     },
  //   })
  // },
  // postVerifyDeviceStatus: async (id, password) => {
  //   instance.post({
  //     method: 'POST',
  //     url: '/verify-device-status',
  //     data: {
  //       id,
  //       password,
  //     },
  //   })
  // },
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
  postBiometricAuthentication: async (id, password, success) => {
    instance.post({
      method: 'POST',
      utl: '/biometric-authentication',
      data: {
        id,
        password,
        success,
      },
    })
  },
}

export default API
