<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Replace this with your actual email address
    $to = "muaddhalsway@gmail.com";

    // Collect form data safely
    $name = isset($_POST["name"]) ? htmlspecialchars($_POST["name"]) : "N/A";
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = isset($_POST["message"]) ? htmlspecialchars($_POST["message"]) : "";

    // Email subject and body
    $subject = "New Message from Contact Form";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    // Email headers
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Message failed to send.";
    }
} else {
    // Show the contact form on GET requests
?>
    <form method="post" action="">
        <label>Name: <input type="text" name="name"></label><br>
        <label>Email: <input type="email" name="email" required></label><br>
        <label>Message:<br><textarea name="message" required></textarea></label><br>
        <button type="submit">Send</button>
    </form>
<?php
}
?>