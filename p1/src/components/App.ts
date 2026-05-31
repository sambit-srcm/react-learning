import { Form } from './Form';
import { Table } from './Table';
import { CLASS_APP } from '../constants/classes';

/** Clears and re-renders the full application into the #app root element. */
export function renderApp(): void {
  const root = document.getElementById('app');
  if (!root) {
    throw new Error('Missing root');
  }
  root.replaceChildren();
  const app = document.createElement('div');
  app.className = CLASS_APP;
  app.appendChild(Form());
  app.appendChild(Table());
root.appendChild(app);
}