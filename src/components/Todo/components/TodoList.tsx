import {
  CheckCircleOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import { TodoType } from "..";

const TodoList = ({ todos, setTodos, setEditTodo }: any) => {
  const handleCompleteTodo = (id: string) => {
    setTodos(
      todos.map((item: TodoType) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEditTodo = (id: string) => {
    const findTodo = todos.find((todo: TodoType) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo: TodoType) => todo.id !== id));
  };
  return (
    <div>
      {todos &&
        todos.map((todo: any, index: number) => (
          <ItemWrapper key={todo.id}>
            <ListStyle>
              <span
                style={{ textDecoration: todo.completed ? "line-through" : "" }}
              >
                {index + 1}: &nbsp; {todo.title}
              </span>
            </ListStyle>
            <Actions>
              <IconWrapper>
                <CheckCircleOutlined
                  style={{ color: "green" }}
                  onClick={() => handleCompleteTodo(todo.id)}
                />
              </IconWrapper>
              <IconWrapper>
                <EditOutlined
                  style={{ color: "brown" }}
                  onClick={() => handleEditTodo(todo.id)}
                />
              </IconWrapper>
              <IconWrapper>
                <DeleteOutlined
                  style={{ color: "red" }}
                  onClick={() => handleDeleteTodo(todo.id)}
                />
              </IconWrapper>
            </Actions>
          </ItemWrapper>
        ))}
    </div>
  );
};

export default TodoList;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListStyle = styled.li`
  list-style: none;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18;
  gap: 12px;
`;

const IconWrapper = styled.span`
  display: block;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
