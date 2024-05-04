import StarredBoardList from "./components/StarredBoardList";
import {useState} from "react";

const HomePage = () => {
  const [starredBoards, setStarredBoards] = useState(
      [
        {
          boardName: 'Dating app development',
          boardWorkspace: 'App development',
          avatar: 'https://static.halongtrip.net/static/img/tourngamhhbuatoi_small_2.png',
          createdAt: '2024-05-02T12:00:00Z'
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
  return (
      <div>
        <h2>Home page</h2>
        <StarredBoardList
            boards={starredBoards}
        />
      </div>
  )
}

export default HomePage
