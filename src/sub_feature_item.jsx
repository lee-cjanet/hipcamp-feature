import React from 'react';

import FeatureList from './feature_list';

class SubFeatureItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displaySubs: false
    };

    this.toggleDisplaySubs = this.toggleDisplaySubs.bind(this);
  }

  toggleDisplaySubs(e) {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      displaySubs: !this.state.displaySubs
    });
  }

  render() {
    const {idx, title, presence, subfeatures} = this.props;

    let klassName = ['feature-item'];
    if (!presence) {
      klassName.push('inactive-presence');
    } else {
      klassName.push('active-presence');
    }

    if (subfeatures.length > 0) {
      klassName.push('active-sub');
    }

    const bullet = (presence ? './assets/check.png' : './assets/x.png');

    const subs = subfeatures.length === 0 ?
    "" : <FeatureList type='subFeat' features={subfeatures}/>;

    return(
      <li key={idx}
        className={klassName.join(" ")}
        onClick={this.toggleDisplaySubs}
        >
        <div>
          <img src={bullet} alt={title}/>
          <h2>{title}</h2>
        </div>
        {this.state.displaySubs ? subs : ""}
      </li>
    );
  }
}

export default SubFeatureItem;
