// Selector de Personajes   
let ventiImg = document.getElementById("venti_chrc");
let ningguangImg = document.getElementById("ningguang_chrc");
let tighnariImg = document.getElementById("tighnari_chrc");
let sigewinneImg = document.getElementById("sigewinne_chrc");

ventiImg.onclick = function(){
    $(main_img).fadeOut(333, function(){
      main_img.src = "MEDIA/IMG/IconosLP/venti_chr.png";
    });
    $(main_img).fadeIn(333);
}

ningguangImg.onclick = function(){
    $(main_img).fadeOut(333, function(){
      main_img.src = "MEDIA/IMG/IconosLP/ningguang_chr.png";
    });
    $(main_img).fadeIn(333);
}

tighnariImg.onclick = function(){
    $(main_img).fadeOut(333, function(){
      main_img.src = "MEDIA/IMG/IconosLP/tignari_chr.png";
    });
    $(main_img).fadeIn(333);
}

sigewinneImg.onclick = function(){
    $(main_img).fadeOut(333, function(){
      main_img.src = "MEDIA/IMG/IconosLP/sigewinne_chr.png";
    });
    $(main_img).fadeIn(333);
}