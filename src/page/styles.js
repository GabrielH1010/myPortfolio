import styled from 'styled-components';
import { primary, text, white } from '../styles/colorProvider'

export const Header = styled.nav`
  display: flex;
  flex-direction: row;
  height: 13vh;
  align-items: center;
  justify-content: center;
  background-color: black;

  img{
    display: flex;
    flex-direction: row;
    width: 85px;
    height: 100%;
  }

  .menu {
    display: flex;
    flex-direction: row;
    width: 85%;
    justify-content: space-between;
  }

  .div {
    width: 50%;;
  }
  .navegation {
    width: 45%;
    padding-left: 15%;
    display: flex;
    flex-direction: row;
  }
  .areaButton {
    width: 10%;
    display: flex;
    align-items: center;
  }

  button{
    width: 100%;
    height: 35px;
    background: ${primary};
    border-radius: 5px;
    border: none;
    color: ${white};
    font-size: 16px;
    cursor: pointer;

    :hover{
      background: transparent;
      border: 2.5px solid ${primary};
      transition: all ease-in-out 0.25s;
    }
  }
  p {
    text-decoration: none;
    color: ${white};
    margin-right: 35px;
    display: flex;
    font-size: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all ease-in-out 0.2s;

    &:hover {
      color: ${primary};
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const MobileMenu = styled.nav`
  display: none;

  @media (max-width: 1000px) {
    position: relative;
    display: flex;
    flex-direction: row;
    height: 75px;
    align-items: center;
    justify-content: flex-end;
    background-color: black;
    padding: 0px 20px;

    .menuIcon {
      position: absolute;
      right: 30px;
    }
  }
`; 

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 30px 0px;
  background-color: ${(props) => props.backgroundColor};

  .description{
    background-color: #000;
    margin-left: 2%;
    align-items: center;
    padding: 2%;
    border-radius: 10px;

    h3{
      font-size: 18px;
      text-align: left;
      margin-left: 10px;
      font-weight: 300;
      color: #959595;
      line-height: 20px;
    }

    @media (max-width: 800px) {
      width: 80%;
      margin: 0;
    }
  }

  .containerTopic{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 85%;
    height: 115vh;
    margin: 15px 0 0 0;
    background-image: ${(props) => props.backgroundImage};
    border-radius: 3px;
    
    .company{
      margin: 0;
      font-size: 20px;
      font-weight: 500;
      font-family: 'Roboto';
      color: ${primary};
      cursor: pointer;

      @media (max-width: 800px) {
        font-size: 18px;
      }
    }

    .year, .acting{
      margin: 0;
      font-size: 16px;
      font-weight: 300;
      font-family: 'Roboto';

      @media (max-width: 800px) {
        font-size: 14px;
      }
    }
    
    .profile{
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 20px;

    img{
      float: left;
      width: 25%;
      border-radius: 50%;

        @media (max-width: 800px) {
        display: none;
      }
    }
    @media (max-width: 800px) {
      justify-content: center;
      align-items: center;
    }
    }

    @media (max-width: 800px) {
      width: 100%;
      height: 115vh;
    }

    @media (max-width: 450px) {
      width: 100%;
      height: 110vh;
    }
  }
  `
export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;

  @media (max-width: 1080px) {
    width: 80%;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: column;
  width: 50%;
  position: relative;

  .download{
    width: 80%;
    height: 45px;
    background: ${primary};
    border-radius: 5px;
    border: none;
    color: ${white};
    font-size: 18px;
    margin: 10px 8% 0 0; 
    cursor: pointer;

    :hover{
      background: transparent;
      border: 2.5px solid ${primary};
      transition: all ease-in-out 0.25s;
    }

    @media (max-width: 800px) {
      width: 80%;
      margin: 0;
    }
  }

  @media (max-width: 1080px) {
    width: 100%;
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

export const Skill = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 831px) {
      grid-template-columns: 135px 135px 135px;
    }
  @media (max-width: 450px) {
      grid-template-columns: 200px 200px;
    }

    @media (max-width: 375px) {
      grid-template-columns: 140px 140px;
    }
  }

  .grid-item{
    cursor: pointer;
    justify-content: center;
    align-items: center;
    padding-top: 5%;
    
    :hover {
      background: #000;
      border-radius: 3px;
      
      h1{
        color:${primary};
      }
    }

  h1{
    font-size: 20px;
    color: ${text};
    font-weight: 600;
  }

  img{
    width: 50%;
  }
}
`;

export const DrawerBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 280px;
  height: 100%;
  justify-content: flex-start;
  padding-top: 80px;
  align-items: center;

  img {
    max-width: 150px;
    margin-bottom: 10%;
  }

  p{
    font-size: 18px;
    font-weight: 300;
    color: white;
    margin-bottom: 20%;
  }
  a{
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 10%;
    transition: all ease-in-out 0.25s;

    &:hover {
      color: ${primary};
    }
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  color: ${text};
  text-transform: uppercase;
  font-weight: 300;
  line-height: 25px;
  cursor: pointer;

  :hover {
    color: ${primary};
  }

  @media (max-width: 600px) {
    font-size: 37px;
    line-height: 35px;
  }
`
export const Text = styled.h3`
  font-size: 18px;
  color: ${text};
  font-weight: 500;
  margin-right: 20px;

  @media (max-width: 600px) {
    margin-bottom: 15%;
  }
`

export const Topic = styled.h1`
  font-size: 35px;
  color: ${text};
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;

  :hover {
    color: ${primary};
  }

  @media (max-width: 600px) {
    font-size: 30px;
  }
`
export const SubTopic = styled.h3`
  font-size: 20px;
  color: ${text};
  font-weight: 300;
  cursor: pointer;

  :hover {
    color: ${primary};
  }
  
  @media (max-width: 800px) {
    padding: 10px;
  }

`
export const Hr = styled.hr`
  width: 20px;
  margin-top:-20px;
  border: 3px solid ${white};
`
export const Footer = styled.footer`
  display: flex;
  width: 100%;
  height: 35vh;
  background: black;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: -10%;
  position: absolute;

  @media (max-width: 450px) {
    margin-top: -50%;
    }

  @media (max-width: 375px) {
    margin-top: 0%;
  }
`

export const LinkProfile = styled.div`
  display: inline-block;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 1%;
  align-items: center;
  text-align: center;

  img{
    width: 40px;
    margin: 0 2% 0 2%;
    cursor: pointer;

    @media (max-width: 600px) {
    margin: 5% 3% 3% 3%;
    }
  }

  .copyright{
    font-size: 14px;
    color: #888888;
    font-weight: 300;
  }
;`