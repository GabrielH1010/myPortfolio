import React from "react";

import { Container, ModalBody } from "./styles";

const Modal = ({ setStatus, status, children }) => {
  const handleModalClick = (e) => {
    if (e.target.classList.contains("modalBg")) {
      setStatus(false);
    }
  };

  return (
    <Container className="modalBg" status={status} onClick={handleModalClick}>
      <ModalBody>{children}</ModalBody>
    </Container>
  );
};

export default Modal;
