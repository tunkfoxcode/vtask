import './rootLayout.css'
import {Outlet, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faList,
    faRightToBracket
} from '@fortawesome/free-solid-svg-icons'

const RootLayout = () => {
  const nav = useNavigate();

  const onHomePageClicked = () => {
    nav("/");
  }

  const onBoardsMenuItemClicked = () => {
    nav("/boards")
  }

  const handleLogoutClicked = () => {
    localStorage.removeItem("token");
    nav("/login");
  }

  return (
      <div className={"page-container"}>
        <div className={"top-nav"}>

        </div>
        <div className={"page-container-1"}>
          <div className={"side-nav"}>
            <div className={"menu-item"} onClick={onHomePageClicked}>
              <FontAwesomeIcon icon={faHouse} size={"lg"}
                               style={{marginRight: "10px"}}/>
              Trang chủ
            </div>
            <div className={"menu-item active"} onClick={onBoardsMenuItemClicked}>
              <FontAwesomeIcon icon={faList} size={"lg"}
                               style={{marginRight: "10px"}}/>
              Danh sách boards
            </div>
            <div className={"menu-item"}>
              <FontAwesomeIcon icon={faList} size={"lg"}
                               style={{marginRight: "10px"}}/>
              Danh sách workspace
            </div>
            <div className={"logout"} onClick={handleLogoutClicked}>
              <FontAwesomeIcon icon={faRightToBracket} size={"lg"}
                               style={{marginRight: "10px"}}/>
              Đăng xuất
            </div>
          </div>
          <div className={"page-body"}>
            <Outlet />
          </div>
        </div>
      </div>
  )
}

export default RootLayout
