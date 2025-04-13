document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

document.querySelectorAll('.faq-toggle').forEach(button => {
   button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('i');        
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
    });
});

function redirectHome() {
    window.location.href = './index.html';
    }