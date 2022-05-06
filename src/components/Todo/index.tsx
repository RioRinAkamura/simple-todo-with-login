import React, { useState } from "react";
import styled from "styled-components";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export interface TodoType {
  id: string;
  title: string;
  completed: boolean;
}

const data = [
  {
    id: "1",
    title: "learn react",
    completed: false,
  },
  {
    id: "2",
    title: "learn redux",
    completed: false,
  },
  {
    id: "3",
    title: "learn typescript",
    completed: false,
  },
];

const Todo = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState(data);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <Wrapper>
      <TodoWrapper>
        <h2>Simple Todo App</h2>
        <TodoForm
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
      </TodoWrapper>
    </Wrapper>
  );
};

export default Todo;

const Wrapper = styled.div`
  width: 100vw;
  height: 88vh;
  background-color: #eeeeee;
  padding: 24px;
  display: flex;
  justify-content: center;
`;

const TodoWrapper = styled.div`
  background-color: white;
  width: 400px;
  max-height: 600px;
  border-radius: 5px;
  padding: 24px;
`;
