import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    explore: {
      page: 1,
      rooms: [],
    },
    favs: [],
  },
  reducers: {
    setExploreRooms(state, action) {
      const { explore } = state;
      const { payload } = action;
      // 새로 켜서 page가 1인 경우.
      if (payload.page === 1) {
        state.explore.rooms = payload.rooms;
        state.explore.page = 1;
      } else {
        // 이후에 추가되는 rooms 들
        payload.rooms.forEach((payloadRoom) => {
          const exists = explore.rooms.find(
            (savedRoom) => savedRoom.id === payloadRoom.id
          );
          if (!exists) {
            explore.rooms.push(payloadRoom);
          }
        });
      }
    },
    increasePage(state, action) {
      state.explore.page += 1;
    },
  },
});

export const { setExploreRooms, increasePage } = roomsSlice.actions;

export const getRooms = (page) => async (dispatch) => {
  try {
    const {
      data: { results },
    } = await api.rooms(page);
    dispatch(
      setExploreRooms({
        rooms: results,
        page,
      })
    );
  } catch (e) {
    console.warn(e);
  }
};

export default roomsSlice.reducer;
