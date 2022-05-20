window.addEventListener("DOMContentLoaded", () => {
  if (typeof(gtag) === "function") { // Is GA loaded ?
    const ga_buttons = document.querySelectorAll('.button-tel'); // Check buttons
    ga_buttons.forEach(query_button => {
      query_button.addEventListener("click", () => {
        gtag('event', 'Click', {
          'event_category': 'button',
          'event_action': 'Click',
          'event_label': 'button-tel',
        });
      });
    });
  };
});
