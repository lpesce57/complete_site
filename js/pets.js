const slideIndex = {
    'rocky_gallery': 1,
    'pumpkin_gallery': 1,
    'oliver_gallery': 1,
    'happy_gallery': 1,
    'luke_gallery': 1,
    'molly_gallery': 1,
    'lucy_gallery': 1,
  };

  for (galleryID in slideIndex) {
      showSlides(slideIndex[galleryID], galleryID);
  }


  function plusSlides(n, galleryID) {
    showSlides((slideIndex[galleryID] += n), galleryID);
  }

  function currentSlide(n, galleryID) {
    showSlides((slideIndex[galleryID] = n), galleryID);
  }

  function showSlides(n, galleryID) {
    let i;
    let slides = document.querySelectorAll(`.${galleryID}`);
    let dots = document.getElementsByClassName(`photo ${galleryID}`);
    if (n > 4) {
      slideIndex[galleryID] = 1;
    }
    if (n < 1) {
      slideIndex[galleryID] = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active_photo", "");
    }
    slides[slideIndex[galleryID] - 1].style.display = 'block';
    dots[slideIndex[galleryID] - 1].className += ' active_photo';
    
    for (galleryID in slideIndex) {
      const gallery = document.querySelector(`.${galleryID}`);
      const gallerySlides = gallery.querySelectorAll('.mySlides');
      gallerySlides.forEach((slide) => {
          slide.addEventListener('keydown', (event) => {
              if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                  plusSlides(-1, galleryID);
} 
else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
plusSlides(1, galleryID);
}
});
});

gallery.addEventListener('keydown', (event) => {
if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
plusSlides(-1, galleryID);
} else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
plusSlides(1, galleryID);
}
});
}
};