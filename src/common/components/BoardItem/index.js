import './style.css'

const BoardItem = ({boardName, boardWorkspace, background}) => {
  return (
      <div className={"board-item"}>
        <img src={background} alt=""/>
        <div className={"board-title"}>
          {boardName}
        </div>
      </div>
  )
}

export default BoardItem
