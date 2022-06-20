import styled from 'styled-components';
import { black, primary, white } from 'styles/colorProvider'

export const Skill = styled.div`
display: grid;
grid-template-columns: 220px 220px 220px;
width: 100%;
gap: 15px 80px;
align-items: center;
justify-content: center;
margin-bottom: 25px;

@media (max-width: 1000px) {
    grid-template-columns: 135px 135px 135px;
    gap: 15px 80px;
  }

@media (max-width: 650px) {
    grid-template-columns: 200px 200px;
    gap: 25px 10px;
  }
  
@media (max-width: 450px) {
    grid-template-columns: 150px 150px;
    gap: 10px;
  }

  @media (max-width: 380px) {
    grid-template-columns: 135px 135px;
    gap: 20px;
  }

.grid-item{
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
  border: 2px solid transparent;
  transition: all ease-in-out 0.15s;
  border-radius: 5px;
  
  :hover {
    background: ${black};
    border: 2px solid ${primary};
        
    h1{
      color:${primary};
    }
  }
    h1{
    font-size: 20px;
    color: ${white};
    font-weight: 500;
    transition: all ease-in-out 0.15s;
    text-transform: uppercase;
    }

    img{
    width: 50%;
    }
}
`;