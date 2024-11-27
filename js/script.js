// Pokaż formularz zapisu
function showForm(serviceName) {
  const formSection = document.getElementById('signup-form');
  document.getElementById('service').value = serviceName; // Wypełnij pole z nazwą usługi
  formSection.classList.remove('hidden'); // Usuń klasę ukrywającą formularz
  formSection.style.display = 'block'; // Ustaw widoczność na "block"
}

// Ukryj formularz zapisu
function hideForm() {
  const formSection = document.getElementById('signup-form');
  formSection.classList.add('hidden'); // Dodaj klasę ukrywającą formularz
  formSection.style.display = 'none'; // Ustaw widoczność na "none"
}

// Obsługa formularza zapisu
document.getElementById('enrollmentForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Zapobiegaj domyślnej akcji wysyłania formularza
  const service = document.getElementById('service').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Wyświetlenie komunikatu potwierdzającego
  alert(`Dziękujemy za zapisanie się na ${service}!\nDane:\nImię i nazwisko: ${name}\nEmail: ${email}\nTelefon: ${phone}`);

  hideForm(); // Ukryj formularz po zapisaniu
});

// Obsługa newslettera
document.getElementById('newsletterForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Zapobiegaj domyślnej akcji
  const emailNewsletter = document.getElementById('emailNewsletter').value;

  // Wyświetl wiadomość potwierdzającą zapis
  document.getElementById('newsletterMessage').textContent = `Dziękujemy za zapisanie się do newslettera, ${emailNewsletter}!`;
  document.getElementById('emailNewsletter').value = ''; // Wyczyść pole email
});

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active'); // Przełącz klasę active, aby pokazać/ukryć menu
}

