import React from "react";
import { useState } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";
import { isEmail } from "../../utils";
import api from "../../api";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({ navigation: { navigate } }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const isFormValid = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      alert("All fields are required.");
      return false;
    }
    if (!isEmail(email)) {
      alert("Please add a valid email.");
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    if (!isFormValid()) {
      return;
    }
    setLoading(true);
    try {
      const { status } = await api.createAccount({
        first_name: firstName,
        last_name: lastName,
        email,
        username: email,
        password,
      });
      if (status === 201) {
        alert("Account created, Sign in, please.");
        // 계정이 생성 되었다면  SignIn으로 가도록함.
        // Screen에 들어가는 name prop 값과 같음.
        navigate("SignIn", { email, password });
      }
    } catch (e) {
      alert("The email is taken");
    } finally {
      setLoading(false);
    }
  };
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
          <Btn
            loading={loading}
            text={"Sign Up"}
            accent
            onPress={handleSubmit}
          />
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
