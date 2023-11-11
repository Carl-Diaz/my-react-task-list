import { FaPlus } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <h1>Todo App</h1>
      <form>
        <input type="text" placeholder="Agregar nueva tarea" />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
    </>
  );
}
