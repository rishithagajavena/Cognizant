// Use const for event name and date
const eventName = "Community Clean-Up Drive";
const eventDate = "2025-06-15";

// Use let for available seats
let seatsAvailable = 10;

// Show event info using template literals
console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Seats Available: ${seatsAvailable}`);

// Simulate a user registration
function registerUser() {
  if (seatsAvailable > 0) {
    seatsAvailable--; // reduce by 1
    alert(`Registration successful!\nRemaining seats: ${seatsAvailable}`);
    console.log(`User registered. Seats left: ${seatsAvailable}`);
  } else {
    alert("Sorry, no seats available!");
    console.log("Registration failed. No seats left.");
  }
}
