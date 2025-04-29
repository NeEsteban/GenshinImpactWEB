$(document).ready(function() {

    fetch("https://genshin.jmp.blue/characters")
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result);
        console.log()
        
       
    })
    .catch(function(err){
       
        
    });

        
});