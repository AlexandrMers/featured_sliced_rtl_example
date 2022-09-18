import { Radio } from "antd";

// ~ shared
import { useAppDispatch } from "shared/hooks";

// ~ entities
import { tasksListModel } from "entities/tasksList";

// ~ features [own slice]
import { filterList, FILTERS_ENUM, getFilterByType } from "../config";
import { taskFilterModel } from "../index";

export const TasksFilters = () => {
  const dispatch = useAppDispatch();

  const { isLoading } = tasksListModel.selectors.useTasks();

  const onFilterClick = (config: tasksListModel.QueryConfigType) => () => {
    dispatch(taskFilterModel.actions.setQuery(config));
  };

  return (
    <Radio.Group buttonStyle="solid" defaultValue={FILTERS_ENUM.ALL}>
      {filterList.map(({ title, id, code }, index) => {
        const filterConfig = getFilterByType(code).config;

        return (
          <Radio.Button
            key={id}
            disabled={isLoading}
            onClick={onFilterClick(filterConfig)}
            value={code}
          >
            {title}
          </Radio.Button>
        );
      })}
    </Radio.Group>
  );
};
