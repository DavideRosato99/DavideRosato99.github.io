// Riferimento al contenitore del calendario
const calendarContainer = document.querySelector('.calendar');

// Imposta la data di inizio e fine per il calendario dell'Avvento (11 dicembre - 25 dicembre)
const startDate = 11;
const endDate = 25;

// Genera i giorni del calendario dal 11 dicembre al 25 dicembre
for (let day = startDate; day <= endDate; day++) {
  const dayElement = document.createElement('div');
  dayElement.classList.add('day');
  dayElement.textContent = day;

  // Aggiungi un'azione al clic del giorno
  dayElement.addEventListener('click', () => {
    alert(`Hai aperto il giorno ${day} del calendario dell'Avvento!`);
    // Qui potresti aggiungere ulteriori azioni quando un giorno viene aperto
  });

  calendarContainer.appendChild(dayElement);
}

// Genera fiocchi di neve
const snowflakesContainer = document.querySelector('.snowflakes');

for (let i = 0; i < 100; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * 100}vw`; // Posizione casuale orizzontale
  snowflake.style.animationDuration = `${Math.random() * 10 + 2}s`; // Durata animazione casuale
  snowflake.style.animationDelay = `${Math.random() * 10}s`; // Ritardo casuale per inizio animazione
  snowflakesContainer.appendChild(snowflake);
}