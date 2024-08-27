//Map scroll cancel  and add scroll on click
const iframe = document.getElementById('mapIframe');
const overlay = document.getElementById('overlay');

overlay.addEventListener('click', function() {
  overlay.style.display = 'none';
  iframe.style.pointerEvents = 'auto';
});

iframe.addEventListener('mouseleave', function() {
  overlay.style.display = 'block';
  iframe.style.pointerEvents = 'none';
});