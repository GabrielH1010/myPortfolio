import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => props.status ? 'flex' : 'none'};
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  background: rgba(0, 0, 0, 0.7);
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  max-height: 100%;
  max-width: 80vw;

`;