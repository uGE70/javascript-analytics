window.addEventListener("DOMContentLoaded", function () {
	if (typeof(gtag) === "function") { // Is GA loaded ?
	const ga_email = document.getElementById("Email");
  	ga_email.addEventListener("blur", function () {
    //console.log("Email " + ga_email.value);
    gtag('event', 'track_form', { 'event_category': 'engagement', 'email_address':  ga_email.value });
    });
   }
   });
