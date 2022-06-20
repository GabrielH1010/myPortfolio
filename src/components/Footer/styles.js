import styled from 'styled-components';
import { midleGray, primary, white } from 'styles/colorProvider';

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100vw;
    background: #010101;
    position: static;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .copyright{
    font-size: 16px;
    color: ${midleGray};
    font-weight: 400;

    @media (max-width: 1000px) {
        font-size: 14px;
        margin: 20px 0 30px 0;
    }
  }
`

export const LinkProfile = styled.div`
  display: flex;
  width: 300px;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  align-items: center;
  text-align: center;

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    transition: all ease-in-out 0.2s;
  
    :hover{
      transform: translatey(-8px);
      opacity: 1;
    }

    a{
      width: 40px;
      font-size: 35px;
      cursor: pointer;
      color: ${primary};
    }

    @media (max-width: 600px) {
    margin: 5% 3% 3% 3%;
    }
  }

;`

export const Title = styled.h3`
    font-size: 30px;
    font-weight: 400;
    margin-top: 35px;
    text-transform: uppercase;
    color: ${white};
    cursor: pointer;
    transition: all ease-in-out 0.1s;
    
    :hover {
      color: ${primary};
    }

    @media (max-width: 1000px) {
      font-size: 26px;
    }
`
export const Hr = styled.hr`
  width: 25px;
  margin-top: -10px;
  border: 2px solid ${white};
  `