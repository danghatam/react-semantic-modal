import React, { Component, PropTypes } from 'react';
import Portal from 'react-portal';

/*
 * Require jQuery to be available
 */
var dimmerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
    zIndex: 99,
};

var modalStyle = {
    display: 'block !important',
    position: 'fixed',
    top: '50%',
    left: '50%',
    maxHeight: '98%',
    overflowY: 'auto',
    padding: '1rem',
    backgroundColor: '#ffffff',
    WebkitTransform: 'translate(-50%, -50%)',
    MozTransform: 'translate(-50%, -50%)',
    MsTransform: 'translate(-50%, -50%)',
    OTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)'
}

class Modal extends Component {
    render() {
        return (
            <Portal className='dimmer' isOpened={this.props.isOpened} onClose={this.props.onClose}
                    closeOnEsc={this.props.closeOnEsc} closeOnOutsideClick={this.props.closeOnOutsideClick} style={dimmerStyle}>
                <div className='modal' style={modalStyle}>
                    {this.props.children}
                </div>
            </Portal>
        );
    }
}

Modal.propTypes = {
    isOpened: PropTypes.bool.isRequired, // Control opening/closing of modal
    onClose: PropTypes.func.isRequired, // Should be used to update the opening/closing state of modal
    closeOnEsc: PropTypes.bool,
    closeOnOutsideClick: PropTypes.bool,
    children: PropTypes.element.isRequired
};

export default Modal;
