const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');
const links = document.querySelector('.links');

let flag=false
menu.addEventListener('click',function(){
    if(window.innerWidth < 501){
        if(flag==false){
            flag=true
            links.style.display = 'flex'
            links.style.height = '100vh'
            links.style.transition='0.5s ease-in'
        }
        else{
            flag=false
            links.style.display = 'none'
            links.style.height = 'auto'
        }
    }
})

document.addEventListener("DOMContentLoaded", function() {
    animateElement = document.getElementById('animate')
    setTimeout(function(){
      animateElement.style.opacity = '1'  
      animateElement.style.transition = '0.5s ease-in'
    },500)
});

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  }

  window.onscroll = function() {
    var button = document.getElementById('floatingButton');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = 'flex';
    } else {
      button.style.display = 'none';
    }
  };

  let teamSection = document.getElementById('teams')
  
  fetch('teams.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(member => {
      const teams = document.getElementById('teams') 
      const card = document.createElement('div');
      const cardImageContainer = document.createElement('div')
      const cardImage = document.createElement('img')
      const cardName = document.createElement('h3')
      const cardPosition = document.createElement('p')

      card.classList.add('team-card');
      card.classList.add('card')
      cardImageContainer.classList.add('cardImage')
      cardName.classList.add('cardName')
      cardPosition.classList.add('cardPosition')

      cardImage.src = `${member.image}`
      cardImage.alt = `${member.name}`
      cardName.innerText = `${member.name}`
      cardPosition.innerText = `${member.position}`


      teams.appendChild(card);
      card.appendChild(cardImageContainer)
      cardImageContainer.appendChild(cardImage)
      card.appendChild(cardName)
      card.appendChild(cardPosition)
    });
  })

