export const LOGIN = Object.freeze({
  TITLE: `충남대학교 포털 \n2차 인증 서비스`,
  USER_ID: '학번 및 교직원 번호',
  USER_ID_PLACEHOLDER: '학번 및 교직원 번호를 입력해주세요.',
  PASSWORD: '비밀번호',
  PASSWORD_PLACEHOLDER: '비밀번호를 입력해주세요.',
  SUBMIT: '로그인',
})

export const HOME = Object.freeze({
  TITLE: '반갑습니다! 👋',
  DESCRIPTION:
    '\n2차 인증을 위해\n충남대학교 웹 포털에서\n로그인을 진행해주세요!',
  AUTHENTICATION_DESCRIPTION:
    '충남대학교 웹 포털에서\n로그인을 시도하였습니다.\n2차 인증수단을 선택해주세요.',
  SUBMIT: '2차 인증수단 선택하기',
})

export const AUTHENTICATION = Object.freeze({
  TITLE: '2차 인증 서비스',
  DESCRIPTION: '아래에서 인증 방법을 선택한 후\n 2차 인증을 진행해주세요.',
  OTP_AUTHENTICATION: 'OTP 인증',
  BIOMETRIC_AUTHENTICATION: '생체(지문) 인증',
})

export const OTP_AUTHENTICATION = Object.freeze({
  TITLE: 'OTP 인증',
  DESCRIPTION: '웹에서 제공한 OTP를 입력해주세요.',
  OTP_PLACEHOLDER: 'OTP를 입력해주세요.',
  SUBMIT: '확인',
})

export const BIOMETRIC_AUTHENTICATION = Object.freeze({
  TITLE: '생체 인증',
})
