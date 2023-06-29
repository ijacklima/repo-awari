document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Exibindo janela de alerta com os dados preenchidos
    alert('Nome: ' + name + '\nE-mail: ' + email + '\nMensagem: ' + message);
  });