// storing identity of hero
var heroName = localStorage.getItem('about');

document.getElementById('title').innerText += " " + heroName;

fetch();
//getting hero's data from the server
function fetch()
{
    var xhrRequest = new XMLHttpRequest();
    var url = 'https://superheroapi.com/api.php/2671907826386546/search/' + heroName;
    xhrRequest.open('get',url,true);
    xhrRequest.send();
    xhrRequest.onload = function(){
        var response = JSON.parse(xhrRequest.response);
        
        document.getElementById("pic").src = response.results[0].image.url;

        //adding details about power
        var power = document.getElementById("power");
        var int = document.createElement('p');
        int.innerText = "Intelligence : " + response.results[0].powerstats.intelligence;
        power.appendChild(int);
        var int = document.createElement('p');
        int.innerText = "Combat : " + response.results[0].powerstats.combat;
        power.appendChild(int);
        var int = document.createElement('p');
        int.innerText = "Power : " + response.results[0].powerstats.power;
        power.appendChild(int);
        var int = document.createElement('p');
        int.innerText = "Speed : " + response.results[0].powerstats.speed;
        power.appendChild(int);
        var int = document.createElement('p');
        int.innerText = "Strength : " + response.results[0].powerstats.strength;
        power.appendChild(int);

        //adding details about biography
        var bio = document.getElementById("bio");
        var full = document.createElement('p');
        full.innerText = "Full Name : " + response.results[0].biography['full-name']; 
        bio.appendChild(full);
        var full = document.createElement('p');
        full.innerText = "Alias : " + response.results[0].biography.aliases;
        bio.appendChild(full);
        var full = document.createElement('p');
        full.innerText = "Alignment : " + response.results[0].biography.alignment;
        bio.appendChild(full);
        var full = document.createElement('p');
        full.innerText = "Publisher : " + response.results[0].biography.publisher;
        bio.appendChild(full);
        bio.appendChild(full);
        var full = document.createElement('p');
        full.innerText = "Alter-Egos : " + response.results[0].biography['alter-egos']; 
        bio.appendChild(full);
    };
}

// for navigation to other pages

document.getElementById("home").addEventListener('click',function(){
    window.location.assign('./index.html');
});

document.getElementById("fav").addEventListener('click',function(){
    window.location.assign('./favourites.html');
});
