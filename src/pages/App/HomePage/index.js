import StarredBoardList from "./components/StarredBoardList";
import {useEffect, useReducer, useState} from "react";
import boardService from "../../../common/api/boardService";
import loadingImg from '../../../asset/img/loading.gif'
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import workspaceService from "../../../common/api/workspaceService";
import {
  fetchWorkspaceSuccessAction,
  startLoadingAction,
  stopLoadingAction
} from "../../../redux/action/workspaceAction";


const HomePage = () => {
  const [page, setPage] = useState(0);

  const starredBoards = useSelector(state => state.starredBoards.data)
  const loading = useSelector(state => state.starredBoards.loading)
  const workspaces = useSelector(state => state.workspaces.data)
  const workspaceLoading = useSelector(state => state.workspaces.loading)


  const dispatch = useDispatch()


  useEffect(() => {
    const fetchStarredBoard = async () => {
      try {
        dispatch({
          type: 'STARRED_BOARD_START_LOADING'
        })
        const response = await boardService.getStarredBoardPaging(page, 2);
        dispatch({
          type: 'STARRED_BOARD_STOP_LOADING'
        })
        const {content} = response.data;
        dispatch({
          type: 'FETCH_STARRED_BOARDS_SUCCESS',
          payload: content
        })
      } catch (err) {
        alert('Đã xảy ra lỗi, vui lòng thử lại sau');
      }
    }

    fetchStarredBoard()
  }, [page]);

  const fetchWorkspaces = () => {

    return async (dispatch) => {
      dispatch(startLoadingAction())
      const response = await workspaceService.getAllWorkspaceForHomePage();
      dispatch(stopLoadingAction())
      const {data} = response;
      dispatch(fetchWorkspaceSuccessAction(data))
    }
  }

  useEffect(() => {
    dispatch(fetchWorkspaces())
  }, []);

  const handleNextStarredBoardPageClicked = () => {
   setPage(page + 1)
  }

  const handlePrevStarredBoardPageClicked = () => {
    setPage(page - 1)
  }

  return (
      <div>
        {
            loading && (
                <img src={loadingImg} alt={'loading'}/>
            )
        }
        {
            !loading && (
                <StarredBoardList
                    boards={starredBoards}
                />
            )
        }
        <div className={"paging-container"}>
          <div>
            <div>
              Bạn đang xem trang {page + 1}
            </div>
            <div>
              <button onClick={handlePrevStarredBoardPageClicked}>Xem trang trước</button>
              <button onClick={handleNextStarredBoardPageClicked}>Xem trang sau</button>
            </div>
          </div>
        </div>
        <div>
          {
            workspaceLoading && (
                  <img src={loadingImg} alt={'loading'}/>
              )
          }
          <ul>
            {
              workspaces && workspaces.map(workspace => <li key={workspace.id}>{workspace.workspaceName}</li>)
            }
          </ul>
        </div>
      </div>
  )
}

export default HomePage
