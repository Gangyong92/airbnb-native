import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;
const TextInput = styled.TextInput``;

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => alert(`${username}${password}`);
  return (
    <Container>
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
      <Btn text={"Sign In"} accent onPress={handleSubmit} />
    </Container>
  );
};