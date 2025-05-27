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

function logout() {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("login").style.display = "block";

  // Limpiar campos (opcional)
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}


function openPreview(url) {
  document.getElementById('previewFrame').src = url;
  document.getElementById('goToSite').href = url;
  document.getElementById('previewModal').style.display = 'flex';
}

function closePreview() {
  document.getElementById('previewFrame').src = '';
  document.getElementById('previewModal').style.display = 'none';
}

  