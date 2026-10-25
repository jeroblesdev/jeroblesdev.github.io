// Actualizar el año del footer automáticamente
document.getElementById('year').textContent = new Date().getFullYear();

// Efecto de sombra al hacer scroll
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.05)';
  } else {
    header.style.boxShadow = 'none';
  }
});
