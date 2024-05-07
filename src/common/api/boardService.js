import {useState} from "react";

const starredBoards =
    [
      {
        boardName: 'Dating app development 1',
        boardWorkspace: 'App development',
        avatar: 'https://static.halongtrip.net/static/img/tourngamhhbuatoi_small_2.png',
        createdAt: '2024-05-02T12:00:00Z'
      },
      {
        boardName: 'Foody app development 2',
        boardWorkspace: 'App development',
        avatar: 'https://static.halongtrip.net/static/img/tourngamhhbuatoi_small_3.png'
      },
      {
        boardName: 'Grab app development 3',
        boardWorkspace: 'App development',
        avatar: 'https://static.halongtrip.net/static/img/tourngamhhbuatoi_small_1.png'
      },
      {
        boardName: 'Momo app development 4',
        boardWorkspace: 'App development',
        avatar: 'https://static.halongtrip.net/static/img/tourngamhhbuatoi_small_4.png'
      },
      {
        boardName: 'Bee app development 5',
        boardWorkspace: 'App development',
        avatar: 'https://static.halongtrip.net/static/img/tourngamhhbuatoi_small_3.png'
      },
      {
        boardName: 'Dating app development 6',
        boardWorkspace: 'App development',
        avatar: 'https://static.halongtrip.net/static/img/tourngamhhbuatoi_small_2.png',
        createdAt: '2024-05-02T12:00:00Z'
      },
      {
        boardName: 'Foody app development 7',
        boardWorkspace: 'App development',
        avatar: 'https://static.halongtrip.net/static/img/tourngamhhbuatoi_small_3.png'
      },
      {
        boardName: 'Grab app development 8',
        boardWorkspace: 'App development',
        avatar: 'https://static.halongtrip.net/static/img/tourngamhhbuatoi_small_1.png'
      },
      {
        boardName: 'Momo app development 9',
        boardWorkspace: 'App development',
        avatar: 'https://static.halongtrip.net/static/img/tourngamhhbuatoi_small_4.png'
      },
      {
        boardName: 'Bee app development 10',
        boardWorkspace: 'App development',
        avatar: 'https://static.halongtrip.net/static/img/tourngamhhbuatoi_small_3.png'
      }
    ]


const getStarredBoardPaging = (page, size) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        totalPage: 100,
        content: starredBoards.slice(page * size, page * size + size)
      })
    }, 3000);
  });
}


const boardService = {
  getStarredBoardPaging
}

export default boardService
