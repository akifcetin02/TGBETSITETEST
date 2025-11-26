document.addEventListener('DOMContentLoaded', function() {

    const tg = window.Telegram.WebApp;
    const goBtn = document.getElementById("tg-go-btn");

    goBtn.addEventListener("click", function() {
        const user = tg.initDataUnsafe?.user;
        const tg_data = tg.initData;

        if(!user){
            alert("Lütfen Telegram Mini App içinde açın!");
            console.log("Telegram WebApp içinde açılmadı.");
            return;
        }

        console.log("Telegram kullanıcı bilgisi:", user);
        console.log("Signed initData:", tg_data);

        // Örnek alert ile giriş göstergesi
        alert(`Hoş geldin, ${user.first_name} (@${user.username})!`);

        // Burada ileride backend'e gönderip login yapabiliriz
        // fetch("/api/tg-login", { method: "POST", body: JSON.stringify({ user, tg_data }) })

        // Otomatik yönlendirme (test için index.html olabilir)
        // window.location.href = "casino.html";
    });

    // Mevcut fonksiyonlar
    initLiveMatches();
    initGameCarousel();
    initPromoCountdowns();
});
