import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const TasksList = lazy(() => import("./tasks-list"));
const TaskDetail = lazy(() => import("./task-detail"));

export const Routing = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <Suspense>
            <TasksList />
          </Suspense>
        }
      />
      <Route
        path="/:taskId"
        element={
          <Suspense>
            <TaskDetail />
          </Suspense>
        }
      />

      <Route path="*" element={<h4>PAGE NOT FOUND 404</h4>} />
    </Routes>
  );
};
