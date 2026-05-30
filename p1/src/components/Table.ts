import { state } from '../app.state';
import {
  deleteTodo,
  toggleTodo
} from '../app.logic';

import { saveToStorage } from '../app.storage';
import { renderApp } from './App';

export function Table(): HTMLDivElement {
  const container = document.createElement('div');
  container.className = 'card';
  if (state.todos.length === 0) {
    container.textContent = 'No todos available, get started by adding some!!!!!';
    return container;
  }
  const list = document.createElement('div');
  list.className = 'row';
  state.todos.forEach((todo) => {
    const row = document.createElement('div');
    row.className = 'row';
    const left = document.createElement('div');
    left.className = 'row';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    const title = document.createElement('span');
    title.textContent = todo.title;
    if (todo.completed) {
      title.classList.add('completed');
    }
    left.appendChild(checkbox);
    left.appendChild(title);

    const actions = document.createElement('div');
    actions.className = 'row';
    const editButton = document.createElement('button');
    editButton.className = 'btn btn--primary';
    editButton.textContent = 'Edit';
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn--danger';
    deleteButton.textContent = 'Delete';
    actions.appendChild(editButton);
    actions.appendChild(deleteButton);
    row.appendChild(left);
    row.appendChild(actions);
    list.appendChild(row);



    
    editButton.addEventListener('click', (): void => {
      try {
        state.form.title = todo.title;
        state.form.editId = todo.id;
        renderApp();
      } catch (err) {
        console.error('Failed to open todo for editing:', err);
      }
    });

    checkbox.addEventListener('change', (): void => {
      try {
        state.todos = toggleTodo(state.todos, todo.id);
        saveToStorage();
        renderApp();
      } catch (err) {
        console.error('Failed to toggle todo:', err);
      }
    });

    deleteButton.addEventListener('click', (): void => {
      try {
        state.todos = deleteTodo(state.todos, todo.id);
        saveToStorage();
        renderApp();
      } catch (err) {
        console.error('Failed to delete todo:', err);
      }
    });


  });

  container.appendChild(list);

  return container;
}