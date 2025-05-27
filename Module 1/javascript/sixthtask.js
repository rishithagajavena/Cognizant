// Initial array of events
let communityEvents = [
  { title: "Baking", category: "Workshop", type: "Food" },
  { title: "Guitar Jam", category: "Music", type: "Performance" },
  { title: "AI in 2025", category: "Technology", type: "Talk" }
];

// Add new events using .push()
communityEvents.push(
  { title: "Painting Basics", category: "Art", type: "Workshop" },
  { title: "Jazz Night", category: "Music", type: "Concert" }
);

// Filter only music events
const musicEvents = communityEvents.filter(event => event.category === "Music");

// Use .map() to format into display strings (like "Workshop on Baking")
const formattedCards = musicEvents.map(event => {
  return `<div class="card">
    <strong>${event.category} on ${event.title}</strong><br>
    Type: ${event.type}
  </div>`;
});

// Display in HTML
document.getElementById('event-cards').innerHTML = formattedCards.join('');
