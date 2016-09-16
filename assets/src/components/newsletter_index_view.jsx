import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { httpGet, httpPost }  from '../utils';

class NewsletterIndexView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newsletters: []
    };
  }

  componentDidMount() {
    let _this = this

    httpGet('/api/v1/newsletters')
    .then((data) => {
      this.setState({
        newsletters: data.data
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  renderNewsletterLinks() {
    if(this.state.newsletters.length == 0) {
      return;
    }

    return this.state.newsletters.map((newsletter, i) => {
      let newsletterHref = `/newsletters/${newsletter.id}`
      return (
        <a key={i} className="btn btn-default col-xs-12  newsletter-listing" href={newsletterHref}>
          <h3>{newsletter.name}</h3>
        </a>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderNewsletterLinks()}
        </div>
      </div>
    );
  }
}

export default NewsletterIndexView;
