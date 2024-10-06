import axios from 'axios'

const API = {
  postLogin: async (id, password, token) => {
    axios.post('http://localhost:8080/mobile/auth/login', {
      method: 'POST',
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
    axios.post('http://localhost:8080/mobile/auth/otp', {
      method: 'POST',
      data: {
        id,
        password,
        otp,
      },
    })
  },
  postAuthBiometric: async (id, password, success) => {
    axios.post('http://localhost:8080/mobile/auth/biometric',{
      method: 'POST',
      data: {
        id,
        password,
        success,
      },
    })
  },
}

export default API
