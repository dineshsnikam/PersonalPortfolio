document.addEventListener('DOMContentLoaded', function() {
    
    // Particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% { transform: translate(0, 0) translateZ(0); }
            50% { transform: translate(50px, 50px) translateZ(20px); }
            100% { transform: translate(-50px, -50px) translateZ(-20px); }
        }
    `;
    document.head.appendChild(style);
    
    createParticles();
    
    // Parallax effect on mouse move
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.querySelectorAll('section').forEach((section, index) => {
            const depth = (index + 1) * 10;
            const moveX = (x - 0.5) * depth;
            const moveY = (y - 0.5) * depth;
            
            section.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
        });
    });
});


