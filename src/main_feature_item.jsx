import React from 'react';
import Modal from 'react-modal';

import FeatureList from './feature_list';

const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.50)',
    zIndex          : 10
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    zIndex                : '11'
  }
};

class MainFeatureItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  openModal() {
    if (this.props.subfeatures.length > 0) {
      this.setState({ modalIsOpen: true });
    }
  }

  render() {
    const {idx, title, presence, subfeatures} = this.props;

    let klassName = ['main', 'feature-item'];
    !presence ? klassName.push('inactive-presence') : "";
    subfeatures.length > 0 ? klassName.push('active-sub') : "";

    const url = `./assets/${this.props.title.toLowerCase().replace(/ /g,'')}.png`

    return(
      <li key={idx}
        className={klassName.join(" ")}>
        <button
          onClick={this.openModal}>
          <img src={url} alt={this.props.title}/>
          <label>{this.props.title}</label>
        </button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={ style }
          contentLabel="FeatureItemModal">

          <div className="feature-item-modal">
            <button onClick={this.closeModal}>X Close Detail</button>
            <h1>{this.props.title}</h1>
            <FeatureList
              type='subFeat'
              features={this.props.subfeatures}
              />
          </div>
        </Modal>
      </li>
    );
  }
}

export default MainFeatureItem;
