// Telegram kullanıcı adı ve ID'si URL parametresinden alınacak
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username') || 'Misafir';
const user_id = urlParams.get('user_id') || 'guest';

// Sağ üstteki kullanıcı divlerini güncelle
const tgName = document.getElementById('tg-name');
const tgAvatar = document.getElementById('tg-avatar');

if (tgName) tgName.textContent = username;
if (tgAvatar) tgAvatar.src = `https://i.pravatar.cc/40?u=${user_id}`;

// Oyun kartları örneği
const games = [
    { name: "Avrupa Ruleti", category: "Rulet", img: "http://static.photos/gaming/640x360/6", tag: "YENİ" },
    { name: "Book of Ra", category: "Slot", img: "http://static.photos/gaming/640x360/7", tag: "" },
    { name: "Blackjack VIP", category: "Blackjack", img: "http://static.photos/gaming/640x360/8", tag: "VIP" },
    { name: "Texas Hold'em", category: "Poker", img: "http://static.photos/gaming/640x360/9", tag: "POPÜLER" },
];

const gameGrid = document.getElementById('game-grid');

games.forEach(game => {
    const card = document.createElement('div');
    card.className = "game-card bg-gray-800 rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-secondary/20";
    card.innerHTML = `
        <div class="relative">
            <img src="${game.img}" alt="${game.name}" class="w-full h-40 object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            ${game.tag ? `<div class="absolute bottom-2 left-2"><span class="bg-secondary text-primary text-xs font-bold px-2 py-1 rounded">${game.tag}</span></div>` : ''}
        </div>
        <div class="p-4">
            <h3 class="font-bold mb-2">${game.name}</h3>
            <div class="flex justify-between items-center">
                <span class="text-sm text-gray-400">${game.category}</span>
                <button class="text-secondary hover:text-green-400">
                    <i data-feather="play"></i>
                </button>
            </div>
        </div>
    `;
    gameGrid.appendChild(card);
});

feather.replace();
