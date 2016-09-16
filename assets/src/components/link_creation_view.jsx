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
      <div className="container">
        <div className="col-xs-4 col-xs-offset-4">
          <h1>New Link</h1>
          {this.renderSuccess()}
          <form className="new_link" onSubmit={this.onSubmit.bind(this)}>
            <div className="field form-group">
              <label htmlFor="title">Title</label>
              <br />
              <input className="form-control" ref="title" type="text" placeholder="Title" required={true} />
            </div>
            <div className="field form-group">
              <label htmlFor="url">Url</label>
              <br />
              <input className="form-control" ref="url" type="text" placeholder="Url" required={true} />
            </div>
            <div className="field form-group">
              <label htmlFor="comment">Comment</label>
              <br />
              <input className="form-control" ref="comment" placeholder="" />
            </div>
            <div className="field form-group">
              <label htmlFor="category_id">Category</label>
              <br />
              <select className="form-control" ref="category_id" id="link_category_id">
                {this.renderCategories()}
              </select>
            </div>
            <div className="actions">
              <input type="submit" name="commit" value="Create Link" className="form-control"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LinkCreationView;
