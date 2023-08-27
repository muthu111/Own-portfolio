const scriptURL = 'https://script.google.com/macros/s/AKfycbwUrvxyuT-Gq--kUmW8YS9kMxA2kAM4xExeow0sXT659u3q1kPHnT7eX2k9jl5YncTQUw/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
   })