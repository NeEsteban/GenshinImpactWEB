$(document).ready(function() {

    let chr_List = [];
    // let chr_Imgs = [];

    //lista de datos de los personajes
    let chr_Icon = [];

    //selector de botón
     let info_BTN = document.getElementById("info-btn");

     //loader
      let percentage = 0;
    let deltaTime = 10;


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

       //animaciones
       $('body').on('mouseover', 'div img.chr-btn' , function(){
            $(this).css({"transform": "scale(1.1)", "cursor": "pointer"});
        });

        $('body').on('mouseleave', 'div img.chr-btn' , function(){
            $(this).css({"transform": "scale(1)"});
        });

        $('#info-btn').on('mouseover' , function(){
            $(this).css({"transform": "scale(1.1)", "cursor": "pointer"});
        });
        $('#info-btn').on('mouseleave' , function(){
            $(this).css({"transform": "scale(1)"});
        });

       //cambio de link e imagen seleccionando al personaje
       //no sé optimizarlo 
       $('body').on('click', 'img.albedo', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=albedo");

            $("#chr-img").fadeOut(999, function(){
                $("#chr-img").attr("src","https://genshin.jmp.blue/characters/albedo/gacha-splash");
            });
            IMGLoader();
 

        });
        $('body').on('click', 'img.alhaitham', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=alhaitham");

            $("#chr-img").fadeOut(999, function(){
                $("#chr-img").attr("src","MEDIA/IMG/alhaitham-gacha-splash.webp");
            });
            IMGLoader();
            
        });
         $('body').on('click', 'img.aloy', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=aloy");

             $("#chr-img").fadeOut(999, function(){
                 $("#chr-img").attr("src","https://genshin.jmp.blue/characters/aloy/gacha-splash");
            });
            IMGLoader();

            
        });
         $('body').on('click', 'img.amber', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=amber");

             $("#chr-img").fadeOut(999, function(){
                 $("#chr-img").attr("src","https://genshin.jmp.blue/characters/amber/gacha-splash");
            });
            IMGLoader();

            
        });
         $('body').on('click', 'img.arataki-itto', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=arataki-itto");

            $("#chr-img").fadeOut(999, function(){
                $("#chr-img").attr("src","https://genshin.jmp.blue/characters/arataki-itto/gacha-splash");
        
            });
            IMGLoader();

            
        });
         $('body').on('click', 'img.arlecchino', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=arlecchino");

            $("#chr-img").fadeOut(999, function(){
                $("#chr-img").attr("src","https://genshin.jmp.blue/characters/arlecchino/gacha-splash");
              
            });
            IMGLoader();

            
        });
         $('body').on('click', 'img.ayaka', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=ayaka");

            $("#chr-img").fadeOut(999, function(){
                $("#chr-img").attr("src","https://genshin.jmp.blue/characters/ayaka/gacha-splash");
            });
            IMGLoader();

            
        });
         $('body').on('click', 'img.ayato', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=ayato");

            $("#chr-img").fadeOut(999, function(){
                $("#chr-img").attr("src","https://genshin.jmp.blue/characters/ayato/gacha-splash");
            });
            IMGLoader();

            
        });
         $('body').on('click', 'img.baizhu', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=baizhu");

            $("#chr-img").fadeOut(999, function(){
                $("#chr-img").attr("src","MEDIA/IMG/baizhu-gacha-splash.webp");
            });
            IMGLoader();

            
        });
         $('body').on('click', 'img.barbara', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=barbara");

            $("#chr-img").fadeOut(999, function(){
                $("#chr-img").attr("src","https://genshin.jmp.blue/characters/barbara/gacha-splash");
            });
            IMGLoader();

            
        });
         $('body').on('click', 'img.beidou', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=beidou");

            $("#chr-img").fadeOut(999, function(){
                $("#chr-img").attr("src","https://genshin.jmp.blue/characters/beidou/gacha-splash");
            });
            IMGLoader();

            
        });
         $('body').on('click', 'img.bennett', function() {
            $("a#info-btn").attr("href", "CharacterInfo.html?id=bennett");

            $("#chr-img").fadeOut(999, function(){
                $("#chr-img").attr("src","https://genshin.jmp.blue/characters/bennett/gacha-splash");
                
            });
            IMGLoader();
            
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
        <div class="icon-cont col-9 col-md-2 col-lg-4 col-xxl-4  col-sm-2 p-2 ">
                <img class="${element.id} chr-btn rounded-circle border border-4" src="MEDIA/IMG/Iconos/${element.id}.webp" class="" alt="...">
        </div>
        `;
        
        
        $("#chr-selector").append(chrHTML); 
 
    } 


   

    //funcion para simular carga de imagener
    function IMGLoader(){
        console.log("funciono");
        
        if ( percentage < 100 ) {

            $("#loader").css('visibility', 'visible');
            $("#loader").fadeIn(333);

            percentage++;
            $(".loader-text").text(percentage + "%");
            setTimeout(IMGLoader, deltaTime);
        } else {
            $("#loader").fadeOut(500, function() {
                $("#chr-img").fadeIn(333);
                percentage = 0;
                
            });
        } 
    }

     
    

   

    
    

});