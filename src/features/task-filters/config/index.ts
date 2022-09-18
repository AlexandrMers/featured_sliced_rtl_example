import { tasksListModel } from "entities/tasksList";

export type Filter = {
  id: number;
  title: string;
  code: FILTERS_ENUM;
  config: tasksListModel.QueryConfigType;
};

export enum FILTERS_ENUM {
  ALL = 1,
  OPENED = 2,
  CLOSED = 3,
}

export const filters: Record<FILTERS_ENUM, Filter> = {
  [FILTERS_ENUM.ALL]: {
    id: 1,
    code: FILTERS_ENUM.ALL,
    title: "all",
    config: {},
  },
  [FILTERS_ENUM.OPENED]: {
    id: 2,
    code: FILTERS_ENUM.OPENED,
    title: "Opened",
    config: { completed: false },
  },
  [FILTERS_ENUM.CLOSED]: {
    id: 3,
    code: FILTERS_ENUM.CLOSED,
    title: "Closed",
    config: { completed: true },
  },
};

export const DEFAULT_FILTER = FILTERS_ENUM.ALL;

export const filterList = Object.values(filters);

export const getFilterByType = (code: FILTERS_ENUM) => filters[code];
