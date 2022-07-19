import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = []

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    add: {
      reducer(state, action) {
        state.push(action.payload)
        // console.log(action)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user: userId
          }
        }
      }
    },
    remove: (state) => {
      state.pop()
    },
  }
});

export const {add, remove,} = postSlice.actions;

export default postSlice.reducer;
