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
      <a rel="nofollow" onClick={this.handleSignOutClick.bind(this)}>Logout</a>
    );
  }

  handleSignOutClick(e) {
    e.preventDefault();
    this.props.dispatch(Actions.signOut());
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button aria-expanded="false" className="navbar-toggle collapsed" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" type="button">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">React Newsletter</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <a href="/newsletters">Newsletters</a>
              </li>
              <li>
                <a href="/">Submit link</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                {this.renderSignOutLink()}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
