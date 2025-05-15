$(document).ready(function() {

    const urlParams = new URLSearchParams(window.location.search);
    const gameID = urlParams.get('id');

    console.log(gameID);
    
    
    fetch("https://genshin.jmp.blue/characters/" + gameID)
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        let InfoCS = result;
        console.log(InfoCS);
        renderText(InfoCS);
          

    })
    .catch(function(err){
       
        
    });

    
    function renderText(info){
        let infoChr = info;
        
        let details = `
        <div class="row">
            <div class="fw-bold">
            <p>${infoChr.title}</p>
            </div>
            <div class="">
            <p>${infoChr.description}</p>
            </div>

        </div>
        `;

        $("#main-info").append(details);

        let name = `
        <div class="row justify-content-space-between pr-5 namecard-${gameID} rounded-3">
            <div class="col">
            <img src="MEDIA/IMG/Iconos/${infoChr.id}.webp" class="p-3" alt="Icono">
            </div>
            <div class="col text-uppercase fw-bold">
            <p>${infoChr.name}</p>
            </div>
            <div class="col">
            <p>${infoChr.rarity}</p>
            </div>
        </div>
        `;

        $("#chr-namecard").append(name);



        // aquí nos gustaría poner el carruser de cartas
        let img = `
        <div class="">
            <div class="">
            <img src="https://genshin.jmp.blue/characters/${gameID}/card" class="img-fluid object-fit-cover" alt="card">
            </div>
        </div>
        `;

        $("#chsn-character-img").append(img);

    }
    



    //quitar esto, usamos iconos nuestros, tienen que tener el nombre del id y todos con el mismo formato
    //este fetch nos sirve en la otra página
    function fetchChrImg(data){
        let dataImg = data;

        fetch("https://genshin.jmp.blue/characters/" + gameID + "/list")
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            let dataImg = result;


            chr_Icon.push(Img_url + "/icon");

            renderIcon(Img_url + "/icon" , chr_data); // esto es la url de la lista que se manda para que la use el render + /lo que se necesite ej: url + "/namecard"
            //le estamos pasando en esta zona la url de la imagen y el nombre del personaje en la posicion x
            //en esta página tenemos que copiar la url y lo único que cambia es el nombre dentro de la url
            //ejemplo: https://genshin.jmp.blue/characters/${id}/namecard-background
            
            // chr_List.sort(function (a, b) {
            //     return a.id - b.id; // Ordenar por id en orden ascendente
            // });

            
        })
        .catch(function (err) {
            console.log(err);
        });

        
        
    }
});


// function renderIcon(icon , data){

//         let icon_Img = icon;
//         let icon_data = data;


//         // $("#chr-selector").empty();

//         let pokeHTML = `
//              <div id="${icon_data}" class="col-2">
//                 <img src="${icon_Img}" class="" alt="...">
//              </div>
//             `;

//         $("#chr-selector").append(pokeHTML); 

        
        
//     }



  