import StarredBoardList from "./components/StarredBoardList";
import {useEffect, useReducer, useState} from "react";
import boardService from "../../../common/api/boardService";
import loadingImg from '../../../asset/img/loading.gif'
import './style.css'

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_STARRED_BOARDS_SUCCESS':
      return {...state, starredBoards: action.payload}
    case 'CHANGE_LOADING':
      return {...state, loading: action.payload}
    case 'CHANGE_PAGE':
      return {...state, page: action.payload}
    default:
      return state;
  }
}

const HomePage = () => {
  // const [starredBoards, setStarredBoards] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    starredBoards: [],
    loading: false,
    page: 0
  })

  useEffect(() => {
    const fetchStarredBoard = async () => {
      try {
        dispatch({type: 'CHANGE_LOADING', payload: true})
        const response = await boardService.getStarredBoardPaging(state.page, 2);
        dispatch({type: 'CHANGE_LOADING', payload: false})
        const {content} = response;
        dispatch({type: 'FETCH_STARRED_BOARDS_SUCCESS', payload: content})
      } catch (err) {
        alert('Đã xảy ra lỗi, vui lòng thử lại sau');
      }
    }

    fetchStarredBoard()
  }, [state.page]);

  const handleNextStarredBoardPageClicked = () => {
    dispatch({
      type: 'CHANGE_PAGE',
      payload: state.page + 1
    })
  }

  const handlePrevStarredBoardPageClicked = () => {
    dispatch({
      type: 'CHANGE_PAGE',
      payload: state.page - 1
    })
  }

  return (
      <div>
        {
            state.loading && (
                <img src={loadingImg} alt={'loading'}/>
            )
        }
        {
            !state.loading && (
                <StarredBoardList
                    boards={state.starredBoards}
                />
            )
        }
        <div className={"paging-container"}>
          <div>
            <div>
              Bạn đang xem trang {state.page + 1}
            </div>
            <div>
              <button onClick={handlePrevStarredBoardPageClicked}>Xem trang trước</button>
              <button onClick={handleNextStarredBoardPageClicked}>Xem trang sau</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HomePage
