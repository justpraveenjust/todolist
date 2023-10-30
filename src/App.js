import { useState } from 'react';
import './App.css';

function App() {

  const [reminderInput, setReminderInput] = useState("")
  const [taskList, setTaskList] = useState([])
  const [completedTaskList, setCompletedTaskList] = useState([])

  const handleReminderInput = (event) => {
    setReminderInput(event.target.value)
  };

  const handleSetReminder = (event) => {
    const rem = {
      //      id : taskList.length==0?1:taskList.length+1,
      id: 1,
      taskName: reminderInput
    }
    // setTaskList([...taskList,reminderInput])
    setTaskList([...taskList, rem])

  };

  const complBtnHndlr = (pTask) => {
    setTaskList(taskList.filter((task) => pTask !== task))
    setCompletedTaskList([...completedTaskList, pTask])
  };

  return (
    <div className="App">
      <input onChange={handleReminderInput} />
      <button onClick={handleSetReminder}>Set Reminder!</button>
      <div>
        <div>TO DO LIST</div>
        <div>
          {taskList.map(
            (task) => {
              return <div><h3 id={task.id}>{task.taskName}</h3><button onClick={() => complBtnHndlr(task)}>Complete</button></div>
            }
          )}
        </div>
      </div>
      <div>DONE LIST</div>
      <div>
        {completedTaskList.map(
          (task) => {
            return <div><h3 id={task.id}>{task.taskName}</h3></div>
          }
        )}
      </div>

    </div>
  );
}

export default App;
