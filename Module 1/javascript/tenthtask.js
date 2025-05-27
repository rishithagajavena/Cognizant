// Sample data using const
const originalEvents = [
  { name: "Yoga Retreat", category: "Health", date: "2025-06-20" },
  { name: "Jazz Night", category: "Music", date: "2025-07-10" },
  { name: "Code Fest", category: "Tech", date: "2025-08-01" }
];

// Function with default parameter and array cloning using spread operator
const filterEvents = (events = [], category = "All") => {
  const clonedEvents = [...events]; // clone array
  return category === "All"
    ? clonedEvents
    : clonedEvents.filter(event => event.category === category);
};

// Function to display events
const displayEvents = (events) => {
  const container = document.querySelector("#event-container");
  container.innerHTML = "";

  events.forEach(evt => {
    // Destructure event object
    const { name, category, date } = evt;

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <strong>${name}</strong><br>
      Category: ${category}<br>
      Date: ${date}
    `;
    container.appendChild(card);
  });
};

// Filter for only music events and display
const musicEvents = filterEvents(originalEvents, "Music");
displayEvents(musicEvents);
