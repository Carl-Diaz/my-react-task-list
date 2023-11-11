import Task from "./Task";

const TaskList = () => {
  const tasks = [
    { id: 1, name: "IR al GYM", completed: true },
    { id: 2, name: "Meditar", completed: false },
    { id: 3, name: "Estudiar", completed: true },
    { id: 4, name: "Descansar", completed: false },
  ];

  return (
    <div>
      {tasks.map((task, id) => (
        <Task key={id} name={task.name} completed={task.completed} />
      ))}
    </div>
  );
};

export default TaskList;
