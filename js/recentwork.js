window.addEventListener('load', function () {
  const container = document.getElementById('workScrollContainer');
  let scrollSpeed = 1;
  let scrollInterval;

  function startAutoScroll() {
    scrollInterval = setInterval(() => {
      container.scrollLeft += scrollSpeed;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
        container.scrollLeft = 0; // Loop
      }
    }, 20);
  }

  function stopAutoScroll() {
    clearInterval(scrollInterval);
  }

  // Start auto-scroll
  startAutoScroll();

  container.addEventListener('mouseenter', stopAutoScroll);
  container.addEventListener('mouseleave', startAutoScroll);

  // Popup logic
  function showPopup(title, content) {
    document.getElementById('popupTitle').textContent = title;
    document.getElementById('popupContent').textContent = content;
    document.getElementById('popupOverlay').style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
  }

  // Optional: make showPopup/closePopup global
  window.showPopup = showPopup;
  window.closePopup = closePopup;
});
