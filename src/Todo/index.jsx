import React, { useState } from 'react';

import Form from './Form';
import List from './List';

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");

  const createTodo = (todo) => {
    const lastIndex = todoList[0]?.index || 0;
    setTodoList([{ index: lastIndex + 1, value: todo, done: false }, ...todoList]);
  }

  const markDone = (index) => {
    const updatedList = todoList.map(todo => {
      if (todo.index === index) {
        return { ...todo, done: !todo.done };
      } else {
        return todo;
      }
    })

    setTodoList(updatedList);
  }

  const removeTodo = index => {
    const newTodoList = todoList.filter(el => el.index !== index)
    setTodoList(newTodoList);
  }

  const filteredTodos = () => {
    if (filter === "all") {
      return todoList;
    } else if (filter === "active") {
      return todoList.filter(el => !el.done);
    } else if (filter === "done") {
      return todoList.filter(el => el.done);
    }
  }

  console.log("filter state", filter);

  return (
    <div className="h-screen flex justify-center p-6">
      <div className="w-96">
        <h1 className="font-semibold mb-3">My Todos</h1>

        <Form createTodo={createTodo} />

        <div className="mb-2">
          <span className={`text-xs cursor-pointer inline-block mr-2 border border-solid rounded px-2 py-1 ${filter === "all" ? "bg-teal-600 text-white border-teal-600" : "border-grey-300"}`} onClick={() => setFilter("all")}>All</span>
          <span className={`text-xs cursor-pointer inline-block mr-2 border border-solid rounded px-2 py-1 ${filter === "active" ? "bg-teal-600 text-white border-teal-600" : "border-grey-300"}`} onClick={() => setFilter("active")}>Active</span>
          <span className={`text-xs cursor-pointer inline-block mr-2 border border-solid rounded px-2 py-1 ${filter === "done" ? "bg-teal-600 text-white border-teal-600" : "border-grey-300"}`} onClick={() => setFilter("done")}>Done</span>
        </div>

        <List todoList={filteredTodos()} markDone={markDone} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default Todo;