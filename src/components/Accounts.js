import React, { Component } from "react";

// import Dashboard from "./Dashboard";

import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import { fetchUser } from "../actions/authAction";

class Accounts extends Component {
  componentDidMount() {
    // fetch("https://panorbit.in/api/users.json")
    //   .then(data => data.json())
    //   .then(data => {
    //     console.log(data);
    //   });
    this.props.dispatch(fetchUser());
  }

  routeChange() {
    let path = `newPath`;
    this.props.history.push(path);
  }

  render() {
    const allUsers = this.props.data.users;
    const userlist = allUsers.map(user => {
      return (
        <div className="item" key={user.id} onClick={this.routeChange}>
          <i className="large github middle aligned icon"></i>
          <div className="content">
            <div className="header">{user.name}</div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="ui two column centered grid">
          <div className="column">
            <div className="ui middle aligned animated list">{userlist}</div>
          </div>
          <div className="four column centered row">
            <div className="column"></div>
            <div className="column"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps, null)(Accounts);
// export default withRouter(connect(mapStateToProps, null)(Accounts));
