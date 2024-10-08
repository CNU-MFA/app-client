export const ERROR = Object.freeze({
  NOTIFICATION_INVALID_PERMISSION: '알림 권한이 거부되었습니다.',
  LOGIN_PROMPT_MESSAGE: '모든 정보를 입력해주세요.',
  LOGIN_FAILURE_MESSAGE: '아이디, 비밀번호를 다시 입력해주세요.',
  INPUT_OTP_AUTHENTICATION_PROMPT_MESSAGE: 'OTP 코드를 입력해주세요.',
  INVALID_OTP_AUTHENTICATION_PROMPT_MESSAGE:
    'OTP 코드를 잘못 입력하셨습니다. 다시 입력해주세요.',
  INVALID_BIOMETRIC_AUTHENTICATION_PROMPT_MESSAGE:
    '생체 인식을 다시 시도해주세요.',
})

export const SUCCESS = Object.freeze({
  DESCRIPTION: '인증이\n 완료되었습니다!',
  SUBMIT: '완료',
})
