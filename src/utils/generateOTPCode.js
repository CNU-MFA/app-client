export const MIN_OTP_CODE = 10
export const MAX_OTP_CODE = 999999

export const generateOTPCode = () =>
  String(
    Math.floor(Math.random() * (MAX_OTP_CODE - MIN_OTP_CODE + 1)) +
      MIN_OTP_CODE,
  )
