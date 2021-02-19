import React from "react";
import { useState } from "react";
import utils from "../../../utils";
import api from "../../../api";
import SignUpPresenter from "./SignUpPresenter";

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
    if (!utils.isEmail(email)) {
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
    <SignUpPresenter
      setFirstName={setFirstName}
      firstName={firstName}
      setLastName={setLastName}
      lastName={lastName}
      setEmail={setEmail}
      email={email}
      setPassword={setPassword}
      password={password}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};
