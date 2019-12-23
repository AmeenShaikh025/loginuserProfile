import React, { Component } from "react";

import { connect } from "react-redux";

import { fetchUser } from "../actions/authAction";

import { withRouter } from "react-router-dom";

class Accounts extends Component {
  componentDidMount() {
    // fetch("https://panorbit.in/api/users.json")
    //   .then(data => data.json())
    //   .then(data => {
    //     console.log(data);
    //   });
    this.props.dispatch(fetchUser());
  }

  //On click redirect to new page
  routeChange(data) {
    let { history } = this.props;
    history.push({
      pathname: "/dashboard",
      state: { ...data }
    });
  }

  render() {
    const allUsers = this.props.data.users;
    const userlist = allUsers.map(user => {
      return (
        <div
          className="item"
          key={user.id}
          onClick={() => {
            this.routeChange(user);
          }}
        >
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

export default connect(mapStateToProps, null)(withRouter(Accounts));
