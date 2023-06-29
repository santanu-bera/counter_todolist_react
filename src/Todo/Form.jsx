import React, { useState } from 'react';

import Textbox from './Textbox';
import Button from './Button';


const Form = ({ createTodo }) => {
  const [todo, setTodo] = useState('');
  const [error, setError] = useState(false);


  const handleSubmit = () => {
    if (todo.trim().length > 0) {
      createTodo(todo);
      setTodo('');
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <div className="flex mb-3 items-start">
      <Textbox todo={todo} setTodo={setTodo} error={error} />
      <Button handleSubmit={handleSubmit} />
    </div>
  );
}

export default Form;