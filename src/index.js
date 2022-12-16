import './estilos/styles.scss'
import './estilos/pagina-principal/principal.css'
import './estilos/estilos.css'
import './estilos/pagina-principal/registro.css'
import {route} from "./router.js"
import * as bootstrap from 'bootstrap'
import './estilos/pagina-principal/menu.css'
import './estilos/pagina-principal/pilotos.css'
import './estilos/pagina-principal/circuitos.css'
import {generarMenu} from "./views/head/menu.js"; 
import{getInfoProf} from "./services/users.js"

(() => {
 document.addEventListener("DOMContentLoaded",paginaCompleta);
 function paginaCompleta(){
let body=document.querySelector("#container");
    let cabecera=document.createElement("div");
    cabecera.id="cabecera";
    body.append(cabecera);
    getInfoProf();
    let mainWindow = document.createElement("div");
    mainWindow.id = "main";
    container.append(mainWindow);
    route(window.location.hash.split("?")[0]);

    window.addEventListener('hashchange',function hasChanged(){
        route(window.location.hash.split("?")[0]);
      });
 }
})();