import styled from 'styled-components';
import { primary, white } from 'styles/colorProvider';

export const DrawerBody = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#000, #202020,#3D3D3D, #4F4F4F);
  width: 100vw;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  .container{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }

  .image{
    width: 50%;
    margin: 50px 0 0 80px;

    img{
      width: 300px;
    }

    @media (max-width: 1000px) {
        display: none;
    }
  }
  .menu{
    width: 50%;
    margin: 25px 0 0 80px;

    @media (max-width:1000px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        margin: 80px 0 30px 0px;
    }
  }

  h3{
    font-size: 44px;
    color: ${white};
    cursor: pointer;

    :hover{
      transition: all 0.2s;
      color: ${primary};
    }

    @media (max-width:1000px){
        font-size: 30px;
    }
  }
`

export const ContainerArea = styled.header`
    display: flex;
    height: 12vh;
    width: 100vw;
    background: #010101;
    position: static;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

  img{
      width: 70px;
      height: 70px;
      margin-right: 50px;
      cursor: pointer;

      @media (max-width: 900px){
        margin-right: 35px;
    }
  }
`

export const Bottom = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width:1000px) {
    margin: 20px 0 20px 0;
    }

  button{
    font-size: 18px;
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

    @media (max-width:1000px) {
      width: 50px;
      height: 50px;
    }
    :hover{
      opacity: 1;
    }
  }

`