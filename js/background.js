var div = document.getElementById("clocksList");
console.log(div.innerHTML);
function getTime(city)
{
    var url = 'https://worldtimeapi.org/api/timezone/' + city; 
    fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      var time = data.datetime.slice(11,19);
      return time;
    })
    .catch((err) => {
      alert("Sorry we couldn't found your data. Enter a valid input...")
    })
}
// GET STORED TIMERS
chrome.storage.sync.get(function(result){
    for(i = 0; i < Object.keys(result).length; i ++)
    {
        div.innerHTML += '<h2 id = "clock'+i +'">'+'</h2>'  // create a h2 with clock +i id for each stored clocks
        console.log(result[i]);
        var intervalId = window.setInterval(function(){
           // printTimer(chrome.storage.sync.get([i]),i);                             // cal func each second
          }, 1000);

    }
});

// PRINT TIMERS

function printTimer(city,id)
{
    var clock = document.getElementById("clock"+id);
    time = getTime(city);
    clock.innerHTML = '<h2 id = "clock'+i +'">'+ time +'</h2>';
}