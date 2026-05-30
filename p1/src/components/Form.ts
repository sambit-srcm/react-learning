import { state } from '../app.state';
import { createTodo, updateTodo } from '../app.logic';
import { saveToStorage } from '../app.storage';
import { renderApp } from './App';

export function Form(): HTMLFormElement {
  const form = document.createElement('form');
  form.className = 'card';
  const input = document.createElement('input');
  input.className = 'input';
  input.placeholder = 'Enter todo';
  input.value = state.form.title;

  const button = document.createElement('button');
  button.className = 'btn btn--primary';
  button.type = 'submit';
  button.textContent = state.form.editId
    ? 'Update'
    : 'Add';
  form.appendChild(input);
  form.appendChild(button);
  form.addEventListener('submit', (event: SubmitEvent): void => {
    event.preventDefault();
    const todoitem = input.value.trim();
    if (!todoitem) {
      alert('Title of the todo is required');
      return;
    }
    try {
      if (state.form.editId) {
        state.todos = updateTodo(state.todos, state.form.editId, todoitem);
        state.form.editId = null;
      } else {
        const todo = createTodo(todoitem);
        state.todos.push(todo);
      }
      state.form.title = '';
      saveToStorage();
      renderApp();
    } catch (err) {
      console.error('Failed to submit todo form:', err);
    }
  });

  return form;
}