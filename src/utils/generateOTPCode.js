export const MIN_OTP_CODE = 10
export const MAX_OTP_CODE = 99

export const generateOTPCode = () =>
  Math.floor(Math.random() * (MAX_OTP_CODE - MIN_OTP_CODE + 1)) + MIN_OTP_CODE
