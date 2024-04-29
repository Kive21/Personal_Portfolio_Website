document.addEventListener("DOMContentLoaded", function() {
    var background = document.querySelector('.background');
  
    // Preload the actual background image
    var img = new Image();
    img.src = 'Images/background2.jpg'; // Replace with the URL of your actual background image
  
    // When the actual image is loaded, replace the placeholder with it
    img.onload = function() {
      background.style.backgroundImage = 'url(' + this.src + ')';
      background.classList.add('loaded');
    };
  });
  