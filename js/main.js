var numimg = 1;

function alternarimg() {
    let capa = null;
    capa = document.getElementById('capa');

    if (numimg == 1) {
        capa.src = 'img/ju.png';
        numimg = 2;
    }else{

        capa.src = 'img/jooj.png';
        numimg = 1;
    }

    console.log(numimg);

    
}

function alternarAutomatico() {
    window.setInterval(()=>{
        alternarimg();
    }, 500);
}
