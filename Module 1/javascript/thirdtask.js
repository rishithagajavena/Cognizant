const events = [
  { name: "Music Fest", date: "2025-06-10", seatsAvailable: 5 },
  { name: "Art Expo", date: "2025-04-15", seatsAvailable: 0 },
  { name: "Tech Talk", date: "2025-07-01", seatsAvailable: 10 }
];

const eventList = document.getElementById('event-list');

events.forEach(event => {
  const today = new Date();
  const eventDate = new Date(event.date);

  // Check for valid upcoming events with seats
  if (eventDate > today && event.seatsAvailable > 0) {
    const div = document.createElement('div');
    div.className = 'event';
    div.innerHTML = `
      <strong>${event.name}</strong><br>
      Date: ${event.date}<br>
      Seats Left: ${event.seatsAvailable}<br>
      <button onclick="register('${event.name}')">Register</button>
    `;
    eventList.appendChild(div);
  }
});

function register(eventName) {
  try {
    // Simulate error for demo
    if (!eventName) throw new Error("Invalid event selected");
    alert(`Successfully registered for ${eventName}`);
  } catch (error) {
    console.error("Registration failed:", error.message);
    alert("Error: " + error.message);
  }
}

