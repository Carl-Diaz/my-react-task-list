import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const tasks = [
  { id: 1, name: "Hacer la compra", status: false },
  { id: 2, name: "Terminar proyecto React", status: true },
  { id: 3, name: "Hacer ejercicio", status: false },
  { id: 4, name: "Estudiar React ", status: false },
];

const App = () => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <Header title="Mi Lista de Tareas" />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
