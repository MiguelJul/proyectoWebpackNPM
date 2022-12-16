export{generarBody,carrusel2};
import hamilton from '../../imagenes/pilotos/hamilton.jpg'
import russell from '../../imagenes/pilotos/russell.jpg'
import alonso from '../../imagenes/pilotos/alonso.jpg'
import arrow from '../../imagenes/decoracion/arrow.png'

function generarBody(){
let cuerpoMenu=document.createElement("div");
cuerpoMenu.id="body";
cuerpoMenu.innerHTML=`    
<div class="div-titulo-temporada"><div class="titulo-temporada"><h1>TEMPORADA 2022/2023</h1></div></div> 
<div id="informacion-principal">
<div id="principal-circuitos-circuito" class="principal-circuitos"><h2>Conoce toda la informacion sobre los 24 gran premios de esta temporada </h2></div>
<div id="principal-circuitos-piloto" class="principal-circuitos"><h2>Conoce los 20 pilotos de F1 y las 10 escuderias que competiran por ganar<h2> </div></div>
<div class="carr-arrow-pilotos">
<h2>TODOS LOS PILOTOS:</h2>
    <img style="left:-45px" src="${arrow}"></button>
<div  class="box-shadow-carr">
<div class="carr-pilotos">
    <div class="carr-piloto">
        <img class="carr-img-pilotos" src="imagenes/pilotos/hamilton.jpg"></img>
    </div >
    <div class="carr-piloto">
        <img class="carr-img-pilotos" src="imagenes/pilotos/russell.jpg"></img>
    </div >
    <div class="carr-piloto">
        <img class="carr-img-pilotos" src="imagenes/pilotos/alonso.jpg"></img>
    </div > 
    </div>    
</div>
<img  style="transform: scaleX(-1);right:-45px" src="${arrow}"></img>
</div>
`;
return cuerpoMenu;
}
let array=["hamilton","russell","alonso","ocon","magnussen","schumacher","norris","ricciardo","zhou","bottas","perez","verstappen","stroll","vettel","leclerc","sainz","tsunoda","gasly","latifi","albon"]

function carrusel2(){
    let carrusel=document.querySelector(".carr-pilotos");
    let carruselImgIzq=document.querySelector(".carr-arrow-pilotos > img:nth-child(2)");
    let carruselImgDer=document.querySelector(".carr-arrow-pilotos > img:last-child");
    let carruselImgs;
    let array2=["hamilton","alonso"];
    let contador=0;
    let contador2;
    const avanzarDer=()=>{
        if(array2[1]!="albon"){
            carruselImgs=document.querySelectorAll(".carr-img-pilotos");
            console.log(carruselImgs);
            contador++;
            contador2=contador;
           for(let carruselImg of carruselImgs){
            console.log(array[contador2]);
            carruselImg.src=`imagenes/pilotos/${array[contador2]}.jpg`;
            console.log(carruselImg);
            contador2++;
           }
           array2[0]=array[contador];
           array2[1]=array[contador+2];
        }
    }

    const avanzarIzq=()=>{
        if(array2[0]!="hamilton"){
            carruselImgs=document.querySelectorAll(".carr-img-pilotos");
            contador--;
            contador2=contador;
           for(let carruselImg of carruselImgs){
            carruselImg.src=`imagenes/pilotos/${array[contador2]}.jpg`;
            contador2++;
           }
           array2[0]=array[contador];
           array2[1]=array[contador+2];
        }
    }

    carruselImgDer.addEventListener("click",()=>avanzarDer());
    carruselImgIzq.addEventListener("click",()=>avanzarIzq());

}
/*function carrusel(){
    let intrevalo=null;
    let step=(innerWidth * 10.875/100)+0.24747;
    let step2=(innerWidth * 10.875/100)+0.24747;
    let carrusel=document.querySelector(".carr-pilotos");
    let carruselImgIzq=document.querySelector(".carr-arrow-pilotos > img:nth-child(2)");
    let carruselImgDer=document.querySelector(".carr-arrow-pilotos > img:last-child");
    let maxScrollLeft=  carrusel.scrollWidth - carrusel.clientWidth
    document.querySelector("carr-pilotos");
    const start=()=>{
        intrevalo=setInterval(function(){
            if( carrusel.scrollLeft===maxScrollLeft){
                step= step*(-1);
                step=((innerWidth * 10.875/100)-0.752377)*(-1);
            }
            else if(carrusel.scrollLeft===0){
                step= Math.abs(step);
                step=(innerWidth * 10.875/100)+0.24747;
            }
            carrusel.scrollLeft=carrusel.scrollLeft+step;
        
        },6000)
    
    }
    const avanzarDer=()=>{
        console.log(carrusel.scrollLeft);
        console.log(maxScrollLeft);
        if( carrusel.scrollLeft!=maxScrollLeft){
            carrusel.scrollLeft=carrusel.scrollLeft+step2;
            clearInterval(intrevalo);
            start();
        }
    }

    const avanzarIzq=()=>{
        console.log(carrusel.scrollLeft);
        if(carrusel.scrollLeft!=0){
            carrusel.scrollLeft=carrusel.scrollLeft-step2+0.752377-0.24747;
            clearInterval(intrevalo);
            start();
        }
        
    
    }

    carruselImgDer.addEventListener("click",()=>avanzarDer());
    carruselImgIzq.addEventListener("click",()=>avanzarIzq());
    start();
}


<div class="carr-piloto">
<img class="carr-img-pilotos" src="imagenes/pilotos/ocon.jpg"></img>
</div >
<div class="carr-piloto">
<img  class="carr-img-pilotos" src="imagenes/pilotos/magnussen.jpg"></img>
</div >
<div class="carr-piloto">
<img class="carr-img-pilotos" src="imagenes/pilotos/schumacher.jpg"></img>
</div>
<div class="carr-piloto">
<img class="carr-img-pilotos" src="imagenes/pilotos/norris.jpg"></img>
</div >
<div class="carr-piloto">
<img class="carr-img-pilotos" src="imagenes/pilotos/ricciardo.jpg"></img>
</div >
<div class="carr-piloto">
<img class="carr-img-pilotos" src="imagenes/pilotos/zhou.jpg"></img>
</div > 
<div class="carr-piloto">
<img class="carr-img-pilotos" src="imagenes/pilotos/bottas.jpg"></img>
</div >
<div class="carr-piloto">
<img  class="carr-img-pilotos" src="imagenes/pilotos/perez.jpg"></img>
</div >
<div class="carr-piloto">
<img class="carr-img-pilotos" src="imagenes/pilotos/verstappen.jpg"></img>
</div >
<div class="carr-piloto">
<img class="carr-img-pilotos" src="imagenes/pilotos/stroll.jpg"></img>
</div >
<div class="carr-piloto">
<img class="carr-img-pilotos" src="imagenes/pilotos/vettel.jpg"></img>
</div > 
<div class="carr-piloto">
<img  class="carr-img-pilotos" src="imagenes/pilotos/leclerc.jpg"></img>
</div >
<div class="carr-piloto">
<img class="carr-img-pilotos" src="imagenes/pilotos/tsunoda.jpg"></img>
</div >
<div class="carr-piloto">
<img class="carr-img-pilotos" src="imagenes/pilotos/gasly.jpg"></img>
</div >
<div class="carr-piloto">
<img class="carr-img-pilotos" src="imagenes/pilotos/latifi.jpg"></img>
</div > 
<div class="carr-piloto">
<img class="carr-img-pilotos" src="imagenes/pilotos/albon.jpg"></img>
</div >*/