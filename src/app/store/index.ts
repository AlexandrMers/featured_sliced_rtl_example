import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// ~ entities
import { tasksListModel } from "entities/tasksList";
import { taskDetailModel } from "entities/taskDetail";

export const store = configureStore({
  reducer: {
    tasks: tasksListModel.reducer,
    taskDetail: taskDetailModel.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
