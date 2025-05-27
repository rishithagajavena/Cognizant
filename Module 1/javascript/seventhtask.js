// Sample events
let events = [
  { id: 1, name: "Yoga Session", seats: 5 },
  { id: 2, name: "Coding Bootcamp", seats: 2 },
  { id: 3, name: "Jazz Night", seats: 0 }
];

// Access DOM container
const container = document.querySelector("#events-container");

// Render all events
function renderEvents() {
  container.innerHTML = ''; // Clear existing UI
  events.forEach(event => {
    const card = document.createElement('div');
    card.className = 'card';

    const title = document.createElement('h3');
    title.textContent = event.name;

    const seats = document.createElement('p');
    seats.textContent = `Seats Available: ${event.seats}`;

    const registerBtn = document.createElement('button');
    registerBtn.textContent = "Register";
    registerBtn.disabled = event.seats === 0;

    registerBtn.onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        renderEvents(); // Update UI
      }
    };

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = "Cancel";
    cancelBtn.onclick = () => {
      event.seats++;
      renderEvents(); // Update UI
    };

    card.appendChild(title);
    card.appendChild(seats);
    card.appendChild(registerBtn);
    card.appendChild(cancelBtn);
    container.appendChild(card);
  });
}

// Initial display
renderEvents();
