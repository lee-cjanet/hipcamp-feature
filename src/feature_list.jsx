import React from 'react';

import MainFeatureItem from './main_feature_item';
import SubFeatureItem from './sub_feature_item';

class FeatureList extends React.Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  renderList() {
    const list = this.props.features.map((feature, idx) => {
      const {title, presence, subfeatures} = feature;
      if (this.props.type === 'subFeat') {
        return (
          <SubFeatureItem
              idx={idx}
              title={title}
              presence={presence}
              subfeatures={subfeatures}
              />
          );
      } else if (this.props.type === 'mainFeat') {
        return (
          <MainFeatureItem
          idx={idx}
          title={title}
          presence={presence}
          subfeatures={subfeatures}
            />
        );
      } else {
        return <li></li>;
      }
    });

    return list;
  }

  render() {
    return(
      <ul className='features-list'>
        {this.renderList()}
      </ul>
    );
  }
}

export default FeatureList;
