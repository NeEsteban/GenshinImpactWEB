$(document).ready(function() {

    let chr_List = [];
    // let chr_Imgs = [];
    let chr_Icon = [];

    fetch("https://genshin.jmp.blue/characters")
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        
        let chrResults = result;
        let list = [];
        let url = [];
        
       for (let i = 0; i < 12; i++) {
        list[i] = chrResults[i];

        //conseguir los datos de los personajes
        url[i] = `https://genshin.jmp.blue/characters/${list[i]}`;
 
       };

       for(let z=0; z< url.length; z++){
        fetchChrData(url[z]);
        fetchChrImg(url[z]); 

        //funciona a medias
        renderIcon(chr_Icon[z]);
       }

 
       console.log(url);
       console.log(list);
       console.log(chr_List);
       console.log(chr_Icon);
        
       

    })
    .catch(function(err){
       
        
    });

    function fetchChrData(url){
        let chr_url = url;

        fetch(chr_url)
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            // console.log(pokemonDetails);
            // Insertamos el primer pokemon (y sus datos) en el array sortedPokemon
            chr_List.push(result);
            // chr_List.sort(function (a, b) {
            //     return a.id - b.id; // Ordenar por id en orden ascendente
            // });

            // renderPokemonCard();
        })
        .catch(function (err) {
            console.log(err);
        });

    }

    function fetchChrImg(url){
        let Img_url = url;

        fetch(Img_url + "/list")
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
           
            // chr_Imgs.push(result);

            chr_Icon.push(Img_url + "/icon");


            // chr_List.sort(function (a, b) {
            //     return a.id - b.id; // Ordenar por id en orden ascendente
            // });

            
        })
        .catch(function (err) {
            console.log(err);
        });

        
    }

    function renderIcon(chr_Icon){

        let icon_Img = chr_Icon;
        $("#chr-selector").empty();

            let pokeHTML = `
                    <div class="col-2">
                            <img src="${icon_Img}" class="" alt="...">
                    </div>
            `;

            $("#chr-selector").append(pokeHTML); 
        
    } 
    
});