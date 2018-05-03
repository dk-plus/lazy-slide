const slide = (() => {

  const _opt = {
    total: 1,
    cur: 1,
    animation: 'fadeIn'
  }

  function toggleAnimation(slide, animation) {
    document.getElementById(slide).classList.toggle(animation);
    setTimeout(() => {
      document.getElementById(slide).classList.toggle(animation);
    }, 500);
  }

  function goTo(num) {
    window.location.hash = '#' + num;
    toggleAnimation(num, _opt.animation);    
  }

  function prev() {
    if (_opt.cur <= 1) {
      return;
    }
    _opt.cur--;
    goTo(_opt.cur);
  }

  function next() {
    if (_opt.cur >= _opt.total) {
      return;
    }
    _opt.cur++;
    goTo(_opt.cur);
  }

  function initTotal() {
    _opt.total = document.getElementsByClassName('slide').length;
  }

  function init() {
    initTotal();
    window.addEventListener('keydown', (e) => {
      if (e.code == 'ArrowLeft' || e.code == 'ArrowUp') {
        prev();
      }
      if (e.code == 'ArrowRight' || e.code == 'ArrowDown') {
        next();
      }
    });
    window.addEventListener('touchstart', (e) => {
      e.touches[0].clientX / document.documentElement.clientWidth >= 0.75 && next();
      e.touches[0].clientX / document.documentElement.clientWidth <= 0.25 && prev();
    });
  }
  return {
    init
  }
})();
slide.init();