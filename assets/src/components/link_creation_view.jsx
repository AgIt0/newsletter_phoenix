import React, {PropTypes} from 'react';
import { httpGet, httpPost }  from '../utils';

class LinkCreationView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      linkCreated: false
    };
  }

  componentDidMount() {
    let _this = this;
    httpGet('/api/v1/categories')
    .then(function(data) {
      _this.setState({
        categories: data.data
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const data = {
      link: {
        title: this.refs.title.value,
        url: this.refs.url.value,
        comment: this.refs.comment.value,
        category_id: this.refs.category_id.value
      }
    };

    httpPost('/api/v1/links', data)
    .then((data) => {
      this.setState({
        linkCreated: true
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  renderCategories() {
    if(this.state.categories.length == 0) {
      return;
    }

    return this.state.categories.map((category, i) => {
      return (
        <option key={i} value={category.id}>
          {category.name}
        </option>
      );
    });
  }

  renderSuccess() {
    if(this.state.linkCreated) {
      return(<div> Link Created </div>);
    }
  }

  render() {
    const { errors } = this.props;
    return (
      <div className="view-container registrations new">
        <main>
          <header>
            <div className="logo" />
          </header>
          {this.renderSuccess()}
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="field">
              <input ref="title" type="text" placeholder="Title" required={true} />
            </div>
            <div className="field">
              <input ref="url" type="text" placeholder="Url" required={true} />
            </div>
            <div className="field">
              <input ref="comment" placeholder="" />
            </div>
            <select  ref="category_id" id="link_category_id">
              {this.renderCategories()}
            </select>
            <button type="submit">Create Link</button>
          </form>
        </main>
      </div>
    )
  }
}

export default LinkCreationView;
