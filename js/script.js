const date = (document.getElementById(
    "date"
  ).innerHTML = new Date().getFullYear());
  // setup nav
  const navBtn = document.getElementById("nav-btn");
  const navbar = document.getElementById("navbar");
  const navClose = document.getElementById("nav-close");
  // show nav
  navBtn.addEventListener("click", () => {
    navbar.classList.add("showNav");
  });
  // close nav
  navClose.addEventListener("click", () => {
    navbar.classList.remove("showNav");
  });


// Get references to the form and messages container
const contactForm = document.getElementById('contactForm');
const messagesContainer = document.getElementById('messagesContainer');

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const message = document.getElementById('messageInput').value;

  // Create a new message element
  const messageElement = document.createElement('div');
  messageElement.innerHTML = `
    <h3>Message from ${name}</h3>
    <p>Email: ${email}</p>
    <p>${message}</p>
  `;

  // Append the message element to the messages container
  messagesContainer.appendChild(messageElement);

  // Reset the form
  contactForm.reset();
}

// Add event listener to the form submission event
contactForm.addEventListener('submit', handleSubmit);
