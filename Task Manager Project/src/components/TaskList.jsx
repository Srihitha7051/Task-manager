function TaskList({
  tasks,
  deleteTask,
  toggleComplete,
}) 

{
  return (
    <div>
      {
    
        
      tasks.map((task) => (
        <div
          className="task-card"
          key={task.id}
        >
          <div>
            <h3
              style={{
                textDecoration:
                  task.completed
                    ? "line-through"
                    : "none",
              }}
            >
              {task.title}
            </h3>

            <p>
  Priority:
  <span
    className={`priority ${task.priority}`}
  >
    {task.priority}
  </span>
</p>


            <p>
              Due:
              {task.dueDate || "Not Set"}
            </p>
          </div>

          <div className="buttons">
            <button
              onClick={() =>
                toggleComplete(task.id)
              }
            >
              {task.completed
                ? "Undo"
                : "Complete"}
            </button>

            <button
              onClick={() =>
                deleteTask(task.id)
              }
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;