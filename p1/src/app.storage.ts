import { state } from './app.state';
import type { AppState } from './types';

const key = 'state';
export function saveToStorage(): void {
  localStorage.setItem(
    key,
    JSON.stringify(state)
  );
}

export function loadFromStorage(): void {
  const raw = localStorage.getItem(key);
  if (!raw) {
    return;
  }

  const data: AppState = JSON.parse(raw);
  Object.assign(state, data);
}