// ===== Matrix Background Animation =====
const canvas = document.getElementById('matrix-bg');
if (canvas) {
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ';
    const alphabet = katakana + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 14;
    let columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) {
        drops[x] = Math.floor(Math.random() * -100);
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 35);
}

// ===== Terminal Typewriter Effect =====
const terminalCode = document.getElementById('typewriter');
if (terminalCode) {
    const codeLines = [
        "import sys",
        "from datetime import datetime",
        "",
        "class RegisGomis:",
        "    def __init__(self):",
        "        self.name = 'Régis Gomis'",
        "        self.role = 'Technicien SISR'",
        "        self.formation = 'BTS SIO - Option SISR'",
        "        self.status = 'Recherche stage/alternance'",
        "        self.location = 'Paris, France'",
        "",
        "    def competences(self):",
        "        return [",
        "            'Administration Système',",
        "            'Gestion Réseau',",
        "            'Sécurité Informatique',",
        "            'Support Utilisateur',",
        "            'Développement Web'",
        "        ]",
        "",
        "    def say_hello(self):",
        "        print(f'Bienvenue sur mon portfolio !')",
        "        print(f'Contact: regisgomis3@gmail.com')",
        "",
        ">>> regis = RegisGomis()",
        ">>> regis.say_hello()",
        "Bienvenue sur mon portfolio !",
        "Contact: regisgomis3@gmail.com"
    ];

    let lineIndex = 0;
    let charIndex = 0;

    function typeCode() {
        if (lineIndex < codeLines.length) {
            if (charIndex < codeLines[lineIndex].length) {
                terminalCode.innerHTML += codeLines[lineIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeCode, 30);
            } else {
                terminalCode.innerHTML += "\n";
                lineIndex++;
                charIndex = 0;
                setTimeout(typeCode, 100);
            }
        }
    }

    // Start typing after a short delay
    setTimeout(typeCode, 500);
}

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Card Animations on Scroll =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});
