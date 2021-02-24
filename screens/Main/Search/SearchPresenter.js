import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import colors from "../../../colors";
import DismissKeyboard from "../../../components/DismissKeyboard";
import RoomCard from "../../../components/RoomCard";

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

const SearchBtn = styled.TouchableOpacity`
  background-color: ${colors.red};
  padding: 10px;
  margin: 10px 30px;
  border-radius: 10px;
  align-items: center;
`;
const SearchText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const ResultText = styled.Text`
  margin-top: 10px;
  text-align: center;
  font-size: 16px;
`;

const Results = styled.ScrollView`
  margin-top: 25px;
`;

const SearchPresenter = ({
  navigation,
  searching,
  setBeds,
  setBedrooms,
  setBathrooms,
  setMaxPrice,
  results,
  triggerSearch,
  beds,
  bedrooms,
  bathrooms,
  maxPrice,
}) => {
  return (
    <DismissKeyboard>
      <>
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
            contentContainerStyle={{
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}
          >
            <FilterContainer>
              <FilterLabel>Beds</FilterLabel>
              <Filter
                onChangeText={(text) => setBeds(text)}
                value={beds}
                placeholder="0"
                keyboardType={"number-pad"}
              />
            </FilterContainer>
            <FilterContainer>
              <FilterLabel>Bedrooms</FilterLabel>
              <Filter
                onChangeText={(text) => setBedrooms(text)}
                value={bedrooms}
                placeholder="0"
                keyboardType={"number-pad"}
              />
            </FilterContainer>
            <FilterContainer>
              <FilterLabel>Bathrooms</FilterLabel>
              <Filter
                onChangeText={(text) => setBathrooms(text)}
                value={bathrooms}
                placeholder="0"
                keyboardType={"number-pad"}
              />
            </FilterContainer>
            <FilterContainer>
              <FilterLabel>Max. price</FilterLabel>
              <Filter
                onChangeText={(text) => setMaxPrice(text)}
                value={maxPrice}
                placeholder="$0"
                keyboardType={"number-pad"}
              />
            </FilterContainer>
          </FiltersContainer>
        </Container>
        <SearchBtn onPress={searching ? null : triggerSearch}>
          {searching ? (
            <ActivityIndicator color="white" />
          ) : (
            <SearchText>Search</SearchText>
          )}
        </SearchBtn>
        {results ? (
          <ResultText>Showing {results.count} results</ResultText>
        ) : null}
        <Results contentContainerStyle={{ paddingHorizontal: 15 }}>
          {results?.results?.map((room) => (
            <RoomCard
              key={room.id}
              name={room.name}
              price={room.price}
              photos={room.photos}
              id={room.id}
              isSuperHost={room.user.superhost}
              isFav={room.is_favs}
              roomObj={room}
            />
          ))}
        </Results>
      </>
    </DismissKeyboard>
  );
};

export default SearchPresenter;
