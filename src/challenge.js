let isRegistered, registerUserName, registerPassword;

const wishesToRegister = confirm(
  "Bienvenido al sitio haz click en OK para registrarte"
);

do {
  if (wishesToRegister) {
    if (!registerUserName) {
      registerUserName = prompt("Ingresa tu nombre de usuario");
    }
    if (registerUserName.length >= 3) {
      registerUserName = registerUserName.toLowerCase();
      registerPassword = prompt("Ingresa tu password");
      if (registerPassword.length >= 6) {
        alert("El registro se completo exitosamente");
        isRegistered = true;
      } else {
        alert("El password tiene que tener por lo menos seis caracteres ");
        registerPassword = null;
      }
    } else {
      alert("El nombre de usuario tiene que tener minimo tres caracteres");
    }
  } else {
    alert("Ok, te esperamos cuando gustes");
  }
} while (wishesToRegister && (!registerPassword || !registerUserName));

//LOGIN
let loginPassword, loginUserName;
if (isRegistered) {
  let wishesToLogin = confirm("Haz Click en ok para iniciar sesion");
  do {
    if (wishesToLogin) {
      loginUserName = prompt("Ingresa tu nombre de usuario");
      if (loginUserName != null) {
        loginUserName = loginUserName.toLowerCase();
        loginPassword = prompt("Ingresa tu password");
        if (loginPassword === null) {
          wishesToLogin = false;
        } else if (
          loginUserName === registerUserName &&
          loginPassword === registerPassword
        ) {
          alert("Login Exitoso!");
        } else {
          alert("Alguno de los datos es incorrecto");
          loginPassword = null;
          loginUserName = null;
        }
      } else {
        wishesToLogin = false;
      }
    } else {
      alert("Vuelve cuando gustes");
    }
  } while (wishesToLogin && (!loginUserName || !loginPassword));
}

//Volver a pedir dato en caso de error
