import React from "react";
import Profile from "assets/perfil.jpg";
import { Container } from "./styles";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <>
      <Container>
        <Fade bottom>
          <div className="image-container">
            <img src={Profile} alt="" />
          </div>
          <div className="description">
            <h3>
              "Meu nome é Gabriel e sou desenvolvedor Front-end. Tenho contato
              com a tecnologia desde os meus 12 anos. Meu primeiro computador me
              despertou a curiosidade de como tudo aquilo funcionava, desde
              então comecei a desmontar, entender as peças e montar novamente o
              computador.
            </h3>
            <h3>
              Quando terminei o ensino médio consegui bolsa na faculdade e
              iniciei o curso de Análise e Desenvolvimento de Sistemas, não
              satisfeito somente com as matérias da faculdade fiz alguns cursos
              por fora e iniciei minha carreira na área de TI como Quality
              Assurance e posteriormente comecei a estudar Front-end, que é a
              área que atuo. Continuo aprimorando meus conhecimentos atuais e
              disposto a aprender novas tecnologias, para assim, um dia poder
              repassar os meus conhecimentos.
            </h3>
          </div>
        </Fade>
      </Container>
    </>
  );
}

export default About;
