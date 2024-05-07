import './style.css'

const BoardItem = ({boardName, boardWorkspace, avatar}) => {
  return (
      <div className={"board-item"}>
        <img src={avatar} alt=""/>
        <div className={"board-title"}>
          {boardName}
        </div>
      </div>
  )
}

export default BoardItem
