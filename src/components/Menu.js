import React, { Component } from "react";

import { withRouter } from "react-router-dom";

class Menu extends Component {
  //logout
  handleLogout = () => {
    let { history } = this.props;
    history.push({
      pathname: "/"
    });
  };

  render() {
    return (
      <div>
        <ul>
          <li>Profile</li>
          <li>About</li>
          <li>Contact</li>
          <li onClick={this.handleLogout}>LogOut</li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Menu);
