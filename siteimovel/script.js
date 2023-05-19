var currentImageIndex = 0;
var images = document.querySelectorAll('#slideshow img');
var prevButton = document.getElementById('prevBtn');
var nextButton = document.getElementById('nextBtn');

function showImage(index) {
  for (var i = 0; i < images.length; i++) {
    images[i].style.opacity = 0;
  }
  
  images[index].style.opacity = 1;
  currentImageIndex = index;
}

function showNextImage() {
  var newIndex = (currentImageIndex + 1) % images.length;
  showImage(newIndex);
}

function showPreviousImage() {
  var newIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(newIndex);
}

prevButton.addEventListener('click', showPreviousImage);
nextButton.addEventListener('click', showNextImage);

showImage(currentImageIndex);   // Exibir a primeira imagem ao carregar a página
