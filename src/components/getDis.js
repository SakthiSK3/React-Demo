import React, { Component } from 'react';
import axios from 'axios';
// import { Link, NavLink, withRouter } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

class GetDiscussion extends Component {
  constructor(props) {
    super(props)
    this.state = { users: [] }
    axios({
      method: 'post',
      url: '/getBlog',
      headers: { 'Content-Type': 'Application/json' },
      data: { 'title': 'test' }
    })
      .then(res => { console.log(res.data); this.setState({ users: res.data }) });
  }

  render() {
    return (
      <div className="bg-warning p-5">
        <h4 className="text-white p-3">User List</h4>
        <UserTbl userList={this.state.users}></UserTbl>
      </div>
    );
  }
}

const UserTbl = (props) => {
  return <div className="row">
    {
      props.userList.length > 0 ?
        <div className="card-body container mx-auto m-3">
          <div className="row mx-auto">
            <table className="bg-dark text-white text-left table mt-1 table-striped bg-light mx-auto col-md-6 width:100%">
              <thead><tr><th>Title</th><th>content</th><th>author</th></tr></thead>
              <tbody>
                {props.map((user) => <tr className="link hstrike" key={user.title}><td >{user.title}<td>{user.content}</td></td><td>{user.author}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
        : <div className="mx-auto m-5 text-light">No Users in the List</div>
    }
  </div>
}

export default GetDiscussion;