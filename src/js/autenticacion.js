function cerrarSesion() {
    // Aquí va la lógica de cerrar sesión
    alert("Cerrando sesión...");
    // Ejemplo: redireccionar a la página de login
    // window.location.href = "login.html";
}

const USUARIO_VALIDO = "admin";
const CONTRASENA_VALIDA = "12345";

function validarLogin() {
  const usuarioInput = document.getElementById("usuario").value.trim();
  const contrasenaInput = document.getElementById("contrasena").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // Mostrar error si campos vacíos
  if (!usuarioInput || !contrasenaInput) {
    errorMsg.textContent = "Por favor, complete todos los campos.";
    errorMsg.style.display = "block";
    return;
  }

  // Verificar usuario y contraseña
  if (usuarioInput === USUARIO_VALIDO && contrasenaInput === CONTRASENA_VALIDA) {
    window.location.href = "./src/pages/menuLibros.html"; // Redirige
  } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos.";
    errorMsg.style.display = "block";
  }
}

// Opcional: limpiar mensaje de error al escribir en los inputs
document.getElementById("usuario").addEventListener("input", () => {
  document.getElementById("errorMsg").style.display = "none";
});
document.getElementById("contrasena").addEventListener("input", () => {
  document.getElementById("errorMsg").style.display = "none";
});

function LeerAR()
{
  window.location.href = "./portada.html"; // Redirige
}