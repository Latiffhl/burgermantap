let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.display = 'block';

  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
}

function sendEmail(e) {
  e.preventDefault();

  const form = document.getElementById('contactForm');
  const btnKirim = document.getElementById('btnkir');
  const originalText = btnKirim.innerHTML;

  btnKirim.innerHTML = 'Mengirim...';
  btnKirim.disabled = true;

  // Simulate email sending (replace with your actual email sending logic)
  setTimeout(() => {
    showNotification('Pesan berhasil terkirim!');
    form.reset();
    btnKirim.innerHTML = originalText;
    btnKirim.disabled = false;
  }, 1000);
}
