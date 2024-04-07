import React, { useState } from 'react';
import {ask_question, ask_for_code} from '../backend/ai-model/stack-ai'

function SimpleForm() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action
    console.log('Submitted value:', inputValue);
    // ask_question(inputValue);
    ask_question(inputValue);
    // Add additional actions here, such as sending the data to a backend server
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter something:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
