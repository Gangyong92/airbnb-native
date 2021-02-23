import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Dimensions, View } from "react-native";
import Swiper from "react-native-swiper";

// 작동 환경의 Dimension을 획득
const { height } = Dimensions.get("screen");

const PhotosContainer = styled.View`
  overflow: hidden;
  margin-bottom: 10px;
  width: 100%;
  height: ${(props) => `${height / props.factor}`}px;
`;

const SlideImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const RoomPhotos = ({ photos, factor = 4 }) => (
  <PhotosContainer factor={factor}>
    {photos.length === 0 ? (
      <SlideImage source={require("../assets/default_room_img.jpg")} />
    ) : (
      <Swiper
        controlsProps={{
          PrevComponent: () => null,
          NextComponent: () => null,
          dotActiveStyle: {
            backgroundColor: "white",
          },
        }}
      >
        {photos.map((photo, index) => (
          // onStartShouldSetResponder={() => true} 는 Touchable에서 SlideImage 동작을 가능하게 해줌.
          // 물론 해당영역은 Touch가 막힘
          <View key={index} onStartShouldSetResponder={() => true}>
            <SlideImage source={{ uri: photo.file }} />
          </View>
        ))}
      </Swiper>
    )}
  </PhotosContainer>
);

RoomPhotos.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string,
    })
  ),
};

export default RoomPhotos;
