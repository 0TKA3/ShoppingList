import Task from "./Task";
const TaskList = ({taskList, setTaskList}) => {


  return (
    <main className="task-list">
      <div className="tasks">
        {taskList.map((obj,index)=>(<Task key={index} title={obj.title} count={obj.count} isChecked={obj.isChecked} unit={obj.unit} taskList={taskList} setTaskList={setTaskList} index={index}></Task>))}
      </div>
    </main>
  );
};

export default TaskList;
