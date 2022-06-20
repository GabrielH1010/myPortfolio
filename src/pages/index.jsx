import React, { useState, useEffect } from "react";
import Bounce from "react-reveal/Bounce";
import Lottie from "react-lottie";
import animationData from "../styles/animation.json";
import Fade from "react-reveal/Fade";
import {
  data,
  Header,
  Project,
  Modal,
  ModalItem,
  TimeLine,
  Footer,
  Tools,
  About,
} from "components";
import {
  ProjectArea,
  PortfolioList,
  ContainerBlack,
  ContainerDark,
  Title,
  Hr,
  Subtitle,
  Container,
  Left,
  Right,
} from "./styles";

function Home() {
  const [project, setProject] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState({});

  const navTo = (url) => {
    window.open(url, "_blank");
  };

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    setProject(data);
  }, []);

  const handleProjectClick = (data) => {
    setModalData(data);
    setModalStatus(true);
  };

  return (
    <>
      <Header />
      <Container>
        <Left>
          <Fade left cascade>
            <ul>
              <h3>Freelancer</h3>
              <h3>Web developer</h3>
              <h3>Quality Assurance</h3>
              <p>
                Um desenvolvedor Front-end projeta, cria e mantém sites e
                aplicativos web a partir de um design de interface.
              </p>
            </ul>
            <button
              className="download"
              onClick={() =>
                navTo(
                  "https://drive.google.com/file/d/1wwFAOaKVlEuJM-14ecF_TgGe59FIBxaT/view?usp=sharing"
                )
              }
            >
              VISUALIZAR CURRÍCULO
            </button>
          </Fade>
        </Left>

        <Right>
          <Fade right>
            <Lottie
              options={animationOptions}
              height={500}
              width={500}
              autoplay={true}
            />
          </Fade>
        </Right>
      </Container>
      <ContainerBlack>
        <Fade left>
          <Title id="Projects">MEUS PROJETOS</Title>
          <Hr />
          <Subtitle>
            Aqui são os projetos que venho desenvolvendo ao longo da minha
            carreira.
          </Subtitle>
        </Fade>

        <ProjectArea>
          <PortfolioList>
            {project.map((data, key) => (
              <Project key={key} data={data} onClick={handleProjectClick} />
            ))}
          </PortfolioList>
        </ProjectArea>

        <Modal status={modalStatus} setStatus={setModalStatus}>
          <Bounce top>
            <ModalItem data={modalData} setStatus={setModalStatus} />
          </Bounce>
        </Modal>
      </ContainerBlack>
      <ContainerDark>
        <Fade right>
          <Title id="Tools">Ferramentas</Title>
          <Hr />
          <Subtitle>
            Ferramentas que tenho conhecimento e utilizo em meus projetos.
          </Subtitle>
        </Fade>
        <Tools />
      </ContainerDark>

      <ContainerBlack>
        <Fade left>
          <Title id="Experience">EXPÊRIENCIA PROFISSIONAL</Title>
          <Hr />
          <Subtitle>Linha do tempo da minha trajetória profissional.</Subtitle>
        </Fade>
        <TimeLine />
      </ContainerBlack>
      <ContainerDark>
        <Fade right>
          <Title id="About">SOBRE MIM</Title>
          <Hr />
          <Subtitle>
            Aqui falo um pouco mais sobre minha trajetória e meus objetivos
            profissionais.
          </Subtitle>
        </Fade>
        <About />
      </ContainerDark>
      <Footer />
    </>
  );
}

export default Home;
