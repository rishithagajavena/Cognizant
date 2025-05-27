// Event data
let events = [
  { name: "Tech Talk", category: "Technology", date: "2025-07-01", seats: 10 },
  { name: "Art Expo", category: "Art", date: "2025-08-05", seats: 5 },
  { name: "Music Fest", category: "Music", date: "2025-09-10", seats: 15 }
];

// Closure to track registrations by category
function createRegistrationTracker() {
  const registrations = {};
  return function(category) {
    if (!registrations[category]) {
      registrations[category] = 0;
    }
    registrations[category]++;
    console.log(`Total registrations for ${category}: ${registrations[category]}`);
  };
}

const trackRegistration = createRegistrationTracker();

// Add a new event
function addEvent(name, category, date, seats) {
  events.push({ name, category, date, seats });
}

// Register a user
function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  if (event && event.seats > 0) {
    event.seats--;
    trackRegistration(event.category);
    alert(`Registered for ${event.name}`);
    displayEvents(events); // Refresh UI
  } else {
    alert("Registration failed: Event full or not found.");
  }
}

// Filter events by category
function filterEventsByCategory(category) {
  return events.filter(e => e.category === category);
}

// Higher-order filter function
function filterEvents(callback) {
  return events.filter(callback);
}

// Display events
function displayEvents(eventArray) {
  const list = document.getElementById('event-list');
  list.innerHTML = '';
  eventArray.forEach(event => {
    const div = document.createElement('div');
    div.className = 'event';
    div.innerHTML = `
      <strong>${event.name}</strong><br>
      Category: ${event.category}<br>
      Date: ${event.date}<br>
      Seats: ${event.seats}<br>
      <button onclick="registerUser('${event.name}')">Register</button>
    `;
    list.appendChild(div);
  });
}

// Initial Display
displayEvents(events);

// Example usage:
addEvent("Design Workshop", "Art", "2025-10-01", 8);
const techEvents = filterEventsByCategory("Technology");
const upcomingEvents = filterEvents(e => new Date(e.date) > new Date());
