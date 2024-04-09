import './style.css'
import fbLogo from '../../../../../asset/img/facebook.png'
import twitterLogo from '../../../../../asset/img/twitter.png'
import tiktokLogo from '../../../../../asset/img/tik-tok.png'
import phoneLogo from '../../../../../asset/img/phone-call.png'

function LoginFooter(){
  return (
      <div className={"auth-footer"}>
        <div className={"footer-item footer-text-intro montserrat-bold-normal"}>
          Easy Tasking Management
        </div>
        <div className={"footer-item montserrat-bold-normal"}>
          <img className={"m-3"} style={{width: '40px'}} src={fbLogo} alt=""/>
          <img className={"m-3"} style={{width: '40px'}} src={twitterLogo} alt=""/>
          <img className={"m-3"} style={{width: '40px'}} src={tiktokLogo} alt=""/>
        </div>
        <div className={"footer-item montserrat-bold-normal footer-phone"}>
          <img className={"m-3"} style={{width: '40px'}} src={phoneLogo} alt=""/>
          027.1284.123
        </div>

      </div>
  )
}

export default LoginFooter
