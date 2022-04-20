import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  list: [],
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setListState: (state, actions) => {
      state.list = actions.payload;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const {setListState} = itemsSlice.actions

export default itemsSlice.reducer;
