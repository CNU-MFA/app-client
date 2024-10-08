import axios from 'axios'
import getEnvVars from '../../environment'
import { ERROR } from '../utils/constants/messages'
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
      alert(ERROR.LOGIN_FAILURE_MESSAGE)
    }
  },
  postAuthOTP: async (id, password, otp) => {
    try {
      const response = await axios.post(
        `${apiUrl}/mobile/auth/OTP`,
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
      alert(ERROR.INVALID_OTP_AUTHENTICATION_PROMPT_MESSAGE)
    }
  },
  postAuthBiometric: async (id, password, success) => {
    try {
      const response = await axios.post(
        `${apiUrl}/mobile/auth/biometric`,
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
      alert(ERROR.INVALID_BIOMETRIC_AUTHENTICATION_PROMPT_MESSAGE)
    }
  },
}

export default API
