import { route } from "../router.js";
import { getFileRequest } from "../services/http.js";
import { getProfile, updateProfile } from "../services/users.js";

export {profileForm};



function profileForm(){

   //let dataProfile = JSON.parse(localStorage.getItem('dataProfile'));
   let divLogin = document.createElement('div');
   divLogin.classList.add('formulari_centrat');

   if(!localStorage.getItem('access_token')){
    window.location.hash = "#/";
   }else{
   getProfile().then(dataProfile=> {
    dataProfile = dataProfile[0];
    console.log(dataProfile);
   
    divLogin.innerHTML = `<form action="action_page.php" id="formProfile" style="border: 1px solid #ccc">
    <div class="container">
      <h1>Perfil</h1>
      
      <hr />

      <label for="email"><b>Email</b></label>
      <input
        id="signupemail"
        type="text"
        placeholder="Introduce Email"
        name="email"
        required
        readonly
        value="${localStorage.getItem("mail")}"
      />

      <label for="psw"><b>Contraseña</b></label>
      <input
        type="password"
        id="signuppassword"
        placeholder="Introduce contraseña"
        name="psw"
        required
      />

      <label for="psw-repeat"><b>Repite Contraseña</b></label>
      <input
        type="password"
        placeholder="Repite Contraseña"
        name="psw-repeat"
        required
      />
      <button type="button" class="signupbtn login" id="chgpass">Cambia Contraseña</button>

      <label for="username"><b>Usuario</b></label>
      <input
        type="text"
        placeholder="user name"
        name="username"
        id = "username"
        value = "${dataProfile.username}"
      />

      <label for="fullname"><b>Nombre completo</b></label>
      <input
        type="text"
        placeholder="Nombre completo"
        name="full_name"
        value = "${dataProfile.full_name}"
      />


      <label for="web"><b>Pagina Web</b></label>
      <input
        type="text"
        placeholder="web"
        name="website"
        value = "${dataProfile.website}"
      />
  <div>
      <img class="avatar_profile" id="avatar_prev" src="${dataProfile.avatar_blob ? dataProfile.avatar_blob : ""}"/>
</div>
      <label for="avatar"><b>Avatar</b></label>
      <input
        type="file"
        id="avatar"
        name="avatar"
      />
  




      <div class="clearfix">

        <button type="button" class="signupbtn login" id="update">Update Profile</button>
      </div>
    </div>
  </form>`;

  divLogin.querySelector('#update').addEventListener('click', async ()=>{

    let formData = new FormData(divLogin.querySelector("#formProfile"));
    let {username, full_name, website, avatar} = Object.fromEntries(formData);
    console.log({username, full_name, website, avatar});

    let dataUpdate = await updateProfile({username,full_name,website, avatar});
    
    route("#/profile");


  });

  function encodeImageFileAsURL(element) {
    let file = element.files[0];
    if(file) {
        divLogin.querySelector('#avatar_prev').src = URL.createObjectURL(file);
    }
   }
   

  divLogin.querySelector('#avatar').addEventListener('change',function () {encodeImageFileAsURL(this)})


  
   });}
   
  

   return divLogin;

}