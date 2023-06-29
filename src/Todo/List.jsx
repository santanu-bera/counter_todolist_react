import React from 'react';

const List = ({ todoList, markDone, removeTodo }) => {
  if (todoList.length === 0) {
    return (
      <div className="flex justify-center items-center border border-solid border-gray-300 shadow-sm rounded h-32 w-full">No item found</div>
    )
  }

  return (
    <div>
      {todoList.map(todo => {
        return (
          <div className="flex items-center mb-2">
            <div
              key={todo.index}
              onClick={() => markDone(todo.index)}
              className={`cursor-pointer shadow-sm select-none border border-solid border-gray-300 w-full px-3 py-1.5 rounded text-sm ${todo.done ? 'line-through text-slate-400' : ''}`}
            >
              {todo.value}
            </div>
            <div onClick={() => removeTodo(todo.index)} className="ml-2 text-rose-600 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
              </svg>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default List;