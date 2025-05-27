const eventList = document.getElementById("event-list");
const spinner = document.getElementById("spinner");

// Mock API endpoint (you can replace this with your own)
const API_URL = "https://mocki.io/v1/0a889502-3f57-4f6d-bc70-7fd5a9d4c825"; // returns array of event objects

// Show loading spinner
spinner.style.display = "block";

// Fetch events using then/catch
fetch(API_URL)
  .then(response => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then(data => {
    spinner.style.display = "none";
    displayEvents(data);
  })
  .catch(error => {
    spinner.textContent = "Failed to load events.";
    console.error("Fetch error:", error);
  });

// Render events
function displayEvents(events) {
  eventList.innerHTML = "";
  events.forEach(evt => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<strong>${evt.name}</strong><br>
                     Category: ${evt.category}<br>
                     Date: ${evt.date}`;
    eventList.appendChild(div);
  });
}
