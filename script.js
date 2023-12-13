const calendarContainer = document.querySelector('.calendar');
const startDate = 11;
const endDate = 25;

const currentDate = new Date();
const today = currentDate.getDate(); // Ottiene il giorno corrente
// const today = 13;

//resetCalendar()

for (let day = startDate; day <= endDate; day++) {
  const dayElement = document.createElement('div');
  dayElement.classList.add('day');
  dayElement.textContent = day;

  const isDayOpened = localStorage.getItem(`day_${day}_open`);
  const isDayRed = localStorage.getItem(`day_${day}_red`);

  if (isDayOpened) {
    dayElement.classList.add('open');
  }

  if (isDayRed) {
    dayElement.classList.add('red');
  }

  dayElement.addEventListener('click', () => {
    if (localStorage.getItem !== null) {
      if (day < today) {

      }
  
      if (day > today) {
        if (localStorage.getItem(`day_${day}_red`)) {
          localStorage.setItem('allRed', 'true');
          alert('Sei stata troppo curiosa e non hai saputo aspettare. Ti conviene proprio scrivere qualcosa di carino a Davide per risolvere la situazione');
          const allDayElements = document.querySelectorAll('.day').forEach((element) => {
            element.classList.remove('open');
            element.classList.add('red');
            dayElement.style.backgroundColor = 'red';
  
          });
  
          for (let day = startDate; day <= endDate; day++) {
            if (localStorage.getItem(`day_${day}_open`)) {
              localStorage.removeItem(`day_${day}_open`);
            }
            if (localStorage.getItem(`day_${day}_red`)) {
              localStorage.removeItem(`day_${day}_red`);
            }
            localStorage.setItem(`day_${day}_red`, 'true');
          }
        }
  
        else {
          alert(`Ue, non si sbircia!`);
          dayElement.classList.add('red');
          localStorage.setItem(`day_${day}_red`, 'true');
        }
      }
  
      if (day == today) {
          if (isDayOpened) { // Se è verde
            alert('Hai già aperto questo giorno scema');
          } else {
            if (isDayRed) {
              dayElement.classList.remove('red');
              localStorage.removeItem(`day_${day}_red`);
            }
  
            dayElement.classList.add('open');
            localStorage.setItem(`day_${day}_open`, 'true');
            
            alert(`Hai aperto il giorno ${day} del calendario dell'Avvento!`);
          }
      }
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

function resetCalendar() {
  for (let day = startDate; day <= endDate; day++) {
    localStorage.removeItem(`day_${day}_open`);
    localStorage.removeItem(`day_${day}_red`);
  }

  const allDayElements = document.querySelectorAll('.day');
  allDayElements.forEach((element) => {
    element.classList.remove('open');
    element.classList.remove('red');
    element.style.backgroundColor = '';
  });
}

// resetCalendar()