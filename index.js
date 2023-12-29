
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        const isTop = window.scrollY < 50;
        if (isTop) {
            navbar.classList.remove('black-background');
        } else {
            navbar.classList.add('black-background');
        }
    });

  var navLinks = document.querySelectorAll('nav a');
  var sections = document.querySelectorAll('.content-section');

  function changeNavColor() {
    sections.forEach(function (section, index) {
      var top = section.offsetTop - 50; // Adjust the offset as needed

      if (window.scrollY >= top) {
        navLinks.forEach(function (navLink) {
          navLink.classList.remove('active');
        });

        navLinks[index].classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', changeNavColor);

    setTimeout(function() {
      document.getElementById("presentation").style.opacity = "1";
      document.getElementById("presentation").style.transition = "0.5s ease-in";
    }, 1000);

    setTimeout(function() {
      document.getElementById("nipun").style.opacity = "1";
      document.getElementById("nipun").style.transition = "1s ease-in";
    }, 1500);

    setTimeout(function() {
      document.getElementById("date").style.opacity = "1";
      document.getElementById("date").style.transition = "1s ease-in";
    }, 2000);

    setTimeout(function() {
      document.getElementById("handles").style.opacity = "1";
      document.getElementById("handles").style.transition = "1s ease-in";
    }, 2500);
    
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, options);

    animatedElements.forEach(element => {
        observer.observe(element);
    });

});

const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');
const links = document.querySelector('.links');

let flag=false
menu.addEventListener('click',function(){
    if(window.innerWidth < 501){
        if(flag==false){
            flag=true
            navbar.style.backgroundColor = 'black'
            links.style.display = 'flex'
            links.style.height = '100vh'
            links.style.transition='0.5s ease-in'
        }
        else{
            flag=false
            navbar.style.backgroundColor = 'transparent'
            links.style.display = 'none'
            links.style.height = 'auto'
        }
    }
})

const navLinksArray = Array.from(document.querySelectorAll('.links a'));
navLinksArray.forEach(function (link) {
    if(window.innerWidth < 501)
    {
      link.addEventListener('click', function () {
        if (link === navLinksArray[0]) {
            navbar.style.backgroundColor = 'transparent';
          }
        links.style.display = 'none'
      });
    }
  });

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    const scrollThreshold = 50;

    if (scrollPosition > scrollThreshold) {
      navbar.style.backgroundColor = 'black'; 
    } else {
      navbar.style.backgroundColor = 'transparent'; 
    }
  });

  document.getElementById('downloadCard').addEventListener('click', function() {
  
    var hiddenLink = document.createElement('a');
  
    hiddenLink.href = 'assets/NIPUN Fest Brochure.pdf'; 
    hiddenLink.download = 'Nipun Brochure 23-24.pdf'; 
    document.body.appendChild(hiddenLink);
    hiddenLink.click();
    setTimeout(function() {
      document.body.removeChild(hiddenLink);
    }, 1000);
  });
  