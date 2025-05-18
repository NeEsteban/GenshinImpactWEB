$(document).ready(function() {

    let chr_List = [];
    // let chr_Imgs = [];

    //lista de datos de los personajes
    let chr_Icon = [];

    //selector de botón
     let info_BTN = document.getElementById("info-btn");


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
        // renderIcon(chr_List[z]); 

       }
       console.log( chr_List);

       //cambio de link e imagen seleccionando al personaje
       //no sé optimizarlo 
       $('body').on('click', 'img.albedo', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=albedo")
            
        });
        $('body').on('click', 'img.alhaitham', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=alhaitham")
            
        });
         $('body').on('click', 'img.aloy', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=aloy")
            
        });
         $('body').on('click', 'img.amber', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=amber")
            
        });
         $('body').on('click', 'img.arataki-itto', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=arataki-itto")
            
        });
         $('body').on('click', 'img.arlecchino', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=arlecchino")
            
        });
         $('body').on('click', 'img.ayaka', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=ayaka")
            
        });
         $('body').on('click', 'img.ayato', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=ayato")
            
        });
         $('body').on('click', 'img.baizhu', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=baizhu")
            
        });
         $('body').on('click', 'img.barbara', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=barbara")
            
        });
         $('body').on('click', 'img.beidou', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=beidou")
            
        });
         $('body').on('click', 'img.bennett', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=bennett")
            
        });

      

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

            renderIcon(result);
  
        })
        .catch(function (err) {
            console.log(err);
        });

    }

    

    function renderIcon(element){
       
        let chrHTML = `
        <div class="col-9 col-lg-3 col-md-4  p-2 ">
                <img class="${element.id} chr-btn rounded-circle" src="MEDIA/IMG/Iconos/${element.id}.webp" class="" alt="...">
        </div>
        `;
        
        
        $("#chr-selector").append(chrHTML); 
 
    } 
    
    

     
    

   

    
    

});