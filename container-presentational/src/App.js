import React from "react";
import "./App.css";
//import SampleForm from "./components/SampleForm";
//import Input from "./components/Input";
//import Repeatative from "./components/Repetative";
//import Parent from "./components/Parent";
import Helloo from "./components/Hello/Helloo";
import AdvSimpleForm from "./components/AdvSampleForm";
function App() {
  return (
    <div className="App">
      {/*  <SampleForm />
      <Repeatative name="Ram Naresh Sarwan" />
      <Repeatative name="Brain Lara" />
      <Parent /> */}
      <AdvSimpleForm />
      <Helloo />
    </div>
  );
}

export default App;
