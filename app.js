function login(event) {
  event.preventDefault();

  // Para pruebas: se accede con cualquier correo y contraseña
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    document.getElementById("login").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  } else {
    alert("Por favor, completa todos los campos.");
  }
}

  