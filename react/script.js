
const darkModeToggle = document.getElementById('darkmode-switch');
const body = document.body;

// Kontrollera om användaren redan har valt ett tema och tillämpa det
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  darkModeToggle.checked = true; // Gör så att toggle är aktiv
}

// Lyssna på förändringar på checkboxen
darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark'); // Spara mörkt tema i localStorage
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light'); // Spara ljust tema i localStorage
  }
});
