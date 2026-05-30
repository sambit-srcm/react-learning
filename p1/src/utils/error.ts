/** Renders a fallback error message inside the app root when a fatal error occurs. */
export function showFatalError(message: string): void {
  const root = document.getElementById('app');
  if (root) {
    root.textContent = `Application error: ${message}`;
  }
}
