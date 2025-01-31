let text = document.getElementById('text');
let kanan = document.getElementById('kanan');
let kiri = document.getElementById('kiri');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.5 + 'px';
    kanan.style.left = value * 0.5 + 'px';
    kiri.style.left = value * -0.5 + 'px';
})

const stopScrollHeight = 6600;

    // Disable scrolling when the height threshold is reached
    window.addEventListener('scroll', () => {
      if (window.scrollY >= stopScrollHeight) {
        window.scrollTo(0, stopScrollHeight); // Fix the scroll position
      }
    });
