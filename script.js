const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const actionBtn = document.getElementById('actionBtn');
const message = document.getElementById('message');

let currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
root.setAttribute('data-theme', currentTheme);
updateThemeButton();

themeToggle?.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', currentTheme);
  updateThemeButton();
});

actionBtn?.addEventListener('click', () => {
  message.textContent = 'JavaScript no está conectado.';
});

function updateThemeButton() {
  if (!themeToggle) return;
  const nextTheme = currentTheme === 'dark' ? 'claro' : 'oscuro';
  themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-label', `Cambiar a tema ${nextTheme}`);
}
