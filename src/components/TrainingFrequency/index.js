import React, { useState } from "react";
import {
  Container,
  Slide,
  Label,
  Row,
  ButtonWeek,
  TextButton,
  Small,
  RowChart,
  Gauge,
  TitleElement,
  TitleElementBold,
} from "./styles";
import * as color from "../../constants/colors";

const TrainingFrequency = () => {
  const [activeWeek, setActiveWeek] = useState(0);
  const onActiveButton = {
    backgroundColor: color.black,
    elevation: 10,
  };
  const onActiveText = {
    color: color.white,
  };
  const weeks = [
    { week: 1, percent: 70, frequency: 4 },
    { week: 2, percent: 90, frequency: 6 },
    { week: 3, percent: 80, frequency: 5 },
    { week: 4, percent: 100, frequency: 7 },
  ];
  const handleSetActiveWeek = (index) => {
    setActiveWeek(index);
  };
  return (
    <Container>
      <Slide>
        <Label>Março</Label>
      </Slide>
      <Row>
        {weeks.map((item, index) => (
          <ButtonWeek
            key={index}
            activeOpacity={0.8}
            onPress={() => handleSetActiveWeek(index)}
            style={index == activeWeek ? onActiveButton : ""}
          >
            <TextButton style={index == activeWeek ? onActiveText : ""}>
              {item.week}ª
            </TextButton>
            <Small style={index == activeWeek ? onActiveText : ""}>
              semana
            </Small>
          </ButtonWeek>
        ))}
      </Row>
      <RowChart>
        <Gauge
          value={weeks[activeWeek].percent}
          totalValue={100}
          showText
          outerColor={color.black}
          internalColor={color.primary}
          text={`${weeks[activeWeek].percent}%`}
          textStyle={{ color: color.black, fontSize: 20 }}
          showIndicator
        />
      </RowChart>
      <TitleElement>
        Foi um total de{"    "}
        <TitleElementBold>{weeks[activeWeek].frequency} dias</TitleElementBold>
        {"    "} essa semana
      </TitleElement>
    </Container>
  );
};

export default TrainingFrequency;
