import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";

// 스크린의 길이는 가져옴.
const { width } = Dimensions.get("screen");

const Container = styled.TextInput`
  width: ${width / 1.5}px;
  padding: 12.5px 20px;
  border: 1px solid grey;
  background-color: white;
  border-radius: 30px;
  margin-bottom: 10px;
  font-weight: 500;
`;

const Input = ({
  stateFn,
  value,
  placeholder,
  isPassword = false,
  autoCapitalize,
  keyboardType,
}) => (
  <Container
    keyboardType={keyboardType}
    onChangeText={(text) => stateFn(text)}
    value={value}
    placeholder={placeholder}
    secureTextEntry={isPassword ? true : false}
    autoCapitalize={autoCapitalize}
  />
);

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isPassword: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  stateFn: PropTypes.func.isRequired,
};

export default Input;
