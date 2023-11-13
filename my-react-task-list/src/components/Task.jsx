import { FaEdit, FaTrashAlt, FaCheck } from "react-icons/fa";

const Task = ({ name, status }) => {
  return (
    <div style={{ display: "flex" }}>
      <FaCheck />
      <li style={{ listStyle: "none" }}>
        {name} - {status ? "Completed" : "Incomplete"}
      </li>
      <div style={{ margin: "16px 0 0 8px", order: 2, cursor: "pointer" }}>
        <FaEdit />
        <FaTrashAlt />
      </div>
    </div>
  );
};

export default Task;
