document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obter os valores do formulário
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Validar o login (só para fins de exemplo)
    if (username === "vitor" && password === "senha11") {
      alert("Login bem sucedido!");
      // Redirecionar o usuário para outra página
      window.location.href = "user.html"; // Coloque o nome do arquivo da página para onde deseja redirecionar
    } else {
      alert("Usuário ou senha incorretos. Tente novamente.");
    }
  });
