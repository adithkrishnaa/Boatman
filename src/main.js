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
  



  // window.onbeforeunload = () => {
  //   for(const form of document.getElementsByTagName('form')) {
  //     form.reset();
  //   }
  // }


              
function sendemail(){

	var email=document.getElementById("email").value;
	var from_name=document.getElementById("name").value;
  var country=document.getElementById("country").value;
  var phone=document.getElementById("phone").value;
	var message=document.getElementById("message").value;
  

	var templateParams = {
        to_name: from_name,
        email: email,
        country: country,
        phone: phone,
        message: message
      };

      emailjs.send('service_nj63ymj', 'template_0iu6b3c', templateParams)
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
     window.alert("Sent successfully!");
     
  })

     
}







