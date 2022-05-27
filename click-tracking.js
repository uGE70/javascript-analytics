window.addEventListener("DOMContentLoaded", () => {
  if (typeof(gtag) === "function") { // Is GA loaded ?
    const ga_buttons = document.querySelectorAll('.button-track'); // Check buttons
    ga_buttons.forEach(query_button => {
      query_button.addEventListener("click", () => {
        const gcode = query_button.getAttribute('data-track');
        gtag('event', gcode, {
          'event_category': 'button',
          'event_action': 'Click',
          'event_label': 'button',
        });
      });
    });
  };
});
