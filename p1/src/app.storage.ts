import { state } from './app.state';
import type { AppState } from './types';

const key = 'state';
/** Serialises the current app state to localStorage. */
export function saveToStorage(): void {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save state to localStorage:', err);
  }
}

/** Reads saved state from localStorage and merges it into the active state object. */
export function loadFromStorage(): void {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return;
    const data: AppState = JSON.parse(raw);
    Object.assign(state, data);
  } catch (err) {
    console.error('Failed to load state from localStorage — clearing corrupted data:', err);
    localStorage.removeItem(key);
  }
}