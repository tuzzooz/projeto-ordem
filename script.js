document.getElementById('toggleMode').addEventListener('click', function() {
    var body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('navbar-light');
    navbar.classList.toggle('navbar-dark');

    if (body.classList.contains('dark-mode')) {
        this.textContent = 'Modo Claro';
    } else {
        this.textContent = 'Modo Noturno';
    }
});
