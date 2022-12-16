export{generarPilotos};
import {getDatos} from "../../services/http";


function generarPilotos(){
    if(!localStorage.getItem('access_token')){
        window.location.hash=("#/");
      }
      else{
        let main=document.querySelector("#main");
        getDatos('pilotos?select=*')
      .then(datos=> {  
        let cuerpoMenu=document.createElement("div");
        for (let dato of datos) {
        cuerpoMenu.classList="flex-pilotos";
        cuerpoMenu.innerHTML+=`<a src="#/piloto?id=${dato.id}"><div class="card ${dato.id}"><img src="${dato.fotoPilotos}">
            <h2 class="titulo-piloto">${dato.nombre}</h2></div></a>`;
         
        }
        main.append(cuerpoMenu);
        let card;
       for (let index = 1; index < datos.length+1; index++) {
         card= document.getElementsByClassName(index);
        card[0].addEventListener("click",()=>{
          window.location.hash = `#/piloto?id=${index}`;        
      });
        
       }
         
});

}
}