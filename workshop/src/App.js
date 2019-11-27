import React from "react";

import "./App.css";
import Taskone from "./componets/Taskone";
import Todo from "./componets/Todo";
import Todolist from "./componets/Todolist";
// import Taskone from "./componets/Taskone";

function App() {
  return (
    <div className="App">
      <Taskone />
      {/* <Todolist /> */}
    </div>
  );
}

export default App;
