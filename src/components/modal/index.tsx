import React, { useState, useRef, useEffect } from 'react';

import './modalStyle.css';

interface ModalProps {
  show: boolean;
  id: number;
  children: JSX.Element;
}

const Modal: React.FC<ModalProps> = ({ show, id, children }) => {
  const [showModal, setShowModal] = useState(show);
  return !showModal ? null : <div className="modalStyle">{children}</div>;
};

export default Modal;
