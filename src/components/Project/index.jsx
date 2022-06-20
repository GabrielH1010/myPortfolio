import React from "react";
import { Container, Image } from "./styles";
import Fade from "react-reveal/Fade";

const ProjectItem = ({ onClick, data }) => {
  const handleClick = () => {
    onClick(data);
  };

  return (
    <>
      <Fade bottom>
        <Container onClick={handleClick}>
          <Image>
            <img src={data.img} alt="Imagem representativa do meu projeto" />
          </Image>
          <div>
            <h3>{data.title}</h3>
            <p>{data.tecnonolgy}</p>
          </div>
        </Container>
      </Fade>
    </>
  );
};

export default ProjectItem;
