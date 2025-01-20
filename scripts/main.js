// Smooth Scroll for Navigation
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Add Recommendation
  const form = document.getElementById('recommendation-form');
  const input = document.getElementById('recommendation-input');
  const list = document.getElementById('recommendation-list');
  
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newRecommendation = document.createElement('div');
    newRecommendation.classList.add('recommendation');
    newRecommendation.innerHTML = `
      <blockquote>${input.value}</blockquote>
      <p>- Anonymous</p>
    `;
    list.appendChild(newRecommendation);
    alert('Thank you for your recommendation!');
    input.value = '';
  });
  