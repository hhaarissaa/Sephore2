let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onsroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}










document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for now

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const messageContent = document.getElementById('messageContent').value;

    // Validate full name (check if it's not empty)
    if (fullName.trim() === '') {
        alert('Please enter your full name');
        return;
    }

    // Validate email using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Validate phone number (simple length check for demonstration)
    if (phone.length < 8) {
        alert('Please enter a valid phone number');
        return;
    }

    // Validate message content (check if it's not empty)
    if (messageContent.trim() === '') {
        alert('Please enter your message');
        return;
    }

    // If all validations pass, you can proceed with form submission
    // Here you can add code to submit the form to the server or perform any other actions
    // For demonstration, I'll log a success message
    console.log('Form submitted successfully!');
});



