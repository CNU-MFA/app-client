import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  header: {
    flex: 2,
  },
  title: {
    fontSize: 36,
    color: 'rgb(52, 152, 219)',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 24,
  },
  form: {
    flex: 7,
  },
  inputForm: {
    marginBottom: 34,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  input: {
    width: 250,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  OTPCode: {
    fontSize: 42,
    fontWeight: '700',
    textAlign: 'center',
  },
  innerContainer: {
    flex: 8,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
  },
})
