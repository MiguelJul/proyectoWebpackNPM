export{generarCircuitos};
import {getDatos} from "../../services/http";


function generarCircuitos(){
    if(!localStorage.getItem('access_token')){
        window.location.hash=("#/");
      }
      else{
        let main=document.querySelector("#main");
        getDatos('circuitos?select=*')
      .then(datos=> {  
        let cuerpoMenu=document.createElement("div");
        for (let dato of datos) {
        cuerpoMenu.classList="flex-pilotos";
        cuerpoMenu.innerHTML+=`<div class="card"><img src="${dato.fotoCircuitos}">
            <h2 class="titulo-piloto">${dato.nombre}</h2></div>`;
         
        }
        main.append(cuerpoMenu);
});

}
}