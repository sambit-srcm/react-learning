import type { AppState } from './types';

export const state: AppState = {
  todos: [],
  form: {
    title: '',
    editId: null
  }
};