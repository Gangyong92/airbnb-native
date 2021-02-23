import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ActivityIndicator,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components/native";
import colors from "../../../colors";
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

const LoadMore = styled.View`
  width: 100%;
  padding: 10px 10px;
  align-items: center;
  background-color: ${colors.green};
  border-radius: 5px;
  margin-bottom: 30px;
`;

const LoadMoreText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

const ExplorePresenter = ({ rooms, increasePage }) => {
  const navigation = useNavigation();
  return (
    <Container>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {rooms.length === 0 ? (
        <ActivityIndicator color="black" />
      ) : (
        <>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("search")}
          >
            <FakeBar elevation={4}>
              <FakeText>Search...</FakeText>
            </FakeBar>
          </TouchableWithoutFeedback>
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
                roomObj={room}
              />
            ))}
            <TouchableOpacity onPress={increasePage}>
              <LoadMore>
                <LoadMoreText>Load More</LoadMoreText>
              </LoadMore>
            </TouchableOpacity>
          </ScrollView>
        </>
      )}
    </Container>
  );
};

export default ExplorePresenter;
