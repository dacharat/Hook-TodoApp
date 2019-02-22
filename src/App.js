import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import InputForm from "./components/InputForm";

export const TodoContext = React.createContext();

const App = () => {
  const [text, setText] = useState("");
  const [lists, setList] = useState(["a", "b"]);

  const inputText = e => {
    setText(e.target.value);
  };

  const addList = () => {
    setList([...lists, text]);
    setText("")
  };

  const removeItem = item => {    
    setList(lists.filter(list => list !== item))
  }

  return (
    <TodoContext.Provider value={{ text, lists, inputText, addList, removeItem }}>
      <Dashboard lists={lists} />
      <InputForm />
    </TodoContext.Provider>
  );
};

export default App;
