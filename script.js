const calendarContainer = document.querySelector('.calendar');
const startDate = 11;
const endDate = 25;

const currentDate = new Date();
const today = currentDate.getDate(); // Ottiene il giorno corrente

let peekedDays = [];
let revealed = false;

for (let day = startDate; day <= endDate; day++) {
  const dayElement = document.createElement('div');
  dayElement.classList.add('day');
  dayElement.textContent = day;

  dayElement.addEventListener('click', () => {
    if (day < today) {
      alert(`Eddai su Giuli, hai già visto cosa c'era qui sotto..`);
      return;
    }

    if (day > today) {
      if (revealed) {
        alert('Io te lo avevo detto.. Guarda cosa hai combinato ora. Senti il tuo fantastico moroso per risolvere la situazione...');
        dayElement.style.backgroundColor = 'red';
        document.querySelectorAll('.day').forEach((element) => {
          element.addEventListener('click', () => {
            if (element.style.backgroundColor === 'red') {
              alert('Sei stata troppo curiosa e non hai saputo aspettare. Ti conviene proprio scrivere qualcosa di carino a Davide per risolvere la situazione');
            }
          });
        });
        revealed = true;
      } else {
        alert(`Ue, non si sbircia!`);
      }
      return;
    }

    dayElement.classList.add('clicked');
    alert(`Hai aperto il giorno ${day} del calendario dell'Avvento!`);
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

function resetCalendar() {
  localStorage.removeItem('openedDays');
  const allDayElements = document.querySelectorAll('.day');
  allDayElements.forEach((element) => {
    element.classList.remove('clicked');
  });
}

// Chiamata a resetCalendar per resettare tutto
resetCalendar();
