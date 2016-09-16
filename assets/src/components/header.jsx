import React from 'react';
import { Link } from 'react-router';
import Actions from '../actions/sessions';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  renderCurrentUser() {
    const { currentUser } = this.props;

    if (!currentUser) {
      return false;
    }

    return (
      <a className="current-user">
        {currentUser.first_name} {currentUser.last_name}
      </a>
    );
  }

  renderSignOutLink() {
    if (!this.props.currentUser) {
      return false;
    }

    return (
      <a href="#" onClick={this.handleSignOutClick.bind(this)}>
        <i className="fa fa-sign-out"/> Sign out
      </a>
    );
  }

  handleSignOutClick(e) {
    e.preventDefault();
    this.props.dispatch(Actions.signOut());
  }

  render() {
    return (
      <header className="main-header">
        <nav>
          <ul>
            <li>
              <Link to="/"><i className="fa fa-columns"/> Boards</Link>
            </li>
          </ul>
        </nav>
        <Link to="/">
          <span className="logo"/>
        </Link>
        <nav className="right">
          <ul>
            <li>
              {this.renderCurrentUser()}
            </li>
            <li>
              {this.renderSignOutLink()}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
