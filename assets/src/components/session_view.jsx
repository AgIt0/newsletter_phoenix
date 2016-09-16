import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Actions from '../actions/sessions';


class SessionView extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    const { email, password } = this.refs;
    const { dispatch } = this.props;

    dispatch(Actions.signIn(email.value, password.value));
  }

  render() {
    return (
      <div className="container-fluid">
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="field">
            <input ref="email" type="Email" placeholder="Email" required="true" defaultValue="john@phoenix-trello.com"/>
          </div>
          <div className="field">
            <input ref="password" type="password" placeholder="Password" required="true" defaultValue="12345678"/>
          </div>
          <button type="submit">Sign in</button>
        </form>
        <Link to="/sign_up">Create new account</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  state.session
);

export default connect(mapStateToProps)(SessionView);
