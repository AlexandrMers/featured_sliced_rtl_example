import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";

import { Task } from "shared/api";

import { getTasksList } from "./actions";

export type QueryConfigType = {
  completed?: boolean;
  userId?: number;
};

export type InitialStateType = {
  tasks: Task[];
  isLoading: boolean;
  error: SerializedError["message"] | null;
  queryConfig: QueryConfigType;
};

const initialState: InitialStateType = {
  tasks: [],
  isLoading: false,
  error: null,
  queryConfig: {},
};

const INDEX_NOT_FOUND = -1;

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<QueryConfigType>) => {
      state.queryConfig = action.payload;
    },

    toggleTask: (state, { payload: taskId }: PayloadAction<number>) => {
      const indexTask = state.tasks.findIndex((task) => task.id === taskId);

      if (indexTask === INDEX_NOT_FOUND) {
        return;
      }

      const completed = state.tasks[indexTask].completed;
      state.tasks[indexTask].completed = !completed;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasksList.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getTasksList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getTasksList.fulfilled, (state, action) => {
      const tasks = action.payload.data;

      state.isLoading = false;
      state.error = null;
      state.tasks = tasks;
    });
  },
});

export const reducer = tasksSlice.reducer;
