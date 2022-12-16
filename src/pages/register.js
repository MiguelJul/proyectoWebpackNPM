export {registerForm};
import {registerUser} from "../services/users.js"

function registerForm(){

    let divLogin = document.createElement('div');
    divLogin.classList.add('formulari_centrat');
    divLogin.innerHTML = `<form action= style="border: 1px solid #ccc">
    <div class="container">
      <h1>Registrarse</h1>
      <p>Rellena el formulario para crear una contraseña.</p>
      <hr />

      <label for="email"><b>Email</b></label>
      <input
        id="signupemail"
        type="text"
        placeholder="Introduce un email Email"
        name="email"
        required
      />

      <label for="psw"><b>Contraseña</b></label>
      <input
        type="password"
        id="signuppassword"
        placeholder="Introduce una contraseña"
        name="psw"
        required
      />

      <label for="psw-repeat"><b>Repite la contraseña</b></label>
      <input
        type="password"
        placeholder="Repite la contraseña"
        name="psw-repeat"
        required
      />

      <label>
        <input
          type="checkbox"
          checked="checked"
          name="remember"
          style="margin-bottom: 15px"
        />
        Remember me
      </label>

      <p>
        Al crear la cuenta aceptas nuestros
        <a href="#" style="color: dodgerblue">Terminos & Privacidad</a>.
      </p>

      <div class="clearfix">
        <button type="button" class="cancelbtn login">Cancelar</button>
        <button type="button" class="signupbtn login" id="signupbtn">Registrarse</button>
      </div>
    </div>
  </form>`;

  divLogin.querySelector('#signupbtn').addEventListener('click', async ()=>{
    let email = divLogin.querySelector('#signupemail').value;
    let password = divLogin.querySelector('#signuppassword').value;
    let dataLogin = await registerUser(email,password);
    console.log(dataLogin);
  });

    return divLogin;

}