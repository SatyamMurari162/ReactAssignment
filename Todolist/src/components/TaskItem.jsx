
function TaskItem({item,onDelete,onToggle}) {
    function hanndleDelte(){
        onDelete(item)
    }

    function handleToggleTask(){
        onToggle(item)
    }

    return(
        <div style={{color : item.completed ? "red" : "green"}}>
            <p>Task: {item.task}</p>
            <p>Completed: {item.completed ? "Yes" : "No"}</p>
            <p>Assigned to: {item.taskAssignedTo}</p>
            <button onClick={hanndleDelte}>Delete Task</button>
            <br />
            <br />
            <button onClick={handleToggleTask}>Toggle Task</button>
        </div>
    ) 
  }
  
  export default TaskItem;