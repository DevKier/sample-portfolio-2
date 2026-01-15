const themeToggle = document.getElementById('theme-toggle')
const themeIcon = document.getElementById('theme-icon')
const body = document.body

// Check for saved user preference on load
const currentTheme = localStorage.getItem('theme')
if (currentTheme === 'light') {
  body.classList.add('light-mode')
  themeIcon.textContent = '☀️'
}

themeToggle.addEventListener('click', () => {
  // Toggle the light-mode class
  body.classList.toggle('light-mode')

  // Switch icon and update LocalStorage
  if (body.classList.contains('light-mode')) {
    themeIcon.textContent = '☀️'
    localStorage.setItem('theme', 'light')
  } else {
    themeIcon.textContent = '🌙'
    localStorage.setItem('theme', 'dark')
  }
})
