import { createAsyncThunk } from "@reduxjs/toolkit";

import { typicodeApi } from "shared/api";

export const getTaskDetail = createAsyncThunk(
  "taskDetail/get",
  (taskId: number) => {
    return typicodeApi.tasks.getTaskById({ taskId });
  }
);
