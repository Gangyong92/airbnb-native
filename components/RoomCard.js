import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import utils from "../utils";
import { useDispatch } from "react-redux";
import { toggleFav } from "../redux/usersSlice";
import colors from "../colors";
import { useNavigation } from "@react-navigation/native";
import RoomPhotos from "./RoomPhotos";

const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
  align-items: flex-start;
  position: relative;
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

const FavButton = styled.View`
  background-color: white;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

const TOpacity = styled.TouchableOpacity`
  position: absolute;
  z-index: 10;
  top: 10px;
  right: 10px;
`;

function getIconName(isFav) {
  const isAndroid = utils.isAndroid();
  if (isAndroid) {
    if (isFav) {
      return "md-heart";
    } else {
      return "md-heart-outline";
    }
  } else {
    if (isFav) {
      return "ios-heart";
    } else {
      return "ios-heart-outline";
    }
  }
}

const RoomCard = ({ id, isFav, isSuperHost, photos, name, price, roomObj }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("RoomDetail", { ...roomObj })}
    >
      <Container>
        <TOpacity onPress={() => dispatch(toggleFav(id))}>
          <FavButton>
            <Ionicons
              size={28}
              color={isFav ? colors.red : "black"}
              name={getIconName(isFav)}
            />
          </FavButton>
        </TOpacity>
        <RoomPhotos photos={photos} />

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
    </TouchableOpacity>
  );
};

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
  roomObj: PropTypes.object.isRequired,
};

export default RoomCard;
