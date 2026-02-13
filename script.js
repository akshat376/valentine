const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        const offsetPosition = targetSection.offsetTop - 80;

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const proposalMessage = document.getElementById('proposalMessage');

yesBtn.addEventListener('click', function () {

    proposalMessage.textContent = "🎉 YES! You made the right choice! 💖✨";
    proposalMessage.style.color = 'var(--broke-green)';

    yesBtn.style.transform = 'scale(1.5)';
    yesBtn.textContent = '🎉 WE DID IT! 🎉';
    noBtn.style.display = 'none';

    setTimeout(() => {
        proposalMessage.textContent += " Best Valentine's Day EVER! 💝";
    }, 1000);
});

noBtn.addEventListener('mouseenter', function () {

    noBtn.classList.add('running');

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 80;

    const minX = 20;
    const maxX = viewportWidth - btnWidth - 20;
    const minY = navbarHeight + 20;
    const maxY = viewportHeight - btnHeight - 20;

    const safeMaxX = Math.max(minX, maxX);
    const safeMaxY = Math.max(minY, maxY);

    const randomX = Math.random() * (safeMaxX - minX) + minX;
    const randomY = Math.random() * (safeMaxY - minY) + minY;

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    proposalMessage.textContent = "You can't catch me! 🏃‍♂️💨";
});
