import React from "react";
import { useState } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => alert(`${username}${password}`);
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={100}>
          <InputContainer>
            <Input
              stateFn={setFirstName}
              value={firstName}
              placeholder="First Name"
              autoCapitalize="none"
            />
            <Input
              stateFn={setLastName}
              value={lastName}
              placeholder="Last Name"
              autoCapitalize="none"
            />
            <Input
              stateFn={setUsername}
              value={username}
              placeholder="Username"
              autoCapitalize="none"
            />
            <Input
              stateFn={setPassword}
              value={password}
              placeholder="Password"
              isPassword={true}
            />
          </InputContainer>
          <Btn text={"Sign Up"} accent onPress={handleSubmit} />
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
