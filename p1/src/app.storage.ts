import { state } from './app.state';
import type { AppState } from './types';

const key = 'state';
/** Serialises the current app state to localStorage. */
export function saveToStorage(): void {
  localStorage.setItem(
    key,
    JSON.stringify(state)
  );
}

/** Reads saved state from localStorage and merges it into the active state object. */
export function loadFromStorage(): void {
  const raw = localStorage.getItem(key);
  if (!raw) {
    return;
  }

  const data: AppState = JSON.parse(raw);
  Object.assign(state, data);
}