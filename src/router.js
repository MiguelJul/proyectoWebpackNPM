import { loginForm } from "./pages/login.js";
import { home } from "./pages/home.js";
import { registerForm } from "./pages/register.js";
import { loginWithToken, logout } from "./services/users.js";
import { profileForm } from "./pages/profile.js";

import {generarBody,carrusel2} from "./views/body/body.js";
import {generarPilotos} from "./views/body/pilotos";
import {generarPiloto} from "./views/body/piloto";
import {generarMenuCircuito} from "./views/body/menuCircuito";
import {generarGrafica} from "./views/body/grafica";
import {generarCircuitos} from "./views/body/circuitos";
export { route };

function route(ruta) {

  console.log(ruta);
  let main = document.querySelector("#main");

    switch (ruta) {
      case "#/":
        main.innerHTML="";
        main.append(home());
       document.querySelector("#container").className="inicio";
        carrusel2();
        break;

      case "#/login":
        main.innerHTML = "";
        main.append(loginForm());
        document.querySelector("#container").className="log";
        break;

      case "#/pilotos":
          main.innerHTML = "";
          generarPilotos();
          document.querySelector("#container").className="pilotos";
          break;

      case "#/piloto":
        main.innerHTML = "";
        document.querySelector("#container").className="piloto";
        let url=window.location.hash.split("=")[1];
        generarPiloto(url);
        break;

      case "#/statsCircuitos":
        main.innerHTML = "";
        document.querySelector("#container").className="piloto";
        generarGrafica();
        break;

      case "#/circuitos":
      main.innerHTML = "";
      document.querySelector("#container").className="pilotos";
      generarCircuitos();
      break;

      case "#/menucircuitos":
        main.innerHTML = "";
        document.querySelector("#container").className="pilotos";
        generarMenuCircuito();
        break;

      case "#/registrarse":
        main.innerHTML = "";
        main.append(registerForm());
        document.querySelector("#container").className="log";
        break;
      case "#/logout":
          logout();
          window.location.hash = "#/";
          break;
          case "#/perfil":
            main.innerHTML = "";
        main.append(profileForm());
        document.querySelector("#container").className="log";
            break;
      case "":
        window.location.hash = "#/";
        break;
        
    }


}
