import React from 'react';

const Button = ({ handleSubmit }) => {
  return (
    <button className="flex justify-center w-24 rounded bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600" onClick={() => handleSubmit()}>Add</button>
  );
}

export default Button;