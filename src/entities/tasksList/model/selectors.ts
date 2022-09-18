import { createSelector } from "@reduxjs/toolkit";

import { useAppSelector } from "shared/hooks";
import { Task } from "shared/api/models";

export const selectTasks = (state: RootState) => state.tasks.tasks;
const selectIsEmptyTasks = (tasks: Task[]) => tasks.length === 0;

export const useTasks = () => {
  return useAppSelector((state) => ({
    ...state.tasks,
    isEmpty: createSelector(selectTasks, selectIsEmptyTasks)(state),
  }));
};

export const useTaskDetail = (taskId: number) => {
  return useAppSelector((state) =>
    state.tasks.tasks.find((task) => task.id === taskId)
  );
};
