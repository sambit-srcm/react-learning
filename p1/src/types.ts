export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface FormState {
  title: string;
  editId: string | null;
}
export interface AppState {
  todos: Todo[];
  form: FormState;
}