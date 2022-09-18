import { Checkbox } from "antd";

// ~ shared
import { useAppDispatch } from "shared/hooks";

// ~ entities
import { taskLib, tasksListModel } from "entities/tasksList";
import { taskDetailModel } from "entities/taskDetail";

// ~ features
import { toggleTaskListModel, toggleTaskDetailModel } from "../index";

export enum ToggleTaskMode {
  LIST,
  DETAIL,
}

type ToggleTaskProps = {
  taskId: number;
  mode: ToggleTaskMode;
  withStatus?: boolean;
};

export const ToggleTask = ({ taskId, withStatus, mode }: ToggleTaskProps) => {
  const dispatch = useAppDispatch();

  const taskFromList = tasksListModel.selectors.useTaskDetail(taskId);
  const { task: taskDetail } = taskDetailModel.selectors.useTaskDetail();

  const task = mode === ToggleTaskMode.DETAIL ? taskDetail : taskFromList;

  if (!task) return null;

  const onToggle = () => {
    if (mode === ToggleTaskMode.LIST) {
      return dispatch(toggleTaskListModel.toggleTask(task.id));
    }

    dispatch(toggleTaskDetailModel.toggleTask());
  };

  const status = taskLib.getTaskStatus(task);

  return (
    <Checkbox checked={task.completed} onClick={onToggle}>
      {withStatus && status}
    </Checkbox>
  );
};
