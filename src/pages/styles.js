import styled from 'styled-components'
import { backgroundColor, black, primary, white } from 'styles/colorProvider';

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 88vh;

  @media (max-width: 600px) {
    height: 80vh;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: column;
  width: 50%;
  position: relative;

  h3{
    font-size: 45px;
    color: ${white};
    text-transform: uppercase;
    font-weight: 300;
    line-height: 25px;
    cursor: pointer;

    :hover {
      color: ${primary};
    }

    @media (max-width: 600px) {
      font-size: 30px;
      line-height: 35px;
      margin-left: -15px;
    }
  }

  p{
    font-size: 18px;
    color: ${white};
    font-weight: 500;
    padding-right: 25px;
    line-height: 25px;

    @media (max-width: 600px) {
      font-size: 20px;
      margin-bottom: 100px;
      margin-left: -15px;
    }
  }

  .download{
    width: 80%;
    height: 45px;
    background: ${primary};
    border-radius: 5px;
    border: none;
    color: ${white};
    font-size: 18px;
    margin: 10px 50px 0 0; 
    cursor: pointer;

    :hover{
      background: transparent;
      border: 2.5px solid ${primary};
      transition: all ease-in-out 0.25s;
    }

    @media (max-width: 800px) {
      width: 80%;
      margin: -30px 0 50px 0;
    }
  }

  @media (max-width: 1000px) {
    width: 98%;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const ContainerBlack = styled.div `
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
  background: ${black};

`
export const ContainerDark = styled.div `
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${backgroundColor};
`

export const ProjectArea = styled.div`
  max-width: 85%;
  margin: 20px 0 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: ${backgroundColor};
  border-radius: 5px;
`;

export const PortfolioList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 5px;
  text-align: center;
  border: 1px solid ${backgroundColor};
  max-width: 100%;
  padding: 20px 0 0 0 ;
  margin-bottom: 10px;
`;

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
export const Subtitle = styled.p`
  width: 100%;
  font-size: 20px;
  color: #5f5f5f;
  font-weight: 500;
  font-style: italic;
  margin: 0 0 25px 0;
  
  
  @media (max-width: 800px) {
    width: 95%;
  }

`