import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const TodoListItem = ({ details, onToDoItemClick, onToDoItemRemove }) => {
  return (
    <Card>
      <Card.Body>
        <div className="todo" style={{ cursor: "pointer" }}>
          <span
            style={{ textDecoration: details.isDone ? "line-through" : "" }}
            onClick={onToDoItemClick}
          >
            {details.text}
          </span>
          &nbsp;
          <Button variant="outline-danger" onClick={onToDoItemRemove}>
            ✕
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TodoListItem;
