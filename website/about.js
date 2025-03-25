// function scrollAppear() {
//   var itemPosition4 = document.querySelector('footer').getBoundingClientRect().top;
//   var screenPosition4 = window.innerHeight;

//   if (itemPosition4 < screenPosition4) {
//     document.querySelector('#intern-cta').classList.add('disappear');
//     document.querySelector('#intern-cta').classList.remove('appear');
//   } else if (itemPosition4 > screenPosition4) {
//     document.querySelector('#intern-cta').classList.add('appear');
//     document.querySelector('#intern-cta').classList.remove('disappear');
//   }
// }

// window.addEventListener('scroll', scrollAppear);

const typewriterText = document.getElementById("typewriter");
const roles = ["Product Manager", "Product Designer", "Software Engineer", "Data Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = roles[roleIndex];
  const partial = current.substring(0, charIndex);
  typewriterText.textContent = partial;

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 120);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      roleIndex = (roleIndex + 1) % roles.length;
    }
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});
