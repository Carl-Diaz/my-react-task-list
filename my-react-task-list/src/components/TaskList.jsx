import React, { useState, useEffect } from "react";
import Task from "./Task";

const TaskList = () => {
  // Estado para almacenar la lista de tareas
  const [tasks, setTasks] = useState([]);
  // Estados para los campos de nueva tarea
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  // useEffect para cargar las tareas desde localStorage al inicio
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Función para agregar una nueva tarea
  // trim() me sirve para eliminar los espacion en blancos (al inicio y al final)
  const addTask = () => {
    if (newTaskTitle.trim() !== "") {
      const newTask = {
        id: new Date().getTime(),
        title: newTaskTitle,
        description: newTaskDescription,
        status: false,
      };

      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      // Limpiar campos después de agregar tarea
      setNewTaskTitle("");
      setNewTaskDescription("");
    }
  };

  // Función para eliminar una tarea
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // Función para cambiar el estado de una tarea entre completada y pendiente
  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: !task.status } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // Función para editar una tarea
  const editTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <h2>Task List</h2>
      <div>
        {/* Formulario para agregar nueva tarea */}
        <label>Title:</label>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button onClick={addTask}>Agregar</button>
      </div>
      <ul style={{ listStyle: "none" }}>
        {/* Iterar sobre las tareas y renderizar el componente Task para cada una */}
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            onToggleStatus={() => toggleTaskStatus(task.id)}
            onEdit={(updatedTask) => editTask(task.id, updatedTask)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
