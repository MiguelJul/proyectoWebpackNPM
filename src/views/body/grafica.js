import {getDatos} from "../../services/http";
import Chart from 'chart.js/auto';
export{generarGrafica};

function generarGrafica(){
    if(!localStorage.getItem('access_token')){
        window.location.hash=("#/");
      }
          else{
            let main=document.querySelector("#main");
            function desordenarArray(objeto){
              return objeto.array.sort((a,b)=>b[objeto.valor]-a[objeto.valor]).slice(0,10).sort(()=> Math.random()-0.5);
            }

              function generarTitulo(){
             let div= document.createElement("div"); div.id="divGrafica"
                div.innerHTML=`<div class="div-titulo-grafica"><div class="titulo-grafica"><h1>Graficas de los 10 primeros circuitos</h1></div></div> `;
                main.append(div);
            }

            getDatos('circuitos?select=*')
          .then(datos=> {  
            generarTitulo();
            let dat=[];
            let info=[];
            let canvas=[];
            let div=[];
            let valor=["vueltas","kilometros"]
            let divGrafica=document.querySelector("#divGrafica");

            let arrayDesordenado=desordenarArray({array: datos,valor: valor[0]});
            dat[0]=arrayDesordenado.map(a=>a.vueltas);
            info[0]=arrayDesordenado.map(a=>a.nombre);
            arrayDesordenado=desordenarArray({array: datos,valor: valor[1]});
            dat[1]=arrayDesordenado.map(a=>a.kilometros);
            info[1]=arrayDesordenado.map(a=>a.nombre);
            const data=[];
            const config=[];
            let colores=["#FFC776","#ABFF4D","#9458b0","#63bfa4","#c77a71"];
            for (let i = 0; i < dat.length; i++) {
              canvas[i]=document.createElement("canvas");
              div[i]=document.createElement("div"); div[i].style.width="600px";
              div[i].innerHTML=`<h2>Circuitos con mas ${valor[i]}<h2>`
              div[i].append(canvas[i]);
              data[i]= {
                labels: info[i],
                datasets: [{
                  label: 'My First Dataset',
                  data: dat[i],
                  backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 205, 86)',
                    'rgb(201, 203, 207)',
                    'rgb(54, 162, 235)',
                    ...colores
                  ]
                }]
              };
              config[i] = {
                type: 'polarArea',
                data: data[i],
                options: {}
              };
              canvas[i].style.height="10px";
              new Chart(canvas[i],config[i]); 
              divGrafica.append(div[i]);
            }    
            let volver=document.createElement("div");  volver.id="volverGraf";
            volver.innerHTML=`<a href="#/menucircuitos">Volver</a>`;
            divGrafica.append(volver);                       
        });
          }
}
