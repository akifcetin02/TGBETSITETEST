// Örnek oyun kartları JS ile ekleme
const games = [
    { name: "Avrupa Ruleti", type: "Rulet", img: "https://via.placeholder.com/300x200?text=Rulet" },
    { name: "Blackjack VIP", type: "Blackjack", img: "https://via.placeholder.com/300x200?text=Blackjack" },
    { name: "Book of Ra", type: "Slot", img: "https://via.placeholder.com/300x200?text=Slot" },
];

const grid = document.getElementById("game-grid");

games.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card bg-gray-800 rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-secondary/20";
    card.innerHTML = `
        <div class="relative">
            <img src="${game.img}" alt="${game.name}" class="w-full h-40 object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        <div class="p-4">
            <h3 class="font-bold mb-2">${game.name}</h3>
            <span class="text-sm text-gray-400">${game.type}</span>
        </div>
    `;
    grid.appendChild(card);
});
