const speed = 0.05;
(function rgb(now=0) {
  document.documentElement.style.setProperty('--rgb', `hsl(${((now * speed) % 360).toFixed(0)},75%,35%)`);
  requestAnimationFrame(rgb);
})();
