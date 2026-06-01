import { loadFromStorage } from './app.storage';
import { renderApp } from './components/App';

/** Bootstraps the app once the DOM is fully loaded. */
document.addEventListener('DOMContentLoaded', (): void => {
  try {
    loadFromStorage();
    renderApp();
  } catch (err) {
    console.error('Failed to initialise app:', err);
  }
});