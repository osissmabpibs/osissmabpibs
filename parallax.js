let text = document.getElementById('text');
let kanan = document.getElementById('kanan');
let kiri = document.getElementById('kiri');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    window.addEventListener('scroll', function() {
        const maxScroll = 4100; // Set your maximum scroll value
        if (window.scrollY > maxScroll) {
            window.scrollTo(0, maxScroll);
        }
    });

    text.style.marginTop = value * 1.5 + 'px';
    kanan.style.left = value * 0.5 + 'px';
    kiri.style.left = value * -0.5 + 'px';
})