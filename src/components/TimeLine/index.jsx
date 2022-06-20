import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopIcon from "@mui/icons-material/LaptopMac";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import loadingData from "styles/loading.json";
import Lottie from "react-lottie";
import { Container } from "./styles";

export default function CustomizedTimeline() {
  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Container>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ py: "10px", px: 2 }}
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
                  border: "2px solid #08bdce",
                }}
              >
                <Lottie
                  options={loadingOptions}
                  height={35}
                  width={35}
                  autoplay={true}
                />
              </TimelineDot>

              <TimelineConnector style={{ height: "115px" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "0px", px: 2 }}>
              <h3 className="company">Grupo Seven7 - Trainee</h3>
              <p className="acting">
                Atuo como desenvolvedor Front-end no projeto SplitRisk
              </p>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ py: "5px", px: 2 }}
              align="right"
              variant="body2"
              color="white"
            >
              <p className="year">2021/2022</p>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot style={{ background: "#08bdce" }}>
                <LaptopIcon style={{ color: "#202020" }} />
              </TimelineDot>

              <TimelineConnector style={{ height: "115px" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "0px", px: 2 }}>
              <h3 className="company">Grupo Seven7 - Estágio</h3>
              <p className="acting">
                Atuava como QA garantindo a qualidade do produto realizando
                testes.
              </p>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ py: "5px", px: 2 }}
              align="right"
              variant="body2"
              color="white"
            >
              <p className="year">2021/2021</p>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot
                style={{
                  background: "transparent",
                  border: "1.5px solid #08bdce",
                }}
              >
                <LocalBarIcon style={{ color: "#08bdce" }} />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ py: "0px", px: 2 }}>
              <h3 className="company">Água Branca Distribuidoras de bebidas</h3>
              <p className="acting">
                Atuava no setor Fiscal na emissão e lançamento de notas fiscais.
              </p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </>
  );
}
