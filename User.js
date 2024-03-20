function toggleMenu(menuItem) {

    // Obtém o elemento do conteúdo

    var content = document.getElementById("content");

  

    // Oculta ou exibe o conteúdo com base no item de menu selecionado

    switch (menuItem) {

      case 'perfil':

        // Conteúdo do perfil

        var profileContent = "<h2>Perfil do Usuário</h2>" +

                             "<img src='perfil.jpg' alt='Imagem do Perfil'>" +

                             "<p>Informações do perfil do usuário...</p>";

        content.innerHTML = profileContent;

        
break;
        
       case 'creditos':

        // Conteúdo do credito

        var profileContent = "<h2>Credítos dos Desenvolvedores</h2>" +

                             "<img src='devs.png' alt='Imagem dos Credítos'>" +

                             "<p>Informações dos Credítos dos Desenvolvedores...</p>";

        content.innerHTML = profileContent;

        break;
 
        
      case 'notificacoes':

        content.innerHTML = "<h2>Notificações</h2><p>Conteúdo das Notificações...</p>";

        break;

      case 'privacidade':

        content.innerHTML = "<h2>Privacidade</h2><p>Conteúdo da Privacidade...</p>";

        break;
      case 'creditos':

        content.innerHTML = "<h2>Credítos</h2><p>Conteúdo dos Credítos...</p>";

        break;  
      case 'conta':

        content.innerHTML = "<h2>Conta</h2><p>Conteúdo da Conta...</p>";

        break;

      case 'sair':

        // Redireciona o usuário para a página de login (ou qualquer outra página)

        window.location.href = "login.html";

        break;

      default:

        break;

    }

  }

   
