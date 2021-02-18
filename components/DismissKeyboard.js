import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

const DismissKeyboard = ({ children }) => {
  const onPress = () => Keyboard.dismiss();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;
