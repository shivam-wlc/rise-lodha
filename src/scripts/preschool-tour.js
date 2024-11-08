// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your user ID
  emailjs.init("G2SDjizAB86ZjO6Tz"); // Replace with your EmailJS User ID

  // Get the form element by its ID
  const bookingForm = document.getElementById("booking-form");

  // Add an event listener to the form's submit event
  bookingForm.addEventListener("submit", function (event) {
    // Prevent the default form submission (page reload)
    event.preventDefault();

    // Get the values from each input field
    const toName = "Recipient Name"; // Specify the recipient's name
    const fromName = bookingForm["name"].value;
    const email = bookingForm["email"].value;
    const mobile = bookingForm["mobile"].value;
    const childName = bookingForm["childname"].value;
    const childAgeYear = bookingForm["childage-year"].value;
    const childAgeMonth = bookingForm["childage-month"].value;
    const city = bookingForm["city"].value;
    console.log(
      "Form Data:",
      fromName,
      email,
      mobile,
      childName,
      childAgeYear,
      childAgeMonth,
      city
    );
    const message = `You have received a booking from ${fromName}. Details: 
                        Name: ${fromName} 
                        Email: ${email}
                        Mobile: ${mobile}
                        Child's Name: ${childName}
                        Child's Age: ${childAgeYear} years ${childAgeMonth} months
                        City: ${city}`;

    // Create an object with the form data
    const formData = {
      to_name: toName, // Replace with the name of the person receiving the email
      from_name: fromName,
      message: message,
    };

    console.log("Form Data:", formData);

    // Log the form data to the console (for testing)
    console.log("Form Data:", formData);

    // Send email using EmailJS
    emailjs
      .send("service_gb9bmin", "template_ktx4jsb", formData)
      .then(function (response) {
        console.log("Success:", response);
        alert("Your booking request has been sent!");
      })
      .catch(function (error) {
        console.error("Error:", error);
        alert("Oops! Something went wrong. Please try again.");
      });

    // Reset the form after submission
    bookingForm.reset();
  });
});

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your user ID
  emailjs.init("G2SDjizAB86ZjO6Tz"); // Replace with your EmailJS User ID

  // Get the form element by its ID
  const bookingForm = document.getElementById("admission-booking-form");

  // Add an event listener to the form's submit event
  bookingForm.addEventListener("submit", function (event) {
    // Prevent the default form submission (page reload)
    event.preventDefault();

    // Get the values from each input field
    const toName = "Recipient Name"; // Specify the recipient's name
    const fromName = bookingForm["name"].value;
    const email = bookingForm["email"].value;
    const mobile = bookingForm["mobile"].value;
    const childName = bookingForm["childname"].value;
    const childAgeYear = bookingForm["childage-year"].value;
    const childAgeMonth = bookingForm["childage-month"].value;
    const city = bookingForm["city"].value;
    console.log(
      "Form Data:",
      fromName,
      email,
      mobile,
      childName,
      childAgeYear,
      childAgeMonth,
      city
    );
    const message = `You have received a booking from ${fromName}. Details: 
                        Name: ${fromName} 
                        Email: ${email}
                        Mobile: ${mobile}
                        Child's Name: ${childName}
                        Child's Age: ${childAgeYear} years ${childAgeMonth} months
                        City: ${city}`;

    // Create an object with the form data
    const formData = {
      to_name: toName, // Replace with the name of the person receiving the email
      from_name: fromName,
      message: message,
    };

    console.log("Form Data:", formData);

    // Log the form data to the console (for testing)
    console.log("Form Data:", formData);

    // Send email using EmailJS
    emailjs
      .send("service_gb9bmin", "template_ktx4jsb", formData)
      .then(function (response) {
        console.log("Success:", response);
        alert("Your booking request has been sent!");
      })
      .catch(function (error) {
        console.error("Error:", error);
        alert("Oops! Something went wrong. Please try again.");
      });

    // Reset the form after submission
    bookingForm.reset();
  });
});
