import axios from 'axios'
import getEnvVars from '../../environment'
const { apiUrl } = getEnvVars()

const API = {
  postLogin: async (id, password, token) => {
    try {
      const response = await axios.post(
        `${apiUrl}/mobile/auth/login`,
        {
          id,
          password,
          token,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      return response
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  },
  postAuthOTP: async (id, password, otp) => {
    try {
      const response = await axios.post(
        `${apiUrl}/mobile/auth/otp`,
        {
          id,
          password,
          otp,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      return response
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  },
  postAuthBiometric: async (id, password, success) => {
    try {
      const response = await axios.post(
        `${apiUrl}/mobile/auth/login`,
        {
          id,
          password,
          success,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      return response
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  },
}

export default API
