<!DOCTYPE html>
<html>
<head>
  <title>Form Submission</title>
</head>
<body>
  <form id="myForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br>

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" required></textarea><br>

    <input type="submit" value="Submit">
  </form>

  <script>
    document.getElementById("myForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // Get form input values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Create an object with the form data
      const formData = {
        name: name,
        email: email,
        message: message
      };

      // Do something with the formData object (e.g., display it, send it to the server)
      console.log(formData);
      // You can send this data to the server using AJAX or any other method as per your requirements.
    });
  </script>
</body>
</html>
