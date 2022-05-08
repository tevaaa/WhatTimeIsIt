var datalist = document.getElementById('select');

// GET ALL CITY LIST -----
fetch('../json/timezone.json')
  .then(response => response.json())
  .then(data => readTimeZone(data))
  .catch(error => console.log(error));

function readTimeZone (data)                               
{
    for(i in data)
    {
        datalist.innerHTML += '<option value= '+ data[i] + '>'+ data[i] +'</option>';
    }
}

// -----------------------

document.getElementById("search").addEventListener("click", function(){
    value = input.value;
    console.log(value);
});


