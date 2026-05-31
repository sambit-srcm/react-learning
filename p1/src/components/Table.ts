import { state } from '../app.state';
import {
  deleteTodo,
  toggleTodo
} from '../app.logic';

import { saveToStorage } from '../app.storage';
import { renderApp } from './App';
import { CLASS_CARD, CLASS_TODO_LIST, CLASS_TODO_ROW, CLASS_TODO_LEFT, CLASS_TODO_ACTIONS, CLASS_TODO_TITLE, CLASS_COMPLETED, CLASS_BTN_PRIMARY, CLASS_BTN_DANGER } from '../constants/classes';

/** Builds and returns the todo list element, or an empty-state message if there are no todos. */
export function Table(): HTMLDivElement {
  const container = document.createElement('div');
  container.className = CLASS_CARD;
  if (state.todos.length === 0) {
    container.textContent = 'No todos available, get started by adding some!!!!!';
    return container;
  }
  const list = document.createElement('div');
  list.className = CLASS_TODO_LIST;
  state.todos.forEach((todo) => {
    const row = document.createElement('div');
    row.className = CLASS_TODO_ROW;
    const left = document.createElement('div');
    left.className = CLASS_TODO_LEFT;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${todo.id}`;
    checkbox.checked = todo.completed;
    const label = document.createElement('label');
    label.htmlFor = `todo-${todo.id}`;
    label.textContent = todo.title;
    label.className = CLASS_TODO_TITLE;
    if (todo.completed) {
      label.classList.add(CLASS_COMPLETED);
    }
    left.appendChild(checkbox);
    left.appendChild(label);

    const actions = document.createElement('div');
    actions.className = CLASS_TODO_ACTIONS;
    const editButton = document.createElement('button');
    editButton.className = CLASS_BTN_PRIMARY;
    editButton.textContent = 'Edit task';
    editButton.setAttribute('aria-label', `Edit task: "${todo.title}"`);
    editButton.disabled = todo.completed;
    const deleteButton = document.createElement('button');
    deleteButton.className = CLASS_BTN_DANGER;
    deleteButton.textContent = 'Delete task';
    deleteButton.setAttribute('aria-label', `Delete task: "${todo.title}"`);
    deleteButton.disabled = todo.completed;
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