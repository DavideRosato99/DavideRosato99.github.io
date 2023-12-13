const calendarContainer = document.querySelector('.calendar');
const startDate = 11;
const endDate = 25;

const currentDate = new Date();
const today = currentDate.getDate(); // Ottiene il giorno corrente

let allRed = true; // Variabile per controllare se tutte le celle sono rosse

for (let day = startDate; day <= endDate; day++) {
  const dayElement = document.createElement('div');
  dayElement.classList.add('day');
  dayElement.textContent = day;

  dayElement.addEventListener('click', () => {
    if (day > today) {

    }

    if (day < today) {
      alert(`Eddai su Giuli, hai già visto cosa c'era qui sotto..`);
      return;
    }

    if (day == today) {
      if (dayElement.classList.contains('clicked')) {
        alert(`Hai già aperto il giorno ${day} del calendario dell'Avvento!`);
      }
      dayElement.classList.add('clicked');
      localStorage.setItem(`day_${day}_opened`, 'true'); // Save the opened cell state to localStorage
      alert(`Hai aperto il giorno ${day} del calendario dell'Avvento!`);
    }

  });

  dayElement.style.setProperty('--delay', Math.random() * 2);

  calendarContainer.appendChild(dayElement);
}

// Funzione per calcolare la durata dell'animazione in base alla velocità
function calculateAnimationDuration(velocity) {
  const minVelocity = 1;
  const maxVelocity = 10;
  const minDuration = 5;
  const maxDuration = 20;

  return minDuration + ((velocity - minVelocity) / (maxVelocity - minVelocity)) * (maxDuration - minDuration);
}

// Genera fiocchi di neve
const snowflakesContainer = document.querySelector('.snowflakes');

for (let i = 0; i < 2000; i++) {
  const velocity = Math.random() * 10 + 1;
  const animationDuration = calculateAnimationDuration(velocity);

  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${animationDuration}s`;
  snowflake.style.animationDelay = `${Math.random() * 10}s`;

  const size = Math.ceil(10 / velocity * 1.5);
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;

  snowflakesContainer.appendChild(snowflake);
}

// Alla fine, controlla se tutte le celle sono rosse e, se sì, non effettuare il reset
if (!allRed) {
  resetCalendar();
}

function resetCalendar() {
  for (let day = startDate; day <= endDate; day++) {
    localStorage.removeItem(`day_${day}_opened`);
    localStorage.removeItem(`day_${day}_red`);
  }

  const allDayElements = document.querySelectorAll('.day');
  allDayElements.forEach((element) => {
    element.classList.remove('clicked');
    element.style.backgroundColor = '';
  });
}

//resetCalendar()