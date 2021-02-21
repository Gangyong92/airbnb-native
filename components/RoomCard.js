import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Dimensions } from "react-native";
import Swiper from "react-native-swiper";

// 작동 환경의 Dimension을 획득
const { height } = Dimensions.get("screen");

const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
  align-items: flex-start;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 7px;
`;
const Superhost = styled.View`
  padding: 3px 5px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 5px;
`;
const SuperHostText = styled.Text`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 10px;
`;

const PriceContainer = styled.View`
  flex-direction: row;
`;
const PriceText = styled.Text`
  font-size: 16px;
`;
const PriceNumber = styled.Text`
  font-weight: 600;
`;

const PhotosContainer = styled.View`
  overflow: hidden;
  margin-bottom: 10px;
  width: 100%;
  height: ${height / 4}px;
`;

const SlideImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const RoomCard = ({ id, isFav, isSuperHost, photos, name, price }) => (
  <Container>
    <PhotosContainer>
      {photos.length === 0 ? (
        <SlideImage source={require("../assets/default_room_img.jpg")} />
      ) : (
        <Swiper
          paginationStyle={{ marginBottom: -15 }}
          activeDotColor={"white"}
          dotColor={"rgba(200,200,200,0.8)"}
        >
          {photos.map((photo) => (
            <SlideImage key={photo.id} source={{ uri: photo.file }} />
          ))}
        </Swiper>
      )}
    </PhotosContainer>
    {isSuperHost ? (
      <Superhost>
        <SuperHostText>Superhost</SuperHostText>
      </Superhost>
    ) : null}
    <Name>{name}</Name>
    <PriceContainer>
      <PriceNumber>${price}</PriceNumber>
      <PriceText> / night</PriceText>
    </PriceContainer>
  </Container>
);

RoomCard.propTypes = {
  id: PropTypes.number.isRequired,
  isFav: PropTypes.bool.isRequired,
  isSuperHost: PropTypes.bool.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string,
    })
  ),
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default RoomCard;
