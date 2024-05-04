import './style.css'
import {useContext} from "react";
import UserContext from "../../context/UserContext/userContext";

const TopNav = () => {
  const userCtx = useContext(UserContext);

  const {username} = userCtx;

  return (
      <>
        <h5>Xin chào: {username}</h5>
      </>
  )
}

export default TopNav
