<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate form inputs
    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
    $mobile = filter_var($_POST["mobile"], FILTER_SANITIZE_STRING);

    // Check if inputs are valid
    if (!empty($name) && !empty($email) && !empty($message) && !empty($mobile) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        
        // Set up email details
        $to = "9949210242"; // Replace with your mobile number
        $subject = "New Contact Form Submission from $name";
        $headers = "From: $email" . "\r\n" .
                   "Reply-To: $email" . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();

        // Email body content
        $body = "Name: $name\n";
        $body .= "Email: $email\n";
        $body .= "Mobile: $mobile\n";
        $body .= "Message: $message\n";

        // Send email
        if (mail($to, $subject, $body, $headers)) {
            echo "Thank you! Your message has been sent.";
        } else {
            echo "Oops! Something went wrong. Please try again.";
        }
    } else {
        echo "Please fill out all fields correctly.";
    }
} else {
    echo "Invalid request.";
}
?>
