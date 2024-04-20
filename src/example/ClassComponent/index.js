import React from "react";

const fakeUsers = [
  [
    'tunk_1_page_0',
    'tunk_2_page_0',
    'tunk_3_page_0',
    'tunk_4_page_0',
    'tunk_5_page_0',
    'tunk_6_page_0',
  ],
  [
    'tunk_1_page_1',
    'tunk_2_page_1',
    'tunk_3_page_1',
    'tunk_4_page_1',
    'tunk_5_page_1',
    'tunk_6_page_1',
  ],
  [
    'tunk_1_page_2',
    'tunk_2_page_2',
    'tunk_3_page_2',
    'tunk_4_page_2',
    'tunk_5_page_2',
    'tunk_6_page_2',
  ]
]

const getUsersFromServer = (page) => {
  console.log('Getting users from server with page: ', page)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fakeUsers[page]);
    }, 3000);
  })
}

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      users: []
    }
    console.log('Constructor run')
  }

  render() {
    console.log('Render run')
    return (
        <div>
          <h2>Hello class component</h2>
          <h3>Name: {this.props.name}</h3>
          <h3>Page: {this.state.page}</h3>
          <ul>
            {
              this.state.users.map(user => <h3>{user}</h3>)
            }
          </ul>
          <button onClick={() => {
            this.setState({
              page: this.state.page + 1
            })
          }}>Next
          </button>
        </div>
    )
  }

  componentDidMount() {
    console.log('componentDidMount run')
    getUsersFromServer(this.state.page)
    .then(data => {
      this.setState({
        users: data
      })
    })
    .catch(err => {
      alert('Something went wrong!!!!')
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate run: ', prevState);
    if(this.state.page !== prevState.page){
      //Call API to get data for next page here
      getUsersFromServer(this.state.page)
      .then(data => {
        this.setState({
          users: data
        })
      })
    }
  }

  componentWillUnmount() {
    //Do something before component unmount
  }

}

export default ClassComponent
