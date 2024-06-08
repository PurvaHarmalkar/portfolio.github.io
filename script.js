// Example: Simple form validation
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let message = document.querySelector('#message').value;

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
  } else {
    alert('Thank you for your message.');
    // Here you can add code to send the form data to your email or server
  }
});
