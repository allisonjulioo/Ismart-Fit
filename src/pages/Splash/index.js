import React, { Component } from "react";
import { Container, Header, Picture, Content } from "./styles";

import {
  Button,
  ButtonSecondary,
  TextPrimary,
  TextSecondary
} from "../../../styles";

import logoImg from "./../../assets/img/logo-black.png";
import SplashCarousel from "./../../components/Carousel/";

export default class Splash extends Component {
  render = () => {
    return (
      <Container>
        <Header>
          <Picture source={logoImg} style={{ resizeMode: "contain" }} />
        </Header>
        <SplashCarousel />
        <Content>
          <Button
            onPress={() => this.props.navigation.navigate("FindGymList")}
            title="Ainda nao so aluno"
          >
            <TextPrimary>Ainda nao sou aluno</TextPrimary>
          </Button>

          <ButtonSecondary
            onPress={() => this.props.navigation.navigate("Auth")}
            title="Ainda nao so aluno"
          >
            <TextSecondary>Espaço do aluno</TextSecondary>
          </ButtonSecondary>
        </Content>
      </Container>
    );
  };
}
