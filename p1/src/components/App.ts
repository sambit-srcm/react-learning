import { Form } from './Form';
import { Table } from './Table';
import { CLASS_APP } from '../constants/classes';
import { showFatalError } from '../utils/error';

/** Clears and re-renders the full application into the #app root element. */
export function renderApp(): void {
  try {
    const root = document.getElementById('app');
    if (!root) {
      throw new Error('Root element #app not found');
    }
    root.replaceChildren();
    const app = document.createElement('div');
    app.className = CLASS_APP;
    app.appendChild(Form());
    app.appendChild(Table());
    root.appendChild(app);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('Failed to render app:', err);
    showFatalError(message);
  }
}
