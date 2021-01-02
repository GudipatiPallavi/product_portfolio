function scrollAppear() {
  var appearItem = document.querySelector('.case-study');
  var itemPosition = appearItem.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;

  var appearItem2 = document.querySelector('.second');
  var itemPosition2 = appearItem2.getBoundingClientRect().top;
  var screenPosition2 = window.innerHeight / 1.5;

  if (itemPosition < screenPosition) {
    appearItem.classList.remove('disappear');
    appearItem.classList.add('appear');
  } else if (itemPosition > screenPosition) {
    appearItem.classList.remove('appear');
    appearItem.classList.add('disappear');
  }

  if (itemPosition2 < screenPosition2) {
    appearItem2.classList.remove('disappear');
    appearItem2.classList.add('appear');
  } else if (itemPosition2 > screenPosition2) {
    appearItem2.classList.remove('appear');
    appearItem2.classList.add('disappear');
  }
}

function toggle() {
  var menu = document.getElementById('navs');

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
};

var ham = document.querySelector('.ham');

ham.addEventListener('click', toggle);
window.addEventListener('scroll', scrollAppear);