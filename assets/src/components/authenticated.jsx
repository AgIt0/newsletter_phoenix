import React from 'react';
import Actions from '../actions/sessions';
import { connect }  from 'react-redux';
import router from 'react-router-redux';
import Header from './header';


class AuthenticatedContainer extends React.Component {
  componentDidMount() {
    const { dispatch, currentUser } = this.props;
    const authToken = localStorage.getItem('authToken');

    if (authToken && !currentUser) {
      dispatch(Actions.currentUser());
    } else if (!authToken) {
      dispatch(routerActions.push('/sign_in'));
    }
  }

  render() {
    const { currentUser, dispatch } = this.props;
    if (!currentUser) return false;

    return (
      <div className="application-container">
        <Header
          currentUser={currentUser}
          dispatch={dispatch} />

        <div className="row-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps)(AuthenticatedContainer);
