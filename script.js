const today = 12;
const openedDays = JSON.parse(localStorage.getItem('openedDays')) || [];

const calendarContainer = document.querySelector('.calendar');
const startDate = 11;
const endDate = 25;

for (let day = startDate; day <= endDate; day++) {
  const dayElement = document.createElement('div');
  dayElement.classList.add('day');
  dayElement.textContent = day;

  if (openedDays.includes(day)) {
    dayElement.classList.add('opened');
  }

  dayElement.addEventListener('click', () => {
    if (day === today) {
      if (!openedDays.includes(day)) {
        openedDays.push(day);
        localStorage.setItem('openedDays', JSON.stringify(openedDays));
        dayElement.classList.add('opened');
        alert(`Hai aperto il giorno ${day} del calendario dell'Avvento!`);
      } else {
        alert(`Hai già aperto il giorno ${day} del calendario dell'Avvento!`);
      }
    } else {
      alert('Sei stupida!');
    }
  });

  // Imposta variabili CSS personalizzate per l'animazione di ciascuna cella
  dayElement.style.setProperty('--delay', Math.random() * 2);

  calendarContainer.appendChild(dayElement);
}

// Funzione per calcolare la durata dell'animazione in base alla velocità
function calculateAnimationDuration(velocity) {
  const minVelocity = 1; // Velocità minima
  const maxVelocity = 10; // Velocità massima
  const minDuration = 5; // Durata minima
  const maxDuration = 20; // Durata massima

  return minDuration + ((velocity - minVelocity) / (maxVelocity - minVelocity)) * (maxDuration - minDuration);
}

// Genera fiocchi di neve
const snowflakesContainer = document.querySelector('.snowflakes');

for (let i = 0; i < 2000; i++) {
  const velocity = Math.random() * 10 + 1; // Genera velocità casuale
  const animationDuration = calculateAnimationDuration(velocity); // Calcola la durata dell'animazione

  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * 100}vw`; // Posizione casuale orizzontale
  snowflake.style.animationDuration = `${animationDuration}s`; // Imposta la durata calcolata
  snowflake.style.animationDelay = `${Math.random() * 10}s`; // Ritardo casuale per inizio animazione

  const size = Math.ceil(10 / velocity * 1.5); // Dimensioni proporzionali alla velocità
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;

  snowflakesContainer.appendChild(snowflake);
}

// Resetta tutto
function resetCalendar() {
  localStorage.removeItem('openedDays');
  const openedElements = document.querySelectorAll('.day.opened');
  openedElements.forEach((element) => {
    element.classList.remove('opened');
  });
}

// Per esempio, per resettare tutto:
// resetCalendar();