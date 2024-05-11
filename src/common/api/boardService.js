import axiosClient from "./axiosClient";
import {getHeaderWithToken} from "./getHeaderWithToken";

const BASE_URL = '/api/v1/boards'

const getStarredBoardPaging = (page, size) => {
  return axiosClient.get(
      `${BASE_URL}/starred?page=${page}&size=${size}`,
      {
        headers: getHeaderWithToken()
      }
  )
}


const boardService = {
  getStarredBoardPaging
}

export default boardService
