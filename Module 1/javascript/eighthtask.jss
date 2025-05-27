const events = [
  { id: 1, name: "Jazz Night", category: "Music", seats: 5 },
  { id: 2, name: "Tech Conference", category: "Tech", seats: 3 },
  { id: 3, name: "Painting Workshop", category: "Art", seats: 0 },
  { id: 4, name: "Guitar Class", category: "Music", seats: 2 }
];

const eventContainer = document.getElementById("event-container");
const categoryFilter = document.getElementById("category-filter");
const searchBox = document.getElementById("search-box");

// Render events
function renderEvents(filteredEvents) {
  eventContainer.innerHTML = '';
  filteredEvents.forEach(event => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <strong>${event.name}</strong><br>
      Category: ${event.category}<br>
      Seats: ${event.seats}<br>
    `;

    const button = document.createElement("button");
    button.textContent = "Register";
    button.disabled = event.seats === 0;
    button.onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        renderFilteredEvents(); // Update UI
      }
    };

    card.appendChild(button);
    eventContainer.appendChild(card);
  });
}

// Filter + Search combo logic
function renderFilteredEvents() {
  const category = categoryFilter.value;
  const searchText = searchBox.value.toLowerCase();

  const filtered = events.filter(event => {
    const matchCategory = category === "All" || event.category === category;
    const matchSearch = event.name.toLowerCase().includes(searchText);
    return matchCategory && matchSearch;
  });

  renderEvents(filtered);
}

// Handle category change
categoryFilter.onchange = renderFilteredEvents;

// Handle search by name
searchBox.addEventListener("keydown", () => {
  renderFilteredEvents();
});

// Initial display
renderFilteredEvents();
