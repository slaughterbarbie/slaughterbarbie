// scripts.js
const videosPerPage = 10;
let currentPage = 1;

function updatePage() {
  const items = document.querySelectorAll('.video-item');
  items.forEach((item, index) => {
    const pageNum = Math.ceil((index + 1) / videosPerPage);
    item.classList.toggle('active', pageNum === currentPage);
  });
  document.getElementById('page-number').textContent = `Page ${currentPage}`;
}

function changePage(direction) {
  const items = document.querySelectorAll('.video-item');
  const totalPages = Math.ceil(items.length / videosPerPage);
  currentPage = Math.max(1, Math.min(totalPages, currentPage + direction));
  updatePage();
}

function playTrailer(playerId) {
  document.getElementById(playerId).style.display = "block";
  event.target.style.display = "none";
}

function openPopup(src) {
  const popup = document.getElementById('image-popup');
  const popupImage = document.getElementById('popup-image');
  popupImage.src = src;
  popup.style.display = 'flex';
  window.history.pushState({ popup: true }, '');
}

function closePopup() {
  const popup = document.getElementById('image-popup');
  popup.style.display = 'none';
}

window.addEventListener('popstate', () => {
  closePopup();
});

document.onkeydown = function(e) {
  if (e.ctrlKey && (e.key === 's' || e.key === 'c')) {
    return false;
  }
};

updatePage();