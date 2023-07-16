let mx = 0;
let my = 0;
let mt = 0.1;
let mlx = 0;
let mly = 0;
let st = false;

const ms = (e) => {
  mx = e.clientX;
  my = e.clientY;
  document.documentElement.style.setProperty('--mouse-x', mx + 'px');
  document.documentElement.style.setProperty('--mouse-y', my + 'px');
  if (!st) {
    requestAnimationFrame(render);
    st = true;
  }
};

function render() {
  if (mlx == mx && mly == my) return;
  mlx = lerp(mlx, mx, mt);
  mly = lerp(mly, my, mt);

  document.documentElement.style.setProperty('--mouse-x-lerp', mlx + 'px');
  document.documentElement.style.setProperty('--mouse-y-lerp', mly + 'px');

  requestAnimationFrame(render);
}

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

window.addEventListener('mousemove', ms);
window.addEventListener('mouseenter', ms);

