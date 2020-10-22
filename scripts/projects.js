let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides(slideIndex += n)
  const slides = document.getElementsByClassName('container')
  slides[slideIndex - 1].style.display = 'block'  

}


function showSlides(n) {
  let i
  const slides = document.getElementsByClassName('container')

  if (n > slides.length) {
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'  
  }

}