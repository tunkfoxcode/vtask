import './style.css'
import loginLogo from '../../../../../asset/img/login.png'
import TextInput from "../../../../../common/components/Form/TextInput";
import Card from "../../../../../common/components/Card";
import {useState} from "react";
import authService from "../../../../../common/api/authSerivce";
import loadingGif from '../../../../../asset/img/loading.gif'

function LoginForm(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showLoading, setShowLoading] = useState(false)


  const handleSubmitBtnClicked = (e) => {
    e.preventDefault();
    console.log('On form submit')
    console.log('Username: ', username)
    console.log('Password: ', password)
    console.log('Starting login')
    setShowLoading(true)
    authService
    .login(username, password)
    .then(result => {
      //When login return result
      setShowLoading(false)
      console.log('Login success with result: ', result)
      console.log('Đăng nhập thành công!!!!')
    })
    console.log('Done login!!!!!!');
  }

  const onUsernameInputChanged = (e) => {
    setUsername(e.target.value)
  }

  const onPasswordInputChanged = (e) => {
    setPassword(e.target.value)
  }

  return (
      <div className={"login-form-container"}>
        <div className={"login-form"}>
          <Card>
            <div className={"login-form-card"}>
              <img src={loginLogo} alt=""/>
              <form>
                <TextInput
                    onChange={onUsernameInputChanged}
                    value={username}
                    type={"text"}
                    placeholder={"Tên đăng nhập"}
                />
                <TextInput
                    onChange={onPasswordInputChanged}
                    value={password}
                    type={"password"}
                    placeholder={"Mật khẩu"}
                />
                <button onClick={handleSubmitBtnClicked} type={"submit"}>Đăng nhập</button>
                <div>
                  {
                    showLoading && <img style={{marginTop: "20px"}} src={loadingGif} alt=""/>
                  }
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
  )
}

export default LoginForm
