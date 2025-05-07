$(document).ready(function() {

    let chr_List = [];
    // let chr_Imgs = [];

    //lista de datos de los personajes
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

        console.log(list[i]);
        
 
       };

       for(let z=0; z< url.length; z++){
        fetchChrData(url[z]);
        fetchChrImg(url[z] , list[z]); 

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
            
            chr_List.push(result);

            // chr_List.sort(function (a, b) {
            //     return a.id - b.id; // Ordenar por id en orden ascendente
            // });

            chr_List.forEach(element => {
                console.log("hola");
                console.log(element.id);
                
            });

            
        })
        .catch(function (err) {
            console.log(err);
        });

    }

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

            renderIcon(Img_url + "/icon" , chr_data, link); // esto es la url de la lista que se manda para que la use el render + /lo que se necesite ej: url + "/namecard"

            
            // chr_List.sort(function (a, b) {
            //     return a.id - b.id; // Ordenar por id en orden ascendente
            // });

            
        })
        .catch(function (err) {
            console.log(err);
        });

        
    }

    function renderIcon(icon , data){

        let icon_Img = icon;
        let icon_data = data;


        // $("#chr-selector").empty();

        let pokeHTML = `
             <div id="${icon_data}" class="col-2">
                <img src="${icon_Img}" class="" alt="...">
             </div>
            `;

        $("#chr-selector").append(pokeHTML); 

        <li><a href="https://genshin.jmp.blue/characters/${id}/list/namecard">imagen slay</a>
        
        </li>
        
    } 
    
});