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
      const { payload } = action;
      // 새로 켜서 page가 1인 경우.
      if (payload.page === 1) {
        state.explore.rooms = payload.rooms;
        state.explore.page = 1;
      } else {
        // 이후에 추가되는 rooms 들
        state.explore.rooms = [...state.explore.rooms, ...payload.rooms];
      }
    },
    increasePage(state, action) {
      state.explore.page += 1;
    },
    setFavs(state, action) {
      state.favs = action.payload;
    },
    setFav(state, action) {
      const {
        payload: { roomId },
      } = action;

      const room = state.explore.rooms.find((room) => room.id === roomId);
      if (room) {
        if (room.is_favs) {
          // true일 때 false로 만들어줘야함. favs 제거 하는거니까.
          room.is_favs = false;
          state.favs = state.favs.filter((room) => room.id !== roomId);
        } else {
          room.is_favs = true;
          state.favs = [room, ...state.favs];
        }
      }
    },
  },
});

export const {
  setExploreRooms,
  increasePage,
  setFavs,
  setFav,
} = roomsSlice.actions;

export const getRooms = (page) => async (dispatch, getState) => {
  const {
    usersReducer: { token },
  } = getState();
  try {
    const {
      data: { results },
    } = await api.rooms(page, token);
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
