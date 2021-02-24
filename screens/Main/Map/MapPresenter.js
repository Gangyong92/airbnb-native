import React from "react";
import { Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";
import colors from "../../../colors";

const { width } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ScrollView = styled.ScrollView`
  position: absolute;
  bottom: 50px;
`;

const RoomContainer = styled.View`
  background-color: transparent;
  width: ${width}px;
  align-items: center;
`;

const RoomCard = styled.View`
  background-color: white;
  width: ${width - 50}px;
  height: 120px;
  margin-right: 20px;
  border-radius: 10px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
`;
const RoomPhoto = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  margin-right: 20px;
`;
const Column = styled.View`
  width: 70%;
`;
const RoomName = styled.Text`
  font-size: 18px;
`;
const RoomPrice = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;

const MarkerWrapper = styled.View`
  align-items: center;
`;
const MarkerContainer = styled.View`
  background-color: ${(props) => (props.selected ? colors.red : colors.green)};
  padding: 2px 10px;
  border-radius: 10px;
  position: relative;
`;
const MarkerText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 18px;
`;
const MarkerTriangle = styled.View`
  border: 10px solid transparent;
  width: 10px;
  border-top-color: ${(props) => (props.selected ? colors.red : colors.green)};
`;

const RoomMarker = ({ selected, price }) => {
  return (
    <MarkerWrapper>
      <MarkerContainer selected={selected}>
        <MarkerText>${price}</MarkerText>
      </MarkerContainer>
      <MarkerTriangle selected={selected} />
    </MarkerWrapper>
  );
};

const MapPresenter = ({ currentIndex, rooms, onScroll, mapRef }) => {
  return (
    <Container>
      <MapView
        ref={mapRef}
        camera={{
          center: {
            latitude: parseFloat(rooms[0].lat),
            longitude: parseFloat(rooms[0].lng),
          },
          pitch: 0,
          heading: 0,
          zoom: 16,
          altitude: 700, // android는 해당사항 없음.
        }}
        style={{ height: "100%", width: "100%" }}
      >
        {rooms?.map((room, index) => (
          <Marker
            key={room.id}
            coordinate={{
              longitude: parseFloat(room.lng),
              latitude: parseFloat(room.lat),
            }}
          >
            <RoomMarker selected={index === currentIndex} price={room.price} />
          </Marker>
        ))}
      </MapView>

      <ScrollView
        scrollEventThrottle={50}
        onScroll={onScroll}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      >
        {rooms?.map((room) => (
          <RoomContainer key={room.id}>
            <RoomCard>
              <RoomPhoto
                source={
                  room.photos[0]?.file
                    ? { uri: room.photos[0]?.file }
                    : require("../../../assets/default_room_img.jpg")
                }
              />
              <Column>
                <RoomName>{room.name}</RoomName>
                <RoomPrice>${room.price}</RoomPrice>
              </Column>
            </RoomCard>
          </RoomContainer>
        ))}
      </ScrollView>
    </Container>
  );
};

export default MapPresenter;
