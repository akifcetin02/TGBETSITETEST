// Kullanıcı bilgilerini ayarla
function setTelegramUser() {
    let username = "Misafir";
    let avatarUrl = `https://i.pravatar.cc/40?img=${Math.floor(Math.random() * 70) + 1}`;

    if(window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.ready();
        const tgUser = window.Telegram.WebApp.initDataUnsafe.user;
        if(tgUser) {
            username = tgUser.username || tgUser.first_name || "Misafir";
            avatarUrl = tgUser.photo_url || avatarUrl;
        }
    }

    document.getElementById("tg-name").textContent = username;
    document.getElementById("tg-avatar").src = avatarUrl;
}

// Oyuna yönlendirme
function goToCasino() {
    window.location.href = "casino.html";
}

setTelegramUser();

// Örnek: bir oyun kartına tıklayınca yönlendirme
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".game-card button i[data-feather='play']").forEach(btn => {
        btn.parentElement.addEventListener("click", () => {
            goToCasino();
        });
    });
});
