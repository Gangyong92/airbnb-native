import React from "react";
import { useEffect } from "react/cjs/react.development";
import SavedPresenter from "./SavedPresenter";

const SavedContainer = ({ getFavs, rooms }) => {
  useEffect(() => {
    getFavs();
  }, []);
  return <SavedPresenter rooms={rooms} />;
};
export default SavedContainer;
