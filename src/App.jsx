import { useState } from "react";
import "./style.scss";
import InputSection from "./assets/components/InputSection";
import TaskList from "./assets/components/TaskList";

function App() {


  let [taskList, setTaskList] = useState([])


  return (
    <div className="container">
      <header>
        <h1 className="app-name-header">Shopping List</h1>
      </header>
      <InputSection taskList={taskList} setTaskList={setTaskList} ></InputSection>
      <TaskList taskList={taskList} setTaskList={setTaskList}></TaskList>
    </div>
  );
}

export default App;
