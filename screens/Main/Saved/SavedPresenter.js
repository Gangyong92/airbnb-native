import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import RoomCard from "../../../components/RoomCard";

const Container = styled.View`
  margin-top: 70px;
  padding: 0px 30px;
`;

const Title = styled.Text`
  font-size: 36px;
  margin-bottom: 10px;
`;
const SV = styled.ScrollView``;

const NoFavs = styled.Text``;

const SavedPresenter = ({ rooms }) => (
  <Container>
    <StatusBar
      translucent={true}
      backgroundColor="transparent"
      barStyle="dark-content"
    />
    <Title>Favourites ({rooms.length})</Title>
    <SV
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      {rooms.length !== 0 ? (
        rooms.map((room) => (
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
        ))
      ) : (
        <NoFavs>You don't have any favs.</NoFavs>
      )}
    </SV>
  </Container>
);

export default SavedPresenter;
