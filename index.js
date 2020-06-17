// adding event listener for any change
document.getElementsByTagName('input')[0].addEventListener('change', search);

//functio to search any changes to text-box
function search()
{
    var remove = document.getElementsByClassName("main");
    for(let i=0;i<remove.length;)
    {
        remove[i].remove();
    }

    var name = document.getElementsByTagName("input")[0].value;
    if(name.length==0)
    {
        window.alert("Can't search Blank");
        return;
    }

    // Call to the server
    document.getElementById("waiting").innerText = 'Waiting for xhrRequest.';
    var xhrRequest = new XMLHttpRequest();
    var url = 'https://superheroapi.com/api.php/2671907826386546/search/' + name;
    xhrRequest.open('get',url,true);
    xhrRequest.send();
    xhrRequest.onload = function(){
        var response = JSON.parse(xhrRequest.response);

        document.getElementById("waiting").innerText = null;
        var size = response.results.length;
        var template = document.getElementById("temp");
        for(let i=0;i<size;i++)
        {
            //adding data to template from the response
            var card = template.content.cloneNode(true);
            card.getElementById("name").innerHTML = 'Name : ' + response.results[i].name;
            card.getElementById("img").children[0].src = response.results[i].image.url;
            card.getElementById("race").innerHTML = 'Race : ' + response.results[i].appearance.race;
            card.getElementById("occu").innerHTML = 'Gender : ' + response.results[i].appearance.gender;

            //adding event listeners to all the data-fields
            card.getElementById("name").addEventListener('click',function(){
                localStorage.setItem('about',response.results[i].name);
                window.location.assign('./about.html');
            });
            card.getElementById("img").children[0].addEventListener('click',function(){
                localStorage.setItem('about',response.results[i].name);
                window.location.assign('./about.html');
            });
            card.getElementById("race").addEventListener('click',function(){
                localStorage.setItem('about',response.results[i].name);
                window.location.assign('./about.html');
            });
            card.getElementById("occu").addEventListener('click',function(){
                localStorage.setItem('about',response.results[i].name);
                window.location.assign('./about.html');
            });

            //adding card to favourites
            card.getElementById("fav").children[0].addEventListener('click',function(){
                var index = localStorage.length;
                var data = JSON.stringify(response.results[i]);
                localStorage.setItem(index,data);
            });

            document.getElementById("outer").appendChild(card);
        }
    };
}

//to visit the favourites page
document.getElementById("fav_button").addEventListener('click',()=>{
    window.location.assign('./favourites.html');
});
