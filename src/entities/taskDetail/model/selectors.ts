// ~ shared
import { useAppSelector } from "shared/hooks";

export const useTaskDetail = () => useAppSelector((state) => state.taskDetail);
