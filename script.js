const startDate = new Date('2024-12-31');
const today = new Date();
const diffTime = Math.abs(today - startDate);
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

document.getElementById('days').innerHTML = `${diffDays} dias florescendo nosso amor!`;

const container = document.getElementById('rose-container');

// Add sparkles around the rose
setInterval(() => {
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';
    sparkle.innerHTML = '💖';
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    container.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2500);
}, 800);

// Add falling petals across the body
function addPetal() {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 5000);
}
setInterval(addPetal, 500);

// Note for symbolic "extra" days
const more = document.createElement('p');
more.className = 'more-roses';
more.innerHTML = `Uma rosa eterna representando nossos ${diffDays} dias – e muitos mais no nosso jardim de amor! 💐`;
document.getElementById('more-roses').appendChild(more);
