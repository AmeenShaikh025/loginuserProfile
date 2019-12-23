import React, { Component } from "react";

import Menu from "./Menu";

//use when we want location and history
import { withRouter } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { match, location, history } = this.props;
    console.log(location.state);
    return (
      <div>
        <Menu />
        Dashoard
      </div>
    );
  }
}
export default withRouter(Dashboard);
