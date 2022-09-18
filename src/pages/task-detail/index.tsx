// ~ shared
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Button, Layout, Result } from "antd";
import { useParams } from "react-router";

import { Task } from "shared/api";
import { useAppDispatch } from "shared/hooks";

// ~ entities
import { TaskCard, taskDetailModel } from "entities/taskDetail";

// ~ features
import { ToggleTask, ToggleTaskMode } from "features/toggle-task";

import styles from "./styles.module.scss";

const TaskDetailPage = () => {
  const dispatch = useAppDispatch();
  const { taskId } = useParams();

  const parsedTaskId = parseInt(taskId!);

  const { task, isLoading, error } = taskDetailModel.selectors.useTaskDetail();

  useEffect(() => {
    if (!parsedTaskId) return undefined;
    dispatch(taskDetailModel.actions.getTaskDetail(parsedTaskId));
  }, [parsedTaskId, dispatch]);

  if (!isLoading && (!task || error)) {
    return (
      <Result
        status={404}
        title={404}
        subTitle={`Task ${taskId} was not found`}
        extra={
          <Link to="/">
            <Button type="primary">Back to tasks list</Button>
          </Link>
        }
      />
    );
  }

  return (
    <Layout className={styles.root}>
      <Layout.Content className={styles.content}>
        <TaskCard
          data={task as Task}
          size="default"
          loading={isLoading}
          className={styles.card}
          bodyStyle={{ height: 400 }}
          extra={<Link to="..">Back to tasks list</Link>}
          actions={[
            <ToggleTask
              taskId={parsedTaskId}
              mode={ToggleTaskMode.DETAIL}
              withStatus
            />,
          ]}
        />
      </Layout.Content>
    </Layout>
  );
};

export default TaskDetailPage;
