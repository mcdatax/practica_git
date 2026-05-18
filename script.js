const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const actionBtn = document.getElementById('actionBtn');
const message = document.getElementById('message');

// Persiste preferencia en localStorage
const savedTheme = localStorage.getItem('theme');
let currentTheme = savedTheme
  || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

applyTheme(currentTheme);

themeToggle?.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(currentTheme);
});

actionBtn?.addEventListener('click', () => {
  const messages = [
    '✅ JavaScript conectado correctamente.',
    '🚀 Todo funciona.',
    '⚡ Listo para producción.',
  ];
  message.textContent = messages[Math.floor(Math.random() * messages.length)];
  message.classList.add('fade-in');
  message.addEventListener('animationend', () => message.classList.remove('fade-in'), { once: true });
});

// Reacciona si el SO cambia su preferencia (sin localStorage previo)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    currentTheme = e.matches ? 'dark' : 'light';
    applyTheme(currentTheme);
  }
});

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeButton();
}

function updateThemeButton() {
  if (!themeToggle) return;
  const nextTheme = currentTheme === 'dark' ? 'claro' : 'oscuro';
  themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-label', `Cambiar a tema ${nextTheme}`);
}