let selection;
const pre_form =document.getElementById('pre-form')
console.log(selection)
const allChoices = document.querySelectorAll('.circle');
for (let i = 0; i < allChoices.length; i++) {
    allChoices[i].addEventListener('click',function(event) {
      var prevRadio = document.querySelector('.circle-clicked');
      if(prevRadio) prevRadio.classList.remove('circle-clicked');
      event.target.classList.add("circle-clicked"); 
     selection = event.target.innerHTML;
     console.log(selection)
     });
    }



    function validateMyForm(){
      if(selection===undefined){
        alert('Please select a rating!')
        return false
    
    } 
  }