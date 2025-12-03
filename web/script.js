const tabButtons = document.querySelectorAll('.tab-button');
const sections = document.querySelectorAll('section');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(button.dataset.tab).classList.add('active');
  });
});
