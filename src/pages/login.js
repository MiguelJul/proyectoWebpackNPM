export {loginForm};
import {loginUser, logout, forgotPassword,getInfoProf} from "../services/users.js"

function loginForm(){

    let divLogin = document.createElement('div');
    divLogin.classList.add('formulari_centrat');

    divLogin.innerHTML = `  <form action="action_page.php" method="post">


    <div class="container">
      <label for="uname"><b>Usuario</b></label>
      <input
        type="text"
        placeholder="Introduce nombre usuario"
        name="uname"
        required
        id="loginemail"
      />
      <p id="errors"></p>

      <label for="psw"><b>Contraseña</b></label>
      <input
        type="password"
        placeholder="Introduce contraseña"
        name="psw"
        required
        id="loginpassword"
      />

      <button class="login" type="button" id="loginbutton">Iniciar sesion</button>
      <label>
        <input type="checkbox" checked="checked" name="remember" />
        Recordarme
      </label>
    </div>

    <div class="container">
      <button type="button" class="login cancelbtn" id="logoutbtn">Cerrar Sesion</button>
      <span class="psw">Has olvidado la <a href="#" id="forgot">contraseña?</a></span>
    </div>
  </form>`;

  divLogin.querySelector('#loginbutton').addEventListener('click', async ()=>{
    let email = divLogin.querySelector('#loginemail').value;
    let password = divLogin.querySelector('#loginpassword').value;
    loginUser(email,password).then(status => 
      {
       if(status.success){
        getInfoProf();
        window.location.hash = '#/';
       } 
       else {
        divLogin.querySelector('#errors').innerHTML = status.errorText;
       }
      });
    
  });

  divLogin.querySelector('#logoutbtn').addEventListener('click',()=>{
    logout();
    window.location.hash = "#/";
  });

  divLogin.querySelector('#forgot').addEventListener('click',(event)=>{
    event.preventDefault();
    let email = divLogin.querySelector('#loginemail').value;
    forgotPassword(email);
    event.target.parentElement.append(' Has recibido un correo')
  });


    return divLogin;

}