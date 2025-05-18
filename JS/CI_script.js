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
            <div class="title fw-bold">
            <p>${infoChr.title}</p>
            </div>
            <div class="">
            <p>${infoChr.description}</p>
            </div>

        </div>
        `;

        $("#main-info").append(details);

        let name_4 = `
        <div class="row justify-content-between align-items-center namecard-${gameID} rounded-3 h-100">
            <div class="row col-6 align-items-center h-100">
                <div class="col-3 h-100">
                    <img src="MEDIA/IMG/Iconos/${infoChr.id}.webp" class="p-2 h-100 align-items-center rounded-circle" alt="Icono">
                </div>
                <div class="col-6 text-uppercase fw-bold">
                    <p class=" align-items-center text-start  p-0 m-0">${infoChr.name}</p>
                </div>
            </div>
            <div class="row col-5 align-items-center">
                <div class="row col p-0">
                <div class="col text-end p-0">
                    <img src="MEDIA/IMG/Star_rarity.svg" class="star-rarity">
                    <img src="MEDIA/IMG/Star_rarity.svg" class="star-rarity">
                    <img src="MEDIA/IMG/Star_rarity.svg" class="star-rarity">
                    <img src="MEDIA/IMG/Star_rarity.svg" class="star-rarity">
                    </div>
                </div>  
            </div>   
        </div>
        `;

        let name_5 = `
        <div class="row justify-content-between  align-items-center namecard-${gameID} rounded-3 h-100">
            <div class="row col-6 align-items-center h-100">
                <div class="col-3 h-100">
                    <img src="MEDIA/IMG/Iconos/${infoChr.id}.webp" class="p-2 h-100 align-items-center rounded-circle" alt="Icono">
                </div>
                <div class="col-9 text-uppercase fw-bold">
                    <p class=" align-items-center text-start p-0 m-0">${infoChr.name}</p>
                </div>
            </div>
            <div class="row col-6 align-items-center">
                <div class="row col p-0">
                    <div class="col text-end p-0">
                    <img src="MEDIA/IMG/Star_rarity.svg" class="star-rarity">
                    <img src="MEDIA/IMG/Star_rarity.svg" class="star-rarity">
                    <img src="MEDIA/IMG/Star_rarity.svg" class="star-rarity">
                    <img src="MEDIA/IMG/Star_rarity.svg" class="star-rarity">
                    <img src="MEDIA/IMG/Star_rarity.svg" class="star-rarity">
                    </div>
                </div>  
            </div>   
        </div>
        `;

        if(infoChr.rarity>4){
            $("#chr-namecard").append(name_5);
        }else{
            $("#chr-namecard").append(name_4)
        }
        
        let nation =`
            <p class="m-0 pt-4">${infoChr.nation}</p>
            <img src="MEDIA/IMG/Naciones/${infoChr.nation}.png" id="nation_img" class=" h-75 w-75" alt="Nation">
        `;

        $("#nation-container").append(nation);

        let weapon =`
        <p class="m-0 pt-4">${infoChr.weapon}</p>
            <img src="MEDIA/IMG/Armas/${infoChr.weapon}.png" id="weapon_img" class=" h-75 w-75" alt="Weapon">
        `;

        $("#weapon-container").append(weapon);

        let vision =`
        <p class="m-0 pt-4">${infoChr.vision}</p>
        <img src="MEDIA/IMG/Visiones/${infoChr.vision}.png" id="vision_img" class=" h-75 w-75" alt="Vision">
        `;

        $("#vision-container").append(vision);

        // aquí nos gustaría poner el carruser de cartas
        let img = `
            <img src="https://genshin.jmp.blue/characters/${gameID}/card" class="cardimg col-12" alt="card">
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



  