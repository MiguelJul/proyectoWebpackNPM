export{generarMenuCircuito};

function generarMenuCircuito(){
    if(!localStorage.getItem('access_token')){
        window.location.hash=("#/");
      }
      else{
        let main=document.querySelector("#main");
        let cuerpoMenu=document.createElement("div");
        
        cuerpoMenu.classList="flex-menuCircuito";
        cuerpoMenu.innerHTML+=`<div class="div-titulo-menuCircuito"><div class="titulo-menuCircuito"><h1>Circuitos de esta temporada</h1></div></div>
        <div class="flex-row">
        <a><div id="menu-circuitos-circuito" class="menu-circuitos"><h2>Informacion de los distintos circuitos de esta temporada</h2></div></a>
        <a><div id="menu-circuitos-stats" class="menu-circuitos"><h2>Graficas sobre las características de los circuitos</h2> </div></div></a>
      </div>`;
         
        main.append(cuerpoMenu);

        let circuito=document.querySelector("#menu-circuitos-circuito");
        let stats=document.querySelector("#menu-circuitos-stats");

        circuito.addEventListener("click",()=>{
          window.location.hash = `#/circuitos`;        
      });
      stats.addEventListener("click",()=>{
        window.location.hash = `#/statsCircuitos`;        
    });
        
}
}