import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";
import DismissKeyboard from "../../../components/DismissKeyboard";

const Container = styled.View``;

const SearchContainer = styled.View`
  margin-top: 50px;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const SearchBar = styled.TextInput`
  height: 40px;
  width: 80%;
  background-color: white;
  border-radius: 12px;
  justify-content: center;
  padding-left: 10px;
`;

const CancelContainer = styled.TouchableOpacity``;
const CancelText = styled.Text``;

const SearchPresenter = () => {
  const navigation = useNavigation();
  return (
    <DismissKeyboard>
      <Container>
        <SearchContainer>
          <SearchBar autoFocus={true} elevation={4} />
          <CancelContainer onPress={() => navigation.goBack()}>
            <CancelText>Cancel</CancelText>
          </CancelContainer>
        </SearchContainer>
      </Container>
    </DismissKeyboard>
  );
};

export default SearchPresenter;
