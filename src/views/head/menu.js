export{generarMenu};
  import { data } from 'autoprefixer';
import F1logo from '../../imagenes/decoracion/F1.png'
import {getProfile,getInfoProf} from '../../services/users'
function generarMenu(dataProfile){
  let cabecera=document.querySelector("#cabecera");
   let menu=document.createElement("div");
    menu.innerHTML=`<nav class="navbar" style="background-color: #ef0000;">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto" style="color:white;">
        <li class="nav-item" ><a href="#" class="nav-link link-light px-2 active" aria-current="page">Inicio</a></li>
        <li class="nav-item"><a href="#/login" class="nav-link link-light px-2">Login</a></li>
        <li class="nav-item"><a href="#/pilotos" class="nav-link link-light px-2">Pilotos</a></li>
        <li class="nav-item"><a href="#/menucircuitos" class="nav-link link-light px-2">Circuitos</a></li>
        <li class="nav-item"><a href="#/logout" class="nav-link link-light px-2">Desloguearse</a></li>
      </ul>
      <ul style="width:40%" class="nav ul-wrap">
      <li><a href="#/registrarse" class="nav-link link-light px-2">Registrarse</a></li>
      <li style="width:30%"><a href="#/perfil" class="nav-link link-light px-2">Perfil<span id="perfil-menu">${dataProfile.username?dataProfile.username:"User#2639"}<img class="" src="${dataProfile.avatar_blob ? dataProfile.avatar_blob : ""}"/></span></a></li>
      </ul>
    </div>
  </nav>
  <header class="py-3 mb-4 border-bottom" id="cabecera2">
    <div class="container d-flex flex-wrap justify-content-center">
      <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
        <img src="${F1logo}" width="50px" height="25x">
        <span class="fs-4">Formula 1</span>
      </a>
      <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
        <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
      </form>
    </div>
  </header>`;
  cabecera.innerHTML="";
  cabecera.append(menu);
}
/*menu.innerHTML=`<nav class="navba" style="background-color: #ef0000;">
<div class=" m-flex ">
  <ul class="nav " style="color:white;">
    <li class="nav-item" ><a href="#" class="nav-link link-light px-2 active" aria-current="page">Inicio</a></li>
    <li class="nav-item"><a href="#/login" class="nav-link link-light px-2">Login</a></li>
    <li class="nav-item"><a href="#" class="nav-link link-light px-2">Pricing</a></li>
    <li class="nav-item"><a href="#" class="nav-link link-light px-2">FAQs</a></li>
    <li class="nav-item"><a href="#/logout" class="nav-link link-light px-2">Desloguearse</a></li>
  </ul>
  <ul class="">
  <li><a href="#/registrarse" class="nav-link link-light px-2">Registrarse</a></li>
  <li><a href="#/perfil" class="nav-link link-light px-2">Perfil <span id="perfil-menu" >${dataProfile.username}<img class="" src="${dataProfile.avatar_blob ? dataProfile.avatar_blob : ""}"/></span></a></li>
  </ul>
</div>
</nav>
<header class="py-3 mb-4 border-bottom" id="cabecera2">
<div class="container d-flex flex-wrap justify-content-center">
  <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
    <img src="${F1logo}" width="50px" height="25x">
    <span class="fs-4">Formula 1</span>
  </a>
  <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
    <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
  </form>
</div>
</header>`;*/