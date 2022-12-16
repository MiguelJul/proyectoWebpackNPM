export {home};
  import { getData } from "../services/http.js";
  import { generarBody } from "../views/body/body.js";
  import F1 from  "../imagenes/decoracion/F1.png";
//import {generateGraphCard} from "../views/cards.js"
  
function home(){
  let main = document.querySelector("#main");
  let container = document.querySelector("#container");
  
    if(localStorage.getItem('access_token')){
      getData('graphs',localStorage.getItem('access_token'))
    }
    else{
      
      let div=document.createElement("div");
      div.id="registro";
      div.innerHTML=`<div id="registroInformacion"><div id="informacionFormula1"><img src=${F1}>Formula 1</div><h2>Primero debes iniciar sesion para poder navegar</h2>
                      <div><a id="eliminarPestaña">Cerrar pestaña</a><a id="informacionSesion">Iniciar Sesion</a></div></div>`
                      ;
     
     
      container.append(div);
      let pestaña=document.getElementById("eliminarPestaña");
      let sesion=document.getElementById("informacionSesion");
      
      pestaña.addEventListener("click",()=>{
        div.remove();
      });

      sesion.addEventListener("click",()=>{
        window.location.hash = "#/login";
        div.remove();
      });
    }
      return generarBody();
}