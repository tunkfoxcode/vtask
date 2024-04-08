import './style.css'
import loginLogo from '../../../../../asset/img/login.png'
import TextInput from "../../../../../common/components/Form/TextInput";
import Card from "../../../../../common/components/Card";
import {useState} from "react";

function LoginForm(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmitBtnClicked = (e) => {
    e.preventDefault();
    console.log('On form submit')
    console.log('Username: ', username)
    console.log('Password: ', password)
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
            </form>
          </Card>
        </div>
      </div>
  )
}

export default LoginForm
