import { AxiosPromise } from "axios";
import { Task } from "./models";
import { apiInstance } from "./base";

const BASE_URL = "/todos";

export type GetTasksListParams = {
  userId?: number;
  completed?: boolean;
};

export const getTasksList = (
  params?: GetTasksListParams
): AxiosPromise<Task[]> => {
  return apiInstance.get(BASE_URL, { params });
};

export type GetTaskByIdParams = {
  taskId: number;
  [x: string]: any;
};

export const getTaskById = ({
  taskId,
  ...params
}: GetTaskByIdParams): AxiosPromise<Task> => {
  return apiInstance.get(`${BASE_URL}/${taskId}`, { params });
};
