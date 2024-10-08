const preload = document.querySelector('.preload');

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        preload.classList.add('hidden');
    }, 2000);
});
