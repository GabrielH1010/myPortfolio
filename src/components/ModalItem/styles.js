import styled from 'styled-components';
import { backgroundColor, black, primary } from 'styles/colorProvider';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  background: ${backgroundColor};
  border-radius: 5px;
  padding: 0 20px;

  @media (max-width: 700px) {
    align-items: center;
    padding: 0;
  }
`;
export const ContentArea = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background: ${backgroundColor};
  padding: 0;

  .image{
    display: flex;
    width: 35%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 25px 30px 25px 0px;
    padding: 25px 0;
    border:  3px solid ${black};
    border-radius: 5px;

    h2{
      display: none;

      @media (max-width: 700px) {
      display: flex;
      font-size: 22px;
      text-transform: uppercase;
      margin: 0 0 30px 0;  
      }
    }

    img{
      width: 240px;

      @media (max-width: 850px) {
        width: 130px;
      }
    }

    @media (max-width: 700px) {
      width: 100%;
      margin: 0;
      border:  none;
    }
  }

  .description{
    display: flex;
    width: 60%;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    flex-direction: column;
    padding: 25px 0;

    @media (max-width: 700px) {
      width: 90%;
      margin: 0;
      border:  none;
      align-items: flex-start;
      padding: 0;
    }
    
    .github{
      display: flex;
      width: 100%;
      margin-top: 15px;
      opacity: 0.7;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      color: ${primary};
      transition: all ease-in-out 0.2s;
      cursor: pointer;

      @media (max-width: 700px) {
        margin: 2px 0 5px 0;
        align-items: center;
        justify-content: center;
      }

      :hover{
        opacity: 1;
      }

      a{
      font-size: 18px;
      font-weight: bold;
      margin: 1px 0 0 5px;
      text-decoration: none;
      color: ${primary};
      }
    }

    h2{
    font-size: 24px;
    text-transform: uppercase;
    margin: 0 0 30px 0;

    @media (max-width: 700px) {
      display: none;
      }
    }
    
    h3{
      font-size: 20px;
      margin: 0px;
      font-weight: 500;

      @media (max-width: 700px) {
        font-size: 20px;
      }
      }
    }

    p{
      font-size: 18px;
      font-weight: 300;

      @media (max-width: 700px) {
       text-align: justify;
      }
    }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ModalButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 5px;

  button{
    font-size: 16px;
    opacity: 0.7;
    border: 3px solid ${primary};
    color: ${primary};
    font-weight: bold;
    background-color: transparent;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    cursor: pointer;
    transition: all 0.2s;
    margin-bottom: 15px;

    :hover{
      opacity: 1;
    }

    @media (max-width: 700px) {
      margin-top: 15px;
      font-size: 14px;
      width: 38px;
      height: 38px;
    }
  }
`
