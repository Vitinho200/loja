function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

function toggleMenu(menuItem) {
  // Fecha o menu lateral ao selecionar um item
  toggleSidebar();

  // Obtém o elemento do conteúdo
  var content = document.getElementById("content");

  // Oculta ou exibe o conteúdo com base no item de menu selecionado
  switch (menuItem) {
    case 'perfil':
      // Conteúdo do perfil
      var profileContent = "<h3>Perfil do Usuário</h3>" +
                           "<img src='perfil.jpg' alt='Imagem do Perfil'>" +
                           "<p>Informações do perfil do usuário...</p>";
      content.innerHTML = profileContent;
      break;
    case 'notificacoes':
      content.innerHTML = "<h3>Notificações</h3><p>Conteúdo das Notificações...</p>";
      break;
    case 'privacidade':
      content.innerHTML = "<h3>Privacidade</h3><p>Conteúdo da Privacidade...</p>";
      break;
    case 'conta':
      content.innerHTML = '<h3>Conta</h3><p>Conteúdo da Conta...</p>"';
      break;
    case 'sair':
      // Redireciona o usuário para a página de login (ou qualquer outra página)
      window.location.href = "index.html";
      break;
    default:
      break;
  }
}

window.addEventListener('resize', function() {
  var sidebar = document.getElementById("sidebar");
  var width = window.innerWidth;
  
  if (width > 768) {
    sidebar.classList.remove("active");
  }
});
