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

document.getElementById('downloadLink').addEventListener('click', function (event) {
    event.preventDefault();

    var downloadLink = document.getElementById('downloadLink');
    var brochurePath = downloadLink.getAttribute('href');

    var tempLink = document.createElement('a');
    tempLink.style.display = 'none';
    tempLink.href = brochurePath;
    tempLink.setAttribute('download', 'Nipun Brochure 23-24.pdf');
    document.body.appendChild(tempLink);
    tempLink.click();

    document.body.removeChild(tempLink);
});

document.addEventListener("DOMContentLoaded", function() {
    animateElement = document.getElementById('animate')
    setTimeout(function(){
      animateElement.style.opacity = '1'  
      animateElement.style.transition = '0.5s ease-in'
    },500)
});



