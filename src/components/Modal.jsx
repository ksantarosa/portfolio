import React, { Component } from 'react';

class Modal extends Component {
  constructor (props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close () {
    this.props.onClose();
  }

  render () {
    return (
      <div className={this.props.modalOpen ? '' : 'hide'}>
        <div className="modal-overlay" onClick={this.close} />
        <div className="modal-content">
          {this.props.topBar ? (
            <div className="modal-top-bar">
              <span>{this.props.title}</span>
              <span className="modal-close-white" onClick={this.close}>X</span>
            </div>
          )
            : <span className="modal-close-blue" onClick={this.close}>X</span>
          }
          {this.props.content}
        </div>
      </div>
    );
  }
}

// Modal.defaultProps = {
//   modalOpen: false,
//   onClose: () => {},
//   topBar: false,
//   title: '',
//   content: <p>Modal content goes here</p>,
// };

// Modal.propTypes = {
//   modalOpen: PropTypes.bool,
//   onClose: PropTypes.func,
//   topBar: PropTypes.bool,
//   title: PropTypes.string,
//   content: PropTypes.element,
// };

export default Modal;
