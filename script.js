let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
       let top = window.scrollY;
       let offset = sec.offsetTop - 150;
       let height = sec.offsetHeight;
       let id = sec.getAttribute('id');
       
       if(top >= offset && top < offset + height){
        navlinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
        });
       };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

 ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, #dynamic-skills', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


 const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer', 'Student','Model'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });

// Fetch and display skills from data.json
fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const skillsContainer = document.getElementById('dynamic-skills');

    const title = document.createElement('h2');
    title.className = 'heading';
    title.innerHTML = 'More <span>Skills & Hobbies</span>';
    skillsContainer.appendChild(title);

    const cardContainer = document.createElement('div');
    cardContainer.className = 'services-container';

    data.skills.forEach(skill => {
      const box = document.createElement('div');
      box.className = 'services-box';
      box.innerHTML = `
        <i class='bx bxs-star'></i>
        <h3>${skill}</h3>
        <p>I enjoy practicing and improving my skills in ${skill.toLowerCase()}.</p>
      `;
      cardContainer.appendChild(box);
    });

    skillsContainer.appendChild(cardContainer);
  })
  .catch(error => {
    console.error('Error loading data:', error);
  });



