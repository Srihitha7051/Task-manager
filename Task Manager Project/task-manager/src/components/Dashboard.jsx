function Dashboard({ tasks }) {
  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const pending = total - completed;

  const progress =
    total === 0
      ? 0
      : Math.round(
          (completed / total) * 100
        );

  return (
    <>
      <div className="dashboard">
        <div className="card">
          <h3>Total Tasks</h3>
          <p>{total}</p>
        </div>

        <div className="card">
          <h3>Completed</h3>
          <p>{completed}</p>
        </div>

        <div className="card">
          <h3>Pending</h3>
          <p>{pending}</p>
        </div>
      </div>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>

      <p className="progress-text">
        {progress}% Completed
      </p>
    </>
  );
}

export default Dashboard;