// ~ shared
import { createAsyncThunk } from "@reduxjs/toolkit";

import { typicodeApi } from "shared/api";

export const getTasksList = createAsyncThunk(
  "tasks/list",
  (params?: typicodeApi.tasks.GetTasksListParams) => {
    return typicodeApi.tasks.getTasksList(params);
  }
);
