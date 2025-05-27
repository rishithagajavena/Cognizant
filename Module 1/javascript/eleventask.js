const form = document.getElementById("registration-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from reloading the page

  // Access form elements
  const { name, email, event: selectedEvent } = form.elements;

  // Clear previous messages
  document.getElementById("success-message").textContent = "";
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("event-error").textContent = "";

  let hasError = false;

  // Validate name
  if (name.value.trim() === "") {
    document.getElementById("name-error").textContent = "Name is required.";
    hasError = true;
  }

  // Validate email
  if (email.value.trim() === "") {
    document.getElementById("email-error").textContent = "Email is required.";
    hasError = true;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    document.getElementById("email-error").textContent = "Invalid email format.";
    hasError = true;
  }

  // Validate event selection
  if (selectedEvent.value === "") {
    document.getElementById("event-error").textContent = "Please select an event.";
    hasError = true;
  }

  // If no errors, show success message
  if (!hasError) {
    document.getElementById("success-message").textContent = `Thank you, ${name.value}, for registering for ${selectedEvent.value}!`;
    form.reset();
  }
});
