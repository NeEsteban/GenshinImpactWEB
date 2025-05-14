$(document).ready(function() {

    //quitar esto, usamos iconos nuestros, tienen que tener el nombre del id y todos con el mismo formato
    //este fetch nos sirve en la otra página
    function fetchChrImg(url , url_Data){
        let Img_url = url;
        let chr_data = url_Data;
        let link = url;

        fetch(Img_url + "/list")
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
           
            // chr_Imgs.push(result);

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