document.addEventListener('DOMContentLoaded', function() {
    // Play butonuna tıklandığında casino.html sayfasına yönlendir
    const playButtons = document.querySelectorAll('.play-btn');
    playButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Game bilgisi istenirse query param ile gönderilebilir
            const game = btn.getAttribute('data-game');
            window.location.href = `casino.html?game=${encodeURIComponent(game)}`;
        });
    });
});
