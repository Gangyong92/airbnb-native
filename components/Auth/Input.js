import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { acc } from "react-native-reanimated";
import styled from "styled-components/native";
import PropTypes from "prop-types";

// 스크린의 길이는 가져옴.
const { width } = Dimensions.get("screen");

const Container = styled.TextInput`
  width: ${width / 1.5}px;
`;

const Input = ({
  stateFn,
  value,
  placeholder,
  isPassword = false,
  autoCapitalize,
}) => (
  <Container
    onChangeText={(text) => stateFn(text)}
    value={value}
    placeholder={placeholder}
    secureTextEntry={isPassword ? true : false}
    autoCapitalize={autoCapitalize}
  />
);

Input.protoType = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isPassword: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  stateFn: PropTypes.func.isRequired,
};

export default Input;
