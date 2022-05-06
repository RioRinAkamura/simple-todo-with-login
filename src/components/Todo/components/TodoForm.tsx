import { Button, Form, Input } from "antd";
import React, { ChangeEvent, FormEvent, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { TodoType } from "..";

const TodoForm = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}: any) => {
  const updateTodo = (title: string, id: string, completed: boolean) => {
    const newTodo = todos.map((todo: TodoType) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const onFinish = (e: FormEvent<HTMLInputElement>) => {
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <Form onFinish={onFinish}>
      <Form.Item>
        <ItemWrapper>
          <Input
            type="text"
            placeholder="Enter a todo..."
            value={input}
            required
            onChange={onInputChange}
          />
          <Button type="primary" htmlType="submit">
            {editTodo ? "Save" : "Add"}
          </Button>
        </ItemWrapper>
      </Form.Item>
    </Form>
  );
};

export default TodoForm;

const ItemWrapper = styled.div`
  display: flex;
`;
