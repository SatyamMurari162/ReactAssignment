import React, { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    // Implement logic to handle form changes
    //console.log(event.target.name);
    const targetName = event.target.name == "completed" ? event.target.checked : event.target.value    
    setFormState({
      ...formState,
      [event.target.name] : targetName,

    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTasks([...tasks, formState]);
    // Implement logic to handle form submission
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" placeholder="Add Task" onChange={handleChange} />
          <label>
            Completed:
            <input name="completed" type="checkbox" checked ={formState.completed} onChange={handleChange}/>
          </label>
          <select name="taskAssignedTo" onChange={handleChange}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem key={index} item={item} 
        onDelete={(item) => setTasks(tasks.filter((task) => task !== item))}
        onToggle={(item) => setTasks([...tasks.filter((task) => task !== item), {...item, completed: !item.completed}])}/>
      ))}
    </>
  );
}

export default App;