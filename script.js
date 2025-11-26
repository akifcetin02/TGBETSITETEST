const games = [
    { id: 1, name: "Avrupa Ruleti", type: "Rulet", tag: "YENİ", img: "http://static.photos/gaming/640x360/6" },
    { id: 2, name: "Book of Ra", type: "Slot", img: "http://static.photos/gaming/640x360/7" },
    { id: 3, name: "Blackjack VIP", type: "Blackjack", tag: "VIP", img: "http://static.photos/gaming/640x360/8" },
    { id: 4, name: "Texas Hold'em", type: "Poker", tag: "POPÜLER", img: "http://static.photos/gaming/640x360/9" },
    { id: 5, name: "Bakara", type: "Kart Oyunu", img: "http://static.photos/gaming/640x360/10" },
    { id: 6, name: "Gates of Olympus", type: "Slot", tag: "YENİ", img: "http://static.photos/gaming/640x360/11" },
    { id: 7, name: "Amerikan Ruleti", type: "Rulet", img: "http://static.photos/gaming/640x360/12" },
    { id: 8, name: "Sweet Bonanza", type: "Slot", tag: "POPÜLER", img: "http://static.photos/gaming/640x360/13" },
    { id: 9, name: "Starburst", type: "Slot", img: "http://static.photos/gaming/640x360/14" },
    { id: 10, name: "Canlı Rulet", type: "Canlı Casino", tag: "CANLI", img: "http://static.photos/gaming/640x360/15" }
];

const grid = document.getElementById("game-grid");

function createGameCard(game) {
    const card = document.createElement("div");
    card.className = "game-card bg-gray-800 rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-secondary/20";
    card.innerHTML = `
        <div class="relative">
            <img src="${game.img}" alt="${game.name}" class="w-full h-40 object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            ${game.tag ? `<div class="absolute bottom-2 left-2">
                <span class="bg-secondary text-primary text-xs font-bold px-2 py-1 rounded">${game.tag}</span>
            </div>` : ""}
        </div>
        <div class="p-4">
            <h3 class="font-bold mb-2">${game.name}</h3>
            <div class="flex justify-between items-center">
                <span class="text-sm text-gray-400">${game.type}</span>
                <button class="text-secondary hover:text-green-400">
                    <i data-feather="play"></i>
                </button>
            </div>
        </div>
    `;
    return card;
}

games.forEach(game => grid.appendChild(createGameCard(game)));

feather.replace();
