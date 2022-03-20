import React, { useState } from "react";
import {
  Header,
  DrawerBody,
  MobileMenu,
  Container,
  Section,
  Left,
  Right,
  Title,
  Text,
  Topic,
  SubTopic,
  Hr,
  Skill,
} from "./styles";
import logotipo from "../assets/logotipo.png";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import LogoHtml from "../assets/logoHtml.svg";
import Javascript from "../assets/logoJavascript.svg";
import Css from "../assets/logoCss.svg";
import LogoR from "../assets/logoRect.svg";
import Git from "../assets/logoGit.svg";
import Mui from "../assets/logoMui.png";
import MySql from "../assets/logoMySql.png";
import Figma from "../assets/logoFigma.svg";
import animationData from "../styles/animation.json";
import loadingData from "../styles/loading.json";
import Lottie from "react-lottie";
import { BiMenu } from "react-icons/bi";
import { IconButton } from "@mui/material";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopIcon from "@mui/icons-material/LaptopMac";
import LocalBarIcon from '@mui/icons-material/LocalBar';

function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scrollTo = (section) => {
    setMobileMenuOpen(false);

    const element = document.getElementById(section);
    element.scrollIntoView({
      block: "start",
      scrollPadding: "50px",
      behavior: "smooth",
    });
  };

  const navTo = (url) => {
    setMobileMenuOpen(false);
    window.open(url, "_blank");
  };

  const renderDrawer = () => (
    <SwipeableDrawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
    >
      <DrawerBody>
        <img src={logotipo} alt="Logo Portifólio" />
        <p onClick={() => scrollTo("home")}>Home</p>
        <p onClick={() => scrollTo("skill")}>Skills</p>
        <p onClick={() => scrollTo("work")}>Work Experience</p>
        <button onClick={() => scrollTo("contact")}>Contact</button>
      </DrawerBody>
    </SwipeableDrawer>
  );
  return (
    <div className="App">
      {renderDrawer()}

      <MobileMenu>
        <IconButton
          className="menuIcon"
          onClick={() => setMobileMenuOpen(true)}
        >
          <BiMenu color="#fff" />
        </IconButton>
      </MobileMenu>

      <Header id="Home">
        <img src={logotipo} alt="logo" />

        <div className="menu">
          <div className="div"></div>
          <div className="navegation">
            <p onClick={() => scrollTo("Home")}>Home</p>
            <p onClick={() => scrollTo("Tools")}>Tools</p>
            <p onClick={() => scrollTo("WorkExperience")}>Work Experience</p>
          </div>
          <div className="areaButton">
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </div>
        </div>
      </Header>

      <Section>
        <Container>
          <Left>
            <ul>
              <Title>freelancer</Title>
              <Title>Developer web</Title>
              <Title>Quality Assurance</Title>
              <Text>
                Um desenvolvedor web é alguém que é capaz de projetar, criar e
                manter sites e aplicativos web a partir de um design de
                interface web e isso sei fazer muito bem.
              </Text>
            </ul>
            <button
              className="download"
              onClick={() =>
                navTo(
                  "https://drive.google.com/file/d/12MMOM8KaRl631R1V9ogRZB0hkhFJLoHB/view"
                )
              }
            >
              Baixar currículo
            </button>
          </Left>

          <Right>
            <Lottie
              options={animationOptions}
              height={500}
              width={500}
              autoplay={true}
            />
          </Right>
        </Container>
      </Section>

      <Section id="Tools">
        <div
          class="containerTopic"
          style={{
            backgroundImage:
              'url("https://c.pxhere.com/photos/d6/48/keyboard_mouse_work_computer_working-245.jpg!d")',
          }}
        >
          <Topic>Tools</Topic>
          <Hr />
          <SubTopic>
            Aqui são as ferramentas que tenho conhecimento e que uso em meus
            projetos.
          </SubTopic>
          <Skill>
            <div class="grid-item">
              <img src={LogoHtml} alt="" />
              <h1>HTML</h1>
            </div>
            <div class="grid-item">
              <img src={Css} alt="" />
              <h1>CSS</h1>
            </div>
            <div class="grid-item">
              <img src={Javascript} alt="" />
              <h1>JavaScript</h1>
            </div>
            <div class="grid-item">
              <img src={LogoR} alt="" />
              <h1>React.Js</h1>
            </div>
            <div class="grid-item">
              <img src={Git} alt="" />
              <h1>Git</h1>
            </div>
            <div class="grid-item">
              <img src={Mui} alt="" />
              <h1>Material Ui</h1>
            </div>
            <div class="grid-item">
              <img src={MySql} alt="" />
              <h1>MySQL</h1>
            </div>
            <div class="grid-item">
              <img src={Figma} alt="" />
              <h1>Figma</h1>
            </div>
          </Skill>
        </div>
      </Section>

      <Section id="WorkExperience">
        <div class="containerTopic">
          <Topic>Work Experience</Topic>
          <Hr />
          <SubTopic>
            Aqui vou falar um pouco sobre a minha trajetória como profissional.
          </SubTopic>

          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ py: "25px", px: 2 }}
                align="right"
                variant="body2"
                color="white"
              >
                <p className="year">2022/Atual</p>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot
                  style={{
                    background: "transparent",
                    border: "1.5px solid #08bdce",
                  }}
                >
                  <Lottie
                    options={loadingOptions}
                    height={35}
                    width={35}
                    autoplay={true}
                  />
                </TimelineDot>

                <TimelineConnector style={{ height: "100px" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "5px", px: 2 }}>
                <h3 className="company">Grupo Seven7 - Trainee</h3>
                <p className="acting">
                  Atuo como desenvolvedor Front-end no projeto SplitRisk
                </p>
              </TimelineContent>
            </TimelineItem>


            <TimelineItem>
              <TimelineOppositeContent
                sx={{ py: "25px", px: 2 }}
                align="right"
                variant="body2"
                color="white"
              >
                <p className="year">2021/2022</p>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot style={{ background: "#08bdce",}}>
                  <LaptopIcon style={{color: '#202020'}}/>
                </TimelineDot>

                <TimelineConnector style={{ height: "100px" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "5px", px: 2 }}>
                <h3 className="company">Grupo Seven7 - Estágio</h3>
                <p className="acting">
                  Atuo como desenvolvedor Front-end no projeto SplitRisk
                </p>
              </TimelineContent>
            </TimelineItem>


            <TimelineItem>
              <TimelineOppositeContent
                sx={{ py: "25px", px: 2 }}
                align="right"
                variant="body2"
                color="white"
              >
                <p className="year">2021/2021</p>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot style={{ background: "transparent", border: "1.5px solid #08bdce"}}>
                  <LocalBarIcon style={{color: '#08bdce'}}/>
                </TimelineDot>

              </TimelineSeparator>
              <TimelineContent sx={{ py: "5px", px: 2 }}>
                <h3 className="company">Água Branca Distribuidoras de bebidas LTDA</h3>
                <p className="acting">
                  Atuo como desenvolvedor Front-end no projeto SplitRisk
                </p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </Section>
      
    </div>
  );
}

export default Page;
