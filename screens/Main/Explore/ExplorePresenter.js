import React from "react";
import { ActivityIndicator, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import RoomCard from "../../../components/RoomCard";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

const FakeBar = styled.View`
  height: 40px;
  width: 100%;
  background-color: white;
  margin: 80px 0 10px 0;
  border-radius: 12px;
  justify-content: center;
  padding-left: 10px;
`;
const FakeText = styled.Text`
  font-size: 14px;
  font-weight: 300;
`;

const ExplorePresenter = ({ rooms, increasePage }) => {
  return (
    <Container>
      {rooms.length === 0 ? (
        <ActivityIndicator color="black" />
      ) : (
        <>
          <FakeBar elevation={4}>
            <FakeText>Search...</FakeText>
          </FakeBar>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: "100%" }}
            contentContainerStyle={{ paddingTop: 30 }}
          >
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                name={room.name}
                price={room.price}
                photos={room.photos}
                id={room.id}
                isSuperHost={room.user.superhost}
                isFav={room.is_favs}
              />
            ))}
            <TouchableOpacity onPress={increasePage}>
              <Text>Load More</Text>
            </TouchableOpacity>
          </ScrollView>
        </>
      )}
    </Container>
  );
};

export default ExplorePresenter;
