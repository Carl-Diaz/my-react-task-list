import Task from "./Task";
import { FaPlus } from "react-icons/fa";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <form style={{ display: "flex" }}>
        <input type="text" placeholder="Agregar nueva tarea" />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} name={task.name} status={task.status} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
