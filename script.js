let selection;
const allChoices = document.querySelectorAll('.circle');
for (let i = 0; i < allChoices.length; i++) {
    allChoices[i].addEventListener('click',function(event) {
      var prevRadio = document.querySelector('.circle-clicked');
      if(prevRadio) prevRadio.classList.remove('circle-clicked');
      event.target.classList.add("circle-clicked"); 
     });
    }