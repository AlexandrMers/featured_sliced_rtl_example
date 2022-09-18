// ~ shared
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Card, CardProps } from "antd";

import { Task } from "shared/api";

import styles from "./styles.module.scss";

type TaskCardProps = {
  data?: Task;
  titleHref?: string;
} & CardProps;

export const TaskCard = ({
  data,
  titleHref,
  children,
  ...cardProps
}: PropsWithChildren<TaskCardProps>) => {
  if (!data && !cardProps.loading) return null;

  return (
    <Card
      title={`Task#${cardProps.loading ? "" : data?.id}`}
      className={styles.root}
      {...cardProps}
    >
      {titleHref ? <Link to={titleHref}>{data?.title}</Link> : data?.title}
      {children}
    </Card>
  );
};
