function toggleMenu() {
    menu = document.getElementById( "menu" );
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    }else{
        menu.classList.add( 'hidden' )
    }
}


// search


const toggleSearch = () => {
    const searchInput = document.getElementById('searchInput');
    const searchIcon = document.getElementById('searchIcon');
  
    searchIcon.addEventListener('click', () => {
      searchInput.classList.toggle('focus:w-28');
      searchInput.classList.toggle('w-4');
      searchInput.classList.toggle('pr-5');
      searchInput.focus();
    });
  
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        searchInput.value = '';
        searchInput.blur();
      }
    });
  };
  
  toggleSearch();
  


  function toggleSlides() {
    const slides = document.querySelectorAll('.slideshow li');
    let currentIndex = 0;
    let intervalId;
  
    function showNextSlide() {
      slides[currentIndex].classList.add('hidden');
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.remove('hidden');
    }
  
    function startSlideshow() {
      intervalId = setInterval(showNextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
    }
  
    function pauseSlideshow() {
      clearInterval(intervalId);
    }
  
    startSlideshow(); // Start slideshow initially
  
    // Pause slideshow on hover
    slides.forEach(slide => {
      slide.addEventListener('mouseenter', pauseSlideshow);
      slide.addEventListener('mouseleave', startSlideshow);
    });
  }
  
  toggleSlides();
  



//   window.onbeforeunload = () => {
//     for(const form of document.getElementsByTagName('form')) {
//       form.reset();
//     }
//   }





// script.js

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // Construct the form data
    var formData = new FormData();
    formData.append("entry.590916267", name);
    formData.append("entry.1195376812", email);
    formData.append("entry.1730480520", phone);
    formData.append("entry.254308505", message);

    // Send the form data using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://docs.google.com/forms/d/e/1FAIpQLScU2fcGEtuYTRw3AwD8pV_okp9zr51P3yXgUrgiFHBAgs7sVw/formResponse", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Handle the successful form submission
            document.getElementById("contactForm").reset(); // Reset the form
            document.getElementById("responseMessage").innerText = "Thank you for your message. We will be in touch soon!";
        } else {
            // Handle errors or unsuccessful form submission
            document.getElementById("responseMessage").innerText = "Oops! Something went wrong. Please try again later.";
        }
    };
    xhr.send(formData);
});

