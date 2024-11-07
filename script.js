// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents form submission

        // Get form fields
        const name = form.querySelector('input[placeholder="Your Name"]');
        const email = form.querySelector('input[placeholder="Your Email"]');
        const mobile = form.querySelector('input[placeholder="Your Mobile Number"]');
        const message = form.querySelector('textarea');

        // Simple validation checks
        if (!name.value.trim()) {
            alert("Please enter your name.");
            name.focus();
            return;
        }
        if (!validateEmail(email.value)) {
            alert("Please enter a valid email address.");
            email.focus();
            return;
        }
        if (!validateMobile(mobile.value)) {
            alert("Please enter a valid 10-digit mobile number.");
            mobile.focus();
            return;
        }
        if (!message.value.trim()) {
            alert("Please enter your message.");
            message.focus();
            return;
        }

        alert("Form submitted successfully!");
        form.reset(); // Clear the form after submission
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }

    // Function to validate 10-digit mobile number
    function validateMobile(mobile) {
        const mobilePattern = /^[0-9]{10}$/;
        return mobilePattern.test(mobile);
    }
});
