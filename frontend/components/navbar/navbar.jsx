import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import NavbarLeft from './navbar_left';
import NavbarRight from './navbar_right';
import SearchBarContainer from './search_bar_container';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };

    this.updateIsActive = this.updateIsActive.bind(this);
  };

  updateIsActive() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    return (
      <section className="nav-parent">
        <nav className="navbar">
          <NavbarLeft
            isActive={this.state.isActive}
            updateIsActive={this.updateIsActive}
          />
          <SearchBarContainer />
          <NavbarRight
            currentUser={this.props.currentUser}
            isActive={this.state.isActive}
            updateIsActive={this.updateIsActive}
            logout={this.props.logout}
          />
        </nav>
      </section>
    );
  };
};

export default Navbar;