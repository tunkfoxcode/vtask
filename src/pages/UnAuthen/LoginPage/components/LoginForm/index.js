import './style.css'
import loginLogo from '../../../../../asset/img/login.png'
import TextInput from "../../../../../common/components/Form/TextInput";
import Card from "../../../../../common/components/Card";
import authService from "../../../../../common/api/authSerivce";
import loadingGif from '../../../../../asset/img/loading.gif'
import {useFormik} from "formik";
import {useState} from "react";
import {object, string} from 'yup'

function LoginForm({onLogin}) {
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
      .catch(err => {
        setShowLoading(false)
        console.log('Login failed!!!!')
        alert('Tài khoản hoặc mật khẩu không đúng, vui lòng thử đăng nhập lại!!!!');
      })
    },
    validationSchema: object().shape({
      username: string()
      .min(2, 'Tên đăng nhập phải có ít nhất 2 ký tự')
      .max(10, ' Tên đăng nhập không vượt quá 10 ký tự')
      .required('Không dược để trống tên đăng nhập'),
      password: string()
      .min(6, 'Mât khẩu phải có ít nhất 6 ký tự')
      .max(12, 'Mật khẩu không quá 12 ký tự')
      .required('Không được để trống mật khẩu')
    })
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
                    error={loginForm.errors.username}
                />
                <TextInput
                    onChange={loginForm.handleChange}
                    name='password'
                    value={loginForm.values.password}
                    type={"password"}
                    placeholder={"Mật khẩu"}
                    error={loginForm.errors.password}
                />
                <button type={"submit"}>Đăng nhập</button>
                <div>
                  {
                      showLoading && <img style={{marginTop: "20px"}}
                                          src={loadingGif} alt=""/>
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
