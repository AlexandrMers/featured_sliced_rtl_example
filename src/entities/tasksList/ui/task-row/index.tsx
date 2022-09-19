import { ReactNode } from "react";
import { Link } from "react-router-dom";

// ~ "shared/ui/row"
import { Row } from "antd";

import cn from "classnames";

import styles from "./styles.module.scss";

type TaskRowProps = {
  data: {
    title: string;
    completed: boolean;
  };
  titleHref?: string;
  before?: ReactNode;
};

export const TaskRow = ({ data, titleHref, before }: TaskRowProps) => {
  const title = titleHref ? (
    <Link to={titleHref}>{data.title}</Link>
  ) : (
    data.title
  );

  return (
    <Row
      className={cn(styles.root, {
        [styles.completed]: data.completed,
      })}
    >
      {before}
      {title}
    </Row>
  );
};
