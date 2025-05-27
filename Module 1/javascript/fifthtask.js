// Constructor function OR class definition
function Event(name, category, date, seats) {
  this.name = name;
  this.category = category;
  this.date = date;
  this.seats = seats;
}

// Add method to prototype
Event.prototype.checkAvailability = function () {
  return this.seats > 0 ? "Available" : "Full";
};

// Sample event instances
const event1 = new Event("Tech Talk", "Technology", "2025-07-01", 10);
const event2 = new Event("Art Expo", "Art", "2025-06-10", 0);
const event3 = new Event("Music Fest", "Music", "2025-08-15", 5);

// Store in array
const events = [event1, event2, event3];

// Display in HTML
const container = document.getElementById('event-list');

events.forEach(evt => {
  const div = document.createElement('div');
  div.className = 'event';

  // List properties using Object.entries()
  let details = '';
  for (const [key, value] of Object.entries(evt)) {
    details += `${key}: ${value}<br>`;
  }

  // Add availability check
  details += `Status: ${evt.checkAvailability()}`;

  div.innerHTML = `<strong>${evt.name}</strong><br>${details}`;
  container.appendChild(div);
});
