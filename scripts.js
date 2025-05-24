
// Dark mode toggle
const toggleBtn = document.querySelector('.dark-mode-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'true');
  } else {
    localStorage.removeItem('dark-mode');
  }
});
if(localStorage.getItem('dark-mode') === 'true') {
  document.body.classList.add('dark-mode');
}
