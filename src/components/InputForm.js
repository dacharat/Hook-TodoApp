import React, { useContext } from "react";
import { TodoContext } from "../App";

const InputForm = () => {
  const { text, inputText, addList } = useContext(TodoContext);
  return (
    <div>
      <input value={text} type="text" onChange={inputText} />
      <button onClick={addList}>Add List!!</button>
    </div>
  );
};

export default InputForm;
