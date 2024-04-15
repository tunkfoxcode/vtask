import './style.css'
import loginLogo from '../../../../../asset/img/login.png'
import TextInput from "../../../../../common/components/Form/TextInput";
import Card from "../../../../../common/components/Card";
import {useState} from "react";
import authService from "../../../../../common/api/authSerivce";
import loadingGif from '../../../../../asset/img/loading.gif'
import {useFormik} from "formik";

function LoginForm({onLogin}){
  const [showLoading, setShowLoading] = useState(false);

  const loginForm = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: (values) => {
      const {username, password} = values;
      setShowLoading(true)
      authService
      .login(username, password)
      .then(result => {
        //When login return result
        setShowLoading(false)
        console.log('Login success with result: ', result)
        console.log('Đăng nhập thành công!!!!')
      })
    }
  })

  return (

      <div className={"login-form-container"}>
        <div className={"login-form"}>
          <Card>
            <div className={"login-form-card"}>
              <img src={loginLogo} alt=""/>
              <form onSubmit={loginForm.handleSubmit}>
                <TextInput
                    onChange={loginForm.handleChange}
                    name={'username'}
                    value={loginForm.values.username}
                    type={"text"}
                    placeholder={"Tên đăng nhập"}
                />
                <TextInput
                    onChange={loginForm.handleChange}
                    name ='password'
                    value={loginForm.values.password}
                    type={"password"}
                    placeholder={"Mật khẩu"}
                />
                <button type={"submit"}>Đăng nhập</button>
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
