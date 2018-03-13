import React from 'react';
import ReactDOM from 'react-dom';

import FeatureList from './feature_list';

class Features extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className='features-container'>
        <h1>Features</h1>
        <FeatureList type='mainFeat' features={FEATURES} />
      </div>
    );
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const features = document.getElementsByClassName("features");
  // console.log(features)
  ReactDOM.render(<Features />, features[0]);
});
