import FormTodo from "../../components/FormToDo";
import TodoListItem from "../../components/ToDoListItem";
import { useState } from "react";

const ToDoList = () => {
  const [toDos, setToDos] = useState([]);

  const handleNewToDoCreation = (text) => {
    setToDos((toDos) => [...toDos, { text, id: toDos.length }]);
  };

  const handleToDoToggleCompletion = (id) => {
    const newToDos = [...toDos];
    const toDo = newToDos.find((todo) => todo.id === id);
    toDo.isDone = !toDo.isDone;
    setToDos(newToDos);
  };

  const handleToDoComplete = (id) => {
    const newToDos = [...toDos];
    setToDos(newToDos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">To Do application</h1>
        <FormTodo onCreateNewToDo={handleNewToDoCreation} />
        <div>
          {toDos.map((todo) => (
            <TodoListItem
              key={todo.id}
              details={todo}
              onToDoItemClick={() => handleToDoToggleCompletion(todo.id)}
              onToDoItemRemove={() => handleToDoComplete(todo.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
