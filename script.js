// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Check if all fields are filled
    if (name && email && message) {
        document.getElementById("form-feedback").textContent = "Thank you for reaching out, " + name + "! We'll get back to you soon.";
        document.getElementById("form-feedback").style.color = "green";
        // Optionally, reset the form
        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("form-feedback").textContent = "Please fill in all fields.";
        document.getElementById("form-feedback").style.color = "red";
    }
});
