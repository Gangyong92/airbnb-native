import React from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import Btn from "../../../components/Auth/Btn";
import Input from "../../../components/Auth/Input";
import DismissKeyboard from "../../../components/DismissKeyboard";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({
  setFirstName,
  firstName,
  setLastName,
  lastName,
  setEmail,
  email,
  setPassword,
  password,
  loading,
  handleSubmit,
}) => (
  <DismissKeyboard>
    <Container>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={100}>
        <InputContainer>
          <Input
            stateFn={setFirstName}
            value={firstName}
            placeholder="First Name"
            autoCapitalize="words"
          />
          <Input
            stateFn={setLastName}
            value={lastName}
            placeholder="Last Name"
            autoCapitalize="words"
          />
          <Input
            keyboardType={"email-address"}
            stateFn={setEmail}
            value={email}
            placeholder="Email"
            autoCapitalize="none"
          />
          <Input
            stateFn={setPassword}
            value={password}
            placeholder="Password"
            isPassword={true}
          />
        </InputContainer>
        <Btn loading={loading} text={"Sign Up"} accent onPress={handleSubmit} />
      </KeyboardAvoidingView>
    </Container>
  </DismissKeyboard>
);
