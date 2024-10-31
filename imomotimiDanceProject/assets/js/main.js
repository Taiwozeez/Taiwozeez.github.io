// // Dark mode
// function darkmode() {
//     document.getElementById('theme').setAttribute('href', '../assets/css/dark.css'); 
//     document.getElementById('toggle').className='fa-solid fa-toggle-off toggleon';
//     document.getElementById('firstimg').src='../assets/images/shape-top-black-80.png';
//     document.getElementById('secimg').src='../assets/images/shape-top-dark-grey-80.png';
//     document.getElementById('topgrey2').src='../assets/images/shape-top-dark-grey-80.png';
// }

// // Light Mode
// function lightmode() {
//     document.getElementById('theme').setAttribute('href', '../assets/css/light.css'); 
//     document.getElementById('toggle').className='fa-solid fa-toggle-on toggleon';
//     document.getElementById('firstimg').src='../assets/images/shape-top-white-80.png';
//     document.getElementById('secimg').src='../assets/images/shape-top-grey-80.png';
//     document.getElementById('topgrey2').src='../assets/images/shape-top-grey-80.png';
// }



    function toggleMode() {
        const themeLink = document.getElementById('theme');
        const toggleIcon = document.getElementById('toggle');
        const topwhite = document.getElementById('firstimg');
        const topGrey = document.getElementById('topgrey');
        const topGrey2 = document.getElementById('topgrey2');

    if (themeLink.getAttribute('href') === '../assets/css/light.css') {
        // switch to Dark Mode
        themeLink.setAttribute('href', '../assets/css/dark.css');
        toggleIcon.className = 'fa-solid fa-toggle-off toggleon';
        topwhite.src = '../assets/images/shape-top-black-80.png';
        topGrey.src = '../assets/images/shape-top-dark-grey-80.png';
        topGrey2.src = '../assets/images/shape-top-dark-grey-80.png';
    } else {
        // Switch to Light Mode
        themeLink.setAttribute('href', '../assets/css/light.css');
        toggleIcon.className = 'fa-solid fa-toggle-on toggleon';
        topwhite.src = '../assets/images/shape-top-white-80.png';
        topGrey.src = '../assets/images/shape-top-grey-80.png';
        topGrey2.src = '../assets/images/shape-top-grey-80.png';
     }
};



window.onescroll = function(){
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop>100 || document.documentElement.scrollTop > 100){
        scrollTopBtn.style.display = "block"
    }

    else {
        scrollTopBtn.style.display = "none"
    }

};

document.getElementById("scrollTopBtn").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};


//     document.addEventListener("DOMContentLoaded", function() {
//         // Array of image URLs with the correct path
//         const images = [
//           './assets/images/slide-1.jpg',
//           './assets/images/slide-2.jpg',
//           './assets/images/slide-3.jpg',
//         ];
//       // Get the element to apply the carousel
//      const carouselElement = document.querySelector('.first_page');

//      // Set the initial index for the images array
//     let currentImageIndex = 0;
//         // Function to change the background image
//   function changeBackgroundImage() {
//     if (carouselElement) {
//         // Update the background image
//         carouselElement.style.backgroundImage = url(${images[currentImageIndex]});
//         console.log(Background changed to: ${images[currentImageIndex]});
        
//         // Move to the next image index, or loop back to the start
//         currentImageIndex = (currentImageIndex + 1) % images.length;
//     } else {
//         console.error("Element with class '.first_page' not found.");
//     }
// }

//     // Change the background every 5 seconds
//   setInterval(changeBackgroundImage, 5000); // 5000 ms = 5 seconds

//   // Initial call to display the first image
//   changeBackgroundImage();
// });







  // Set the target date and time for the countdown (e.g., Dec 31, 2024, 12:00:00)
var countdownDate = new Date("Dec 31, 2024 12:00:00").getTime();

// Function to update the countdown every second
function updateCountdown() {
    // Get the current date and time
    var now = new Date().getTime();
    // Calculate the remaining time in milliseconds
    var timeRemaining = countdownDate - now;

    // Check if the countdown has finished
    if (timeRemaining <= 0) {
        // Stop the countdown and display the message
        clearInterval(countdownInterval);
        document.querySelector(".countdown").innerHTML = "Audition has started!";
        return;
    }

    // Calculate days, hours, minutes, and seconds remaining
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Add a zero in front of numbers < 10 (for two-digit format)
    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

// Start the countdown, calling updateCountdown every second
var countdownInterval = setInterval(updateCountdown, 1000);