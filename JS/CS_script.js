$(document).ready(function(){

    let chrList = [];

    fetch("https://genshin.jmp.blue/characters")
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result);

        let chrResults = result;
        let list = [];
        let url = [];

        for (let i = 0; i < 12; i++) {
            list[i] = chrResults[i];
    
            url[i] = `https://genshin.jmp.blue/characters/${list[i]}`;
            
        };
    
        console.log(list);
        console.log(url);   

        renderChr();
        
    })
    .catch(function(err){     
        
    });

    function renderChr(){
        $("#chr-selector").empty();
        
        list.forEach(function(){
            console.log("hola");

            let pokeHTML = `
            <div>

            </div>
            `;

            $("#chr-selector").append(pokeHTML);
        }); 
    }

}); 
