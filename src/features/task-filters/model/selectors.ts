import { createSelector } from "@reduxjs/toolkit";

// ~ shared
import { useAppSelector } from "shared/hooks";
import { Task } from "shared/api";

// ~ entities
import { tasksListModel } from "entities/tasksList";

const selectConfig = (state: RootState) => state.tasks.queryConfig;

const selectFilterTasks = (
  tasks: Task[],
  config: tasksListModel.QueryConfigType
) => {
  return tasks.filter(
    (task) =>
      task.completed === config?.completed || config.completed === undefined
  );
};

export const useFilterTasks = () => {
  return useAppSelector(
    createSelector(
      tasksListModel.selectors.selectTasks,
      selectConfig,
      selectFilterTasks
    )
  );
};
