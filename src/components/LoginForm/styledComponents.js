import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.theme === 'Light' ? '#f9f9f9' : '#212121'};
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 92%;
  max-width: 480px;
  padding: 32px 16px;
  background-color: ${props =>
    props.theme === 'Light' ? '#ffffff' : '#0f0f0f'};
  box-shadow: ${props =>
    props.theme === 'Light'
      ? '0px 4px 4px 0px #ebebeb'
      : '0px 4px 4px 0px #181818'};
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`

export const LoginNxtWatchLogo = styled.img`
  width: 120px;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    width: 200px;
    margin-bottom: 38px;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const Label = styled.label`
  font-family: 'Roboto';
  margin: 0px;
  font-size: 12px;
  font-weight: bold;
  line-height: 2;
  color: ${props => (props.theme === 'Light' ? '#616e7c' : '#f8fafc')};
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`

export const InputField = styled.input`
  font-family: 'Roboto';
  margin: 0px;
  height: 40px;
  padding: 10px 15px;
  border: ${props =>
    props.theme === 'Light' ? '0.5px solid #cccccc' : '0.5px solid #475569'};
  outline: none;
  cursor: pointer;
  font-weight: normal;
  background-color: transparent;
  border-radius: 2px;
  font-size: 14px;
  color: ${props => (props.theme === 'Light' ? '#616e7c' : '#f8fafc')};
  @media screenand (min-width: 768px) {
    font-size: 16px;
    height: 44px;
    font-size: 18px;
  }
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 11px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-top: 13px;
  }
`

export const CheckboxInput = styled.input`
  width: 17px;
  height: 17px;
  margin-right: 9px;
  margin-left: 0px;
  background-color: ${props =>
    props.theme === 'Light' ? '#000000' : '#e2e8f0'};
  @media screen and (min-width: 768px) {
    width: 19px;
    height: 19px;
  }
`

export const ShowPasswordLabel = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 0px;
  color: ${props => (props.theme === 'Light' ? '#000000' : '#e2e8f0')};
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`

export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  margin-top: 26px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    height: 44px;
    font-size: 16px;
    margin-top: 34px;
  }
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 12.5px;
  color: #ff0b37;
  width: 100%;
  font-weight: normal;
  margin-top: 8px;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 13.5px;
    margin-top: 7px;
  }
`
