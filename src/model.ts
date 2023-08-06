export type KanbanBoardColumnTasks = KanbanBoardColumn & { tasks: TaskCard[] };

export interface KanbanBoardColumn {
  id: string;
  name: string;
}

export interface TaskCard {
  id: string;
  title: string;
  description: string;
}
