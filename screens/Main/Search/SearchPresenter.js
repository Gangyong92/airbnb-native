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

const FiltersContainer = styled.ScrollView`
  flex-direction: row;
  margin-top: 10px;
`;
const FilterContainer = styled.View`
  align-items: center;
  margin-right: 15px;
`;
const FilterLabel = styled.Text`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: 500;
`;
const Filter = styled.TextInput`
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  elevation: 3;
  width: 80px;
`;

const SearchPresenter = () => {
  const navigation = useNavigation();
  return (
    <DismissKeyboard>
      <Container>
        <SearchContainer>
          <SearchBar
            autoFocus={true}
            elevation={4}
            placeholder="Search by city..."
          />
          <CancelContainer onPress={() => navigation.goBack()}>
            <CancelText>Cancel</CancelText>
          </CancelContainer>
        </SearchContainer>
        <FiltersContainer
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 20 }}
        >
          <FilterContainer>
            <FilterLabel>Beds</FilterLabel>
            <Filter placeholder="0" keyboardType={"number-pad"} />
          </FilterContainer>
          <FilterContainer>
            <FilterLabel>Bedrooms</FilterLabel>
            <Filter placeholder="0" keyboardType={"number-pad"} />
          </FilterContainer>
          <FilterContainer>
            <FilterLabel>Bathrooms</FilterLabel>
            <Filter placeholder="0" keyboardType={"number-pad"} />
          </FilterContainer>
          <FilterContainer>
            <FilterLabel>Max. price</FilterLabel>
            <Filter placeholder="$0" keyboardType={"number-pad"} />
          </FilterContainer>
        </FiltersContainer>
      </Container>
    </DismissKeyboard>
  );
};

export default SearchPresenter;
