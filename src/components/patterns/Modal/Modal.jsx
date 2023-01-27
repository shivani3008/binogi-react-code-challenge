import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import ReactModal from 'react-modal';

import closeSvg from 'assets/icons/close.svg';

const Modal = ({ isOpen, onClose, children, showCloseButton }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={showCloseButton}
      shouldCloseOnEsc={showCloseButton}
      onRequestClose={onClose}
      overlayClassName="bg-[#00000060]"
      className="bg-white absolute transform -translate-y-2/4 -translate-x-2/4 top-1/2 left-1/2 rounded-md w-9/12 md:w-6/12 lg:w-125"
      ariaHideApp={false}
    >
      <div className="flex max-h-[80vh]">
        {showCloseButton ? (
          <div className="absolute -right-3 -top-3">
            <button type="button" onClick={onClose} className="white rounded-full bg-black">
              <SVG src={closeSvg} className="h-5 w-5 text-white" />
            </button>
          </div>
        ) : null}
        <div className="overflow-auto max-h-[70vh] leading-normal p-8 flex-1">{children}</div>
      </div>
    </ReactModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node,
  showCloseButton: PropTypes.bool,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  children: null,
  showCloseButton: false,
  onClose: () => undefined,
};

export default Modal;
