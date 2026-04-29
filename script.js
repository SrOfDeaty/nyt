function flipCard(element) {
    element.classList.toggle('flipped');
    
    createHearts();
}

function createHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💜';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.zIndex = '1000';
        heart.style.pointerEvents = 'none';
        heart.style.transition = 'transform 3s linear, opacity 3s linear';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.style.transform = `translateY(-120vh) rotate(${Math.random() * 360}deg)`;
            heart.style.opacity = '0';
        }, 100);
        
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}
