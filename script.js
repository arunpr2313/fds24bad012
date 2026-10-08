const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const registerNumber = document.getElementById("registerNumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;
    const semester = document.getElementById("semester").value;
    const mode = document.querySelector('input[name="mode"]:checked');

    if (name === "" || registerNumber === "" || email === "" || course === "" || semester === "" || !mode) {
        message.textContent = "Please fill in all required fields.";
        message.style.color = "red";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Registration successful! You have been registered for " + course + ".";
    message.style.color = "green";
});

form.addEventListener("reset", function() {
    message.textContent = "";
});