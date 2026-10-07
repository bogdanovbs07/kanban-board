import { create } from 'zustand';
import { nanoid } from 'nanoid';

export const useBoardStore = create((set) => ({
  columns: [
    { id: 'col-1', title: 'To Do', taskIds: [] },
    { id: 'col-2', title: 'In Progress', taskIds: [] },
    { id: 'col-3', title: 'Done', taskIds: [] },
  ],
  tasks: {},

  addColumn: (title = 'Новая колонка') => {
    const newColumn = { id: nanoid(), title, taskIds: [] };
    set((state) => ({ columns: [...state.columns, newColumn] }));
  },

  deleteColumn: (columnId) => {
    set((state) => {
      const column = state.columns.find((c) => c.id === columnId);
      if (!column || column.taskIds.length > 0) return state;
      return { columns: state.columns.filter((c) => c.id !== columnId) };
    });
  },
}));
