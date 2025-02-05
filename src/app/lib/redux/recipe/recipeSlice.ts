import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RecipeState {
  week1: Array<number>,
  week2: Array<number>,
  week3: Array<number>,
  week4: Array<number>,
}

const initialState: RecipeState = {
  week1: [], 
  week2: [],
  week3: [],
  week4: [],
};

export const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addRecipesToWeek: (
      state,
      action: PayloadAction<{ week: number, recipeIds: Array<number> }>
    ) => {
      const { week, recipeIds } = action.payload;

      console.log(week, recipeIds, "redux");

      if (week === 1) {
        state.week1 = [...new Set([...state.week1, ...recipeIds])]; 
        console.log(state.week1, "state.week1");
      } else if (week === 2) {
        state.week2 = [...new Set([...state.week2, ...recipeIds])];
      } else if (week === 3) {
        state.week3 = [...new Set([...state.week3, ...recipeIds])];
      } else if (week === 4) {
        state.week4 = [...new Set([...state.week4, ...recipeIds])];
      }
    },

    removeRecipeFromWeek: (
      state,
      action: PayloadAction<{ week: number, recipeId: number }>
    ) => {
      const { week, recipeId } = action.payload;

      if (week === 1) {
        state.week1 = state.week1.filter(id => id !== recipeId);
      } else if (week === 2) {
        state.week2 = state.week2.filter(id => id !== recipeId);
      } else if (week === 3) {
        state.week3 = state.week3.filter(id => id !== recipeId);
      } else if (week === 4) {
        state.week4 = state.week4.filter(id => id !== recipeId);
      }
    },
  },
});

export const { addRecipesToWeek, removeRecipeFromWeek } = recipeSlice.actions;

export default recipeSlice.reducer;
