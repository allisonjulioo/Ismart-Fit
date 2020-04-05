import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import HomeTabs from "../../components/HomeTabs";
import {
  Container,
  Header,
  SubHeader,
  TitleHeader,
  Delete,
  Title,
  Empty,
  EmptyText,
  EmptyPicture,
  Media,
  Picture,
  MediaBody,
  MediaLeft,
  MediaTitle,
  Description,
} from "./styles";
import image from "./../../assets/img/mini.png";
import empty from "./../../assets/img/empty.png";
import { grey } from "../../constants/colors";

const Notifications = () => {
  const [notify, setNotify] = useState([1, 2, 4]);
  return (
    <Container>
      <Header>
        <Title>Notificações</Title>
      </Header>
      <SubHeader>
        <TitleHeader>({notify.length}) Notificaçoes</TitleHeader>
        <Delete onPress={() => setNotify([])}>
          <Feather name="trash" color={grey} size={24} />
        </Delete>
      </SubHeader>
      {!notify.length && (
        <Empty>
          <EmptyPicture source={empty} />
          <EmptyText>Nada por aqui</EmptyText>
        </Empty>
      )}
      <ScrollView>
        {notify.map((item, i) => (
          <Media key={i} activeOpacity={0.85}>
            <MediaLeft>
              <Picture source={image} />
            </MediaLeft>
            <MediaBody>
              <MediaTitle>Sistema</MediaTitle>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </Description>
            </MediaBody>
          </Media>
        ))}
      </ScrollView>
      <HomeTabs />
    </Container>
  );
};

export default Notifications;
