import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
const Task = ({ name, completed }) => {
  return (
    <div style={{ display: "flex", margin: "10px" }}>
      <input type="checkbox" disabled checked={completed} />
      <p
        style={{
          marginLeft: "8px",
          order: 1,
          flex: 1,
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {name}
      </p>
      <div style={{ margin: "16px 0 0 8px", order: 2 }}>
        <FaEdit style={{ cursor: "pointer" }} />
        <FaTrashAlt style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Task;
