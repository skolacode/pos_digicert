import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setListState: (state, actions) => {
      state.list = actions.payload;
    },
    deleteItem: (state, actions) => {
      const idx = actions.payload;

      // strict equal
      // example: 
      // 1 == "1" > true
      // 1 === "1" > false

      const getFilterData = state.list.filter(each => each.idx !== idx);

      state.list = getFilterData;
    },
    updateItem: (state, actions) => {
      
      const { idx } = actions.payload;
      
      const clonedArr = [...state.list];

      let itemIndex = state.list.findIndex(each => each.idx === idx);

      if (itemIndex !== -1) {
        clonedArr[itemIndex] = {...actions.payload};

        state.list = clonedArr;
      }
    }
  },
});

// Action creators are generated for each case reducer function
export const {setListState, deleteItem, updateItem} = itemsSlice.actions;

export default itemsSlice.reducer;
