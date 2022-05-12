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
// ON CLICK GO TO CLOCKS PAGE
document.getElementById("myClocks").addEventListener("click", function(){
  window.location.href = 'activeClocks.html'
});

// GET CITY INPUT --------
var input = document.getElementById('input');

document.getElementById("search").addEventListener("click", function(){
    apiRequest(input.value);
});

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        apiRequest(input.value);
    }
});

// GET TIME FROM API -----

function apiRequest(city)
{
    var url = 'https://worldtimeapi.org/api/timezone/' + city; 
    fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      addOrShow(data.datetime)
    })
    .catch((err) => {
      alert("Sorry we couldn't found your data. Enter a valid input...")
    })
}

// WORK WITH RETRIEVED DATA

function addOrShow(time)    // time format 2022-05-09T06:20:25.387589+00:00
{
    document.getElementById("add").style.visibility = "visible";
    time = time.slice(11, 19)
    var clock = document.getElementById('clock');
    clock.innerHTML = '<h2 id = "clock">'+ time+1 + '</h2>'
}

// add to chrome storage when add timers pressed
document.getElementById("add").addEventListener("click", function()
{
  storageLength = chrome.storage.sync.get(function(result)
  {
      i = (Object.keys(result).length);
      chrome.storage.sync.set({[i] : input.value});
      alert("Clock added");
  });
})


