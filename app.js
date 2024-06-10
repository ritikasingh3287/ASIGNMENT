document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.dark-mode-toggle');
    
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  });
  
