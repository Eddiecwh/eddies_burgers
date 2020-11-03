import React, { Component } from "react";
import Aux from "../Aux/Aux";
import classes from "../Layout/Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  openSideDrawer = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !this.state.showSideDrawer};
    })
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerTogglerClicked={this.openSideDrawer}/>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
