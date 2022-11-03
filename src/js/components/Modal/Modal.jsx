import React from "react";
import PropTypes from "prop-types";
import "./_layout.scss";
import Icon from "../Icon";

const Modal = ({ children, handleIconClick }) => {
  return (
    <div className="modal">
      <div className="modal__main">
        <div className="modal__main__header">
          <Icon iconClass="bi-x" handleClick={handleIconClick} />
        </div>
        <div className="modal__main__body">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {};

Modal.defaultProps = {};

export default Modal;
