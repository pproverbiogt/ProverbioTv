// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
toggle.addEventListener('click', () => menu.classList.toggle('open'));

// Scroll-to-top button
const scrollBtn = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) scrollBtn.classList.add('show');
  else scrollBtn.classList.remove('show');
});
scrollBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// Contact form (demo)
function handleSubmit(e){
  e.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = '¡Gracias! Tu mensaje se ha enviado (demo).';
  e.target.reset();
  return false;
}
