import FormTodo from "../FormToDo";
import TodoListItem from "../ToDoListItem";
import { useState } from "react";

const ToDoList = () => {
  const [toDos, setToDos] = useState([]);

  const handleNewToDoCreation = (text) => {
    setToDos((toDos) => [...toDos, { text }]);
  };

  const handleToDoToggleCompletion = (index) => {
    const newToDos = [...toDos];
    newToDos[index].isDone = !newToDos[index].isDone;
    setToDos(newToDos);
  };

  const handleToDoComplete = (index) => {
    const newToDos = [...toDos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">To Do application</h1>
        <FormTodo onCreateNewToDo={handleNewToDoCreation} />
        <div>
          {toDos.map((todo, index) => (
            <TodoListItem
              key={index}
              details={todo}
              onToDoItemClick={() => handleToDoToggleCompletion(index)}
              onToDoItemRemove={() => handleToDoComplete(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
