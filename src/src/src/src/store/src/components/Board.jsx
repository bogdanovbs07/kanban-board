import { useBoardStore } from '../store/useBoardStore.js';
import Column from './Column.jsx';

export default function Board() {
  const columns = useBoardStore((s) => s.columns);
  const addColumn = useBoardStore((s) => s.addColumn);

  return (
    <div className="board">
      {columns.map((column) => (
        <Column key={column.id} column={column} />
      ))}

      <button className="add-column-btn" onClick={() => addColumn()}>
        + Добавить колонку
      </button>
    </div>
  );
}
