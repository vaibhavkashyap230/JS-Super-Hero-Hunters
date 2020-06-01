//selecting the template
var template = document.getElementById("temp");
for(let i=0;i<localStorage.length;i++)
{
    //converting String data to JSON
    var temp = JSON.parse(localStorage.getItem(i));
    var card = template.content.cloneNode(true);
    
    //adding details to the template from the the JSON
    card.getElementById("name").innerHTML = 'Name : ' + temp.name;
    card.getElementById("img").children[0].src = temp.image.url;
    card.getElementById("race").innerHTML = 'Race : ' + temp.appearance.race;
    card.getElementById("occu").innerHTML = 'Gender : ' + temp.appearance.gender;

    //adding event listeners
    card.getElementById("fav").addEventListener('click',function (){
        card.innerHTML = null;
        localStorage.removeItem(i);
        window.location.assign('./favourites.html');
    });

    document.getElementById("outer").appendChild(card);
}

//for going back to home page
document.getElementById("home").addEventListener('click',function(){
    window.location.assign('./index.html');
});