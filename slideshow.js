const nextImg = document.getElementById('next');
const backImg = document.getElementById('back');

nextImg.addEventListener('click',()=>{
  clearInterval(intervalId);
  nextSlide()
})
backImg.addEventListener('click',previousSlide)


const images = document.querySelectorAll('.slides') 
const navigationDots = document.querySelectorAll('.nav-dots');
let currentIndex =0

// Show first image on page load
const firstSlide = images[0];
firstSlide.style.display = 'inline'
  
let lastSlide= false;


const dot = navigationDots[currentIndex] 
// Add 'active' class to the initial dot on page load

dot.classList.add('active');

function nextSlide(){
  

  if (currentIndex < images.length - 1) {
    if(lastSlide){
        const imgToRemove = images[4];
        imgToRemove.style.display= 'none'
        const imgToShow = images[currentIndex];
        imgToShow.style.display = 'inline'
        lastSlide= false
    }
    else{
    const imgToRemove = images[currentIndex];
    imgToRemove.style.display = 'none';
    currentIndex++;
    images[currentIndex].style.display = 'inline';
    }
  // Remove 'active' class from all dots
  navigationDots.forEach((dot) => {
    dot.classList.remove('active');
  });

  // Add 'active' class to the clicked dot
  const activeDot = navigationDots[currentIndex];
  activeDot.classList.add('active'); 
  }
  if(currentIndex === 4){
    currentIndex = 0
    lastSlide=true
  }
 
}


function previousSlide(){
    clearInterval(intervalId);
    if (currentIndex > 0) {
        
        const imgToRemove = images[currentIndex];
        imgToRemove.style.display = 'none';
        currentIndex--;
        images[currentIndex].style.display = 'inline';
        
        
      }
    else if(currentIndex === 0){
        currentIndex = 4
        const imgToRemove = images[0];
        imgToRemove.style.display= 'none'
        const imgToShow = images[currentIndex];
        imgToShow.style.display = 'inline'
            
      }
  // Remove 'active' class from all dots
  navigationDots.forEach((dot) => {
    dot.classList.remove('active');
  });

  // Add 'active' class to the clicked dot
  const activeDot = navigationDots[currentIndex];
  activeDot.classList.add('active');

   
}



function showSlide(number){
  
  const imgToShow = images[number];
  imgToShow.style.display = 'inline';
  currentIndex = number; 
}



navigationDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(intervalId);
    const imageToRemove = images[currentIndex];
    imageToRemove.style.display = 'none';

    // Remove 'active' class from all dots
    navigationDots.forEach((dot) => {
      dot.classList.remove('active');
    });

    // Add 'active' class to the clicked dot
    dot.classList.add('active');

    showSlide(index);

    
  });
});


// Start the automatic slideshow interval
const intervalId = setInterval(() => {
  nextSlide();
}, 5000);