
import { useEffect, useRef, useState } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const hasLoaded = useRef(false);

  useEffect(() => {
    if (hasLoaded.current) return;
    hasLoaded.current = true;

    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  return { tasks, setTasks };
};
