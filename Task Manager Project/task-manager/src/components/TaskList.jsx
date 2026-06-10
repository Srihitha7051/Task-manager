import { useState } from "react";

function TaskList({
  tasks,
  deleteTask,
  toggleComplete,
  editTask,
}) {
  const [editingId, setEditingId] =
    useState(null);

  const [editedText, setEditedText] =
    useState("");

  return (
    <div>
      {tasks.map((task) => (
        <div
          className="task-card"
          key={task.id}
        >
          <div>
            {editingId === task.id ? (
              <>
                <input
                  value={editedText}
                  onChange={(e) =>
                    setEditedText(
                      e.target.value
                    )
                  }
                />

                <button
                  onClick={() => {
                    editTask(
                      task.id,
                      editedText
                    );

                    setEditingId(
                      null
                    );
                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
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
                  {task.priority}
                </p>

                <p>
                  Due:
                  {task.dueDate ||
                    "Not Set"}
                </p>
              </>
            )}
          </div>

          <div className="buttons">
            <button
              onClick={() =>
                toggleComplete(
                  task.id
                )
              }
            >
              {task.completed
                ? "Undo"
                : "Complete"}
            </button>

            <button
              onClick={() => {
                setEditingId(
                  task.id
                );

                setEditedText(
                  task.title
                );
              }}
            >
              Edit
            </button>

            <button
              onClick={() =>
                deleteTask(
                  task.id
                )
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