const input = document.getElementById('input')      // get input from user
input.addEventListener('keyup',function(event) {
    if(event.code == 'Enter')
    {
        event.preventDefault();
        console.log(input.value)
    }
}) 