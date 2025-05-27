$(document).ready(function() {
  // Initially fade in the event cards
  $('.event-card').fadeIn(800);

  // Toggle fade on button click
  $('#registerBtn').click(function() {
    $('.event-card').fadeToggle(500);
  });
});


