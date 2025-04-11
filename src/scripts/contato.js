document.getElementById('contactForm').addEventListener('submit', function(send) {
    send.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (name && email && subject && message) {
        formMessage.classList.remove('hidden', 'text-red-500');
        formMessage.classList.add('text-green-500');
        formMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
        this.reset();
    } else {
        formMessage.classList.remove('hidden', 'text-green-500');
        formMessage.classList.add('text-red-500');
        formMessage.textContent = 'Por favor, preencha todos os campos.';
    }

    // Limpa mensagem após 5 segundos
    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 5000);
});