import data from './projectData.js';

const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const menu = document.getElementById('menu');
const projectContainer = document.getElementById('projects-container');

const popup = document.getElementById('popup');
menuBtn.addEventListener('click', () => {
  menu.classList.add('menu-show');
  closeBtn.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
  menu.classList.remove('menu-show');
  closeBtn.style.display = 'none';
});
menu.addEventListener('click', () => {
  menu.classList.remove('menu-show');
  closeBtn.style.display = 'none';
});

data.forEach((data) => {
  const {
    title, src, lang,
  } = data;
  const project = document.createElement('div');
  project.innerHTML += `<div class="project">
          <div class="project-image">
          <img src="${src}">
          </div>
          <div class="project-description">
            <h3>${title}</h3>
            <ul>
              ${lang.map((tech) => `<li>${tech}</li>`).join('')}
            </ul>
            <button class="project-btn btn">See Project</button>
          </div>
        </div>`;
  projectContainer.appendChild(project);
  popup.style.display = 'none';
  const projectBtn = project.querySelector('.project-btn');
  projectBtn.addEventListener('click', () => {
    document.getElementById('popup').scrollIntoView();
    // projectContainer.style.display = 'none';
    popup.style.display = 'flex';
    const y = popup.getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: y,
      behavior: 'smooth',
    });
    popup.innerHTML += `<div class="popup-project-container">
    <div class="popup-project-header">
    <div class="popup-project-image"><img src="${data.src
}" class="popup-img" alt="projectimage"></div>
    <button class="popup-close-button">
    <i class="fa-solid fa-xmark"></i>
    </button>
        <h2 class="popup-project-title">${data.title}</h2>
        <ul>
        ${lang.map((tech) => `<li>${tech}</li>`).join('')}
        </ul>
        </div>
        <div class="popup-project-description">${data.description}</div>
        <div class="popup-project-buttons">
        <a href="${data.live
}" target="_blank"><button class="popup-project-btn " id="popup-globe-btn">
        See Live<i class="fa-solid fa-globe"></i>
        </button></a>
        <a href="${data.source
}" target="_blank"><button class="popup-project-btn">
        See Source<i class="fa-brands fa-github"></i>
        </button></a>
        </div>
        </div>`;
    const closeProjectBtn = popup.querySelector('.popup-close-button');
    closeProjectBtn.addEventListener('click', () => {
      popup.firstElementChild.remove();
      popup.style.display = 'none';
      projectContainer.style.display = 'grid';
    });
  });
});

const form1 = document.querySelector('#form1');
const messageContainer = document.querySelector('.message1');
const form2 = document.querySelector('#form2');

const isValidEmail = (email) => {
  const eamilPattern = /^(([^<>()[\]\\.,;:\s@"A-Z]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
  return eamilPattern.test(email);
};

form1.addEventListener('submit', (e) => {
  const formData = new FormData(e.target);
  const valid = isValidEmail(formData.get('email'));
  if (valid) {
    const message = document.createElement('span');
    message.classList.add('success');
    message.innerHTML = 'Data sent successfully!';
    messageContainer.replaceChildren(message);
  } else {
    e.preventDefault();
    const message = document.createElement('span');
    message.classList.add('error');
    message.innerHTML = 'Incorrect format. Enter email in lowercase';
    messageContainer.replaceChildren(message);
  }
});

// Mobile form Local Storage
const name = form2.elements.item(0);
const email = form2.elements.item(1);
const comment = form2.elements.item(2);
function saveData() {
  const data = {
    Name: form2.elements.item(0).value,
    Email: form2.elements.item(1).value,
    Comment: form2.elements.item(2).value,
  };
  localStorage.setItem('data', JSON.stringify(data));
}

let formObject = JSON.parse(localStorage.getItem('data'));
if (!formObject) {
  formObject = {
    name: '',
    email: '',
    comment: '',
  };
  saveData();
}

name.value = formObject.name;
name.addEventListener('change', (e) => {
  formObject.name = e.target.value;
  localStorage.setItem('data', JSON.stringify(formObject));
});

email.value = formObject.email;
email.addEventListener('change', (e) => {
  formObject.email = e.target.value;
  localStorage.setItem('data', JSON.stringify(formObject));
});

comment.value = formObject.comment;
comment.addEventListener('change', (e) => {
  formObject.comment = e.target.value;
  localStorage.setItem('data', JSON.stringify(formObject));
});

// Desktop form Local Storage
const firstName = form1.elements.item(0);
const lastName = form1.elements.item(1);
const email1 = form1.elements.item(2);
const comment1 = form1.elements.item(3);
function saveData1() {
  const data1 = {
    firstName: form1.elements.item(0).value,
    lastName: form1.elements.item(1).value,
    Email: form1.elements.item(2).value,
    Comment: form1.elements.item(3).value,
  };
  localStorage.setItem('data1', JSON.stringify(data1));
}

let formObject1 = JSON.parse(localStorage.getItem('data1'));
if (!formObject1) {
  formObject1 = {
    firstName: '',
    lastName: '',
    email1: '',
    comment1: '',
  };
  saveData1();
}

firstName.value = formObject1.firstName;
firstName.addEventListener('change', (e) => {
  formObject1.firstName = e.target.value;
  localStorage.setItem('data1', JSON.stringify(formObject1));
});
lastName.value = formObject1.lastName;
lastName.addEventListener('change', (e) => {
  formObject1.lastName = e.target.value;
  localStorage.setItem('data1', JSON.stringify(formObject1));
});
email1.value = formObject1.email1;
email1.addEventListener('change', (e) => {
  formObject1.email1 = e.target.value;
  localStorage.setItem('data1', JSON.stringify(formObject1));
});

comment1.value = formObject1.comment1;
comment1.addEventListener('change', (e) => {
  formObject1.comment1 = e.target.value;
  localStorage.setItem('data1', JSON.stringify(formObject1));
});
