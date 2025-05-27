const form = document.getElementById("register-form");
const statusMessage = document.getElementById("status-message");

// Replace with a real or mock API endpoint
const mockAPI = "https://jsonplaceholder.typicode.com/posts";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(form);
  const userData = Object.fromEntries(formData.entries());

  // Clear previous messages
  statusMessage.textContent = "Sending data...";
  statusMessage.className = "status";

  // Simulate server delay
  setTimeout(() => {
    // Send POST request
    fetch(mockAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (!response.ok) throw new Error("Failed to register.");
      return response.json();
    })
    .then(data => {
      statusMessage.textContent = "✅ Registration successful!";
      statusMessage.classList.add("success");
      form.reset();
    })
    .catch(error => {
      statusMessage.textContent = "❌ Error submitting form. Try again.";
      statusMessage.classList.add("error");
      console.error(error);
    });
  }, 1500); // simulate 1.5s delay
});
