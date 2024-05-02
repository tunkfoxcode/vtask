import './style.css'
import {useState} from "react";
import BoardItem from "../../../../../common/components/BoardItem";

const StarredBoardList = () => {
  const [starredBoards, setStarredBoards] = useState(
      [
        {
          boardName: 'Dating app development',
          boardWorkspace: 'App development',
          avatar: 'https://static.halongtrip.net/static/img/tourngamhhbuatoi_small_2.png'
        },
        {
          boardName: 'Foody app development',
          boardWorkspace: 'App development',
          avatar: 'https://static.halongtrip.net/static/img/tourngamhhbuatoi_small_2.png'
        },
        {
          boardName: 'Grab app development',
          boardWorkspace: 'App development',
          avatar: 'https://static.halongtrip.net/static/img/tourngamhhbuatoi_small_2.png'
        },
        {
          boardName: 'Momo app development',
          boardWorkspace: 'App development',
          avatar: 'https://static.halongtrip.net/static/img/tourngamhhbuatoi_small_2.png'
        },
        {
          boardName: 'Bee app development',
          boardWorkspace: 'App development',
          avatar: 'https://static.halongtrip.net/static/img/tourngamhhbuatoi_small_2.png'
        },
      ]
  )

  const onAddNewStarredBoard = () => {
    console.log('onAddNewStarredBoard')
    const newStarredList = [...starredBoards];
    newStarredList.push(
        {
          boardName: 'Viettel app development',
          boardWorkspace: 'App development',
          avatar: 'https://static.halongtrip.net/static/img/tourngamhhbuatoi_small_2.png'
        },
    )
    setStarredBoards(newStarredList)
  }


  return (
      <div>
        {
          starredBoards.map(board => <BoardItem key={board.boardName} {...board} />)
        }
        <button onClick={onAddNewStarredBoard}>Add new item</button>
      </div>
  )
}

export default StarredBoardList
