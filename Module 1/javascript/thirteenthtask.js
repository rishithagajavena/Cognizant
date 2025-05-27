const form = document.getElementById("reg-form");
const statusDiv = document.getElementById("status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("Form submission started"); // Log start

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  console.log("Form data collected:", data); // Log collected data

  statusDiv.textContent = "Submitting...";

  // Place a breakpoint on the next line to inspect fetch call in DevTools
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log("Response received:", response);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then((result) => {
      console.log("Parsed JSON:", result);
      statusDiv.textContent = "✅ Registration successful!";
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      statusDiv.textContent = "❌ Submission failed. See console.";
    });
});
