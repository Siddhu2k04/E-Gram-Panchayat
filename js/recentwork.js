window.addEventListener('load', function () {
  const container = document.getElementById('workScrollContainer');
  let scrollSpeed = 0.5; // Smaller value for smoother motion
  let direction = 1;
  let animationFrame;

  function autoScroll() {
    container.scrollLeft += scrollSpeed * direction;

    // Reverse at edges
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
      direction = -1; // Scroll left
    } else if (container.scrollLeft <= 0) {
      direction = 1; // Scroll right
    }

    animationFrame = requestAnimationFrame(autoScroll);
  }

  function startAutoScroll() {
    animationFrame = requestAnimationFrame(autoScroll);
  }

  function stopAutoScroll() {
    cancelAnimationFrame(animationFrame);
  }

  // Start on load
  startAutoScroll();

  // Pause on hover
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

  window.showPopup = showPopup;
  window.closePopup = closePopup;
});
