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

    const phoneMaxScrollHeight = 1700; // Define your max scroll height
    const scrollMessage = document.getElementById('scrollMessage');

    window.addEventListener('scroll', () => {
      // Check if screen width is in phone mode (768px or less)
      if (window.innerWidth <= 768) {
        if (window.scrollY >= phoneMaxScrollHeight) {
          // Lock scroll at max height
          window.scrollTo(0, phoneMaxScrollHeight);
          scrollMessage.style.display = 'block';
        } else {
          scrollMessage.style.display = 'none';
        }
      }
    });
