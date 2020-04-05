import React, { useState, createRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Modal } from "react-native";
import { secondary } from "../../constants/colors";
import {
  Container,
  Header,
  Picture,
  Content,
  Label,
  Input,
  Input2,
  Submit,
  Icon,
  TextButton,
  Preamble,
  ModalBody,
  ModalHeader,
  ModalPicture,
  ModalText,
  ModalIcon,
} from "./styles";

import logoImg from "./../../assets/img/logo-black.png";
import biometric from "./../../assets/img/biometric.png";

const Auth = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [cpf, setCpf] = useState();
  const [cpfError, setCpfError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState();
  const mockCpf = "000.000.000-00";
  const mockPass = "a";

  const navigation = useNavigation();
  const nextStep = async () => {
    if (cpf == mockCpf && activeStep === 0) {
      setActiveStep(1);
      setModalVisible(!modalVisible);
    } else if (activeStep === 1) {
      login();
    } else {
      setCpfError(true);
    }
  };
  const login = async () => {
    if (password == mockPass && activeStep === 1) {
      setPasswordError(false);
      navigation.navigate("Home");
    } else {
      setPasswordError(true);
    }
  };
  const closeModalFinger = () => {
    setModalVisible(!modalVisible);
    setActiveStep(1);
  };

  return (
    <Container>
      <Header>
        <Picture source={logoImg} style={{ resizeMode: "contain" }} />
      </Header>
      <Text>Acesse o seu espaço :)</Text>
      <Label>
        <Input
          placeholder="CPF"
          keyboardType="numeric"
          type={"cpf"}
          maxLength={14}
          value={cpf}
          onChange={(cpf) => setCpf(cpf.nativeEvent.text)}
          style={{ borderBottomColor: cpfError ? secondary : "transparent" }}
        />
        {cpfError && <Icon name="x" color={secondary} />}
      </Label>
      {activeStep === 1 && (
        <Label>
          <Input2
            type={"custom"}
            placeholder="DIGITE SUA SENHA"
            secureTextEntry={true}
            onChange={(pass) => setPassword(pass.nativeEvent.text)}
            style={{
              borderBottomColor: passwordError ? secondary : "transparent",
            }}
          />
          {passwordError && <Icon name="x" color={secondary} />}
          {passwordError && (
            <Preamble style={{ paddingTop: 3, color: secondary }}>
              Senha incorreta
            </Preamble>
          )}
        </Label>
      )}
      <Content>
        <Submit onPress={nextStep} activeOpacity={0.8} value={password}>
          <TextButton>{activeStep === 1 ? "Entrar" : "Seguinte"}</TextButton>
        </Submit>
      </Content>
      <Preamble>
        A primeira senha de acesso é enviada por e-mail no momento da adesão,
        caso tenha esquecido ela, clique em "esqueci minha senha".
      </Preamble>

      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <ModalBody>
          <ModalHeader>Autenticação!</ModalHeader>
          <ModalPicture source={biometric} />
          <ModalText>Toque no sensor de digital</ModalText>
          <ModalIcon name="check" color="green" size={52} />
          <Submit onPress={closeModalFinger} activeOpacity={0.8}>
            <TextButton>Entrar com senha</TextButton>
          </Submit>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default Auth;
