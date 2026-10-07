import { useBoardStore } from '../store/useBoardStore.js';

export default function Column({ column }) {
  const deleteColumn = useBoardStore((s) => s.deleteColumn);
  const tasks = useBoardStore((s) => s.tasks);

  const isEmpty = column.taskIds.length === 0;

  return (
    <div className="column">
      <div className="column-header">
        <h3>{column.title}</h3>
        <button
          className="delete-column-btn"
          onClick={() => deleteColumn(column.id)}
          disabled={!isEmpty}
          title={isEmpty ? 'Удалить колонку' : 'Нельзя удалить колонку с задачами'}
        >
          🗑️
        </button>
      </div>

      <div className="column-tasks">
        {column.taskIds.map((taskId) => (
          <div key={taskId} className="task">
            {tasks[taskId]?.title}
          </div>
        ))}
      </div>
    </div>
  );
}
