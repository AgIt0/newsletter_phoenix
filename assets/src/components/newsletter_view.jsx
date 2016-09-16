import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { httpGet, httpPost }  from '../utils';

class NewsletterView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newsletter: null
    };
  }

  componentDidMount() {
    let newsletterUrl = `/api/v1/newsletters/${this.props.params.id}`
    httpGet(newsletterUrl)
    .then((data) => {
      this.setState({
        newsletter: data.data
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  renderLinks() {
    if(this.state.newsletter == null) {
      return;
    }

    return this.state.newsletter.links.map((link, i) => {
      return (
        <div key={i} className="newsletter_link container">
          <div className="col-xs-10">
            <h4>
              <a href={link.url}>{link.title}</a>
            </h4>
            {link.comment}
            <br/>
            {link.user.email}
            <br/>
          </div>
          <div className="col-xs-2">
            <a className="btn btn-default btn-small" href="#">{link.category.name}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>{this.state.newsletter && this.state.newsletter.name}</h1>
          </div>
        </div>

        <div className="row">
          {this.renderLinks()}
        </div>
      </div>
    );
  }
}

export default NewsletterView;
