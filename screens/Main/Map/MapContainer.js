import React, { useEffect, useRef, useState } from "react";
import { Dimensions } from "react-native";
import MapPresenter from "./MapPresenter";

const { width } = Dimensions.get("screen");

const MapContainer = ({ rooms }) => {
  const mapRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const onScroll = (e) => {
    const {
      nativeEvent: {
        contentOffset: { x },
      },
    } = e;
    const position = Math.abs(Math.round(x / width));
    setCurrentIndex(position);
  };
  useEffect(() => {
    mapRef.current?.animateCamera(
      {
        center: {
          latitude: parseFloat(rooms[currentIndex].lat),
          longitude: parseFloat(rooms[currentIndex].lng),
        },
      },
      { duration: 3000 }
    );
  }, [currentIndex]);

  return (
    <MapPresenter
      currentIndex={currentIndex}
      rooms={rooms}
      onScroll={onScroll}
      mapRef={mapRef}
    />
  );
};

export default MapContainer;
