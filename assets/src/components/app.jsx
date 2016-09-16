import React, {PropTypes} from 'react';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    )
  }
};

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App;
