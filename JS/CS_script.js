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
        // renderIcon(chr_List[z]); 

       }
       console.log( chr_List);
       
  
      


    //    console.log(url);
    //    console.log(list);
       
    //    console.log(chr_Icon);
        
       

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

        console.log("funciono");
        console.log(element);

       
        let chrHTML = `
        <div id="${element.id}" class="col-2">
        <img src="MEDIA/IMG/Iconos/${element.id}.webp" class="" alt="...">
        </div>
        `;
   
        $("#chr-selector").append(chrHTML); 
 
       
                
    

        
        
    } 
    
});