document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission

  // Basic form validation
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var dob = document.getElementById('dob').value;
  var gender = document.getElementById('gender').value;

  if (name.trim() === '' || email.trim() === '' || password.trim() === '' || dob.trim() === '' || gender.trim() === '') {
    alert('All fields are required. Please fill them out.');
  } else {
    alert('Form submitted!');
  }
});