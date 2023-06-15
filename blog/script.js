
window.sr = ScrollReveal({ reset: true });

sr.reveal('.area-1', { duration: 1000 });

sr.reveal('.area-2', { duration: 1000 });

sr.reveal('.area-3', { duration: 1000 });

sr.reveal('.area-4', { duration: 1000 });

sr.reveal('.module', { duration: 1500 });

window.addEventListener('scroll', function(){
    let header = document.querySelector('header')
    header.classList.toggle('rolagem', window.scrollY > 30)
})
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var h1 = document.getElementById('ititle');
  
    if (window.pageYOffset > header.offsetHeight) {
      h1.classList.add('hide');
    } else {
      h1.classList.remove('hide');
    }
})
