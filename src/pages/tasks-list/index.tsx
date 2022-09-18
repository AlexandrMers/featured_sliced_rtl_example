import { useEffect } from "react";

// ~ shared
import { Col, Empty, Layout, Row, Spin, Typography } from "antd";
import { useAppDispatch } from "shared/hooks";

// ~ entities
import { TaskRow, tasksListModel } from "entities/tasksList";

// ~ features
import { ToggleTask, ToggleTaskMode } from "features/toggle-task";
import { taskFilterModel, TasksFilters } from "features/task-filters";

import styles from "./styles.module.scss";

const TasksListPage = () => {
  const dispatch = useAppDispatch();

  const { isLoading, isEmpty } = tasksListModel.selectors.useTasks();
  const filteredTasks = taskFilterModel.selectors.useFilterTasks();

  useEffect(() => {
    dispatch(tasksListModel.actions.getTasksList());
  }, [dispatch]);

  return (
    <Layout className={styles.root}>
      <Layout className={styles.toolbar}>
        <Row justify="center">
          <Typography.Title level={1}>Tasks List</Typography.Title>
        </Row>
        <Row justify="center">
          <TasksFilters />
        </Row>
      </Layout>
      <Layout.Content className={styles.content}>
        <Row gutter={[0, 20]} justify="center">
          {isLoading && <Spin size="large" />}
          {!isLoading &&
            filteredTasks.map((task) => (
              <Col key={task.id} span={24}>
                <TaskRow
                  data={task}
                  titleHref={`/${task.id}`}
                  before={
                    <ToggleTask taskId={task.id} mode={ToggleTaskMode.LIST} />
                  }
                />
              </Col>
            ))}
          {!isLoading && isEmpty && <Empty description="No tasks found" />}
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default TasksListPage;
