// Front-end contact form validation.
const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("contact-feedback");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    feedback.textContent = "Please complete every field.";
    feedback.style.color = "#bd4545";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "#bd4545";
    return;
  }

  if (!/^\d+$/.test(phone)) {
    feedback.textContent = "Phone number must contain digits only (no spaces or symbols).";
    feedback.style.color = "#bd4545";
    return;
  }

  feedback.textContent = "Your details passed validation. This demo does not send the message to an inbox.";
  feedback.style.color = "#237b61";
  contactForm.reset();
});
