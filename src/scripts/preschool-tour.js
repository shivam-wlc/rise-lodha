// // Wait for the DOM to fully load
// document.addEventListener("DOMContentLoaded", function () {
//   // Get the form element by its ID
//   const bookingForm = document.getElementById("booking-form");

//   // Add an event listener to the form's submit event
//   bookingForm.addEventListener("submit", function (event) {
//     // Prevent the default form submission (page reload)
//     event.preventDefault();

//     // Get the values from each input field
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const mobile = document.getElementById("mobile").value;
//     const childName = document.getElementById("childname").value;
//     const childAgeYear = document.getElementById("childage-year").value;
//     const childAgeMonth = document.getElementById("childage-month").value;
//     const city = document.getElementById("city").value;

//     // Create an object with the form data
//     const formData = {
//       name: name,
//       email: email,
//       mobile: mobile,
//       childName: childName,
//       childAge: {
//         year: childAgeYear,
//         month: childAgeMonth,
//       },
//       city: city,
//     };

//     bookingForm.reset();
//     // Log the form data to the console
//     console.log("Form Data:", formData);
//   });
// });

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
    const fromName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const childName = document.getElementById("childname").value;
    const childAgeYear = document.getElementById("childage-year").value;
    const childAgeMonth = document.getElementById("childage-month").value;
    const city = document.getElementById("city").value;
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
