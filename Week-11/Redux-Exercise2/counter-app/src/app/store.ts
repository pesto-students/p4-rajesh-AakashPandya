import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import stepCounterReducer from "../redux/stepCounter/stepCounterSlice";

export const store = configureStore({
  reducer: {
    stepCounter: stepCounterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
