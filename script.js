let selection;
const pre_form = document.getElementById('pre-form')
const post_form = document.getElementById('post-form')
const special_words = document.getElementById('selected-wording')
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
    console.log(selection)



    function validateMyForm(){
      if(selection===undefined){
        alert('Please select a rating!')
       return false
    
    } else if(selection){
      pre_form.style.display='none'
      post_form.style.display='flex'
      special_words.innerHTML=`You selected ${selection} out of 5`
      console.log('ha ha')
    }
  }