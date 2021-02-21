import React, { useEffect } from "react";
import ExplorePresenter from "./ExplorePresenter";

const ExploreContainer = ({ getRooms, rooms, page, increasePage }) => {
  useEffect(() => {
    getRooms(1);
  }, []);
  useEffect(() => {
    getRooms(page);
  }, [page]);
  return <ExplorePresenter rooms={rooms} increasePage={increasePage} />;
};

export default ExploreContainer;
