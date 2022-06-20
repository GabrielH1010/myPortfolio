import styled from "styled-components";
import { black, primary } from "styles/colorProvider";

export const Container = styled.div`
    display: flex;
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0 35px 0;

    @media (max-width: 800px) {
      width: 85%;
    }
    .image-container{
      display: flex;
      width: 100%;
      height: 240px;
      align-items: center;
      justify-content: center;
      margin-right: 30px;

      @media (max-width: 1000px) {
        display: none;
      }
      @media (min-width: 1600px) {
        display: none;
    }

      img{
        float: left;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }

    }

    .description{
    background-color: ${black};
    align-items: center;
    padding: 10px 30px;
    border-radius: 5px;
    border: 1px solid ${primary};

    h3{
      font-size: 16px;
      color: #5f5f5f;
      font-weight: 500;
      font-style: italic;      
      line-height: 20px;
      text-align: left;
    }

    @media (max-width: 800px) {
      width: 100%;
      margin: 0;
    }
  }
`