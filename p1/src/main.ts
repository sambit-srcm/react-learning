import { loadFromStorage } from './app.storage';
import { renderApp } from './components/App';

document.addEventListener('DOMContentLoaded', (): void => {
  try {
    loadFromStorage();
    renderApp();
  } catch (err) {
    console.error('Failed to initialise app:', err);
  }
});