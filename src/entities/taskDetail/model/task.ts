import { createSlice, SerializedError } from "@reduxjs/toolkit";

import { Task } from "shared/api";

import { getTaskDetail } from "./actions";

export type InitialStateType = {
  isLoading: boolean;
  error: SerializedError["message"] | null;
  task: Task | null;
};

const initialState: InitialStateType = {
  isLoading: false,
  error: null,
  task: null,
};

export const taskDetailSLice = createSlice({
  name: "taskDetail",
  initialState,
  reducers: {
    toggleTask: (state) => {
      if (!state.task) {
        return;
      }
      const value = state.task.completed;
      state.task.completed = !value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTaskDetail.pending, (state) => {
      state.task = null;
      state.error = null;

      state.isLoading = true;
    });
    builder.addCase(getTaskDetail.rejected, (state, action) => {
      state.task = null;
      state.isLoading = false;

      state.error = action.error.message;
    });
    builder.addCase(getTaskDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;

      state.task = action.payload.data;
    });
  },
});

export const reducer = taskDetailSLice.reducer;
