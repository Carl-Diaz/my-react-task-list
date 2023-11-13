import React, { useState } from "react";

const Task = ({ task, onDelete, onToggleStatus, onEdit }) => {
  // Estado para controlar si la tarea está en modo de edición
  const [isEditing, setEditing] = useState(false);
  // Estado para almacenar los cambios en el título y la descripción durante la edición
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
  });

  // Manejar el inicio de la edición
  const handleEdit = () => {
    setEditing(true);
  };

  // Manejar el guardado de los cambios durante la edición
  const handleSave = () => {
    onEdit(editedTask);
    setEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        // Formulario de edición durante la edición
        <div>
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) =>
              setEditedTask({ ...editedTask, title: e.target.value })
            }
          />
          <input
            type="text"
            value={editedTask.description}
            onChange={(e) =>
              setEditedTask({ ...editedTask, description: e.target.value })
            }
          />
          <button onClick={handleSave}>Guardar</button>
        </div>
      ) : (
        // Vista normal de la tarea
        <div>
          <span>
            {task.title} - {task.description} -{" "}
            {task.status ? "Completada" : "Pendiente"}
          </span>
          {/* Botones para marcar como completada, editar y eliminar una tarea */}
          <button onClick={onToggleStatus}>
            {task.status ? "Marcar como Pendiente" : "Marcar como Completada"}
          </button>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={onDelete}>Eliminar</button>
        </div>
      )}
    </li>
  );
};

export default Task;
