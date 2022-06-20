import styled from 'styled-components';
import { primary, white } from 'styles/colorProvider';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 2px solid #121214;
  height: 400px;
  width: 350px;
  transition: transform 0.2s;
  cursor: pointer;
  margin:10px;
  text-align: center;
  justify-content: center;

  &:hover {
    transform: translatey(-10px);
    border: 3px solid ${primary};
    h3{
      color: ${primary};
    }
  }

  h3 {
    font-size: 20px;
    margin: -15px 0 10px 0;
    color: ${white};
    text-transform: uppercase;
    }

  p {
    color: #5f5f5f;
    margin-top: 5px;
    font-style: italic;
    font-weight: 500;
  }
    
  @media (max-width: 700px) {
    height: 400px;
    width: 305px;    
  }
`;

export const Image = styled.div`
  margin: 20px 2px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1f1f1f;

  img{
    width: 230px;
  }
`;






