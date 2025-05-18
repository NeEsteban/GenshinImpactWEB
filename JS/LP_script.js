// Selector de Personajes   
let ventiImg = document.getElementById("venti_chrc");
let iansanImg = document.getElementById("iansan_chrc");
let xilonenImg = document.getElementById("xilonen_chrc");
let xianyunImg = document.getElementById("xianyun_chrc");

ventiImg.onclick = function(){
    $(main_img).fadeOut(333, function(){
      main_img.src = "MEDIA/IMG/venti-gacha-splash.webp";
    });
    $(main_img).fadeIn(333);
}

iansanImg.onclick = function(){
    $(main_img).fadeOut(333, function(){
      main_img.src = "MEDIA/IMG/iansan-gacha-splash.webp";
    });
    $(main_img).fadeIn(333);
}

xilonenImg.onclick = function(){
    $(main_img).fadeOut(333, function(){
      main_img.src = "MEDIA/IMG/xilonen-gacha-splash.webp";
    });
    $(main_img).fadeIn(333);
}

xianyunImg.onclick = function(){
    $(main_img).fadeOut(333, function(){
      main_img.src = "MEDIA/IMG/xianyun-gacha-splash.webp";
    });
    $(main_img).fadeIn(333);
}