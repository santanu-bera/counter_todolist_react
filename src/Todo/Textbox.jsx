import React from 'react';

const Textbox = ({ todo, setTodo, error }) => {
  return (
    <div className="w-full mr-2">
      <input
        id="todo"
        name="todo"
        autoComplete="off"
        className="block w-full rounded border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mr-2"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter text here..."
      />

      {error && <span className="text-rose-600 text-xs">This can't be blank.</span>}
    </div>
  );
}

export default Textbox;
