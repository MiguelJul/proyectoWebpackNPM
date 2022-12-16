export{generarPiloto};
import {getDatos} from "../../services/http";


function generarPiloto(url){
    if(!localStorage.getItem('access_token')){
        window.location.hash=("#/");
      }
      else{
        let main=document.querySelector("#main");
        getDatos('pilotos?select=*')
      .then(datos=> {  
        console.log("datos");
        let piloto;
        for (let dato of datos) {
            if(dato.id==url){
                piloto=dato;
            }
        }
        let cuerpoMenu=document.createElement("div");
        
        cuerpoMenu.classList="flex-piloto";
        cuerpoMenu.innerHTML+=`<div id="tituloPiloto"><h1>${piloto.nombre}</h1></div><div id="tablaPiloto">
                                <div id="fotoPiloto"><h1>Escuderia: ${piloto.escuderia}</h1><img src="${piloto.fotoPilotos}"></div><div id="infoPiloto"><div>Descipcion:</br>"${piloto.informacion}</div></div></div><a href="#/pilotos"><h2>Volver</h2></a>`;
         
        main.append(cuerpoMenu);
        let card;

});
}
}