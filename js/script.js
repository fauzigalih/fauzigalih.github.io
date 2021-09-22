// About Page
const btnEducation = document.getElementById('btn-education');
const btnExperience = document.getElementById('btn-experience');
const tabEducation = document.getElementById('education-tab');
const tabExperience = document.getElementById('experience-tab');

function aboutTabsToggle() {
  btnEducation.classList.toggle('active');
  btnExperience.classList.toggle('active');
  tabEducation.classList.toggle('hidden');
  tabExperience.classList.toggle('hidden');
}

btnEducation.addEventListener('click', (e) => {
  aboutTabsToggle();
});
btnExperience.addEventListener('click', (e) => {
  aboutTabsToggle();
});

// Tooltips Bootstrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Menu Bar
const menuHome = document.querySelector('section#home');
const menuAbout = document.querySelector('section#about');
const menuProjects = document.querySelector('section#projects');
const menuContact = document.querySelector('section#contact');
const modal = document.getElementById('exampleModal');
const hideBtn = document.getElementsByClassName('test-hide')[0];

function hiddenMenu() {
  hideBtn.click();
  menuHome.classList.add('hidden');
  menuAbout.classList.add('hidden');
  menuProjects.classList.add('hidden');
  menuContact.classList.add('hidden');
}

const menuTitle = document.getElementsByClassName('menu-title');
for (let i = 0; i < menuTitle.length; i++) {
  menuTitle[i].addEventListener('click', (e) => {
    console.log('ke ' + (i + 1));
    hiddenMenu();
    if (i === 0) menuHome.classList.remove('hidden');
    else if (i === 1) menuAbout.classList.remove('hidden');
    else if (i === 2) menuProjects.classList.remove('hidden');
    else menuContact.classList.remove('hidden');
  });
}

// Menu Button
const btnPortfolio = document.querySelector('.btn-portfolio');
const btnContact = document.querySelector('.btn-contact');
btnPortfolio.addEventListener('click', (e) => {
  hiddenMenu();
  menuAbout.classList.remove('hidden');
});
btnContact.addEventListener('click', (e) => {
  hiddenMenu();
  menuContact.classList.remove('hidden');
});

/* Google Sheet Contact Form */
const scriptURL = 'https://script.google.com/macros/s/AKfycbzMER0i2SUVzx0MutXxDKlsqxEKsbrfQsOQmnkhC9ZYJyKCyRJNjkkdLZ480zEhsfC1YA/exec';
const form = document.forms['github-contact-form'];
const btnSend = document.querySelector('.btn-send');
const btnLoading = document.querySelector('.btn-loading');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  btnSend.classList.toggle('d-none');
  btnLoading.classList.toggle('d-none');

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      console.log('Success!', response);

      btnSend.classList.toggle('d-none');
      btnLoading.classList.toggle('d-none');

      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});
