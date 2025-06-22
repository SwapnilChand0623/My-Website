function toggleDetail(id) {
  const section = document.getElementById(id);
  section.classList.toggle('show');
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! 📩 I’ll get back to you soon.");
});
