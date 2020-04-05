import React from "react";
import { Container, Header, Quit, TextButton, Avatar, Name } from "./styles";
import obama from "./../../assets/img/obama.jpg";
import HomeTabs from "../../components/HomeTabs";

const Profile = () => {
  return (
    <Container>
      <Header>
        <Avatar source={obama} stye={{ elevation: 12 }} />
        <Name>Barack Obama</Name>
      </Header>
      <Name>Isso eh tudo</Name>
      <Quit>
        <TextButton>Sair</TextButton>
      </Quit>
      <HomeTabs />
    </Container>
  );
};

export default Profile;
