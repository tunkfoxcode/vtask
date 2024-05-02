import './style.css'

const BoardItem = ({boardName, boardWorkspace, avatar}) => {
  return (
      <div>
        <h2>
          {boardName}
        </h2>
        <img src={avatar} alt=""/>
      </div>
  )
}

export default BoardItem
